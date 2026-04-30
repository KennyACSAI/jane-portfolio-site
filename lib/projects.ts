export type Category =
  | 'Site Planning'
  | 'GIS Studies'
  | 'Interior Design'
  | 'Design by Jane';

export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  location?: string;
  category: Category;
  year?: string;
  software?: string[];
  contributions?: string;
  collaborators?: string;
  medium?: string;
  dimensions?: string;
  status?: string;
  /** Long-form description shown beneath the title. */
  description?: string;
  /** ShopGO-specific brand notes. */
  mission?: string;
  vision?: string;
  concept?: string;
  palette?: string[];
  fonts?: string[];
  problem?: string;
  problemKo?: string;
  features?: string[];
  /** Hanbok-specific process steps. */
  process?: { step: string; mediums?: string }[];
  /** Ordered list of image paths under /public. */
  images: string[];
};

const range = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/projects/${slug}/${String(i + 1).padStart(2, '0')}.jpg`);

export const projects: Project[] = [
  // ───────────── Site Planning ─────────────
  {
    id: '01-montgomery',
    number: '01',
    title: 'Montgomery Site Analysis',
    location: 'Calgary',
    category: 'Site Planning',
    software: ['Photoshop', 'Illustrator', 'InDesign'],
    collaborators: 'with Jonas Laurent Henderson',
    description:
      'Urban site analysis of the Montgomery district in Calgary focusing on spatial structure, pedestrian conditions, historical development and environmental factors such as sun paths and wind patterns. The study includes permeability mapping, street observations, section drawings, signage analysis, figure-ground and asphalt mapping, as well as pedestrian-satisfaction mapping to understand how the area functions and how people interact with the urban environment.',
    images: range('01-montgomery', 2),
  },
  {
    id: '02-9-ave-inglewood',
    number: '02',
    title: '9 Ave Inglewood Site Planning',
    location: 'Calgary',
    category: 'Site Planning',
    software: ['Photoshop', 'Illustrator', 'InDesign'],
    description:
      'Urban analysis along 9th Avenue in Calgary proposing a public plaza integrated with surrounding streets and commercial activity. The study covers circulation patterns, noise conditions, surrounding land uses, and environmental factors such as sun paths, wind directions, and shadow impact. Includes a physical model.',
    images: range('02-9-ave-inglewood', 5),
  },
  {
    id: '03-porta-verde',
    number: '03',
    title: 'Porta Verde Site Planning',
    location: 'Calgary',
    category: 'Site Planning',
    software: ['Illustrator', 'InDesign', 'Enscape', 'SketchUp'],
    description:
      'Urban-design proposal developed after a comprehensive site analysis near the Bow River in Calgary. Examines surrounding infrastructure, building heights, transportation access, and environmental factors such as wind and shadow patterns to understand the site\'s urban context.',
    images: range('03-porta-verde', 2),
  },
  {
    id: '04-hh-bh',
    number: '04',
    title: 'HH/BH Community Planning',
    subtitle: 'Hounsfield Heights / Briar Hill',
    location: 'Calgary',
    category: 'Site Planning',
    software: ['ArcGIS Pro', 'Illustrator', 'InDesign'],
    status: 'Ongoing',
    description:
      'The project proposes green corridors, community nodes, and mixed-use development to strengthen public space and neighbourhood connections. Work covers development of the master plan and supporting urban-analysis diagrams.',
    contributions:
      'Poster layout; precedents research; building-heights analysis; group branding & logo design; master-plan development.',
    images: range('04-hh-bh', 2),
  },
  {
    id: '05-10th-street',
    number: '05',
    title: '10th Street Typologies',
    subtitle: 'Urban Streetscape Study',
    location: 'Calgary',
    category: 'Site Planning',
    year: 'October 2025',
    collaborators: 'with Abby Neilson',
    description:
      'Analysis of spatial conditions and pedestrian experience along 10th Street, examining how street typologies influence movement, social interaction, and temporary use of public space. Combines site photography, analytical drawings, and diagrammatic mapping to identify opportunities for improving walkability and public life along the corridor.',
    contributions: '4 of 8 analytical drawings and spatial studies, site-analysis diagrams, and poster layout.',
    images: range('05-10th-street', 1),
  },
  {
    id: '06-nose-hill',
    number: '06',
    title: 'Nose Hill Site Analysis',
    subtitle: 'Ecological Landscape Study',
    location: 'Calgary',
    category: 'Site Planning',
    year: 'August – October 2025',
    description:
      'Environmental site analysis of the Nose Hill natural area focusing on ecological patterns, vegetation distribution, and landscape characteristics. Examines seasonal conditions, plant species, and terrain relationships to understand how natural systems shape the site. Analytical diagrams and visual documentation interpret the ecological identity and landscape dynamics.',
    contributions: 'Cross-section drawing, historical timeline collage, and poster layout.',
    images: range('06-nose-hill', 1),
  },

  // ───────────── GIS Studies ─────────────
  {
    id: '07-gis-lrt',
    number: '07',
    title: 'Spatial Correlation',
    subtitle: 'Population Density × LRT Corridors',
    location: 'Calgary',
    category: 'GIS Studies',
    year: 'February 2026',
    software: ['ArcGIS Pro'],
    description:
      'Choropleth + transit-network analysis of how population density distributes along Calgary\'s Light Rail Transit corridors. The map overlays community boundaries with the LRT line, station catchments, and zone tiers to identify where density and rapid transit reinforce — or fail — each other.',
    images: range('07-gis-lrt', 1),
  },
  {
    id: '08-gis-housing',
    number: '08',
    title: 'Suburban Housing × Transit Use',
    subtitle: 'Single-family density vs car/transit modal share',
    location: 'Calgary',
    category: 'GIS Studies',
    year: 'February 2026',
    software: ['ArcGIS Pro'],
    description:
      'Correlation study mapping single-family household density against journey-to-work modal share. Identifies suburban tracts where car dependency is structurally locked in by housing typology, and areas where transit competes despite lower density.',
    images: range('08-gis-housing', 1),
  },
  {
    id: '09-gis-zoning',
    number: '09',
    title: 'Land-Use Zoning & Density',
    subtitle: 'Residential land-use classification',
    location: 'Calgary',
    category: 'GIS Studies',
    year: 'March 2026',
    software: ['ArcGIS Pro'],
    description:
      'Owner-occupied household distribution mapped against City of Calgary land-use classifications. Highlights residential zones in cluster shifts and the divergence between zoning intent and on-the-ground occupation.',
    images: range('09-gis-zoning', 1),
  },

  // ───────────── Interior Design ─────────────
  {
    id: '10-tamerlan',
    number: '10',
    title: 'Residential Complex Tamerlan',
    subtitle: 'Apartment interior',
    location: 'Astana',
    category: 'Interior Design',
    software: ['ArchiCAD', '3DSMax', 'Coohom'],
    description:
      'Apartment interior taken from initial CAD model through 3D rendering to assembled, lived-in furniture. Stages: ArchiCAD initial model → 3DSMax photoreal rendering → assembled furniture in real life. Outputs include the master plan, top-view rendering and bedroom rendering.',
    images: range('10-tamerlan', 7),
  },
  {
    id: '11-royal-expo',
    number: '11',
    title: 'Royal Expo · Casa Nostra',
    subtitle: 'Residential complex master plan',
    location: 'Astana',
    category: 'Interior Design',
    software: ['SketchUp', 'Enscape'],
    description:
      'Interior design focused on creating functional and aesthetically balanced spaces within limited budget constraints. Emphasises efficient space planning, ergonomic use of interior environments, and practical material choices that maximise usability and comfort. Each project considers circulation, furniture placement, lighting, and spatial proportions to ensure the space supports everyday activities while maintaining a coherent visual identity.',
    images: range('11-royal-expo', 1),
  },
  {
    id: '12-samruk',
    number: '12',
    title: 'Samruk Energy',
    subtitle: 'Conference & office space',
    location: 'Astana',
    category: 'Interior Design',
    software: ['ArchiCAD', 'Coohom'],
    description:
      'Workplace interior for Samruk Energy — formal balance of conference room and supporting office areas. Studies of light, circulation, and proportional restraint suited to a corporate-energy client.',
    images: range('12-samruk', 11),
  },

  // ───────────── Design by Jane ─────────────
  {
    id: '13-shopgo',
    number: '13',
    title: 'ShopGO',
    subtitle: 'Capstone — pitch deck & progress record',
    location: 'Songdo',
    category: 'Design by Jane',
    year: '2025',
    collaborators: 'with Janhavi · Radhika · Bilal',
    description:
      'A reliable grocery-sharing platform for students. ShopGO turns peer-to-peer sharing, bargaining and bulk purchasing into a single mobile flow — reducing cost, food waste and the cognitive load of an unpredictable student schedule.',
    problem:
      'Students in Songdo struggle with high grocery costs and food waste due to unpredictable schedules. A reliable grocery-sharing platform is needed for a sustainable, cost-effective solution.',
    problemKo:
      '송도 학생들은 예측하기 어려운 일정으로 인해 높은 식료품 비용과 음식 낭비에 어려움을 겪고 있습니다. 지속 가능하고 경제적인 해결책을 위한 신뢰할 수 있는 식료품 공유 플랫폼이 필요합니다.',
    mission:
      'To empower students to make informed and efficient grocery decisions by facilitating peer-to-peer sharing, bargaining, and bulk purchasing — thereby reducing costs, minimizing food waste, alleviating stress, and fostering a socially connected and sustainable shopping environment.',
    vision:
      'Leading smart grocery collaboration through sustainable shopping and community-based bargaining.',
    concept: 'Shopping cart + orange inside = shopping + eco.',
    palette: ['#254936', '#E39300', '#58c835'],
    fonts: ['IBM Plex Mono', 'Anonymous Pro'],
    features: ['Group Shopping Match', 'Grocery & Essentials Exchange', 'Easy Ordering System'],
    images: range('13-shopgo', 8),
  },
  {
    id: '14-3d-projects',
    number: '14',
    title: '3D Projects · Posters',
    subtitle: 'Scene in the Style of de Chirico · Formula 1 Filter',
    category: 'Design by Jane',
    year: '2023',
    software: ['Blender', 'Meta Spark', 'Adobe Illustrator'],
    description:
      'Two short-form 3D pieces. *Scene in the Style of de Chirico* (2023) — a 3D digital artwork created in Blender with applied textures, variable digital output. *Formula 1 — 3D Project* — a Blender-modelled, Meta Spark Instagram filter with Adobe Illustrator graphics.',
    images: range('14-3d-projects', 2),
  },
  {
    id: '15-color-theory',
    number: '15',
    title: 'Color Theory · Color Analysis',
    category: 'Design by Jane',
    medium: '"Winsor & Newton" Designers Gouache · Adobe Illustrator',
    description:
      'Painted and digital studies in colour theory: hue / value / saturation pairings, complementary harmonies, and analytic decomposition of source images into colour palettes.',
    images: range('15-color-theory', 2),
  },
  {
    id: '16-reproductions-i',
    number: '16',
    title: 'Art Reproductions I',
    subtitle: 'Van Gogh — Starry Night over the Rhône / Starry Night',
    category: 'Design by Jane',
    medium: 'Oil and acrylic on A2 canvas',
    dimensions: '42 × 59.4 cm',
    year: '2021–2022',
    description:
      'Two Van Gogh reproductions, painted as gifts. *Starry Night over the Rhône* (2022) explores layering and strong brush direction with an interest in Dansaekhwa\'s attention to process. *Starry Night* (2021) combines oil and acrylic with layered textures and expressive brushwork to capture the essence of Post-Impressionism through a Postmodern lens.',
    images: range('16-reproductions-i', 2),
  },
  {
    id: '17-reproductions-ii',
    number: '17',
    title: 'Art Reproductions II',
    subtitle: 'Klimt — The Kiss',
    category: 'Design by Jane',
    medium: '"Winsor & Newton" Designers Gouache, A2 paper',
    dimensions: '22 × 32 cm',
    description:
      'Reproduction of an existing artwork in four parallel passes — original, printed copy (upper right), monochromatic (bottom left), complementary (bottom right) — a study of value, palette reduction, and chromatic translation.',
    images: range('17-reproductions-ii', 4),
  },
  {
    id: '18-sketches',
    number: '18',
    title: 'Sketches',
    subtitle: 'Hands & legs',
    category: 'Design by Jane',
    medium: 'Pencil H, HB · Sketchbook',
    dimensions: '29.7 × 42 cm',
    year: '2023',
    description: 'Studies made to understand the human body and movement.',
    images: range('18-sketches', 3),
  },
  {
    id: '19-installations',
    number: '19',
    title: 'Art Installations',
    subtitle: '"dancing in a hanbok"',
    category: 'Design by Jane',
    year: '2023',
    medium: 'Colored paper, tape, hot glue',
    dimensions: 'approx. 170 × 100 cm',
    description:
      'A spatial collage that captures looking from one perspective and reveals itself as a folded, layered construction — a single solid figure assembled from parts in different positions. Documented as a still frame from a longer video.',
    process: [
      {
        step: 'Step 1 — illustrate a dancing lady in Korean traditional clothing called Hanbok.',
        mediums: 'Pencils H, HB, B2 · A4 paper.',
      },
      {
        step: 'Step 2 — colour the figure with a palette emphasising femininity and joy.',
        mediums: 'Gouache · A3 paper.',
      },
      {
        step: 'Step 3 — build the 3D figure where parts in different positions still read as one solid form, captured as a still frame from video.',
        mediums: 'Coloured paper, tape, hot glue, scissors.',
      },
    ],
    images: range('19-installations', 2),
  },
];

export const projectsByCategory: Record<Category, Project[]> = {
  'Site Planning': projects.filter((p) => p.category === 'Site Planning'),
  'GIS Studies': projects.filter((p) => p.category === 'GIS Studies'),
  'Interior Design': projects.filter((p) => p.category === 'Interior Design'),
  'Design by Jane': projects.filter((p) => p.category === 'Design by Jane'),
};
