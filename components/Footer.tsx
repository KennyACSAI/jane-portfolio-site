'use client';

import { Globe } from 'lucide-react';
import { Reveal } from './Reveal';
import { SplitText } from './anim/SplitText';
import { Spotlight } from './anim/Spotlight';
import { MagneticLink } from './MagneticLink';

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-ink-950 text-paper px-6 sm:px-10 pt-28 pb-10 mt-20 overflow-hidden"
    >
      <Spotlight size={620} color="rgba(255,255,255,0.08)" className="absolute inset-0">
        <span aria-hidden />
      </Spotlight>

      <div className="relative grid grid-cols-12 gap-4 items-end">
        <div className="col-span-12 md:col-span-9">
          <div className="text-[11px] uppercase tracking-[0.22em] text-ink-300 mb-6">
            / 20 — Thank you
          </div>
          <h2 className="text-display-xl tracking-tightest font-extrabold">
            <span className="block">
              <SplitText text="Thank" inView stagger={0.04} duration={1} />
            </span>
            <span className="block font-light italic">
              <SplitText text="you." inView stagger={0.04} duration={1} delay={0.12} />
            </span>
          </h2>
        </div>

        <div className="col-span-12 md:col-span-3 text-sm">
          <Reveal delay={0.2}>
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-300 mb-2">Contacts</div>
            <MagneticLink
              href="mailto:jane.kanat@ucalgary.ca"
              className="py-2 border-b border-ink-700 text-ink-100 hover:text-paper transition-colors duration-300"
            >
              <span className="inline-flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-ink-300" strokeWidth={1.5} />
                jane.kanat@ucalgary.ca
              </span>
            </MagneticLink>
            <MagneticLink
              href="mailto:janewinsii@gmail.com"
              className="py-2 border-b border-ink-700 text-ink-100 hover:text-paper transition-colors duration-300"
            >
              <span className="inline-flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-ink-300" strokeWidth={1.5} />
                janewinsii@gmail.com
              </span>
            </MagneticLink>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-24 grid grid-cols-12 gap-4 pt-8 border-t border-ink-800 text-[11px] uppercase tracking-[0.22em] text-ink-400">
        <div className="col-span-6 md:col-span-3">© Jane Kanat · 2026</div>
        <div className="col-span-6 md:col-span-3">University of Calgary</div>
        <div className="col-span-6 md:col-span-3">A — Architecture</div>
        <div className="col-span-6 md:col-span-3 text-right">Set in Inter</div>
      </div>
    </footer>
  );
}
