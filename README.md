# RS School React Study Project

Educational React project built during the Rolling Scopes School course.

## Overview

This app is a character browser based on the Rick and Morty API. It includes search, pagination, details view, URL state syncing, error handling, and tests.

## Features

- Search characters by name
- Change amount of characters per page (`1-100`)
- Pagination navigation
- Character details panel
- URL query params for app state (`page`, `search`, `perPage`, `details`)
- Loading states and fallback UI
- Error boundaries and dedicated error pages
- Unit/component tests with Jest + Testing Library

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- Axios
- Jest + React Testing Library
- ESLint + Prettier + Husky

## API

The project uses:

- `https://rickandmortyapi-sigma.vercel.app/api/character/`

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — type check and create production build
- `npm run preview` — preview built app
- `npm run lint` — run ESLint
- `npm run lint:fix` — fix lint issues
- `npm run format:fix` — format files with Prettier
- `npm run test` — run tests
- `npm run test:coverage` — run tests with coverage report

## Project Structure

```text
src/
├─ API/
├─ components/
├─ contexts/
├─ pages/
├─ shared/
├─ UI/
└─ main.tsx
```

## Notes

- This is a learning project for Rolling Scopes School.
- Some UI/UX decisions are intentionally simple to focus on React fundamentals.
