# Concrete Curve v4

An independent digital magazine website featuring curated issues with a full-screen gallery experience. Built with Next.js, React, and Tailwind CSS.

**Live repo:** [github.com/vv4y25/concretecurve-v4](https://github.com/vv4y25/concretecurve-v4)

## Overview

Concrete Curve is a minimal, editorial-style magazine site with three published issues exploring design, culture, photography, and visual storytelling. The site includes a responsive landing page, individual issue pages with a 10-page gallery, and a modal image viewer with keyboard and swipe navigation.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, TypeScript
- **Styling:** Tailwind CSS v4 with custom earthy design tokens
- **Fonts:** Fraunces (headings), Source Sans 3 (body)
- **Data:** Static TypeScript content in `src/lib/issues.ts`

## Features

- Responsive landing page with hero, featured issues, about, collection grid, latest issue, and newsletter
- Sticky navigation with issues dropdown and mobile menu
- Issue pages with editorial introduction and magazine gallery
- Full-screen modal viewer (prev/next, zoom, keyboard arrows, mobile swipe)
- SEO metadata and accessible markup (skip link, semantic headings, alt text)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/issues` | All issues index |
| `/issues/issue-01` | Groundwork |
| `/issues/issue-02` | Soft Edges |
| `/issues/issue-03` | Inner Light |
| `/about` | About the magazine |
| `/archive` | Issue archive |
| `/contact` | Contact information |

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── landing/      # Homepage sections
│   ├── issues/       # Issue page components + modal viewer
│   ├── layout/       # StickyNav, Footer
│   └── ui/           # Button, Input, Container, SectionHeading
└── lib/              # Issue data, types, utilities
public/images/issues/ # Placeholder SVG covers and page images
```

## Design

Light theme with warm, earthy accents:

- Background: `#faf8f5`
- Accent: `#a67c52` (copper/bronze)
- Accent muted: `#7d8b6f` (sage green)

## License

See [LICENSE](LICENSE).
