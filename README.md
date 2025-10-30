# 📰 TrueFeed  
[![Live Demo](https://img.shields.io/badge/Live%20Demo-TrueFeed-green?style=flat&logo=vercel)](https://true-feed-henna.vercel.app/)
[![Built with React](https://img.shields.io/badge/Built%20with-React-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

> **TrueFeed** — A fast, minimal, and responsive news aggregator built with **React + Vite**, powered by the **GNews API**.  
> Browse the latest headlines by category, search for topics, toggle dark/light mode, and enjoy smooth infinite scrolling.

---

## 🚀 Live Preview  
🔗 **https://true-feed-henna.vercel.app/**  

---

## 🧠 Overview  
TrueFeed is designed as a lightweight, user-friendly platform that aggregates real-time news articles from the GNews API.  
It offers category-based browsing, a global search system, dynamic pagination, and a clean theme toggle — all wrapped in a modern, responsive interface.

---

## ✨ Features  
✅ Fetch **Top Headlines** and **Category-Specific** news  
✅ **Search** for articles across multiple sources  
✅ **Infinite Scroll** / “Load More” pagination  
✅ **Light / Dark** theme toggle using Tailwind  
✅ **Category Filter** with active highlighting  
✅ **Back-to-Top** button for improved UX  
✅ **Error & Loading** state handling  
✅ Fully **Responsive Grid Layout**

---

## 🖼️ Screenshots  
| Home | Search |
|------|---------|
| ![Home Page](public/preview-home.png) | ![Search Page](public/preview-search.png) |

---

## 🧩 Tech Stack  
| Category | Technologies |
|-----------|--------------|
| **Frontend** | React 18, Vite |
| **Styling** | Tailwind CSS, PostCSS |
| **State Management** | React Context API |
| **API** | GNews API |
| **Deployment** | Vercel |
| **Version Control** | Git + GitHub |

---

## ⚙️ Environment Variables  
Create a `.env` file in the project root and add the following key:
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
