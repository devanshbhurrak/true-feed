import { useNavigate } from "react-router-dom";

const categories = [
  "general",
  "world",
  "nation",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];

const CategoryFilter = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div
      className="
        flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 
        border-b border-maroon/10 dark:border-yellow/10 pb-4
      "
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategoryClick(cat)}
          className="
            px-5 py-2.5 rounded-full capitalize font-medium text-sm sm:text-base
            bg-yellow text-maroon border border-red/30
            hover:bg-red hover:text-yellow
            focus:outline-none focus:ring-2 focus:ring-red/50
            dark:bg-maroon dark:text-yellow dark:border-yellow/40
            dark:hover:bg-yellow dark:hover:text-maroon
            transition-colors
          "
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
