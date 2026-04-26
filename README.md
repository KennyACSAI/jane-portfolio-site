# Jane Kanat — Personal Portfolio · 2026

Editorial monochrome portfolio site built from `JaneKanat_Portfolio.pdf`.

**Stack** — Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Inter (Google Fonts).

**Palette** — strict black / grey / white. Site chrome is monochrome; portfolio plates are reproduced as-shipped from the PDF.

**Type** — Inter, mirroring the Canva Sans / Helvetica Neue pairing in the source PDF (regular + bold contrast, true italic accents).

## Run

```
npm install
npm run dev   # http://localhost:3030
npm run build
npm run start
```

## Source

- All 16 project plates rendered from `JaneKanat_Portfolio.pdf` at 2× DPI (`/public/pdf-pages/page-XX.jpg`).
- Project metadata (title, location, software, contributions, medium, dimensions) extracted from the PDF and stored in `lib/projects.ts`.

## Sections

1. Hero — cover with display heading, contact strip, page-counter
2. Marquee — typographic ticker of disciplines and cities
3. Index — full table of contents, grouped by section
4. Statement — scroll-driven word reveal
5. Section A — Site Planning · 06 projects
6. Section B — Interior Design · 03 projects
7. Section C — Design by Jane · 07 projects
8. Footer — Thank you · contacts
