'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const HeroScene = dynamic(() => import('./HeroScene').then((m) => ({ default: m.HeroScene })), {
  ssr: false,
  loading: () => null,
});

/**
 * Wraps the WebGL canvas in an IntersectionObserver gate.
 * When the hero scrolls offscreen we UNMOUNT the canvas entirely —
 * no GPU work, no frameloop, no listeners. Remounts when hero
 * comes back into view.
 */
export function HeroSceneClient() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '120px 0px 0px 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0">
      {visible ? <HeroScene /> : null}
    </div>
  );
}
