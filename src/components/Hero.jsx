import { IoNewspaperOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section
      aria-label="TrueFeed - Latest News and Updates"
      className="
        relative overflow-hidden 
        bg-gradient-to-br from-yellow via-beige to-yellow/70 
        dark:from-maroon dark:via-[#581b1b] dark:to-[#3b0d0d]
        text-maroon dark:text-yellow 
        rounded-3xl px-6 py-12 mb-10 
        shadow-lg border border-red/10
        transition-colors duration-500
      "
    >
      {/* Background decorative shapes */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-red/10 dark:bg-yellow/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-maroon/10 dark:bg-red/10 rounded-full blur-2xl -z-10"></div>

      {/* Content */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <IoNewspaperOutline className="text-red dark:text-yellow" size={52} />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Stay Informed with{" "}
          <span className="text-red dark:text-beige">TrueFeed</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-maroon/80 dark:text-yellow/80 mb-8">
          Discover real-time headlines and global stories from trusted sources —
          all in one place.
        </p>
      </div>
    </section>
  );
};

export default Hero;
