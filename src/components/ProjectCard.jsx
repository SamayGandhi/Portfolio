import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaEye,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import siteConfig from "../data/siteConfig";

function ProjectCard({ project, onViewDetails }) {
  const { social } = siteConfig;

  const githubUrl = `${social.github}/${project.githubRepo}`;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="glass group"
      style={{
        borderRadius: "24px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Cover Image */}

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "240px",
          background: "#0f172a",
          overflow: "hidden",
        }}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            color: "transparent",
            transition: ".5s",
          }}
          className="group-hover:scale-110"
        />

        {/* Category */}

        <div
          style={{
            position: "absolute",
            left: "18px",
            top: "18px",
          }}
        >
          <span className="chip chip-solid">
            {project.category}
          </span>
        </div>

        {/* Status */}

        <div
          style={{
            position: "absolute",
            right: "18px",
            top: "18px",
          }}
        >
          <span
            className="chip"
            style={{
              background:
                project.status === "Completed"
                  ? "var(--color-success)"
                  : "var(--color-warning)",
              color: "#fff",
              border: "none",
            }}
          >
            {project.status === "Completed" ? (
              <FaCheckCircle />
            ) : (
              <FaClock />
            )}

            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}

      <div
        style={{
          padding: "28px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <h3
          style={{
            fontSize: "1.7rem",
            fontWeight: "700",
          }}
        >
          {project.title}
        </h3>

        <p
          className="text-slate-400"
          style={{
            marginTop: "18px",
            lineHeight: "1.8",
            flexGrow: 1,
          }}
        >
          {project.description}
        </p>

        {/* Technologies */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "22px",
          }}
        >
          {project.technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "28px",
          }}
        >
          {/* Details */}

          <button
            onClick={() => onViewDetails(project)}
            className="btn btn-ghost btn-sm"
            style={{ flex: "1", minWidth: "110px" }}
            aria-label={`View details for ${project.title}`}
          >
            <FaEye />
            Details
          </button>

          {/* GitHub */}

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ flex: "1", minWidth: "110px" }}
            aria-label={`View ${project.title} source on GitHub`}
          >
            <FaGithub />
            GitHub
          </a>

          {/* Live */}

          {project.live.enabled && (
            <a
              href={project.live.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
              style={{ flex: "1", minWidth: "110px" }}
              aria-label={`Open live demo of ${project.title}`}
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;