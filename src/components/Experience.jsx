import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import experience from "../data/experience";

function Experience() {
  return (
    <div className="container">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Experience &{" "}
          <span className="gradient-text">Journey</span>
        </h2>

        <p className="section-subtitle">
          My learning journey through software development,
          Full-Stack Development, and real-world projects.
        </p>
      </motion.div>

      <div className="relative mt-16">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full -translate-x-1/2"></div>

        <div className="space-y-12">
          {experience.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } flex-col gap-8 items-center`}
            >
              <div className="hidden md:block w-1/2"></div>

              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white z-10 shrink-0"
                style={{
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                  boxShadow: "0 0 0 6px rgba(3,7,18,1), var(--shadow-glow-primary)",
                }}
              >
                <FaBriefcase />
              </div>

              {/* Card - PERMANENT FIX (Padding & Box Sizing) */}
              <div 
                className="w-full md:w-1/2 glass"
                style={{ 
                  padding: "28px", 
                  boxSizing: "border-box", 
                  borderRadius: "24px" 
                }}
              >
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-blue-400 mt-2">
                  {item.organization}
                </p>

                <p className="text-slate-500 mt-1">
                  {item.duration}
                </p>

                <p className="text-slate-400 mt-5" style={{ lineHeight: "1.8" }}>
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Experience;