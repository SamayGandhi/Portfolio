import { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const filters = [
  "All",
  "AI",
  "Full Stack",
  "Web",
  "Academic",
  "Education",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <>
      <div className="container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="section-subtitle">
            A collection of projects showcasing my experience in
            Full Stack Development, Artificial Intelligence,
            and Software Engineering.
          </p>
        </motion.div>

        {/* Filter Buttons - PERMANENT FIX (Added solid Margin Bottom & Z-Index) */}
        <div 
          className="flex flex-wrap justify-center"
          style={{ 
            gap: "16px", 
            marginBottom: "60px", /* Yahan se card overlap fix hoga */
            position: "relative",
            zIndex: 10
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`btn btn-sm ${
                activeFilter === filter ? "btn-primary" : "btn-secondary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={setSelectedProject}
            />
          ))}
        </motion.div>

      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;