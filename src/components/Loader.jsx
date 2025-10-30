const Loader = () => {
  return (
    <div
      className="
        flex justify-center items-center py-16
        bg-transparent
      "
    >
      <div
        className="
          w-10 h-10 sm:w-12 sm:h-12 
          border-4 border-yellow dark:border-maroon 
          border-t-red dark:border-t-yellow 
          rounded-full animate-spin
        "
      ></div>
    </div>
  );
};

export default Loader;
