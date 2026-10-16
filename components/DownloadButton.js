"use client";

import { useEffect, useState } from "react";

import Icon from "./Icon";

/**
 * The APK download. Works without JavaScript (a plain link); with it, the
 * note under the button adapts to the visitor's device.
 */
export default function DownloadButton({ apk, fileName, sizeText, version, large = false, showNote = true }) {
  const [platform, setPlatform] = useState("unknown");

  useEffect(() => {
    const ua = navigator.userAgent || "";
    const iPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    if (/iPhone|iPad|iPod/i.test(ua) || iPadOS) setPlatform("ios");
    else if (/Android/i.test(ua)) setPlatform("android");
    else setPlatform("desktop");
  }, []);

  const size = large ? " btn-lg" : "";

  if (!apk.available) {
    return (
      <div className="download">
        <span className={`btn btn-primary${size} is-disabled`} aria-disabled="true">
          <Icon name="download" size={large ? 22 : 20} />
          Android download coming soon
        </span>
        {showNote && <p className="download-note">The Android app is almost ready. Check back soon.</p>}
      </div>
    );
  }

  const meta = [version && `Version ${version}`, sizeText].filter(Boolean).join(" · ");

  return (
    <div className="download">
      <a className={`btn btn-primary${size}`} href={apk.href} download={fileName} rel="nofollow">
        <Icon name="download" size={large ? 22 : 20} />
        <span className="btn-label">
          Download for Android
          {meta && <span className="btn-meta">{meta}</span>}
        </span>
      </a>
      {showNote && platform === "ios" && (
        <p className="download-note">
          This file is for Android phones. FlashX for iPhone is coming soon to the App Store.
        </p>
      )}
      {showNote && platform === "desktop" && (
        <p className="download-note">
          On a computer? Open this page on your Android phone, or scan the QR code in the install guide, and download there.
        </p>
      )}
      {showNote && platform === "android" && (
        <p className="download-note">Free. Downloads straight to your phone. Follow the steps below to install.</p>
      )}
    </div>
  );
}
