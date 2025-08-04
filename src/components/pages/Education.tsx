import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10  rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Education
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row items-center md:justify-between gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Left - Logo & University Info */}
        <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
          <img
            src="/aau1.png"
            alt="Addis Ababa University"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md flex-shrink-0"
          />
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Addis Ababa University
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
              Bachelor's in Electrical and Computer Engineering
            </p>
          </div>
        </div>

        {/* Right - Date */}
        <div className="w-full md:w-auto text-center md:text-right">
          <p className="text-sm font-bold text-gray-700 dark:text-white rounded-md px-3 py-1 bg-gray-100 dark:bg-gray-700 inline-block">
            2022 – Present
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
