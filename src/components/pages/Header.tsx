import React from "react";
import { motion } from "framer-motion";
import BoxReveal from "@/components/magicui/box-reveal";

interface GradientTextProps {
  text: React.ReactNode;
  className?: string;
}

const WordAnimation: React.FC = () => (
  <div className="flex justify-center">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {Array.from("Hi, I'm Mekin Jemal").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  </div>
);

const GradientText: React.FC<GradientTextProps> = ({ text, className }) => (
  <motion.h1
    className={`bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className} max-w-full sm:max-w-xl mx-auto`}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {text}
  </motion.h1>
);

const SubTitle: React.FC = () => (
  <motion.div
    className="w-full text-center mt-4 flex justify-center px-2 sm:px-0"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <BoxReveal boxColor="#3b82f6" duration={0.5}>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300 text-center max-w-full sm:max-w-lg">
        Full Stack Developer
      </p>
    </BoxReveal>
  </motion.div>
);

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 gap-8 sm:gap-10 py-10 sm:py-12 max-w-screen-md mx-auto">
      <div className="text-center w-full">
        <GradientText
          className="font-display font-bold tracking-[-0.05em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-2"
          text={<WordAnimation />}
        />
        <div className="mt-2 text-center">
          <SubTitle />
        </div>
      </div>
    </div>
  );
};

export default Header;
