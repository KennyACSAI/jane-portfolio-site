'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
};

/**
 * Animates a clip-path mask that uncovers `children` on viewport entry.
 * Default direction is 'up' (mask retreats downward → top-half reveals first).
 */
export function MaskReveal({
  children,
  className,
  delay = 0,
  duration = 1.1,
  direction = 'up',
}: Props) {
  const reduce = useReducedMotion();

  const initial = reduce
    ? 'inset(0% 0% 0% 0%)'
    : direction === 'up'
      ? 'inset(0% 0% 100% 0%)'
      : direction === 'down'
        ? 'inset(100% 0% 0% 0%)'
        : direction === 'left'
          ? 'inset(0% 100% 0% 0%)'
          : 'inset(0% 0% 0% 100%)';

  return (
    <motion.div
      className={className}
      initial={{ clipPath: initial }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}
