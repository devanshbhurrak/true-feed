const NewsCard = ({ article }) => (
  <article
    className="
      bg-yellow dark:bg-maroon 
      text-maroon dark:text-yellow 
      border border-red/20 dark:border-yellow/20 
      rounded-xl overflow-hidden shadow-sm hover:shadow-md 
      transition-colors duration-200
    "
  >
    {article.image && (
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
    )}

    <div className="p-4 flex flex-col h-full">
      <h2
        className="
          font-semibold text-lg mb-2 
          text-red dark:text-yellow line-clamp-2
        "
      >
        {article.title}
      </h2>

      <p
        className="
          text-sm text-maroon/80 dark:text-yellow/70 
          line-clamp-3 mb-3
        "
      >
        {article.description || "No description available."}
      </p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red mt-2 inline-block dark:text-yellow font-medium 
          hover:underline "
      >
        Read more →
      </a>
    </div>
  </article>
);

export default NewsCard;
