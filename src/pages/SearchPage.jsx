import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchNews } from "../api/newsApi";
import NewsCard from "../components/NewsCard";

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const data = await searchNews(query);
        setArticles(data);
      } catch (err) {
        setError("Failed to load search results.");
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchResults();
  }, [query]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for: <span className="text-blue-500">{query}</span>
      </h1>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && articles.length === 0 && (
        <p className="text-gray-500">No articles found for your search.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
