'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CountUp } from './CountUp';
import { MaskReveal } from './anim/MaskReveal';
import { SplitText } from './anim/SplitText';

type Props = {
  id: string;
  index: string;
  kicker: string;
  title: string;
  italic?: string;
  blurb: string;
  count: string;
};

export function CategoryDivider({ id, index, kicker, title, italic, blurb, count }: Props) {
  const numeric = parseInt(count, 10) || 0;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const numX = useTransform(scrollYProgress, [0, 1], ['8%', '-12%']);
  const numScale = useTransform(scrollYProgress, [0, 1], [0.96, 1.06]);

  return (
    <section
      id={id}
      ref={ref}
      className="relative px-6 sm:px-10 pt-40 pb-24 border-t hairline overflow-hidden"
    >
      {/* Section index — outsized, ghosted, scroll-parallaxed */}
      <motion.div
        aria-hidden
        style={{ x: numX, scale: numScale }}
        className="pointer-events-none absolute -right-4 -top-12 select-none text-[clamp(8rem,22vw,22rem)] leading-none tracking-tightest font-extrabold text-ink-50"
      >
        {index}
      </motion.div>

      <div className="relative grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3 text-[11px] uppercase tracking-[0.22em] text-ink-500">
          / {index} — {kicker}
        </div>

        <div className="col-span-12 md:col-span-9">
          <h2 className="text-display-xl font-light tracking-tightest text-ink-950">
            <span className="block">
              <SplitText text={title} inView />
            </span>
            {italic ? (
              <em className="block font-extrabold italic">
                <SplitText text={italic} inView delay={0.1} />
              </em>
            ) : null}
          </h2>

          <MaskReveal delay={0.3}>
            <div className="mt-12 grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-7 max-w-[60ch] text-base md:text-lg leading-snug text-ink-700">
                {blurb}
              </div>
              <div className="col-span-12 md:col-span-3 md:col-start-10 text-[11px] uppercase tracking-[0.22em] text-ink-500 mt-4 md:mt-2">
                <div className="text-ink-950 text-4xl font-extrabold tabular-nums leading-none mb-1">
                  <CountUp to={numeric} pad={2} />
                </div>
                <div>Projects</div>
              </div>
            </div>
          </MaskReveal>
        </div>
      </div>
    </section>
  );
}
