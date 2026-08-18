import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import certificates from "../data/certificates";

function Certificates() {
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
              flexDirection: "column" 
            }}
          >
            {/* Image - PERMANENT FIX (Fixed Height & Transparent Alt Text) */}
            <div 
              style={{ 
                height: "220px", 
                width: "100%", 
                backgroundColor: "#0f172a", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              {certificate.image ? (
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    color: "transparent" /* Hides broken blue text */
                  }}
                />
              ) : (
                <FaAward className="text-7xl text-blue-500" />
              )}
            </div>

            {/* Content - PERMANENT FIX (Padding & Button constraints) */}
            <div 
              style={{ 
                padding: "28px", 
                boxSizing: "border-box", 
                display: "flex", 
                flexDirection: "column", 
                flexGrow: 1 
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

              {/* View Credential Button - FIXED Text Overflow */}
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

    </div>
  );
}

export default Certificates;