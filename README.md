# FlashX website

Static Next.js site for downloading the FlashX Android app: hero with the
download button, features, a step-by-step install guide, FAQ, and Google Play /
App Store "coming soon" badges. Styling is one external stylesheet,
`public/css/styles.css` (no CSS-in-JS, no Tailwind). Fonts (Inter, SIL OFL) are
self-hosted in `public/fonts`.

## Requirements

Node.js 20.9 or newer.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Add the APK

1. Build the app: `flutter build apk --release --dart-define-from-file=env/production.json`
2. Copy `build/app/outputs/flutter-apk/app-release.apk` to `public/downloads/flashx.apk`
3. Update `version` and `releaseDate` in `lib/site.js`

Size and SHA-256 are read from the file at build time, so they always match.

If the APK is too large for your host, upload it elsewhere (for example a
GitHub release) and set `NEXT_PUBLIC_APK_URL` (and optionally
`NEXT_PUBLIC_APK_SIZE`, `NEXT_PUBLIC_APK_SHA256`) instead. See `.env.example`.

## Build

```bash
npm run build        # static site in out/
npm run preview      # serve out/ at http://localhost:4173
```

## Deploy

- **Vercel:** import the folder (or repo). `vercel.json` sets the APK download headers.
  Set `NEXT_PUBLIC_SITE_URL` to the site's address for link previews.
- **Netlify / Cloudflare Pages:** build command `npm run build`, publish directory `out`.
  `public/_headers` sets the APK headers.
- **cPanel / any web server:** run `npm run build` and upload the contents of `out/`.
  `public/.htaccess` sets the APK type on Apache.

## Where things are

| Path | What |
|---|---|
| `lib/site.js` | Version, release date, minimum Android, APK file name |
| `app/page.js` | Page content: features, install steps, FAQ |
| `components/` | Header, download button, store badges, phone illustration, QR code |
| `public/css/styles.css` | All styles (brand colours at the top) |
| `public/downloads/` | Put `flashx.apk` here |
# flashX-website
