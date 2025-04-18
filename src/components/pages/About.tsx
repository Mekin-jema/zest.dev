import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

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
      <motion.div
        className="md:w-1/3 mb-6 md:mb-0 flex justify-center"
        variants={imageVariants}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-44 h-44 md:w-60 md:h-80  overflow-hidden border-[5px] border-blue-500 shadow-xl bg-gradient-to-br from-blue-100 to-blue-200"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src="/me.png"
            alt="Mekin Jemal"
            className="w-full h-full "
          />
        </motion.div>
      </motion.div>

      {/* Text & Download Section */}
      <div className="md:w-2/3 md:pl-6 text-center md:text-left">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200"
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

        {/* Download CV Button */}
        <motion.a
          href="./Mekin_Jemal_Main_CV.pdf"
          download
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 cursor-pointer text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all z-[99999] duration-300"
        >
          <FiDownload className="text-xl " />
          Download CV
        </motion.a>
      </div>
    </motion.div>
  );
};

export default About;
