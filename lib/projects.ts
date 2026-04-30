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
  /** Ordered list of image paths under /public. */
  images: string[];
};

const img = (slug: string, n: number) => `/projects/${slug}/${String(n).padStart(2, '0')}.jpg`;
const range = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => img(slug, i + 1));

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
    images: range('01-montgomery', 2),
  },
  {
    id: '02-9-ave-inglewood',
    number: '02',
    title: '9 Ave Inglewood Site Planning',
    location: 'Calgary',
    category: 'Site Planning',
    software: ['Photoshop', 'Illustrator', 'InDesign'],
    images: range('02-9-ave-inglewood', 5),
  },
  {
    id: '03-porta-verde',
    number: '03',
    title: 'Porta Verde Site Planning',
    location: 'Calgary',
    category: 'Site Planning',
    software: ['Illustrator', 'InDesign', 'Enscape', 'SketchUp'],
    images: range('03-porta-verde', 2),
  },
  {
    id: '04-hh-bh',
    number: '04',
    title: 'HH/BH Community Planning',
    subtitle: 'Hounsfield Heights / Briar Hill',
    location: 'Calgary',
    category: 'Site Planning',
    software: ['ArchiCAD', 'Photoshop', 'Illustrator', 'InDesign', 'Procreate', 'Rhino', 'Grasshopper'],
    contributions: 'Master plan, perspective drawings, group branding.',
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
    images: range('07-gis-lrt', 1),
  },
  {
    id: '08-gis-housing',
    number: '08',
    title: 'Suburban Housing × Transit Use',
    subtitle: 'Single-family density and car/transit correlation',
    location: 'Calgary',
    category: 'GIS Studies',
    year: 'February 2026',
    software: ['ArcGIS Pro'],
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
    images: range('12-samruk', 11),
  },

  // ───────────── Design by Jane ─────────────
  {
    id: '13-shopgo',
    number: '13',
    title: 'ShopGO',
    subtitle: 'Capstone — pitch deck',
    category: 'Design by Jane',
    year: '2025',
    collaborators: 'with Janhavi · Radhika · Bilal',
    images: range('13-shopgo', 8),
  },
  {
    id: '14-3d-projects',
    number: '14',
    title: '3D Projects · Posters',
    subtitle: 'F1 Filter · Scene in the Style of de Chirico',
    category: 'Design by Jane',
    year: '2023',
    software: ['Blender', 'Meta Spark', 'Adobe Illustrator'],
    images: range('14-3d-projects', 2),
  },
  {
    id: '15-color-theory',
    number: '15',
    title: 'Color Theory · Color Analysis',
    category: 'Design by Jane',
    medium: 'Designers Gouache · Adobe Illustrator',
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
    images: range('16-reproductions-i', 2),
  },
  {
    id: '17-reproductions-ii',
    number: '17',
    title: 'Art Reproductions II',
    subtitle: 'Klimt — The Kiss',
    category: 'Design by Jane',
    medium: 'Designers Gouache, A2 paper',
    dimensions: '30 × 32 cm',
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
    dimensions: 'approx. 150 × 200 cm',
    images: range('19-installations', 2),
  },
];

export const projectsByCategory: Record<Category, Project[]> = {
  'Site Planning': projects.filter((p) => p.category === 'Site Planning'),
  'GIS Studies': projects.filter((p) => p.category === 'GIS Studies'),
  'Interior Design': projects.filter((p) => p.category === 'Interior Design'),
  'Design by Jane': projects.filter((p) => p.category === 'Design by Jane'),
};
