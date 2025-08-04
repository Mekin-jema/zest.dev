import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const About: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-4 sm:p-6  rounded-2xl shadow-2xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Image Section */}
      <motion.div
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-1/3 md:h-auto mb-6 md:mb-0 flex-shrink-0"
        variants={imageVariants}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-full h-full rounded-full overflow-hidden shadow-lg mx-auto"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src="./mekin.png"
            alt="Rijo Sebastian"
            className="w-full h-full object-cover object-left-top"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      {/* Text & Download Section */}
      <div className="w-full md:w-2/3 md:pl-8 text-center md:text-left">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 flex justify-start text-wrap items-center leading-relaxed"
          variants={itemVariants}
        >
          I'm a skilled Full Stack Developer with a strong passion for crafting innovative web
          solutions. I’ve built real-world projects that are both robust and scalable. I enjoy
          turning ideas into functional applications and always strive to improve my skills.
          My mission is to deliver efficient, user-friendly, and impactful digital experiences.
        </motion.p>
        <motion.p
          className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
          variants={itemVariants}
        >
          I’m committed to lifelong learning, always staying updated to deliver modern and
          efficient solutions for every project.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
