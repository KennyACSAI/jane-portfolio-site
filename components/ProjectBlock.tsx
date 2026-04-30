'use client';

import Image from 'next/image';
import type { Project } from '@/lib/projects';
import { Reveal } from './Reveal';
import { SplitText } from './anim/SplitText';
import { MaskReveal } from './anim/MaskReveal';

type Props = { project: Project; index: number };

/**
 * Decide gallery layout based on image count.
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

/** ShopGO-specific brand block: mission/vision/concept/palette/features/problem. */
function ShopGoBrandBlock({ project }: { project: Project }) {
  if (
    !project.mission &&
    !project.vision &&
    !project.problem &&
    !project.palette
  ) {
    return null;
  }
  return (
    <Reveal delay={0.25}>
      <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-8">
        {project.problem ? (
          <div className="col-span-12 md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-950 mb-2">Problem</div>
            <p className="text-base leading-snug text-ink-700 max-w-[58ch]">
              {project.problem}
            </p>
            {project.problemKo ? (
              <p className="mt-3 text-sm leading-relaxed text-ink-500 max-w-[58ch]">
                {project.problemKo}
              </p>
            ) : null}
          </div>
        ) : null}

        {project.features ? (
          <div className="col-span-12 md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-950 mb-2">
              Key features
            </div>
            <ul className="text-base leading-snug text-ink-700 space-y-1">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-ink-400 tabular-nums w-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.mission ? (
          <div className="col-span-12 md:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-950 mb-2">Mission</div>
            <p className="text-base italic leading-snug text-ink-700 max-w-[58ch]">
              “{project.mission}”
            </p>
          </div>
        ) : null}

        {project.vision ? (
          <div className="col-span-12 md:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-950 mb-2">Vision</div>
            <p className="text-base italic leading-snug text-ink-700 max-w-[58ch]">
              “{project.vision}”
            </p>
          </div>
        ) : null}

        {(project.concept || project.palette || project.fonts) ? (
          <div className="col-span-12 grid grid-cols-12 gap-4 pt-6 border-t hairline">
            {project.concept ? (
              <div className="col-span-12 md:col-span-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-950 mb-2">
                  Concept
                </div>
                <p className="text-sm text-ink-700">{project.concept}</p>
              </div>
            ) : null}
            {project.palette ? (
              <div className="col-span-6 md:col-span-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-950 mb-2">
                  Palette
                </div>
                <div className="flex gap-2 items-center">
                  {project.palette.map((c) => (
                    <div key={c} className="flex flex-col items-start gap-1">
                      <span
                        aria-hidden
                        className="block w-7 h-7 ring-1 ring-ink-200"
                        style={{ background: c }}
                      />
                      <span className="text-[10px] uppercase tracking-[0.18em] text-ink-500 tabular-nums">
                        {c}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {project.fonts ? (
              <div className="col-span-6 md:col-span-3">
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-950 mb-2">
                  Typography
                </div>
                <ul className="text-sm text-ink-700 space-y-0.5">
                  {project.fonts.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}

/** Hanbok-specific process steps. */
function ProcessSteps({ project }: { project: Project }) {
  if (!project.process) return null;
  return (
    <Reveal delay={0.25}>
      <div className="mt-10">
        <div className="text-[11px] uppercase tracking-[0.22em] text-ink-950 mb-3">Process</div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t hairline pt-6">
          {project.process.map((p, i) => (
            <li key={i} className="text-sm text-ink-700">
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-400 tabular-nums mb-2">
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="leading-snug">{p.step}</p>
              {p.mediums ? (
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink-500 normal-case">
                  {p.mediums}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}

export function ProjectBlock({ project }: Props) {
  return (
    <article id={project.id} className="px-6 sm:px-10 py-20 border-t hairline relative">
      {/* Header row */}
      <div className="grid grid-cols-12 gap-4 mb-8">
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
              {project.status ? (
                <span className="text-ink-950">
                  ◌ {project.status}
                </span>
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
              <div className="col-span-2 text-ink-400 tabular-nums mt-2">
                {project.images.length} plate{project.images.length === 1 ? '' : 's'}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Description body — sits in the title's column to read as caption-prose, not body. */}
      {project.description ? (
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="hidden md:block md:col-span-1" />
          <Reveal delay={0.18} y={14} className="col-span-12 md:col-span-7">
            <p className="text-base md:text-[17px] leading-relaxed text-ink-700 max-w-[64ch]">
              {project.description}
            </p>
            {project.contributions ? (
              <p className="mt-4 text-sm leading-snug text-ink-600 max-w-[64ch]">
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink-950 mr-2">
                  Contributions
                </span>
                {project.contributions}
              </p>
            ) : null}
          </Reveal>
        </div>
      ) : null}

      {/* ShopGO brand block (only renders if its fields are present). */}
      <ShopGoBrandBlock project={project} />

      {/* Hanbok process steps (only renders if present). */}
      <ProcessSteps project={project} />

      {/* Gallery */}
      <div className={`grid grid-cols-12 gap-4 ${project.description || project.process || project.mission ? 'mt-12' : ''}`}>
        <GalleryLayout images={project.images} title={project.title} />
      </div>
    </article>
  );
}
