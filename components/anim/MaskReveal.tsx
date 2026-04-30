'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState, type ReactNode } from 'react';

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
 *
 * Once the animation finishes we *release* the clipPath entirely. Leaving
 * `clipPath: inset(0% 0% 0% 0%)` set forever creates a hard clip rectangle
 * that crops anything bleeding 1px past the bounding box (e.g. an
 * absolute underline at -bottom-px on the bottom-most child). Releasing
 * it puts the element back to normal flow rendering.
 */
export function MaskReveal({
  children,
  className,
  delay = 0,
  duration = 1.1,
  direction = 'up',
}: Props) {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(reduce);

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
      // Skip the inline clipPath after the reveal completes so it doesn't
      // crop bleed-out children (underlines, focus rings, etc).
      style={done ? undefined : { clipPath: initial }}
      initial={done ? false : { clipPath: initial }}
      whileInView={done ? undefined : { clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration, delay, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setDone(true)}
    >
      {children}
    </motion.div>
  );
}
