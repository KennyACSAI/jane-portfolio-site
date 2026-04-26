'use client';

import Image from 'next/image';
import type { Project } from '@/lib/projects';
import { Reveal } from './Reveal';
import { SplitText } from './anim/SplitText';
import { MaskReveal } from './anim/MaskReveal';

type Props = { project: Project; index: number };

/**
 * Lean version — no per-block useScroll listeners (used to fire on every
 * scroll event for all 16 mounted blocks at once), no TiltCard springs,
 * no parallax. Entrance reveal only. Far cheaper to scroll past.
 */
export function ProjectBlock({ project, index }: Props) {
  const flip = index % 2 === 1;

  return (
    <article id={project.id} className="px-6 sm:px-10 py-20 border-t hairline relative">
      <div className="grid grid-cols-12 gap-4 mb-10">
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
                <SplitText text={project.subtitle} inView delay={0.08} stagger={0.018} duration={0.7} />
              </span>
            ) : null}
          </h3>
          {project.location ? (
            <Reveal delay={0.15} y={10}>
              <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink-500">
                — {project.location}
                {project.year ? <span className="ml-3">· {project.year}</span> : null}
              </div>
            </Reveal>
          ) : null}
        </div>

        <div className="col-span-12 md:col-span-4 text-[11px] uppercase tracking-[0.22em] text-ink-500 mt-4 md:mt-3 self-end">
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
              {project.collaborators ? (
                <>
                  <div className="text-ink-950">With</div>
                  <div className="col-span-2 text-ink-700 text-[11px] tracking-[0.18em] normal-case">
                    {project.collaborators}
                  </div>
                </>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <MaskReveal
          duration={1.0}
          className={`col-span-12 ${flip ? 'md:col-span-7 md:col-start-1' : 'md:col-span-7 md:col-start-6'} relative group`}
        >
          <div className="relative overflow-hidden bg-ink-25 ring-1 ring-ink-100">
            <Image
              src={project.spreadImage}
              alt={`${project.title} — portfolio spread`}
              width={1600}
              height={900}
              quality={82}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 60vw"
              className="w-full h-auto block transition-transform duration-700 ease-editorial group-hover:scale-[1.015]"
            />
            <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t border-l border-ink-300" />
            <span className="pointer-events-none absolute top-2 right-2 w-3 h-3 border-t border-r border-ink-300" />
            <span className="pointer-events-none absolute bottom-2 left-2 w-3 h-3 border-b border-l border-ink-300" />
            <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b border-r border-ink-300" />
            <div className="pointer-events-none absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.22em] text-ink-700/80 mix-blend-multiply">
              Plate {project.number}
            </div>
          </div>
        </MaskReveal>

        <div
          className={`col-span-12 ${flip ? 'md:col-span-4 md:col-start-9' : 'md:col-span-4 md:col-start-1'} flex flex-col justify-end`}
        >
          <Reveal delay={0.15}>
            <p className="text-base md:text-[17px] leading-snug text-ink-700 max-w-[44ch]">
              {project.description}
            </p>
            {project.contributions ? (
              <div className="mt-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-950 mb-1">
                  Contributions
                </div>
                <p className="text-sm leading-snug text-ink-600">{project.contributions}</p>
              </div>
            ) : null}
            <div className="mt-6 text-[11px] uppercase tracking-[0.22em] text-ink-400 tabular-nums">
              File · {project.id}.indd
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
