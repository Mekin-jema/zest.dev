import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconCloud } from "../magicui/icon-cloud";
import { Badge } from "../ui/badge";

const slugs = [
  "typescript",
  "javascript",
  "redux Toolkit",
  "nextdotjs",
  "postman",
  "mongodb",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "prisma",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "tailwindcss",
  "shadcn",
  "magic ui",
  "maplibre",
];

const SkillsSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const images = slugs.map((slug) =>
    `https://cdn.simpleicons.org/${slug.toLowerCase().replace(/\s+/g, "")}`
  );

  return (
    <motion.div
      ref={ref}
      className="max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-background rounded-xl shadow-lg mt-10 mb-6"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h2
        className="text-3xl sm:text-4xl text-gray-800 dark:text-white font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        variants={itemVariants}
      >
        Skills
      </motion.h2>

      <div className="flex flex-col items-center justify-center space-y-6">
        <motion.div
          className="relative flex w-full max-w-full sm:max-w-[32rem] items-center justify-center overflow-hidden rounded-lg px-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <IconCloud images={images} />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center sm:justify-start gap-2"
          variants={itemVariants}
        >
          {slugs.map((slug, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center p-0"
            >
              <Badge
                variant="outline"
                className="capitalize cursor-pointer bg-black text-white dark:bg-[#FAFAFA] dark:text-black text-xs sm:text-sm rounded-lg transition-colors duration-300 hover:bg-gray-800 dark:hover:bg-gray-300"
              >
                {slug}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
