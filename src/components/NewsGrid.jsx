import NewsCard from "./NewsCard";

const NewsGrid = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return (
      <p className="text-center text-maroon/70 dark:text-yellow/70 mt-12 text-lg">
        No articles found. Try searching something else.
      </p>
    );
  }

  return (
    <section
      id="news"
      className="
        grid gap-6 sm:gap-8 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        px-2 sm:px-0
      "
    >
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </section>
  );
};

export default NewsGrid;
