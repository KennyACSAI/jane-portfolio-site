'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

const text =
  'Architecture begins with looking. With reading the ground beneath the building, and the people who pass through it. This portfolio gathers six site analyses, three interiors and seven studies — drawn, modelled and painted between 2021 and 2026.';

function ScrollWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.18em]">
      {word}
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.2'] });
  const words = text.split(' ');

  return (
    <section className="px-6 sm:px-10 py-32 border-t hairline">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3 text-[11px] uppercase tracking-[0.22em] text-ink-500">
          / 03 — Statement
        </div>
        <div ref={ref} className="col-span-12 md:col-span-9 relative">
          <p className="text-[clamp(1.5rem,3.4vw,2.6rem)] leading-[1.18] tracking-tighter2 text-ink-950 max-w-[26ch] font-light">
            {words.map((w, i) => {
              const start = i / words.length;
              const end = Math.min(start + 1 / words.length, 1);
              return <ScrollWord key={i} word={w} progress={scrollYProgress} range={[start, end]} />;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
