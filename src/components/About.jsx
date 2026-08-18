import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaCode, FaBrain } from "react-icons/fa";

const cards = [
  {
    icon: <FaGraduationCap size={30} />,
    title: "Education",
    description: "B.E. Computer Engineering\nGovernment Engineering College, Modasa",
  },
  {
    icon: <FaLaptopCode size={30} />,
    title: "Development",
    description: "Full Stack Web Development using React, Node.js, Express.js & MongoDB",
  },
  {
    icon: <FaCode size={30} />,
    title: "Programming",
    description: "Java, JavaScript, HTML, CSS, SQL, Git & GitHub",
  },
  {
    icon: <FaBrain size={30} />,
    title: "Interests",
    description: "Full-Stack Web Development, Software Engineering & Problem Solving",
  },
];

function About() {
  return (
    <div className="container">

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>

        <p className="section-subtitle">
          I am a passionate Computer Engineering student who enjoys creating
          modern web applications and solving real-world problems through
          software development. I love learning new technologies and building
          projects that combine creativity with practical solutions.
        </p>

      </motion.div>

      <div className="grid lg:grid-cols-2 gap-14 items-center mt-16">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* FIXED: Added permanent inline padding and box-sizing */}
          <div 
            className="glass"
            style={{ padding: "32px", boxSizing: "border-box", borderRadius: "24px" }}
          >

            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Who Am I?
            </h3>

            <p className="text-slate-300 leading-8 mb-6">
              Hello! I'm <strong>Samay Gandhi</strong>, a Computer Engineering
              student at Government Engineering College, Modasa.
            </p>

            <p className="text-slate-400 leading-8 mb-6">
              My primary interest lies in Full Stack Web Development, and
              Software Engineering.
              I enjoy designing scalable applications with clean UI,
              efficient backend architecture, and user-friendly experiences.
            </p>

            <p className="text-slate-400 leading-8">
              I have worked on multiple academic and personal projects,
              continuously improving my programming skills while exploring
              modern development practices and emerging technologies.
            </p>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="grid sm:grid-cols-2 gap-6">

            {cards.map((card, index) => (
              <div
                key={index}
                className="glass card-hover transition duration-300"
                style={{ padding: "24px", boxSizing: "border-box", borderRadius: "24px" }}
              >
                <div
                  className="mb-4"
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, rgba(37,99,235,.2), rgba(124,58,237,.2))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary-light)",
                  }}
                >
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-400 whitespace-pre-line leading-7">
                  {card.description}
                </p>
              </div>
            ))}

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default About;