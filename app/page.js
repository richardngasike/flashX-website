import CopyHash from "@/components/CopyHash";
import DownloadButton from "@/components/DownloadButton";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import PhoneMockup from "@/components/PhoneMockup";
import QrCode from "@/components/QrCode";
import StoreBadges from "@/components/StoreBadges";
import { formatSize, getApkInfo } from "@/lib/apk";
import { site } from "@/lib/site";

const features = [
  {
    icon: "reels",
    title: "Reels and posts",
    text: "Photos, carousels and videos up to six minutes, in a full-screen feed you swipe through.",
  },
  {
    icon: "stories",
    title: "Stories",
    text: "Share moments that disappear after 24 hours, with filters and styled text.",
  },
  {
    icon: "camera",
    title: "Camera studio",
    text: "Hold to record or set a timer, then add filters, styled text and sound before you share.",
  },
  {
    icon: "live",
    title: "Go live",
    text: "Stream to your followers, invite guests on screen and receive gifts while you are live.",
  },
  {
    icon: "call",
    title: "Voice and video calls",
    text: "Call friends who follow you back, and share your screen during a video call.",
  },
  {
    icon: "chat",
    title: "Messages",
    text: "Chats and groups with photos, voice notes, GIFs and stickers, plus replies and reactions.",
  },
];

const steps = [
  {
    icon: "download",
    title: "Download the APK",
    text: (
      <>
        Tap <strong>Download for Android</strong> on your phone. If your browser asks whether to keep the file, choose{" "}
        <strong>Download</strong> or <strong>Download anyway</strong>.
      </>
    ),
  },
  {
    icon: "file",
    title: "Open the file",
    text: (
      <>
        When the download finishes, tap <strong>Open</strong> in the notification. You can also find it in the{" "}
        <strong>Files</strong> app under <strong>Downloads</strong>.
      </>
    ),
  },
  {
    icon: "toggle",
    title: "Allow installs from your browser",
    text: (
      <>
        The first time, Android asks for permission. Tap <strong>Settings</strong>, turn on{" "}
        <strong>Allow from this source</strong>, then go back. You only do this once.
      </>
    ),
  },
  {
    icon: "shield",
    title: "Tap Install",
    text: (
      <>
        Tap <strong>Install</strong>. If Google Play Protect shows a message because FlashX is not on Google Play yet,
        tap <strong>More details</strong> and then <strong>Install anyway</strong>.
      </>
    ),
  },
  {
    icon: "rocket",
    title: "Open FlashX",
    text: (
      <>
        Tap <strong>Open</strong>, create your account and start sharing. FlashX also appears on your home screen.
      </>
    ),
  },
];

const faqs = [
  {
    q: "Is FlashX free?",
    a: "Yes. FlashX is free to download and use.",
  },
  {
    q: "Is it safe to install an app from outside Google Play?",
    a: "Install FlashX only from this website. Android shows a warning for every app that does not come from Google Play; that warning is about where the file came from, not about FlashX. If you like, check the SHA-256 checksum shown on this page against your download before installing.",
  },
  {
    q: "Which phones does FlashX work on?",
    a: `Android phones running ${site.minAndroid} or newer. FlashX for iPhone is coming soon to the App Store.`,
  },
  {
    q: "It says “App not installed”. What do I do?",
    a: "Make sure you have enough free storage, then download the APK again in case the first download was incomplete. If an older copy of FlashX from somewhere else is on your phone, uninstall it first, then install the one from this page.",
  },
  {
    q: "It says “There was a problem parsing the package”.",
    a: `The file did not download completely, or your phone runs a version older than ${site.minAndroid}. Delete the file, download it again on a stable connection and try once more.`,
  },
  {
    q: "I can't find “Allow from this source”.",
    a: "Open Settings, search for “Install unknown apps”, pick the browser you downloaded with (for example Chrome) and turn on Allow from this source. On Android 7, turn on Unknown sources under Settings > Security.",
  },
  {
    q: "How do I update FlashX?",
    a: "Download the latest APK from this page and install it over the app you have. Your account, posts and messages stay as they are.",
  },
  {
    q: "When is FlashX coming to Google Play and the App Store?",
    a: "Soon. Until then, this page always has the latest Android version.",
  },
];

export default function Home() {
  const apk = getApkInfo();
  const sizeText = formatSize(apk.size);
  const downloadHref = apk.available ? "#download" : "#install";
  const year = new Date().getFullYear();

  return (
    <>
      <Header downloadHref={downloadHref} />

      <main id="main">
        {/* Hero */}
        <section className="hero" id="top">
          <div className="hero-bg" aria-hidden="true">
            <span className="streak streak-1" />
            <span className="streak streak-2" />
            <span className="streak streak-3" />
          </div>
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                <Icon name="android" size={16} /> Now on Android
              </p>
              <h1 className="hero-title">
                Share it <span className="accent">in a flash.</span>
              </h1>
              <p className="hero-lead">
                Photos, reels and stories. Live video, calls and messages. Everything you share with your people, in one
                fast app.
              </p>
              <div className="hero-actions" id="download">
                <DownloadButton
                  apk={apk}
                  fileName={site.apkFileName}
                  sizeText={sizeText}
                  version={site.version}
                  large
                />
                <StoreBadges />
              </div>
              <ul className="hero-facts">
                <li>Free</li>
                <li>{site.minAndroid} or newer</li>
                <li>No account needed to download</li>
              </ul>
            </div>
            <div className="hero-visual">
              <PhoneMockup />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section" id="features" aria-labelledby="features-title">
          <div className="container">
            <div className="section-head">
              <p className="kicker">What&apos;s inside</p>
              <h2 id="features-title" className="section-title">
                Everything you share, <span className="accent">one app.</span>
              </h2>
            </div>
            <ul className="feature-grid">
              {features.map((f) => (
                <li key={f.title} className="feature-card">
                  <span className="feature-icon">
                    <Icon name={f.icon} size={24} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Install guide */}
        <section className="section section-alt" id="install" aria-labelledby="install-title">
          <div className="container install-layout">
            <div className="install-intro">
              <p className="kicker">Install on Android</p>
              <h2 id="install-title" className="section-title">
                Up and running in <span className="accent">five steps.</span>
              </h2>
              <p className="section-lead">
                FlashX is not on Google Play yet, so you install it straight from this page. It takes about a minute.
              </p>

              <div className="install-download">
                <DownloadButton
                  apk={apk}
                  fileName={site.apkFileName}
                  sizeText={sizeText}
                  version={site.version}
                  showNote={false}
                />
                <QrCode />
              </div>

              <dl className="release">
                <div>
                  <dt>Version</dt>
                  <dd>{site.version}</dd>
                </div>
                {sizeText && (
                  <div>
                    <dt>Size</dt>
                    <dd>{sizeText}</dd>
                  </div>
                )}
                <div>
                  <dt>Requires</dt>
                  <dd>{site.minAndroid}+</dd>
                </div>
                <div>
                  <dt>Updated</dt>
                  <dd>
                    <time dateTime={site.releaseDate}>
                      {new Date(`${site.releaseDate}T00:00:00Z`).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        timeZone: "UTC",
                      })}
                    </time>
                  </dd>
                </div>
              </dl>
              {apk.sha256 && <CopyHash hash={apk.sha256} />}
            </div>

            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title} className="step">
                  <span className="step-num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div className="step-body">
                    <h3>
                      <Icon name={s.icon} size={20} className="step-icon" />
                      {s.title}
                    </h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
              <li className="step-tip">
                <Icon name="shield" size={20} />
                <p>
                  <strong>Tip:</strong> after installing, you can turn <strong>Allow from this source</strong> off again
                  in Settings. FlashX keeps working, and updates from this page will ask for it once more.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq" aria-labelledby="faq-title">
          <div className="container faq-layout">
            <div className="section-head">
              <p className="kicker">Help</p>
              <h2 id="faq-title" className="section-title">
                Questions, <span className="accent">answered.</span>
              </h2>
            </div>
            <div className="faq-list">
              {faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>
                    <span>{f.q}</span>
                    <span className="faq-sign" aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="cta" aria-labelledby="cta-title">
          <div className="container cta-inner">
            <div>
              <h2 id="cta-title" className="cta-title">
                Ready? <span className="accent">Get FlashX.</span>
              </h2>
              <p className="cta-text">Free for Android. iPhone and Google Play versions are on the way.</p>
            </div>
            <DownloadButton
              apk={apk}
              fileName={site.apkFileName}
              sizeText={sizeText}
              version={site.version}
              showNote={false}
            />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#top" className="footer-logo" aria-label="Back to top">
            <Logo size={26} />
          </a>
          <nav aria-label="Footer">
            <ul className="footer-links">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#install">How to install</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>
          <p className="footer-legal">
            &copy; {year} FlashX. All rights reserved.
            <br />
            Android and Google Play are trademarks of Google LLC. App Store is a service mark of Apple Inc.
          </p>
        </div>
      </footer>
    </>
  );
}
