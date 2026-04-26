'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export function Reveal({ children, delay = 0, y = 24, className, once = true }: Props) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '0px 0px -8% 0px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerLines — fade + soft rise. Always ends visible, even when
 * IntersectionObserver hasn't fired yet (initial uses opacity, not y:110%).
 */
export function StaggerLines({
  lines,
  className,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((l, i) => (
        <motion.span
          key={i}
          className="block leading-[1.0]"
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.07 }}
        >
          {l}
        </motion.span>
      ))}
    </span>
  );
}
