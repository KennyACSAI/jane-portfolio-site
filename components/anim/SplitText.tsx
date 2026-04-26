'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

type Props = {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  y?: number;
  /** Trigger on viewport-enter rather than mount. */
  inView?: boolean;
};

/**
 * Character-by-character entrance. Each char rises from `y` and fades in,
 * with `stagger` between characters. Spaces preserve layout via &nbsp;.
 */
export function SplitText({
  text,
  className,
  charClassName,
  delay = 0,
  duration = 0.85,
  stagger = 0.03,
  y = 30,
  inView = false,
}: Props) {
  const reduce = useReducedMotion();
  const chars = useMemo(() => text.split(''), [text]);

  const trigger = inView ? { whileInView: 'show' } : { animate: 'show' };

  return (
    <motion.span
      className={className}
      style={{ display: 'inline-block' }}
      initial="hidden"
      {...trigger}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      aria-label={text}
    >
      {chars.map((c, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={charClassName}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
          variants={{
            hidden: { y: reduce ? 0 : y, opacity: 0 },
            show: { y: 0, opacity: 1, transition: { duration, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {c === ' ' ? ' ' : c}
        </motion.span>
      ))}
    </motion.span>
  );
}
