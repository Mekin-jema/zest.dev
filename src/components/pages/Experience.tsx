import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, CodeIcon } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "React Module Instructor & Group Mentor",
      company: "Google Developer Group (GDG AAU)",
      location: "Both (remote and in person)",
      duration: "March 2025 – Present",
      description:
        "Mentoring students in the GDG AAU MERN Stack Bootcamp by leading structured exercises, reviewing submissions, and providing personalized guidance. Collaborating with fellow mentors to deliver React.js training sessions, promote engagement, and foster a collaborative learning environment both online and on campus.",
      icon: <CodeIcon className="w-6 h-6" />,
      skills: [
        "React",
        "JavaScript",
        "Mentorship",
        "Teaching",
        "Curriculum Design",
        "State Management",
        "API Integration"
      ],
    },
    
    {
      title: "Frontend Engineer",
      company: "Ambalay Maps",
      location: "Remote",
      duration: "January 2025 – Present",
      description:
        "Working as a core contributor to Ambalay Maps for over 5 months, specializing in geospatial web applications. Designed and developed an advanced map dashboard with real-time route planning, geocoding, and traffic analysis. Implemented features like customizable markers,POI, distance/time matrix tools, and VRP-based route optimization. Collaborated with backend teams to build production-ready geospatial APIs and contributed to localization efforts, including  Voice integration. Played a key role in shipping scalable features using modern frontend frameworks and deploying via containerized environments.",
      icon: <CodeIcon className="w-6 h-6" />,
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Shadcn",
        "MapLibre",
        "OpenMapTiles",
        "Maputnik",
        "Valhalla",
        "Docker",
        "Vercel",
        "Localization",
        "Geospatial APIs",
        "Route Optimization",
        "UI/UX Design"
      ],
    },
    
    {
      title: "Web Developer Intern",
      company: "Ministry of Industry – Ethiopia",
      location: "Ethiopia",
      duration: "October 2024 – January 2025",
      description:
        "Contributed to the Ministry’s mission of driving industrial growth and promoting trade by developing a responsive website that showcases its services and strategic goals. Built tools for managing HS codes and product specifications, streamlining data workflows to support transparent and efficient import regulation. The site helps communicate the Ministry’s role in policy-making, SME support, investment promotion, and sustainable industrial development.",
      icon: <BriefcaseIcon className="w-6 h-6" />,
      skills: [
        "Web Development",
        "JavaScript",
        "Responsive Design",
        "Database Integration",
        "UI/UX",
        "Information Architecture"
      ],
    }
,    
    
{
  title: "Frontend Developer Intern",
  company: "Prodigy InfoTech and Oasis Infobyte",
  location: "India (Remote)",
  duration: "May 2024 – June 2024",
  description:
    "My first hands-on internship experience, where I contributed to building responsive web interfaces using JavaScript, HTML, CSS, and React. This opportunity ignited my passion for software engineering and motivated me to explore deeper into full-stack development and impactful tech solutions.",
  icon: <CodeIcon className="w-6 h-6" />,
  skills: ["JavaScript", "HTML", "CSS", "React", "Web Design", "Version Control"],
}

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 rounded-xl shadow-lg mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        variants={titleVariants}
      >
        Work Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 border-none">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full"
                >
                  {exp.icon}
                </motion.div>
                <div className="flex-grow">
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {exp.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.company} | {exp.location}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0">
                  {exp.duration}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="outline"
                        className="bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
