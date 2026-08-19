# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite HMR)
npm run build        # Production build
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run format:check # Check formatting without writing
npm run test         # Run Vitest unit/component tests
npm run test:watch   # Run Vitest in watch mode
npm run test:e2e     # Run Playwright end-to-end tests
npm run test:e2e:ui  # Run Playwright tests in UI mode
npm run test:lighthouse # Build then run Lighthouse CI (perf/a11y/best-practices/seo, threshold 0.9)
```

Unit/component tests live alongside the components they cover (`*.test.jsx`) and run under Vitest + React Testing Library (`src/test/setup.js`). End-to-end tests live in `e2e/` and run under Playwright against a local dev server — desktop-only specs are named `*.desktop.spec.js` and mobile-only specs `*.mobile.spec.js` (see `playwright.config.js` for how projects map to those patterns).

Lighthouse CI (`@lhci/cli`) audits the production build (`dist/`, served as static files) against `lighthouserc.cjs` — 3 runs with the desktop preset, asserting Performance/Accessibility/Best Practices/SEO all ≥ 0.9. Reports land in `.lighthouseci/` (gitignored, regenerated each run).

CI (`.github/workflows/ci.yml`) runs on push/PR to `dev` and `master`: lint, format:check, test, build in one job; a separate `e2e` job that installs Playwright browsers and runs the e2e suite, uploading the HTML report as an artifact; and a separate `lighthouse` job that builds and runs Lighthouse CI, uploading the JSON reports as an artifact — a failing category score fails the job and blocks merge.

## Git Workflow

Single developer project, using a PR-based flow into `dev`.

- **dev** — integration branch; feature/fix work lands here via PR
- **master** — stable release branch; merge from `dev` directly when features are tested and complete

**Process:**

1. Branch off `dev` (e.g. `feat/...`, `fix/...`)
2. Commit with descriptive, conventional-commit messages
3. Open a PR targeting `dev`; CI must pass (lint, format, test, build, e2e)
4. Squash-merge the PR into `dev`, delete the branch
5. When a set of features is solid, merge `dev` to `master` directly (no PR):
   ```bash
   git checkout master
   git merge dev
   git push origin master
   ```

## Commit Message Conventions

Follow conventional commits format: `type(scope): description`

**Types:**

- `feat` — new feature
- `fix` — bug fix
- `chore` — maintenance, tooling, dependencies
- `docs` — documentation
- `style` — formatting, no code changes
- `refactor` — code restructuring without behavior change
- `perf` — performance improvements

**Examples:**

- `feat(projects): add new project entry to portfolio`
- `fix(ProjectModal): resolve Action Buttons rendering issue`
- `docs(README): update setup instructions`
- `chore(deps): update React to v19`

## Architecture

Single-page React portfolio with a fixed sidebar layout. All content is rendered in one page (`App.jsx`) with anchor-based scroll navigation.

## Folder Structure

```
e2e/                      # Playwright end-to-end specs (*.desktop.spec.js, *.mobile.spec.js)
public/                   # Static assets served as-is: favicon.svg, robots.txt, sitemap.xml, og-image.jpg
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
├── test/                  # Vitest setup (jest-dom matchers, etc.)
└── utils/                 # Shared utility functions
```

Root-level config: `vite.config.js` (also holds Vitest's `test` block), `eslint.config.js` (flat config; includes a Node-globals override for `*.config.js` and `e2e/**`), `playwright.config.js`, `lighthouserc.cjs`.

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

## Accessibility

Landmark elements (`nav`, `aside[role="navigation"]`, etc.) must have unique `aria-label`s when more than one instance renders on the page at once (e.g. `MobileNav` and `DesktopSidebar` both render a nav landmark — labeled "Mobile navigation" / "Desktop navigation", not both "Main navigation").

## Keeping This File Current

Update this file when a change affects **architecture, conventions, workflow, or available commands** — new tooling, a new top-level folder, a changed process, a new script. Routine content edits (adding a project, tweaking copy, fixing a bug) don't need a CLAUDE.md update.

## Adding a New Project

1. Add an image to `src/assets/images/projects/`
2. Import the image and add an entry to the `projectsData` array in `src/data/projects.js` with all required fields (`id`, `title`, `description`, `longDescription`, `images`, `tags`, `features`, `challenges`, `links`)
3. The project card and modal render automatically from the data
