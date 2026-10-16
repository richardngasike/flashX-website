// Everything about the release in one place. Update `version` and
// `releaseDate` when you upload a new APK.
export const site = {
  name: "FlashX",
  tagline: "Share in a flash.",
  description:
    "FlashX is where you share photos, reels and stories, go live, call and chat with your people. Download the Android app, Let's make the world a better place.",
  version: "1.0.0",
  releaseDate: "2026-10-16",
  minAndroid: "Android 7.0",
  apkFileName: "flashx.apk",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "").trim().replace(/\/+$/, ""),
};
