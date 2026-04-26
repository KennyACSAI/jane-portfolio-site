/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export → uploaded as-is to Cloudflare Pages.
  output: 'export',
  // Pages serves files from the bucket; there's no Node image optimizer.
  // Our PDF spreads are already pre-optimized JPEGs, so this is a no-op visually.
  images: { unoptimized: true },
  // Trailing slash for cleaner Pages routing.
  trailingSlash: true,
};

module.exports = nextConfig;
