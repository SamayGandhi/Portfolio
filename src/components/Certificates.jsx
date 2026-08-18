import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import certificates from "../data/certificates";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          My <span className="gradient-text">Certificates</span>
        </h2>

        <p className="section-subtitle">
          Professional certifications that demonstrate my continuous learning
          journey and commitment to improving my technical skills.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
        {certificates.map((certificate) => (

          <motion.div
            key={certificate.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="glass"
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >

            {/* Certificate Image */}
            <div
              style={{
                height: "220px",
                width: "100%",
                backgroundColor: "#0f172a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {certificate.image ? (
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  onClick={() => setSelectedImage(certificate.image)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    color: "transparent",
                    cursor: "zoom-in",
                  }}
                />
              ) : (
                <FaAward className="text-7xl text-blue-500" />
              )}
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
              <h3 className="text-xl font-bold mb-3 text-white">
                {certificate.title}
              </h3>

              <p className="text-slate-400">
                {certificate.issuer}
              </p>

              <p className="text-blue-400 mt-2 flex-grow">
                {certificate.year}
              </p>

              {/* View Credential Button */}
              <a
                href={certificate.credential}
                target="_blank"
                rel="noreferrer"
                aria-label={`View credential for ${certificate.title}`}
                className="btn btn-primary btn-sm"
                style={{
                  marginTop: "24px",
                  width: "max-content",
                }}
              >
                View Credential
                <FaExternalLinkAlt size={14} />
              </a>
            </div>

          </motion.div>

        ))}
      </div>

      {/* Certificate Image Preview */}
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
              background: "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              boxSizing: "border-box",
              cursor: "zoom-out",
            }}
          >

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close certificate preview"
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
              alt="Certificate preview"
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
                verticalAlign: "middle",
                cursor: "default",
              }}
            />

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Certificates;