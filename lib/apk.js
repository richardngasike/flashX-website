import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

import { site } from "./site";

/**
 * Read at build time. With public/downloads/flashx.apk present, the size and
 * SHA-256 are taken from the file itself, so they always match what people
 * download. Without it (and without NEXT_PUBLIC_APK_URL) the site still
 * builds and shows the download as coming soon.
 */
export function getApkInfo() {
  const external = (process.env.NEXT_PUBLIC_APK_URL || "").trim();
  if (external) {
    const size = Number(process.env.NEXT_PUBLIC_APK_SIZE || 0);
    return {
      available: true,
      href: external,
      size: size > 0 ? size : null,
      sha256: (process.env.NEXT_PUBLIC_APK_SHA256 || "").trim().toLowerCase() || null,
    };
  }

  const file = path.join(process.cwd(), "public", "downloads", site.apkFileName);
  if (!fs.existsSync(file)) {
    return { available: false, href: null, size: null, sha256: null };
  }
  const data = fs.readFileSync(file);
  return {
    available: true,
    href: `/downloads/${site.apkFileName}`,
    size: data.length,
    sha256: crypto.createHash("sha256").update(data).digest("hex"),
  };
}

export function formatSize(bytes) {
  if (!bytes) return null;
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(mb >= 100 ? 0 : 1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}
