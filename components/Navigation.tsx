'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GlassEffect } from './ui/liquid-glass';

const links = [
  { label: 'Index', href: '#index' },
  { label: 'Site', href: '#site-planning' },
  { label: 'GIS', href: '#gis-studies' },
  { label: 'Interior', href: '#interior' },
  { label: 'Design', href: '#design-by-jane' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const { scrollYProgress } = useScroll();
  const progressX = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [time, setTime] = useState('');

  useEffect(() => {
    const t = () => {
      const d = new Date();
      const h = d.getUTCHours().toString().padStart(2, '0');
      const m = d.getUTCMinutes().toString().padStart(2, '0');
      setTime(`${h}:${m} UTC`);
    };
    t();
    const id = setInterval(t, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <GlassEffect className="rounded-full pointer-events-auto">
        <div className="relative flex items-center gap-3 sm:gap-5 px-4 sm:px-6 h-11 text-[11px] uppercase tracking-[0.18em] font-medium whitespace-nowrap">
          <a href="#top" className="flex items-center">
            <span>
              Jane <span className="font-extrabold">Kanat</span>
            </span>
          </a>

          <span className="hidden md:inline h-3 w-px bg-ink-950/30" />

          <nav className="hidden md:flex gap-4 lg:gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-ink-700 hover:text-ink-950 transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <span className="hidden md:inline h-3 w-px bg-ink-950/30" />

          <span className="hidden md:inline tabular-nums text-ink-600">{time}</span>

          <a
            href="#contact"
            className="ml-1 sm:ml-2 text-ink-950 hover:opacity-70 transition-opacity"
          >
            Get in touch
          </a>
        </div>
        {/* Scroll progress bar across the bottom of the pill */}
        <motion.div
          aria-hidden
          style={{ width: progressX }}
          className="absolute left-0 bottom-0 h-px bg-ink-950 origin-left"
        />
      </GlassEffect>
    </header>
  );
}
