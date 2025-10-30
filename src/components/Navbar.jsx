import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiSearch } from "react-icons/hi";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
    setQuery("");
  };

  return (
    <nav className="bg-yellow dark:bg-gray-900 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-2xl text-maroon dark:text-yellow hover:text-red dark:hover:text-red transition-colors"
        >
          <IoNewspaperOutline className="text-red dark:text-yellow" size={28} />
          TrueFeed
        </Link>

        <div className="flex gap-2">
          
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Search news..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="
              px-4 py-2 rounded-l-lg border border-red dark:border-yellow
              bg-yellow dark:bg-gray-800 text-maroon dark:text-yellow
              placeholder:text-gray-500 dark:placeholder:text-gray-400
              focus:outline-none 
              w-40 sm:w-56 md:w-64 lg:w-72
            "
            />
            <button
              type="submit"
              className="
              bg-red h-full text-yellow dark:bg-yellow dark:text-gray-900 
              px-3 rounded-r-lg text-2xl hover:bg-maroon dark:hover:bg-white
              transition-colors focus:outline-none
            "
            >
              <HiSearch />
            </button>
          </form>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="
            ml-4 p-3 rounded-full 
            bg-red text-yellow dark:bg-yellow dark:text-gray-900 
            hover:bg-maroon dark:hover:bg-white transition
          "
            aria-label="Toggle theme"
          >
            {theme === "light" ? <BsMoon size={18} /> : <BsSun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
