import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          fixed bottom-6 right-6 z-50
          bg-red text-yellow p-3 rounded-full shadow-lg
          hover:bg-maroon hover:shadow-xl
          dark:bg-yellow dark:text-maroon dark:hover:bg-beige
          transition-colors duration-300
        "
      >
        <IoArrowUp size={22} />
      </button>
    )
  );
};

export default BackToTop;
