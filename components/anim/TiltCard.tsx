'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees on each axis. */
  max?: number;
  /** Lift amount in pixels at peak. */
  lift?: number;
};

/**
 * 3D perspective tilt that follows the cursor. Applies rotateX/rotateY
 * via springs for a soft, weighted feel. Used to give project plates
 * a tactile, hover-responsive presence.
 */
export function TiltCard({ children, className, max = 6, lift = 4 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), {
    stiffness: 180,
    damping: 18,
  });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), {
    stiffness: 180,
    damping: 18,
  });
  const z = useSpring(useTransform(x, [-0.5, 0, 0.5], [lift, 0, lift]), {
    stiffness: 180,
    damping: 22,
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) / r.width);
    y.set((e.clientY - (r.top + r.height / 2)) / r.height);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, translateZ: z, transformPerspective: 900 }}
    >
      {children}
    </motion.div>
  );
}
