'use client';

import Image from 'next/image';
import type { Project } from '@/lib/projects';
import { Reveal } from './Reveal';
import { SplitText } from './anim/SplitText';
import { MaskReveal } from './anim/MaskReveal';

type Props = { project: Project; index: number };

/**
 * Decide gallery layout based on image count.
 * - 1: single full-bleed plate, max-width column 7
 * - 2: side-by-side
 * - 3: 2 + 1 (one large left, one stacked right)
 * - 4: 2×2
 * - 5+: masonry-ish 2-col grid, alternating heights
 */
function GalleryLayout({ images, title }: { images: string[]; title: string }) {
  const n = images.length;

  if (n === 1) {
    return (
      <MaskReveal duration={1.0} className="col-span-12 md:col-span-10 md:col-start-2 relative">
        <Plate src={images[0]} alt={title} index={0} />
      </MaskReveal>
    );
  }

  if (n === 2) {
    return (
      <div className="col-span-12 grid grid-cols-12 gap-4">
        <MaskReveal duration={1.0} className="col-span-12 md:col-span-6 relative">
          <Plate src={images[0]} alt={title} index={0} />
        </MaskReveal>
        <MaskReveal duration={1.0} delay={0.12} className="col-span-12 md:col-span-6 relative">
          <Plate src={images[1]} alt={title} index={1} />
        </MaskReveal>
      </div>
    );
  }

  if (n === 3) {
    return (
      <div className="col-span-12 grid grid-cols-12 gap-4">
        <MaskReveal duration={1.0} className="col-span-12 md:col-span-7 relative">
          <Plate src={images[0]} alt={title} index={0} />
        </MaskReveal>
        <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4">
          <MaskReveal duration={1.0} delay={0.1} className="relative">
            <Plate src={images[1]} alt={title} index={1} />
          </MaskReveal>
          <MaskReveal duration={1.0} delay={0.2} className="relative">
            <Plate src={images[2]} alt={title} index={2} />
          </MaskReveal>
        </div>
      </div>
    );
  }

  if (n === 4) {
    return (
      <div className="col-span-12 grid grid-cols-2 gap-4">
        {images.map((src, i) => (
          <MaskReveal key={i} duration={1.0} delay={i * 0.08} className="relative">
            <Plate src={src} alt={title} index={i} />
          </MaskReveal>
        ))}
      </div>
    );
  }

  // 5+: alternating masonry on 2 columns
  return (
    <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-4">
      {images.map((src, i) => (
        <MaskReveal key={i} duration={1.0} delay={i * 0.06} className="relative">
          <Plate src={src} alt={title} index={i} />
        </MaskReveal>
      ))}
    </div>
  );
}

function Plate({ src, alt, index }: { src: string; alt: string; index: number }) {
  return (
    <div className="relative overflow-hidden bg-ink-25 ring-1 ring-ink-100 group">
      <Image
        src={src}
        alt={`${alt} — ${String(index + 1).padStart(2, '0')}`}
        width={1600}
        height={1000}
        quality={82}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="w-full h-auto block transition-transform duration-700 ease-editorial group-hover:scale-[1.015]"
      />
      <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t border-l border-ink-300" />
      <span className="pointer-events-none absolute top-2 right-2 w-3 h-3 border-t border-r border-ink-300" />
      <span className="pointer-events-none absolute bottom-2 left-2 w-3 h-3 border-b border-l border-ink-300" />
      <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b border-r border-ink-300" />
      <div className="pointer-events-none absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.22em] text-ink-700/80 mix-blend-multiply tabular-nums">
        Plate {String(index + 1).padStart(2, '0')}
      </div>
    </div>
  );
}

export function ProjectBlock({ project }: Props) {
  return (
    <article id={project.id} className="px-6 sm:px-10 py-20 border-t hairline relative">
      {/* Header */}
      <div className="grid grid-cols-12 gap-4 mb-12">
        <div className="col-span-2 md:col-span-1 text-sm tabular-nums text-ink-400 font-medium">
          {project.number}
        </div>
        <div className="col-span-10 md:col-span-7">
          <h3 className="text-display-md font-light tracking-tighter2 text-ink-950">
            <span className="block">
              <SplitText text={project.title} inView stagger={0.018} duration={0.7} />
            </span>
            {project.subtitle ? (
              <span className="block font-extrabold italic">
                <SplitText
                  text={project.subtitle}
                  inView
                  delay={0.08}
                  stagger={0.018}
                  duration={0.7}
                />
              </span>
            ) : null}
          </h3>
          <Reveal delay={0.15} y={10}>
            <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink-500 flex flex-wrap gap-x-4 gap-y-1">
              {project.location ? <span>— {project.location}</span> : null}
              {project.year ? <span>· {project.year}</span> : null}
              {project.collaborators ? (
                <span className="text-ink-700">{project.collaborators}</span>
              ) : null}
            </div>
          </Reveal>
        </div>

        {/* Right metadata column */}
        <div className="col-span-12 md:col-span-4 text-[11px] uppercase tracking-[0.22em] text-ink-500 mt-4 md:mt-2 self-end">
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {project.software ? (
                <>
                  <div className="text-ink-950">Software</div>
                  <div className="text-right">{project.software.length} tools</div>
                  <div className="col-span-2 text-ink-700 text-[11px] tracking-[0.18em] normal-case">
                    {project.software.join(' · ')}
                  </div>
                </>
              ) : project.medium ? (
                <>
                  <div className="text-ink-950">Medium</div>
                  <div className="col-span-2 text-ink-700 text-[11px] tracking-[0.18em] normal-case">
                    {project.medium}
                  </div>
                </>
              ) : null}
              {project.dimensions ? (
                <>
                  <div className="text-ink-950">Dimensions</div>
                  <div className="text-right tabular-nums">{project.dimensions}</div>
                </>
              ) : null}
              {project.contributions ? (
                <div className="col-span-2 text-ink-700 text-[11px] tracking-[0.18em] normal-case mt-2">
                  ↳ {project.contributions}
                </div>
              ) : null}
              <div className="col-span-2 text-ink-400 tabular-nums mt-2">
                {project.images.length} plate{project.images.length === 1 ? '' : 's'}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-12 gap-4">
        <GalleryLayout images={project.images} title={project.title} />
      </div>
    </article>
  );
}
