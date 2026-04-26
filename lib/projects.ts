export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  location?: string;
  category: 'Site Planning' | 'Interior Design' | 'Design by Jane';
  year?: string;
  software?: string[];
  contributions?: string;
  description: string;
  spreadImage: string;
  thumbImage: string;
  collaborators?: string;
  medium?: string;
  dimensions?: string;
};

export const projects: Project[] = [
  {
    id: 'montgomery',
    number: '01',
    title: 'Montgomery Site Analysis',
    location: 'Calgary',
    category: 'Site Planning',
    description:
      'Urban site analysis of the Montgomery district focused on spatial structure, pedestrian conditions, historical development, and environmental factors such as sun paths and wind patterns. Permeability mapping, street observations, section drawings, signage analysis, figure-ground and asphalt mapping — combined as pedestrian satisfaction layers to understand how the area functions and how people interact with the urban environment.',
    software: ['Photoshop', 'Illustrator', 'InDesign'],
    spreadImage: '/pdf-pages/page-03.jpg',
    thumbImage: '/pdf-pages/thumb-03.jpg',
  },
  {
    id: '9-ave-inglewood',
    number: '02',
    title: '9 Ave Inglewood Site Planning',
    location: 'Calgary',
    category: 'Site Planning',
    description:
      'Urban analysis along the 9th Avenue corridor in Calgary, proposing a public-integrated unit surrounding streets and commercial activity. Site analysis through patterns, noise and wind, surrounding land uses, and environmental factors including air quality and sun paths.',
    software: ['Photoshop', 'Illustrator', 'InDesign'],
    spreadImage: '/pdf-pages/page-04.jpg',
    thumbImage: '/pdf-pages/thumb-04.jpg',
  },
  {
    id: 'porta-verde',
    number: '03',
    title: 'Porta Verde Site Planning',
    location: 'Calgary',
    category: 'Site Planning',
    description:
      'Urban-design proposal developed after a comprehensive site analysis near the Bow River in Calgary. The proposal examines surrounding infrastructure, building heights, transportation access, and environmental factors such as wind and shadow patterns to understand how the area connects with the urban environment.',
    software: ['Illustrator', 'InDesign', 'Enscape', 'SketchUp'],
    spreadImage: '/pdf-pages/page-05.jpg',
    thumbImage: '/pdf-pages/thumb-05.jpg',
  },
  {
    id: 'hh-bh',
    number: '04',
    title: 'HH/BH Community Planning',
    subtitle: 'Hounsfield Heights / Briar Hill',
    location: 'Calgary',
    category: 'Site Planning',
    description:
      'Community-planning proposal that strengthens public space and neighbourhood connections. Set includes master plan and a master-plan section drawing illustrating spatial development.',
    contributions: 'Master plan, procedural research, perspective drawings, group branding/logo design, master-plan development.',
    software: ['ArchiCAD', 'Photoshop', 'Illustrator', 'InDesign', 'Procreate', 'Rhino', 'Grasshopper'],
    spreadImage: '/pdf-pages/page-06.jpg',
    thumbImage: '/pdf-pages/thumb-06.jpg',
  },
  {
    id: '10th-street',
    number: '05',
    title: '10th Street Typologies',
    subtitle: 'Urban Streetscape Study',
    location: 'Calgary',
    category: 'Site Planning',
    year: 'October 2025',
    collaborators: 'Abby Neilson & Jane Kanat',
    description:
      'Analysis of spatial conditions and pedestrian experience along 10th Street, examining street typologies, urban materiality, social interaction, and temporary use of public space. The study combines fieldwork, photography, analytical drawings, and diagrammatic mapping to identify opportunities for improving walkability and public life along the corridor.',
    contributions: '3–4 analytical drawings and spatial studies, site analysis diagrams, and poster layout.',
    spreadImage: '/pdf-pages/page-07.jpg',
    thumbImage: '/pdf-pages/thumb-07.jpg',
  },
  {
    id: 'nose-hill',
    number: '06',
    title: 'Nose Hill Site Analysis',
    subtitle: 'Ecological Landscape Study',
    location: 'Calgary',
    category: 'Site Planning',
    year: 'August – October 2025',
    description:
      'Environmental site analysis of the Nose Hill natural area focusing on ecological patterns, vegetation distribution, and landscape characteristics. The study examines seasonal conditions, plant species, and terrain relationships to understand how natural systems shape the site. Analytical diagrams and visual documentation were used to interpret ecological identity and landscape dynamics.',
    contributions: 'Cross-section drawing, historical timeline collage, and poster layout.',
    spreadImage: '/pdf-pages/page-08.jpg',
    thumbImage: '/pdf-pages/thumb-08.jpg',
  },
  {
    id: 'tamerlan',
    number: '07',
    title: 'Interior Design "Residential Complex Tamerlan"',
    location: 'Astana',
    category: 'Interior Design',
    description:
      'Interior project staged from initial CAD modelling through 3D visualization to assembled real-life furniture. Stages: ArchiCAD initial model, 3DSMax rendering, real-life assembly. Outputs include master plan, top-view rendering, and bedroom rendering.',
    software: ['ArchiCAD', '3DSMax', 'Coohom'],
    spreadImage: '/pdf-pages/page-10.jpg',
    thumbImage: '/pdf-pages/thumb-10.jpg',
  },
  {
    id: 'royal-expo',
    number: '08',
    title: 'Interior Design "Residential Complex Royal Expo"',
    location: 'Astana',
    category: 'Interior Design',
    description:
      'Interior design project focused on creating functional and aesthetically balanced spaces within limited budget constraints. Emphasis on efficient space planning, ergonomic use of indoor environments, and practical material choices that maximize usability within client demands. Includes intuitive placement, lighting, alignment, and spatial proportions to ensure the space supports everyday activities while maintaining a coherent visual identity.',
    software: ['SketchUp', 'Enscape'],
    spreadImage: '/pdf-pages/page-11.jpg',
    thumbImage: '/pdf-pages/thumb-11.jpg',
  },
  {
    id: 'samruk-energy',
    number: '09',
    title: 'Space Design "Samruk Energy"',
    location: 'Astana',
    category: 'Interior Design',
    description:
      'Office space and conference-room design exploring formal balance, lighting and circulation. Carried out for the Samruk Energy headquarters.',
    software: ['ArchiCAD', 'Coohom'],
    spreadImage: '/pdf-pages/page-12.jpg',
    thumbImage: '/pdf-pages/thumb-12.jpg',
  },
  {
    id: 'shopgo',
    number: '10',
    title: 'Capstone Project — ShopGO',
    subtitle: 'Pitch Presentation & Progress Record',
    category: 'Design by Jane',
    collaborators: 'Group: Neulis Neue',
    description:
      'Students in Yonsei struggle with high grocery costs and food waste due to unpredictable schedules. ShopGO is a reliable grocery shopping platform created for a sustainable, cost-effective solution. Mission: empower students to make informed and efficient grocery decisions by leveraging real-time pricing, clear nutritional information, and convenient pickup. Vision: leading smart-grocery collaboration through location-based shopping and community-driven well-being.',
    contributions: 'Mission/vision statements, key feature definition, in-app UI screens, pitch deck design.',
    spreadImage: '/pdf-pages/page-13.jpg',
    thumbImage: '/pdf-pages/thumb-13.jpg',
  },
  {
    id: '3d-projects',
    number: '11',
    title: '3D Projects · Posters',
    subtitle: 'Formula 1 filter · Scene in the Style of de Chirico',
    category: 'Design by Jane',
    year: '2023',
    description:
      '"Scene in the Style of de Chirico" — a 3D digital artwork created using Blender with applied textures; variable digital output. Plus a Formula 1 Instagram Filter built in Meta Spark with Blender-modeled assets and Adobe Illustrator graphics.',
    software: ['Blender', 'Meta Spark', 'Adobe Illustrator'],
    spreadImage: '/pdf-pages/page-14.jpg',
    thumbImage: '/pdf-pages/thumb-14.jpg',
  },
  {
    id: 'color-theory',
    number: '12',
    title: 'Color Theory · Color Analysis',
    category: 'Design by Jane',
    medium: '"Winsor & Newton" Designers Gouache, Adobe Illustrator',
    description:
      'A study of color through composition, harmony and psychology. Color Theory exercises explore the wheel, complementary pairs, brightness, vibration and transparent illusions. Color Analysis decomposes a reference photograph into a constructed palette, harmony types, applied fragments and exercises.',
    spreadImage: '/pdf-pages/page-15.jpg',
    thumbImage: '/pdf-pages/thumb-15.jpg',
  },
  {
    id: 'reproductions-i',
    number: '13',
    title: 'Art Reproductions I',
    subtitle: 'Van Gogh — Starry Night over the Rhône / Starry Night',
    category: 'Design by Jane',
    medium: 'Oil and acrylic on A2 canvas',
    dimensions: '42 × 59.4 cm',
    year: '2021–2022',
    description:
      'Two reproductions of Van Gogh paintings created as gifts for parents. The process explores layering, brush direction and expressive impasto-style mark-making — interest in Starlandbox and the detail-of-process visible in the original.',
    spreadImage: '/pdf-pages/page-16.jpg',
    thumbImage: '/pdf-pages/thumb-16.jpg',
  },
  {
    id: 'reproductions-ii',
    number: '14',
    title: 'Art Reproductions II',
    subtitle: 'Klimt — The Kiss',
    category: 'Design by Jane',
    medium: '"Winsor & Newton" Designers Gouache, A2 format paper',
    dimensions: '30 × 32 cm',
    description:
      'Reproduction of Klimt\'s "The Kiss" produced in four variants: original, printed copy (upper right), monochromatic (bottom left), and complementary (bottom right) — a study of value, color reduction, and chromatic translation.',
    spreadImage: '/pdf-pages/page-17.jpg',
    thumbImage: '/pdf-pages/thumb-17.jpg',
  },
  {
    id: 'sketches',
    number: '15',
    title: 'Sketches',
    category: 'Design by Jane',
    medium: 'Pencil H, HB · Sketchbook',
    dimensions: '29.7 × 42 cm',
    year: '2023',
    description:
      'Studies of the human body and movement — a sequence of feet and hand drawings made in order to understand human form, weight, and gesture.',
    spreadImage: '/pdf-pages/page-18.jpg',
    thumbImage: '/pdf-pages/thumb-18.jpg',
  },
  {
    id: 'art-installations',
    number: '16',
    title: 'Art Installations',
    subtitle: '"dancing in a hanbok"',
    category: 'Design by Jane',
    year: '2023',
    medium: 'Colored paper, tape, hot glue, scissors',
    dimensions: 'approx. 150 × 200 cm',
    description:
      'A spatial collage that captures looking from one perspective and emerges as a folded, layered construction. Three documented stages — sketch geometry over a folded-paper backdrop, drawings of three-dimensional objects, and an installed piece responding to a stairwell context.',
    spreadImage: '/pdf-pages/page-19.jpg',
    thumbImage: '/pdf-pages/thumb-19.jpg',
  },
];

export const projectsByCategory = {
  'Site Planning': projects.filter((p) => p.category === 'Site Planning'),
  'Interior Design': projects.filter((p) => p.category === 'Interior Design'),
  'Design by Jane': projects.filter((p) => p.category === 'Design by Jane'),
};
