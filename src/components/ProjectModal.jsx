import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaClock,
  FaImages,
} from "react-icons/fa";
import siteConfig from "../data/siteConfig";

function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const { social } = siteConfig;

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose, selectedImage]);

  if (!project) return null;

  const githubUrl = `${social.github}/${project.githubRepo}`;

  return (
    <>
      {/* ================= PROJECT MODAL ================= */}

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          className="modal-overlay"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.82)",
            backdropFilter: "blur(10px)",
            zIndex: 9999,
            overflowY: "auto",
            boxSizing: "border-box",
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass"
            style={{
              position: "relative",
              maxWidth: "1100px",
              margin: "40px auto",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            {/* Close */}

            <button
              onClick={onClose}
              aria-label="Close project details"
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#ef4444",
                color: "#fff",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                cursor: "pointer",
                zIndex: 1000,
                boxShadow: "0 8px 25px rgba(239,68,68,.35)",
                transition:
                  "transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-standard)",
              }}
            >
              <FaTimes />
            </button>

            {/* Cover */}

            <img
              src={project.coverImage}
              alt={project.title}
              style={{
                width: "100%",
                height: "360px",
                objectFit: "cover",
                color: "transparent",
              }}
            />

            {/* Content */}

            <div
              className="modal-content"
              style={{
                boxSizing: "border-box",
              }}
            >
              {/* Title */}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "18px",
                  alignItems: "center",
                }}
              >
                <div>
                  <span className="chip chip-solid">
                    {project.category}
                  </span>

                  <h2
                    style={{
                      marginTop: "18px",
                      fontSize: "2.5rem",
                      fontWeight: "700",
                    }}
                  >
                    {project.title}
                  </h2>
                </div>

                <div>
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

              {/* Description */}

              <div style={{ marginTop: "35px" }}>
                <h3 className="gradient-text text-2xl font-bold">
                  About Project
                </h3>

                <p
                  className="text-slate-400"
                  style={{
                    marginTop: "18px",
                    lineHeight: "1.9",
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Technologies */}

              <div style={{ marginTop: "40px" }}>
                <h3 className="gradient-text text-2xl font-bold">
                  Technologies
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginTop: "18px",
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}

              <div style={{ marginTop: "40px" }}>
                <h3 className="gradient-text text-2xl font-bold">
                  Key Features
                </h3>

                <ul
                  style={{
                    marginTop: "18px",
                    paddingLeft: "20px",
                    lineHeight: "2",
                    color: "#94a3b8",
                  }}
                >
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}

              <div style={{ marginTop: "40px" }}>
                <h3 className="gradient-text text-2xl font-bold">
                  Challenges
                </h3>

                <p
                  className="text-slate-400"
                  style={{
                    marginTop: "18px",
                    lineHeight: "1.9",
                  }}
                >
                  {project.challenges}
                </p>
              </div>

              {/* Learnings */}

              <div style={{ marginTop: "40px" }}>
                <h3 className="gradient-text text-2xl font-bold">
                  Learnings
                </h3>

                <p
                  className="text-slate-400"
                  style={{
                    marginTop: "18px",
                    lineHeight: "1.9",
                  }}
                >
                  {project.learnings}
                </p>
              </div>

              {/* Future */}

              <div style={{ marginTop: "40px" }}>
                <h3 className="gradient-text text-2xl font-bold">
                  Future Improvements
                </h3>

                <p
                  className="text-slate-400"
                  style={{
                    marginTop: "18px",
                    lineHeight: "1.9",
                  }}
                >
                  {project.future}
                </p>
              </div>

              {/* Gallery */}

              {project.gallery?.length > 0 && (
                <div style={{ marginTop: "50px" }}>
                  <h3 className="gradient-text text-2xl font-bold">
                    <FaImages
                      style={{
                        marginRight: "10px",
                        display: "inline",
                      }}
                    />
                    Project Gallery
                  </h3>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit,minmax(220px,1fr))",
                      gap: "18px",
                      marginTop: "25px",
                    }}
                  >
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          scale: 1.03,
                        }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedImage(image)}
                        style={{
                          overflow: "hidden",
                          borderRadius: "16px",
                          cursor: "zoom-in",
                        }}
                      >
                        <img
                          src={image}
                          alt={`Screenshot ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "180px",
                            objectFit: "cover",
                            borderRadius: "16px",
                            color: "transparent",
                            display: "block",
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Buttons */}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginTop: "50px",
                }}
              >
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <FaGithub />
                  View Source Code
                </a>

                {project.live.enabled && (
                  <a
                    href={project.live.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ================= IMAGE PREVIEW ================= */}

      {createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedImage(null)}
              style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0, 0, 0, 0.90)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                zIndex: 100000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                boxSizing: "border-box",
                cursor: "zoom-out",
              }}
            >
              {/* Close Button */}

              <motion.button
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.2,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                aria-label="Close image preview"
                style={{
                  position: "fixed",
                  top: "20px",
                  right: "20px",
                  width: "46px",
                  height: "46px",
                  borderRadius: "50%",
                  border: "none",
                  background: "#ef4444",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  zIndex: 100001,
                  boxShadow: "0 8px 25px rgba(0,0,0,.35)",
                }}
              >
                <FaTimes />
              </motion.button>

              {/* Preview Image */}

              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.94,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                src={selectedImage}
                alt="Project screenshot preview"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: "block",
                  width: "auto",
                  height: "auto",
                  maxWidth: "92vw",
                  maxHeight: "88vh",
                  objectFit: "contain",
                  borderRadius: "10px",
                  boxShadow: "0 20px 70px rgba(0,0,0,.55)",
                  cursor: "default",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

export default ProjectModal;