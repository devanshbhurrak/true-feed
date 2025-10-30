const isLocalhost = window.location.hostname === "localhost";
const API_BASE_URL = isLocalhost
  ? "https://gnews.io/api/v4"
  : "/api/news"; // proxy route for Vercel

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchTopHeadlines = async (category = "general", page = 1, max = 10) => {
  const url = isLocalhost
    ? `${API_BASE_URL}/top-headlines?category=${category}&lang=en&country=in&max=${max}&page=${page}&apikey=${API_KEY}`
    : `${API_BASE_URL}?category=${category}&page=${page}&max=${max}`;
  
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch top headlines");
  const data = await res.json();
  return data.articles || [];
};

export const searchNews = async (query, page = 1, max = 10) => {
  const url = isLocalhost
    ? `${API_BASE_URL}/search?q=${encodeURIComponent(query)}&lang=en&country=in&max=${max}&page=${page}&apikey=${API_KEY}`
    : `${API_BASE_URL}?q=${encodeURIComponent(query)}&page=${page}&max=${max}`;
  
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch search results");
  const data = await res.json();
  return data.articles || [];
};

export const fetchCategoryNews = async (category, page = 1, max = 10) => {
  return fetchTopHeadlines(category, page, max);
};
