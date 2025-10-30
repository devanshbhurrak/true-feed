# TrueFeed

Lightweight React + Vite news aggregator that fetches headlines from GNews and displays them with category filters, search, infinite loading and theme toggling.

---

## 🖼️ Screenshots
![Home Page](public/preview-home.png)
![Search Page](public/preview-search.png)

---

## Table of contents
- [Quick Start](#quick-start)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Environment](#environment)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Key Files & Responsibilities](#key-files--responsibilities)
- [API & Data Flow](#api--data-flow)
- [Styling & Theming](#styling--theming)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Quick Start

1. Install dependencies
```bash
npm install
```

2. Add API key to `.env` (see `.env.example` if present)
```
VITE_NEWS_API_KEY=YOUR_GNEWS_API_KEY
```

3. Run development server
```bash
npm run dev
```

4. Build and preview
```bash
npm run build
npm run preview
```

---

## Features
- Fetch top headlines and category-specific news
- Search by query
- Category filter component
- Infinite/load-more paging
- Light / Dark theme toggle
- Back-to-top button
- Error and loading states
- Responsive grid & cards

---

## Tech Stack
- Framework: React + Vite
- Styling: Tailwind CSS (via PostCSS, configured in src/index.css)
- State: React Context (NewsContext)
- API: GNews (via src/api/newsApi.js)
- Deployment: Vercel (vercel.json included)

---

## Environment
- Vite exposes env vars prefixed with `VITE_`. Required:
  - `VITE_NEWS_API_KEY` — GNews API key

Add the key to the repo root `.env` (do not commit secrets).

---

## Available Scripts (package.json)
- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build
- `npm run lint` — run ESLint (if configured)

(Refer to package.json for exact scripts.)

---

## Project Structure (important files)
- index.html
- package.json
- vite.config.js
- vercel.json
- .env
- src/
  - main.jsx — app entry
  - App.jsx — routes, theme & provider
  - index.css, App.css — global styles
  - api/newsApi.js — network layer (GNews)
  - context/NewsContext.jsx — global news state
  - pages/
    - Home.jsx
    - Category.jsx
    - SearchPage.jsx
  - components/
    - Navbar.jsx
    - Hero.jsx
    - CategoryFilter.jsx
    - NewsGrid.jsx
    - NewsCard.jsx
    - NewsFeed.jsx
    - BackToTop.jsx
    - Loader.jsx
    - Error.jsx
    - ArticleCard.jsx

---

## Key Files & Responsibilities
- src/api/newsApi.js — handles API requests (top headlines, search, category)
- src/context/NewsContext.jsx — provides articles, loading, error and fetching functions
- src/components/CategoryFilter.jsx — category selection UI and events
- src/components/NewsGrid.jsx / NewsCard.jsx — presentation of articles
- src/pages/Home.jsx — homepage logic (initial load, infinite load)
- src/pages/SearchPage.jsx — search results page

---

## API & Data Flow
1. UI triggers a fetch (initial load, category change, or search).
2. Context calls functions in src/api/newsApi.js.
3. newsApi.js calls the GNews endpoint using `import.meta.env.VITE_NEWS_API_KEY`.
4. Context updates articles/loading/error and components re-render.

Note: Check API query params in src/api/newsApi.js for page size, country, and language settings.

---

## Styling & Theming
- Tailwind CSS is used via src/index.css. Ensure Tailwind is enabled in Vite config.
- Theme toggle handled in App.jsx (adds/removes dark class on root).
- Additional styles exist in src/App.css.

---

## Deployment
- Optimized for Vercel. vercel.json provided.
- Build command: `npm run build`
- Output served from Vite production build.

---

## Troubleshooting
- Empty results / 401: verify `VITE_NEWS_API_KEY` and GNews quota/region.
- Styles not applied: ensure Tailwind compiled and Dev server restarted.
- ESLint issues: run `npm run lint` and follow fixes.

---

## Contributing
1. Fork repository
2. Create feature branch
3. Open pull request with clear description and test steps



---

## 👨‍💻 Author
**Devansh Bhurrak**  
B.Tech CSE (AI & ML) @ BGIEM, Jabalpur  
[Portfolio](https://devansh-portfolio-omega.vercel.app) • [LinkedIn](https://www.linkedin.com/in/devansh-bhurrak) • [GitHub](https://github.com/devanshbhurrak)
