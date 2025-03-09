import { motion } from "framer-motion";

const tools = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js",
  "MongoDB", "MySQL", "Tailwind CSS", "Bootstrap", "Git", "GitHub",
  "Docker", "Firebase", "TypeScript", "GraphQL", "Next.js", "Redux"
];

const ToolsAndTechnologies = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Tools & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-lg p-4 text-gray-700 font-medium text-lg flex items-center justify-center transition-all"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsAndTechnologies;
