import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import education from "../data/education";

function Education() {
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
          My <span className="gradient-text">Education</span>
        </h2>

        <p className="section-subtitle">
          My academic journey has built a strong foundation in computer science,
          software development, and problem-solving while encouraging continuous
          learning and innovation.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative mt-16">

        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-600 via-cyan-500 to-purple-600 -translate-x-1/2 rounded-full"></div>

        <div className="space-y-12">
          {education.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } flex-col items-center gap-8`}
            >
              {/* Empty Side */}
              <div className="hidden md:block w-1/2"></div>

              {/* Timeline Dot */}
              <div
                className="hidden md:flex w-14 h-14 rounded-full items-center justify-center text-white z-10 shrink-0"
                style={{
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-cyan))",
                  boxShadow: "0 0 0 6px rgba(3,7,18,1), var(--shadow-glow-primary)",
                }}
              >
                <FaGraduationCap size={22} />
              </div>

              {/* Card - PERMANENT FIX (Padding & Box Sizing) */}
              <div className="w-full md:w-1/2">
                <div 
                  className="glass hover:scale-[1.02] transition-all duration-300"
                  style={{ 
                    padding: "32px", 
                    boxSizing: "border-box", 
                    borderRadius: "24px" 
                  }}
                >
                  <h3 className="text-2xl font-bold mb-2">
                    {item.degree}
                  </h3>

                  {item.branch && (
                    <p className="text-blue-400 font-medium mb-2">
                      {item.branch}
                    </p>
                  )}

                  <p className="text-lg text-slate-300">
                    {item.institute}
                  </p>

                  <p className="text-slate-400 mt-1">
                    {item.university}
                  </p>

                  <div className="flex items-center gap-2 mt-5 text-blue-400">
                    <FaCalendarAlt />
                    <span>{item.duration}</span>
                  </div>

                  {item.cgpa && (
                    <div className="mt-4">
                      <span className="font-semibold text-white">
                        CGPA :
                      </span>{" "}
                      <span className="text-slate-300">
                        {item.cgpa}
                      </span>
                    </div>
                  )}

                  {item.percentage && (
                    <div className="mt-4">
                      <span className="font-semibold text-white">
                        Percentage :
                      </span>{" "}
                      <span className="text-slate-300">
                        {item.percentage}
                      </span>
                    </div>
                  )}

                  <p className="text-slate-400 mt-6" style={{ lineHeight: "1.8" }}>
                    {item.description}
                  </p>

                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Education;