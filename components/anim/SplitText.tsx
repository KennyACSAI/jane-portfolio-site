'use client';

import { Fragment, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  y?: number;
  inView?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Per-character stagger that *respects word boundaries*.
 *
 * Each word becomes an inline-block wrapper (non-breaking), and the
 * characters inside it animate individually. Whitespace between words is
 * rendered as plain text so the browser can break lines there — but
 * never inside a word.
 *
 * The earlier version made every character its own inline-block, which
 * let the browser wrap a long subtitle in the middle of "Chirico" or
 * "progress" — that's what we just fixed.
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
  const tokens = useMemo(() => text.split(/(\s+)/), [text]);

  let charIdx = 0;

  return (
    <span className={className} aria-label={text}>
      {tokens.map((token, ti) => {
        // Whitespace tokens stay as raw text — these are the only points
        // where the browser is allowed to break a line.
        if (/^\s+$/.test(token)) {
          return <Fragment key={`ws-${ti}`}>{token}</Fragment>;
        }
        // Word: render as one inline-block group so it cannot be split.
        return (
          <span
            key={`w-${ti}`}
            aria-hidden
            style={{ display: 'inline-block' }}
          >
            {Array.from(token).map((c, ci) => {
              const i = charIdx++;
              const animateProps = {
                opacity: 1,
                y: 0,
              };
              return (
                <motion.span
                  key={ci}
                  className={charClassName}
                  style={{ display: 'inline-block', willChange: 'transform' }}
                  initial={{ opacity: 0, y: reduce ? 0 : y }}
                  {...(inView
                    ? {
                        whileInView: animateProps,
                        viewport: { once: true, margin: '0px 0px -10% 0px' },
                      }
                    : { animate: animateProps })}
                  transition={{
                    duration,
                    delay: delay + i * stagger,
                    ease,
                  }}
                >
                  {c}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
