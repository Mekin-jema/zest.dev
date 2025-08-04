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
      "Built an interactive map dashboard with route planning, geocoding, traffic updates, and route optimization using VRP. Integrated customizable layers, markers, and used OpenMapTiles, MapLibre, and Valhalla for rendering and routing.",
    technologies: [
  "MapLibre",
  "OpenMapTiles",
  "Valhalla",
  "TypeScript",
  "Next.js",
  "Zustand",
  "Redux Toolkit",
  "Zod",
  "Rechart",
  "Shadcn",
  "Lucide React"
],

    links: [
      {
        type: "Website",
        href: "https://dashboard.ambalaymaps.com/dashboard",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/YourUsername/AmbalayMaps",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "./amabalay-maps.png",
  },
  {
    title: "AmbaLay Delivery Platform",
    description:
      "Developed a responsive, scalable delivery service platform using Next.js, TypeScript, and Tailwind CSS. Showcases services such as e-commerce delivery, courier services, government logistics, and bulk transport with real-time tracking and modern UI/UX.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React.js",
      "Shadcn",
      "Vercel",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://amba-platform.vercel.app",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/Mekin-jema/ambalay-delivery",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "./ambalay-delivery-app.png",
  },
  {
    title: "IoT-Based Smart Drainage Monitoring System",
    description:
      "Used pH, gas, and ultrasonic sensors to monitor sewer systems. Developed dashboards and apps for alerts, data visualization, and task management using ESP8266 and MongoDB.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "IoT",
      "Next.js",
      "Shadcn",
      "TypeScript",
      "ESP8266",
      "Arduino",
    ],
    links: [
      {
        type: "Website",
        href: "https://final-project-wz7h.onrender.com/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/Mekin-jema/final-project-v1",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "./landing-page.png",
  },
  // ✅ Added Workshop Booking System Project
  {
    title: "Workshop Booking System",
    description:
      "A full-stack system to manage workshop bookings. Admins can create workshops, add time slots, and monitor bookings via a dashboard with stats and charts. Customers can register, view available workshops, and book specific time slots. The system implements secure JWT authentication, form validation, and clean architecture principles.",
    technologies: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI (MUI)",
      "Rechart",
      "Zod",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Docker",
      "Jest",
      "Supertest",
    ],
    links: [
      {
        type: "Website",
        href: "https://workshop-booking-customer.vercel.app/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/YourUsername/Workshop-Booking-System",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "./workshop-booking.png",
  },
  {
    title: "LMS - Learning Management System",
    description:
      "Built a scalable LMS with real-time notifications, user auth, admin dashboard, and course management using MERN stack and TypeScript.",
    technologies: [
      "MongoDB",
      "Next.js",
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
        href: "https://github.com/Mekin-jema/Learning_Managment_System",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "./lms.png",
  },
  {
    title: "Ministry of Industry Website Development",
    description:
      "Designed and developed a responsive, accessible website for the Ministry of Industry with CMS features for easy updates and performance optimizations.",
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vercel",
    ],
    links: [
      {
        type: "Website",
        href: "https://intership-1.onrender.com/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/Mekin-jema/Minstry_Of_Industry/tree/main/frontend",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "/ministry-of-industry.png",
  },
  // {
  //   title: "MERN Stack Real-Estate Application",
  //   description:
  //     "Created a real estate app with JWT/Google auth, Firebase uploads, Redux Toolkit state management, and advanced search features.",
  //   technologies: [
  //     "React.js",
  //     "Express.js",
  //     "JWT",
  //     "Firebase",
  //     "Redux Toolkit",
  //     "Tailwind CSS",
  //     "Google Auth",
  //     "Node.js",
  //     "MongoDB",
  //     "bcrypt.js",
  //   ],
  //   links: [
  //     {
  //       type: "Website",
  //       href: "https://real-estate-app.com",
  //       icon: <Globe className="w-4 h-4" />,
  //     },
  //     {
  //       type: "Source",
  //       href: "https://github.com/Mekin-jema/real-estate-marketplace-app",
  //       icon: <Github className="w-4 h-4" />,
  //     },
  //   ],
  //   image: "/real-estate.png",
  // },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-gray-800 dark:text-white font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
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
    </section>
  );
};

export default ProjectsSection;
