'use client';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** Maximum skew in degrees, applied at peak scroll velocity. */
  max?: number;
};

/**
 * Wraps `children` and applies a scroll-velocity-driven skewY.
 * Subtle by default — at rest the value is 0; when the user scrolls
 * fast, content tilts slightly.
 */
export function ScrollSkew({ children, className, max = 4 }: Props) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { stiffness: 80, damping: 30 });
  const skew = useTransform(smooth, [-3000, 0, 3000], [-max, 0, max], { clamp: true });

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} style={{ skewY: skew }}>
      {children}
    </motion.div>
  );
}
