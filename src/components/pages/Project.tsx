import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Globe, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: JSX.Element }[];
  image: string;
}
const projects: Project[] = [
  {
    title: "Ambalay Maps",
    description:
      "Designed and developed a user-friendly dashboard for map-based services, integrating tools for route planning, geocoding, and real-time traffic updates. Built production-ready APIs for geospatial data using Node.js, Express.js, and Python. Created map rendering features leveraging OpenMapTiles, MapLibre, and Valhalla, and implemented localization features, including Amharic language support.",
    technologies: [
      "Node.js",
      "Express.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "React.js",
      "MapLibre",
      "OpenMapTiles",
      "Valhalla",
    ],
    links: [
      {
        type: "Website",
        href: "https://ambalaymaps.com",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/YourUsername/AmbalayMaps",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "./ambalay-maps3.png" // Random image URL from Lorem Picsum
  },
  {
    title: "IoT-Based Smart Sewage Monitoring System",
    description:
      "Integrated pH, gas, and ultrasonic sensors to monitor sewer conditions, sending real-time alerts for overflows and gas concentrations. Designed a web-based admin dashboard and mobile app for data visualization, feedback, and worker assignments. Utilized ESP8266 for wireless communication and MongoDB for cloud storage to ensure efficient monitoring and reporting.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "IoT",
      "ESP8266",
      "Arduino",
    ],
    links: [
      {
        type: "Website",
        href: "https://iot-sewage-monitoring.com",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/YourUsername/IOT-Sewage-Monitoring",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "https://picsum.photos/200/300", // Random image URL from Lorem Picsum
  },
  {
    title: "LMS - Learning Management System",
    description:
      "Built a scalable industrial-level LMS platform using MongoDB, Express, React, Node.js, and TypeScript. Implemented advanced course management, user authentication, JWT-based session handling, and real-time notifications. Designed a modern Admin Dashboard with user/course management and integrated social login options and secure order tracking.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "Socket.io",
      "Redis",
      "Tailwind CSS",
      "RTK Query",
      "Node-cron",
    ],
    links: [
      {
        type: "Website",
        href: "https://lms-platform.com",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/YourUsername/LMS-Platform",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "./learning-management.png", // Random image URL from Lorem Picsum
  },
  {
    title: "MERN Stack Real-Estate Application",
    description:
      "Developed a real estate platform with advanced authentication using JWT, bcrypt.js, and Google Login. Integrated Firebase for image uploads, implemented Redux Toolkit for state management, and designed a fully responsive interface with advanced search and optimized routing.",
    technologies: [
      "React.js",
      "Express.js",
      "JWT",
      "Firebase",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://real-estate-app.com",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/YourUsername/Real-Estate-App",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "https://picsum.photos/200/300", // Random image URL from Lorem Picsum
  },
  {
    title: "MERN Blog Application",
    description:
      "Built a blogging platform with secure user authentication via JWT and bcrypt.js. Created an admin dashboard for managing posts and interactions, with MongoDB as the backend.",
    technologies: [
      "React.js",
      "Express.js",
      "JWT",
      "bcrypt.js",
      "MongoDB",
    ],
    links: [
      {
        type: "Website",
        href: "https://blog-app.com",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/YourUsername/MERN-Blog-Application",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "./my-blog.png", // Random image URL from Lorem Picsum
  },
];


const ProjectsSection: React.FC = () => {
  return (
    <section className=" w-full max-w-6xl  ">
      <div className="container mx-auto px-4 ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
        >
          My Projects
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
