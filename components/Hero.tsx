'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useRef } from 'react';
import { HeroSceneClient } from './hero3d/HeroSceneClient';
import { MagneticLink } from './MagneticLink';
import { SplitText } from './anim/SplitText';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-22%']);
  const subY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '14%']);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-between px-6 sm:px-10 pt-12 pb-10 overflow-hidden"
    >
      <motion.div
        style={{ opacity: fade }}
        className="absolute inset-x-0 bottom-0 h-[68%] z-0 pointer-events-none"
      >
        {!reduce && <HeroSceneClient />}
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.92) 38%, rgba(255,255,255,0.0) 70%)',
        }}
      />

      {/* Top meta strip */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative grid grid-cols-12 gap-4 text-[11px] uppercase tracking-[0.22em] text-ink-500"
      >
        <div className="col-span-6">A — Personal Portfolio</div>
        <div className="col-span-6 text-right">— Calgary · Astana · Seoul</div>
      </motion.div>

      {/* Main display title */}
      <motion.div style={{ y: titleY }} className="relative">
        <div className="grid grid-cols-12 gap-4 items-end">
          <h1 className="col-span-12 md:col-span-9 text-display-xl font-light tracking-tightest text-ink-950 relative z-10">
            <span className="block overflow-hidden">
              <SplitText text="Personal" stagger={0.04} duration={1} delay={1.0} />
            </span>
            <span className="block overflow-hidden font-extrabold tracking-tightest">
              <SplitText text="Portfolio" stagger={0.04} duration={1} delay={1.18} />
            </span>
          </h1>

          <div className="col-span-12 md:col-span-3 self-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm md:text-base"
            >
              <div className="text-ink-950">By Jane Kanat</div>
              <div className="text-ink-500">2026</div>
              <div className="mt-6 space-y-1.5 text-ink-700">
                <MagneticLink href="mailto:jane.kanat@ucalgary.ca" className="hover:text-ink-950 transition-colors">
                  <span className="inline-flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-ink-500" strokeWidth={1.5} />
                    jane.kanat@ucalgary.ca
                  </span>
                </MagneticLink>
                <MagneticLink href="mailto:janewinsii@gmail.com" className="hover:text-ink-950 transition-colors">
                  <span className="inline-flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-ink-500" strokeWidth={1.5} />
                    janewinsii@gmail.com
                  </span>
                </MagneticLink>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left mt-10 h-px bg-ink-950"
        />
      </motion.div>

      {/* Bottom row */}
      <motion.div
        style={{ y: subY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.9 }}
        className="relative grid grid-cols-12 gap-4 mt-12 items-end"
      >
        <div className="col-span-12 md:col-span-6">
          <p className="text-base md:text-lg leading-snug text-ink-700 max-w-[42ch]">
            A study in <em className="font-bold not-italic">site, structure and surface.</em>{' '}
            Sixteen projects across architecture, urbanism and visual practice — Calgary, Astana, Seoul.
          </p>
        </div>
        <div className="col-span-6 md:col-span-3 text-[11px] uppercase tracking-[0.22em] text-ink-500">
          <div className="text-ink-950 mb-2">Contents</div>
          <div>06 · Site Planning</div>
          <div>03 · Interior Design</div>
          <div>07 · Design by Jane</div>
        </div>
        <div className="col-span-6 md:col-span-3 text-[11px] uppercase tracking-[0.22em] text-right text-ink-500">
          <div className="text-ink-950 mb-2 flex items-center justify-end gap-2">
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            >
              ↓
            </motion.span>
            Scroll
          </div>
          <div>To begin</div>
          <div className="tabular-nums text-ink-400">01 / 20</div>
        </div>
      </motion.div>
    </section>
  );
}
