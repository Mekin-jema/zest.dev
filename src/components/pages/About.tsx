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
      className="flex flex-col md:flex-row items-center justify-between w-full  max-w-6xl p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Image Section */}
      <motion.div className="md:w-1/3 mb-4 md:mb-0" variants={imageVariants}>
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg"
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
          />
        </motion.div>
      </motion.div>

      {/* Text & Download Section */}
      <div className="md:w-2/3 md:pl-6 text-center md:text-left">
        <motion.h2
                  className="text-4xl  text-gray-800 dark:text-white font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"


          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4"
          variants={itemVariants}
        >
          I'm a skilled Full Stack Developer with a strong passion for crafting
          innovative web solutions. I’ve built real-world projects that are both
          robust and scalable. I enjoy turning ideas into functional applications
          and always strive to improve my skills. My mission is to deliver efficient,
          user-friendly, and impactful digital experiences.
        </motion.p>
        <motion.p
          className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6"
          variants={itemVariants}
        >
          I’m committed to lifelong learning, always staying updated to deliver
          modern and efficient solutions for every project.
        </motion.p>

 
      </div>
    </motion.div>
  );
};

export default About;
