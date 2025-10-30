import { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../api/newsApi";
import { useNews } from "../context/NewsContext";
import NewsGrid from "../components/NewsGrid";
import Loader from "../components/Loader";
import Error from "../components/Error";
import CategoryFilter from "../components/CategoryFilter";
import Hero from "../components/Hero";
import BackToTop from "../components/BackToTop";

const Home = () => {
  const { articles, setArticles, loading, setLoading, error, setError } =
    useNews();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await fetchTopHeadlines("general", page, 9);
        if (page === 1) setArticles(data);
        else setArticles((prev) => [...prev, ...data]);
        if (data.length === 0) setHasMore(false);
      } catch (err) {
        setError("Something went wrong! Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, [page]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Hero />

      <CategoryFilter />

      {error && <Error message={error} />}
      {loading && page === 1 && <Loader />}

      {!loading && articles.length > 0 && <NewsGrid articles={articles} />}

      {!loading && !error && articles.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          No news articles found.
        </p>
      )}

      {hasMore && !loading && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-6 py-2 bg-red text-white rounded-lg font-medium hover:bg-maroon dark:hover:bg-red-700 transition"
          >
            Load More
          </button>
        </div>
      )}

      {loading && page > 1 && (
        <p className="text-center mt-6 text-gray-500 dark:text-gray-400">
          Loading more articles...
        </p>
      )}

      <BackToTop />
    </div>
  );
};

export default Home;
