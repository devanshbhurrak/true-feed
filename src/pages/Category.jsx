import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCategoryNews } from "../api/newsApi";
import { useNews } from "../context/NewsContext";
import NewsGrid from "../components/NewsGrid";
import Loader from "../components/Loader";
import Error from "../components/Error";
import CategoryFilter from "../components/CategoryFilter";

const Category = () => {
  const { category } = useParams();
  const { articles, setArticles, loading, setLoading, error, setError } = useNews();

  useEffect(() => {
    const getCategoryNews = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchCategoryNews(category);
        setArticles(data);
      } catch (err) {
        setError("Failed to load articles for this category.");
      } finally {
        setLoading(false);
      }
    };

    getCategoryNews();
  }, [category]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <CategoryFilter />
      {loading && <Loader />}
      {error && <Error message={error} />}
      <NewsGrid articles={articles} />
    </div>
  );
};

export default Category;
