import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

import { site } from "./site";

const DOWNLOADS = path.join(process.cwd(), "public", "downloads");

/** The APK in public/downloads: flashx.apk if present, otherwise any .apk file. */
function findApk() {
  if (!fs.existsSync(DOWNLOADS)) return null;
  const apks = fs
    .readdirSync(DOWNLOADS)
    .filter((name) => name.toLowerCase().endsWith(".apk"))
    .filter((name) => fs.statSync(path.join(DOWNLOADS, name)).isFile());
  if (apks.length === 0) return null;
  return apks.find((n) => n.toLowerCase() === site.apkFileName.toLowerCase()) || apks.sort()[0];
}

let logged = false;
function log(message) {
  if (logged) return;
  logged = true;
  console.log(`[flashx] ${message}`);
}

/**
 * Read at build time. With an APK in public/downloads, the size and SHA-256
 * come from the file itself, so they always match what people download.
 * Without one (and without NEXT_PUBLIC_APK_URL) the site still builds and
 * shows the download as coming soon.
 */
export function getApkInfo() {
  const external = (process.env.NEXT_PUBLIC_APK_URL || "").trim();
  if (external) {
    const size = Number(process.env.NEXT_PUBLIC_APK_SIZE || 0);
    log(`APK served from NEXT_PUBLIC_APK_URL: ${external}`);
    return {
      available: true,
      href: external,
      size: size > 0 ? size : null,
      sha256: (process.env.NEXT_PUBLIC_APK_SHA256 || "").trim().toLowerCase() || null,
    };
  }

  const name = findApk();
  if (!name) {
    const found = fs.existsSync(DOWNLOADS) ? fs.readdirSync(DOWNLOADS).join(", ") || "nothing" : "folder missing";
    log(`No APK in public/downloads (found: ${found}). Download shows "coming soon".`);
    return { available: false, href: null, size: null, sha256: null };
  }

  const data = fs.readFileSync(path.join(DOWNLOADS, name));
  log(`APK found: public/downloads/${name} (${formatSize(data.length)})`);
  return {
    available: true,
    href: `/downloads/${encodeURIComponent(name)}`,
    size: data.length,
    sha256: crypto.createHash("sha256").update(data).digest("hex"),
  };
}

export function formatSize(bytes) {
  if (!bytes) return null;
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(mb >= 100 ? 0 : 1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}