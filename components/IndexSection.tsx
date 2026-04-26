'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '@/lib/projects';
import { MaskReveal } from './anim/MaskReveal';
import { SplitText } from './anim/SplitText';

const groups = [
  { label: 'Site Planning', items: projects.filter((p) => p.category === 'Site Planning') },
  { label: 'Interior Design', items: projects.filter((p) => p.category === 'Interior Design') },
  { label: 'Design by Jane', items: projects.filter((p) => p.category === 'Design by Jane') },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function IndexSection() {
  const reduce = useReducedMotion();

  return (
    <section id="index" className="px-6 sm:px-10 pt-32 pb-24 relative">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3 text-[11px] uppercase tracking-[0.22em] text-ink-500">
          / 02 — Index
        </div>

        <div className="col-span-12 md:col-span-9">
          <h2 className="text-display-lg font-light tracking-tightest text-ink-950">
            <SplitText text="Contents." inView />
          </h2>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-12 gap-4">
        <div className="hidden md:block md:col-span-3" />
        <ul className="col-span-12 md:col-span-9 divide-y hairline border-t hairline">
          {groups.map((g, gi) => (
            <li key={g.label} className="py-6">
              <MaskReveal delay={gi * 0.1}>
                <div className="grid grid-cols-12 gap-4 items-baseline">
                  <div className="col-span-12 md:col-span-3 text-sm font-bold uppercase tracking-[0.18em] text-ink-950">
                    {g.label}
                  </div>
                  <motion.ul
                    className="col-span-12 md:col-span-9 space-y-2"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.05, delayChildren: gi * 0.1 + 0.2 } },
                    }}
                  >
                    {g.items.map((p) => (
                      <motion.li
                        key={p.id}
                        variants={{
                          hidden: { opacity: 0, x: reduce ? 0 : -16 },
                          show: { opacity: 1, x: 0, transition: { duration: 0.55, ease } },
                        }}
                      >
                        <a
                          href={`#${p.id}`}
                          className="grid grid-cols-12 gap-3 items-baseline group"
                        >
                          <span className="col-span-1 text-ink-400 tabular-nums text-sm font-medium">
                            {p.number}
                          </span>
                          <span className="col-span-11 md:col-span-9 text-base md:text-lg text-ink-950 leading-snug relative">
                            <span className="relative inline-block">
                              {p.title}
                              <span className="absolute left-0 -bottom-px h-px w-full bg-ink-950 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-editorial" />
                            </span>
                            {p.location ? (
                              <span className="text-ink-500"> — {p.location}</span>
                            ) : null}
                          </span>
                          <span className="hidden md:inline col-span-2 text-right text-ink-400 group-hover:text-ink-950 transition-colors duration-500 text-sm">
                            ↗
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </MaskReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
