/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain static files in out/: host anywhere (Vercel, Netlify, cPanel, S3).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
