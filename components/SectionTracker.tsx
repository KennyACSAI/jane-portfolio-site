'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections: { id: string; label: string }[] = [
  { id: 'top',             label: 'Cover'        },
  { id: 'index',           label: 'Index'        },
  { id: 'site-planning',   label: 'Site'         },
  { id: 'interior',        label: 'Interior'     },
  { id: 'design-by-jane',  label: 'Design'       },
  { id: 'contact',         label: 'Thank you'    },
];

export function SectionTracker() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = targets.findIndex((t) => t === e.target);
            if (idx >= 0) setActive(idx);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    for (const t of targets) io.observe(t);
    return () => io.disconnect();
  }, []);

  const total = sections.length;
  const current = active + 1;

  return (
    <motion.aside
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
      className="fixed bottom-6 right-6 z-40 mix-blend-difference text-paper pointer-events-none select-none"
      aria-hidden
    >
      <div className="flex items-end gap-3 text-[10px] uppercase tracking-[0.3em]">
        <div className="flex flex-col items-end leading-tight">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={sections[active].label}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {sections[active].label}
            </motion.span>
          </AnimatePresence>
          <span className="opacity-60 tabular-nums mt-1">
            {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
        <div className="relative h-12 w-px bg-paper/30 overflow-hidden">
          <motion.span
            className="absolute inset-x-0 top-0 bg-paper origin-top"
            animate={{ scaleY: current / total }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: '100%' }}
          />
        </div>
      </div>
    </motion.aside>
  );
}
