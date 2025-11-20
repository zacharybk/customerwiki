# Customer Experience Handbook (modernized preview)

This repository contains a Next.js + Tailwind CSS preview of the Support Wiki / Customer Experience Handbook, ready to live in the `zacharybk/cxhandbookchatgpt` repo. It migrates the existing Markdown content into structured articles, adds modern navigation, client-side search, and a refreshed UI that mirrors Mintlify/Markdoc-style docs sites.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build && npm run start
   ```

> Note: In this environment npm installs may be blocked; run the commands in your own workspace where registry access is allowed.

## Project structure

- `app/` — Next.js App Router pages (`/`, `/articles`, `/articles/[slug]`).
- `components/` — UI building blocks (hero, navigation, article cards, search, article detail).
- `content/articles.ts` — Migrated article data sourced from the original `index.md` (mission, usage, contributing, creators).
- `app/globals.css`, `tailwind.config.ts` — Styling and design tokens for the refreshed UI.

The legacy `index.md` and `index.html` remain for reference while the new framework handles rendering.
