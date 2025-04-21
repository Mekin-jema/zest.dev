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
      "Built a map service dashboard with route planning, geocoding, real-time traffic, and Amharic localization. Developed geospatial APIs and rendering using OpenMapTiles, MapLibre, and Valhalla.",
    technologies: [
      "Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL", 
      "React.js", "MapLibre", "OpenMapTiles", "Valhalla"
    ],
    links: [
      {
        type: "Website",
        href: "https://sample-steel-six.vercel.app/dashboard",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/YourUsername/AmbalayMaps",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "./ambalay-maps4.png"
  },
  {
    title: "Ministry of Industry Website Development",
    description:
      "Designed and developed a responsive, accessible website for the Ministry of Industry with CMS features for easy updates and performance optimizations.",
    technologies: [
      "React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", 
      "MongoDB", "Vercel"
    ],
    links: [
      {
        type: "Website",
        href: "https://minstry-of-industry.vercel.app",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/YourUsername/ministry-website",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "/ministry-of-industry.png",
  },
  {
    title: "IoT-Based Smart Sewage Monitoring System",
    description:
      "Used pH, gas, and ultrasonic sensors to monitor sewer systems. Developed dashboards and apps for alerts, data visualization, and task management using ESP8266 and MongoDB.",
    technologies: [
      "Node.js", "Express.js", "MongoDB", "React.js", "IoT","Next.js","Shadcn", "TypeScript",
      "ESP8266", "Arduino"
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
    image: "/iot-drainage.png",
  },
  {
    title: "LMS - Learning Management System",
    description:
      "Built a scalable LMS with real-time notifications, user auth, admin dashboard, and course management using MERN stack and TypeScript.",
    technologies: [
      "MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", 
      "Socket.io", "Redis", "Tailwind CSS", "RTK Query", "Node-cron"
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
    image: "./lms.png",
  },
  {
    title: "MERN Stack Real-Estate Application",
    description:
      "Created a real estate app with JWT/Google auth, Firebase uploads, Redux Toolkit state management, and advanced search features.",
    technologies: [
      "React.js", "Express.js", "JWT", "Firebase", "Redux Toolkit", 
      "Tailwind CSS", "Google Auth", "Node.js", "MongoDB", "bcrypt.js"
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
    image: "/real-estate.png",
  },
  {
    title: "MERN  Stack Blog Application",
    description:
      "Developed a blog platform with JWT-based auth, secure post management, and a MongoDB backend.",
    technologies: [
 "React.js", "Express.js", "JWT", "Firebase", "Redux Toolkit", 
      "Tailwind CSS", "Google Auth", "Node.js", "MongoDB", "bcrypt.js"
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
    image: "./my-blog.png",
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
        className="text-4xl  text-gray-800 dark:text-white font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          

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
