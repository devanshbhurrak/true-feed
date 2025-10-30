import React, { useState, useEffect } from "react";
import { fetchTopHeadlines, searchNews } from "../api/newsApi";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  
  useEffect(() => {
    const getHeadlines = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchTopHeadlines();
        setArticles(data);
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getHeadlines();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError("");
    try {
      const data = await searchNews(query);
      setArticles(data);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-6 flex">
        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border rounded overflow-hidden shadow hover:shadow-lg transition"
          >
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{article.title}</h2>
              <p className="text-gray-700 text-sm">
                {article.description || "No description available."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 inline-block hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
