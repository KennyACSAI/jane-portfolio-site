import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Jane Kanat — Personal Portfolio · 2026',
  description:
    'Architecture, site planning, interior design and visual studies by Jane Kanat. University of Calgary, 2026.',
  authors: [{ name: 'Jane Kanat' }],
  manifest: '/site.webmanifest',
  themeColor: '#0a0a0a',
  // Explicit per-size icon table — at small sizes browsers pick the
  // stroke-preserved 16/32 PNGs instead of downscaling the 512 (which
  // erases the J's hairline). Larger sizes keep the original light-J /
  // bold-K design intact.
  icons: {
    icon: [
      { url: '/favicon.ico',         sizes: 'any',     type: 'image/x-icon' },
      { url: '/favicon-16x16.png',   sizes: '16x16',   type: 'image/png' },
      { url: '/favicon-32x32.png',   sizes: '32x32',   type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: 'Jane Kanat — Personal Portfolio · 2026',
    description: 'Architecture · Site Planning · Interior Design · Studies',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="grain font-sans antialiased bg-paper text-ink-950 selection:bg-ink-950 selection:text-paper">
        {children}
      </body>
    </html>
  );
}
