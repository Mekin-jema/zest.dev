import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Education = (props: Props) => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-10 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Education
      </motion.h1>

      <motion.div
        className="flex items-center justify-between flex-col md:flex-row gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Left - Logo & University Info */}
        <div className="flex items-center gap-6">
          <img
            src="/aau1.png"
            alt="Addis Ababa University"
            className="w-[70px] h-[70px] rounded-full object-cover shadow-md"
          />
          <div className="flex flex-col text-left">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Addis Ababa University
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Bachelor's in Electrical and Computer Engineering
            </p>
          </div>
        </div>

        {/* Right - Date */}
        <div className="text-right">
          <p className="text-sm px-7  rounded-md font-bold text-gray-700 dark:text-white ">
            2022 – Present
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Education
