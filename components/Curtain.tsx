'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Curtain() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setDone(true), 2000);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] pointer-events-none flex"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.1 } }}
        >
          {/* Top half */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.9 }}
            className="absolute inset-x-0 top-0 h-1/2 bg-ink-950 origin-top"
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: '100%' }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.9 }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-ink-950 origin-bottom"
          />

          {/* Center number readout */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: [0, 1, 1, 0], y: 0 }}
            transition={{ duration: 1.6, times: [0, 0.2, 0.7, 1], ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 m-auto text-paper text-center"
          >
            <div className="text-[11px] uppercase tracking-[0.4em] text-ink-300 mb-3">
              Personal Portfolio
            </div>
            <div className="text-display-md font-light tracking-tightest">
              Jane <em className="font-extrabold not-italic">Kanat</em>
            </div>
            <div className="text-[11px] uppercase tracking-[0.4em] text-ink-300 mt-3 tabular-nums">
              <Counter />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Counter() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const dur = 900;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <span>{String(n).padStart(3, '0')} %</span>;
}
