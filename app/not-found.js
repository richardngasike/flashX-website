import Logo from "@/components/Logo";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <div className="container not-found-inner">
        <a href="/" aria-label="FlashX home">
          <Logo size={34} />
        </a>
        <p className="not-found-code">404</p>
        <h1 className="section-title">This page took off in a flash.</h1>
        <p className="section-lead">The page you are looking for does not exist.</p>
        <a className="btn btn-primary" href="/">
          Back to FlashX
        </a>
      </div>
    </main>
  );
}
