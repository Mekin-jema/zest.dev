import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border rounded-xl max-w-6xl w-full py-4 mb-14"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-center sm:text-left"
        >
          <a
            href="tel:+251920064543"
            className="p-2 hover:text-purple-600 transition-colors"
            aria-label="Call Rijo Sebastian"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="mailto:mekinjemal999@gmail.com"
            className="p-2 hover:text-purple-600 transition-colors"
            aria-label="Email Mekin Jemal"
          >
            <Mail className="h-5 w-5" />
          </a>
          <span className="flex flex-wrap justify-center items-center text-gray-700 dark:text-gray-300">
            Made with{" "}
            <Heart className="h-4 w-4 mx-1 text-red-400 flex-shrink-0" /> by
            <a
              href="https://www.instagram.com/mekin.jemal/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-semibold hover:underline"
            >
              Mekin Jemal
            </a>
          </span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
