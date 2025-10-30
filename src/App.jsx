import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { NewsProvider } from "./context/NewsContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import SearchPage from "./pages/SearchPage";

function App() {
  // 🌗 Dark / Light theme toggle
  const [theme, setTheme] = useState(
    localStorage.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="min-h-screen bg-yellow dark:bg-gray-900 text-maroon dark:text-gray-100 transition-colors duration-300">
      <NewsProvider>
        <Router>
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main className="px-4 md:px-8 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </main>
        </Router>
      </NewsProvider>
    </div>
  );
}

export default App;
