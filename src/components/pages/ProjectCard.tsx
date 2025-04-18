import { motion } from "framer-motion";
import { BorderBeam } from "../magicui/border-beam";
import { useTheme } from "next-themes";
import { MagicCard } from "../magicui/magic-card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: JSX.Element }[];
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard= ({ project }:ProjectCardProps) => {

  const { theme } = useTheme();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 bg-white dark:bg-gray-800"
    >


      <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 text-center">
          {project.description}
        </p>
        <div className="flex space-x-4">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <img
        src={project.image}
        alt={project.title}
    className="w-full h-full max-h-60 object-contain"
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {project.title}
        </h4>
        <div className="flex flex-wrap gap-1 ">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2  border border-gray-300 dark:border-gray-600 rounded-md  text-gray-700 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>



      </MagicCard>
      <BorderBeam duration={8} size={200} />
    </motion.div>
  );
};

export default ProjectCard;
