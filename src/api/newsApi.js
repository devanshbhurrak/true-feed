const API_BASE_URL = "https://gnews.io/api/v4";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;


export const fetchTopHeadlines = async (category = "general", page = 1, max = 10) => {
  const url = `${API_BASE_URL}/top-headlines?category=${category}&lang=en&country=in&max=${max}&page=${page}&apikey=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch top headlines");
  const data = await res.json();
  return data.articles || [];
};

export const searchNews = async (query, page = 1, max = 10) => {
  const url = `${API_BASE_URL}/search?q=${encodeURIComponent(query)}&lang=en&max=${max}&page=${page}&apikey=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch search results");
  const data = await res.json();
  return data.articles || [];
};

export const fetchCategoryNews = async (category, page = 1, max = 10) => {
  return fetchTopHeadlines(category, page, max);
};
