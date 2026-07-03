# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

Single-page React portfolio with a fixed sidebar layout. All content is rendered in one page (`App.jsx`) with anchor-based scroll navigation.

## Folder Structure

```
src/
├── App.jsx              # Mounts sections in order; root component
├── main.jsx             # React entry point
├── index.css             # Tailwind/DaisyUI setup, @theme font block, imports styles/
├── assets/
│   ├── icons/
│   └── images/
│       └── projects/     # Project screenshots referenced from data/projects.js
├── components/
│   ├── layout/            # Layout.jsx, Header.jsx, Main.jsx, Footer.jsx, DesktopSidebar.jsx, MobileNav.jsx
│   ├── sections/           # Hero, About, Experience, Projects, Contact
│   └── ui/                 # Reusable pieces: ProjectCard, ProjectModal, NavLinks, SocialLinks, SectionHeader, ScrollToTop, ChevronIcon
├── data/                  # Static content: projects.js, experiences.js, navigation.js, social.js
├── hooks/                 # Shared custom hooks
├── styles/                # Themed CSS partials: base.css, themes.css, typography.css, components.css, utilities.css
└── utils/                 # Shared utility functions
```

**Layout structure** (`src/components/layout/`):
- `Layout.jsx` — root shell: `flex-col lg:flex-row` with a sticky sidebar + scrollable main column
- `Header.jsx` — renders `MobileNav` on small screens and `DesktopSidebar` on `lg+`
- `Main.jsx` wraps section children; `Footer.jsx` sits at the bottom of the main column

**Sections** (`src/components/sections/`): `Hero`, `About`, `Experience`, `Projects`, `Contact` — mounted in order in `App.jsx`. Each section uses `id` attributes matching the anchor links in `src/data/navigation.js`.

**Data layer** (`src/data/`): All content is static JS exports. To update portfolio content, edit these files — no component changes needed:
- `projects.js` — `projectsData` array; each entry has `id`, `title`, `description`, `longDescription`, `images`, `tags`, `features`, `challenges`, `links`
- `experiences.js` — `experienceData` array with `company`, `title`, `period`, `responsibilities`
- `navigation.js` — `NAV_LINKS` array of `{ name, href }` anchor pairs
- `social.js` — social link entries

**Project modal flow**: `Projects.jsx` holds `selectedProject` state. Clicking a `ProjectCard` calls `onSelect(project)`, which renders `ProjectModal` as an HTML `<dialog>` with `d-modal-open`. Closing calls `onClose` which sets state to `null`.

## Styling

Tailwind v4 via the `@tailwindcss/vite` plugin (configured in `vite.config.js`, not `tailwind.config.js`). DaisyUI v5 is layered on top with a **`d-` prefix** — all DaisyUI component classes must be prefixed (e.g., `d-btn`, `d-modal`, `d-badge`).

CSS is split into themed partials under `src/styles/` and imported via `src/index.css`:
- `themes.css` — DaisyUI theme overrides; dark theme is default (`--default --prefersdark`)
- `typography.css`, `components.css`, `utilities.css`, `base.css` — custom layer styles

Custom fonts defined in `@theme` block in `index.css`: `--font-heading` (Chakra Petch), `--font-sans` (Inter), `--font-secondary` (Science Gothic), `--font-button` (Space Grotesk).

## Adding a New Project

1. Add an image to `src/assets/images/projects/`
2. Import the image and add an entry to the `projectsData` array in `src/data/projects.js` with all required fields (`id`, `title`, `description`, `longDescription`, `images`, `tags`, `features`, `challenges`, `links`)
3. The project card and modal render automatically from the data
