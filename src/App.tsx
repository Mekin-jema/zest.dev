import Portfolio from "@/components/pages/Portfolio";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen mx-4 sm:mx-6 md:mx-10 lg:mx-24 xl:mx-40">
      {/* Animated gradient border */}
      <div className="absolute inset-0 overflow-hidden rounded-xl z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-gradient-border"></div>
      </div>

      {/* Glass-morphism background */}
      <div className="relative z-10 min-h-screen py-8 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-gray-900/80 rounded-xl border border-white/20 dark:border-gray-700/30 shadow-xl max-w-[1200px] mx-auto">
        <Portfolio />
      </div>
    </div>
  );
};

export default App;
