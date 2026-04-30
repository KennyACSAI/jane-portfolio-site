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
