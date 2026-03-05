# Copilot Instructions — Personal Website

## Project Overview

Static personal portfolio/resume site built with **React 19 + TypeScript + Vite 7 + Tailwind CSS v4**. Deployed to GitHub Pages at `https://markusma.github.io/personal-website/` via `gh-pages`.

## Architecture

- **Data-driven rendering**: All content lives in `src/data/resume.ts` as a single typed `resumeData` export (`ResumeData`). Components receive slices of this data via props from `App.tsx`. To update site content, edit only `resume.ts` — never hardcode content in components.
- **Flat component structure**: All UI components are in `src/components/`. There is no routing — it's a single-page app with anchor-link navigation (`#about`, `#experience`, `#skills`, `#education`, `#contact`).
- **`SectionWrapper`**: Every content section (except Hero and Header/Footer) is wrapped in `SectionWrapper`, which provides consistent padding, max-width centering, and a scroll-triggered fade-in animation via the `useInView` hook.
- **Contact form**: Uses React 19 `useActionState` + `useFormStatus` to build a `mailto:` link — there is no backend.

## Styling

- **Tailwind CSS v4** with the Vite plugin (`@tailwindcss/vite`). Styles import via `@import "tailwindcss"` in `src/index.css` — there is no `tailwind.config` file.
- **Custom color palette**: Uses `accent-*` tokens (blue scale) defined in `src/index.css` under `@theme`. Reference these with classes like `text-accent-600`, `bg-accent-700`, `hover:border-accent-300`.
- **Font**: Inter, loaded from Google Fonts in `index.html`.
- All styling is utility-first inline Tailwind classes — no CSS modules, no styled-components.

## Key Conventions

- Named exports for all components (`export function ComponentName`). Default export only for `App`.
- TypeScript interfaces for data types are co-located in `src/data/resume.ts` and imported with `import type`.
- Icons come from `react-icons/fi` (Feather icon set). Use the `ICON_MAP` pattern in `Footer.tsx` to map data-driven icon keys to components.
- `vite.config.ts` sets `base: '/personal-website/'` — all asset/link paths must account for this base path (e.g., `resumeUrl` uses `/personal-website/resume.pdf`).

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` (runs `tsc -b` then `vite build`) |
| Lint | `npm run lint` |
| Preview prod build | `npm run preview` |
| Deploy to GH Pages | `npm run deploy` (auto-runs `predeploy` → build) |

## Adding a New Section

1. Define the data interface and add an array to `ResumeData` in `src/data/resume.ts`.
2. Create a component in `src/components/` that accepts the data as props.
3. Wrap content in `<SectionWrapper id="section-id">` for consistent layout and animation.
4. Add the component to `App.tsx`, passing the relevant data slice.
5. Add a nav link in `Header.tsx` by updating the `NAV_LINKS` array.
