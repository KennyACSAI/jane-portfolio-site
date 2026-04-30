import { CategoryDivider } from '@/components/CategoryDivider';
import { Curtain } from '@/components/Curtain';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { IndexSection } from '@/components/IndexSection';
import { Manifesto } from '@/components/Manifesto';
import { Marquee } from '@/components/Marquee';
import { Navigation } from '@/components/Navigation';
import { ProjectBlock } from '@/components/ProjectBlock';
import { SectionTracker } from '@/components/SectionTracker';
import { GlassFilter } from '@/components/ui/liquid-glass';
import { projectsByCategory } from '@/lib/projects';

export default function Home() {
  const sitePlanning = projectsByCategory['Site Planning'];
  const gis = projectsByCategory['GIS Studies'];
  const interior = projectsByCategory['Interior Design'];
  const design = projectsByCategory['Design by Jane'];

  return (
    <main className="min-h-screen bg-paper text-ink-950">
      <GlassFilter />
      <Curtain />
      <Navigation />
      <SectionTracker />

      <Hero />

      <Marquee />

      <IndexSection />

      <Manifesto />

      <CategoryDivider
        id="site-planning"
        index="04"
        kicker="Section A"
        title="Site"
        italic="Planning."
        blurb="Six urban and ecological studies across Calgary — from the Bow River corridor to the grasslands of Nose Hill. Each project pairs spatial observation with diagrammatic mapping, treating the ground as a living document."
        count={String(sitePlanning.length).padStart(2, '0')}
      />
      {sitePlanning.map((p, i) => (
        <ProjectBlock key={p.id} project={p} index={i} />
      ))}

      <CategoryDivider
        id="gis-studies"
        index="05"
        kicker="Section B"
        title="GIS"
        italic="Studies."
        blurb="Spatial-correlation studies of Calgary built in ArcGIS Pro: how transit corridors, suburban density and zoning shape who moves through the city and how."
        count={String(gis.length).padStart(2, '0')}
      />
      {gis.map((p, i) => (
        <ProjectBlock key={p.id} project={p} index={i} />
      ))}

      <CategoryDivider
        id="interior"
        index="06"
        kicker="Section C"
        title="Interior"
        italic="Design."
        blurb="Three interior projects in Astana — residential and commercial — moving from CAD model to render to assembled, occupied space. Studies of light, balance and the limits of a budget."
        count={String(interior.length).padStart(2, '0')}
      />
      {interior.map((p, i) => (
        <ProjectBlock key={p.id} project={p} index={i} />
      ))}

      <CategoryDivider
        id="design-by-jane"
        index="07"
        kicker="Section D"
        title="Design"
        italic="by Jane."
        blurb="Seven independent works, 2021 — ongoing. Pitch decks, 3D scenes, color theory, painted reproductions, sketches and a paper installation. The studio side of the practice."
        count={String(design.length).padStart(2, '0')}
      />
      {design.map((p, i) => (
        <ProjectBlock key={p.id} project={p} index={i} />
      ))}

      <Footer />
    </main>
  );
}
