'use client';

const items = [
  'Architecture',
  'Site Planning',
  'Interior Design',
  'Color Theory',
  'Reproductions',
  'Sketches',
  'Installations',
  'Urbanism',
  '3D · Posters',
  'Calgary',
  'Astana',
  'Seoul',
];

/**
 * Constant-speed CSS marquee. The earlier scroll-velocity coupling
 * caused jittery direction-flipping during fast scrolls — replaced
 * with a stable left-drift that's purely GPU-composited.
 */
export function Marquee() {
  return (
    <div className="border-y hairline overflow-hidden bg-paper">
      <div className="flex gap-12 py-5 animate-marquee whitespace-nowrap will-change-transform">
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="text-[clamp(1.3rem,3.6vw,3rem)] font-light tracking-tightest text-ink-950 flex items-center gap-12"
          >
            {it}
            <span className="text-ink-300">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
