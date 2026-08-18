import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiMysql,
} from "react-icons/si";

import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import siteConfig from "../data/siteConfig";

function Hero() {
  const { personal, social } = siteConfig;

  return (
    <div
      className="container min-h-screen flex items-center relative"
      style={{
        paddingTop: "120px",
        paddingBottom: "70px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          width: "100%",
        }}
      >
        {/* LEFT SECTION */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          style={{
            flex: "1 1 560px",
            minWidth: "300px",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: "18px" }}>
            Welcome To My Portfolio
          </p>

          <h1
            style={{
              fontSize: "clamp(3rem,7vw,5.5rem)",
              lineHeight: "1.1",
              fontWeight: "800",
            }}
          >
            Hi, I'm
            <br />

            <span className="gradient-text">
              {personal.name}
            </span>
          </h1>

          <div
            style={{
              marginTop: "22px",
              fontSize: "1.8rem",
              fontWeight: "600",
              color: "#CBD5E1",
              minHeight: "45px",
            }}
          >
            <Typewriter
              words={[
                "Computer Engineer",
                "Full Stack Developer",
                "MERN Stack Developer",
                "React Developer",
                "Backend Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1800}
            />
          </div>

          <p
            style={{
              marginTop: "28px",
              maxWidth: "720px",
              color: "#94A3B8",
              lineHeight: "1.9",
              fontSize: "1.05rem",
            }}
          >
            {personal.description}
          </p>

          {/* Buttons */}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "18px",
              marginTop: "40px",
            }}
          >
            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Download Resume
            </a>

            <Link
              to="projects"
              smooth
              duration={500}
              offset={-70}
              className="btn btn-secondary"
            >
              View Projects
            </Link>
          </div>

          {/* Social */}

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "38px",
              fontSize: "1.4rem",
            }}
          >
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="glass hover:text-blue-400 hover:border-blue-400/40 transition flex items-center justify-center"
              style={{ width: "52px", height: "52px", borderRadius: "16px" }}
            >
              <FaGithub />
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="glass hover:text-blue-400 hover:border-blue-400/40 transition flex items-center justify-center"
              style={{ width: "52px", height: "52px", borderRadius: "16px" }}
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Tech Stack */}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              marginTop: "42px",
            }}
          >
            {[
              ["React", <FaReact />],
              ["Java", <FaJava />],
              ["Node.js", <FaNodeJs />],
              ["MongoDB", <SiMongodb />],
              ["JavaScript", <SiJavascript />],
              ["Express.js", <SiExpress />],
              ["MySQL", <SiMysql />],
            ].map(([name, icon]) => (
              <div
                key={name}
                className="glass"
                style={{
                  padding: "12px 18px",
                  borderRadius: "999px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: "500",
                  fontSize: "0.92rem",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    color: "var(--color-primary-light)",
                    fontSize: "1.25rem",
                    display: "flex",
                  }}
                >
                  {icon}
                </span>

                {name}
              </div>
            ))}
          </div>
        </motion.div>
        {/* RIGHT SECTION */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1 1 430px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "320px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "430px",
              height: "430px",
              maxWidth: "100%",
            }}
          >
            {/* Glow */}

            <div
              style={{
                position: "absolute",
                inset: "0",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#2563eb,#06b6d4,#7c3aed)",
                filter: "blur(55px)",
                opacity: ".35",
              }}
            />

            {/* Ring */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                inset: "18px",
                borderRadius: "50%",
                border: "2px dashed rgba(96,165,250,.4)",
              }}
            />

            {/* Main Circle */}

            <div
              className="glass"
              style={{
                position: "absolute",
                inset: "45px",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                background:
                  "linear-gradient(180deg,#111827,#020617)",
                border: "2px solid rgba(59,130,246,.25)",
              }}
            >
              {/* Placeholder */}

              <div
                style={{
                  width: "170px",
                  height: "170px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#2563eb,#7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/profile.png"
                  alt="Samay Gandhi"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>

              <h3
                style={{
                  marginTop: "28px",
                  fontSize: "1.8rem",
                  fontWeight: "700",
                }}
              >
                {personal.name}
              </h3>

              <p
                style={{
                  marginTop: "8px",
                  color: "#94A3B8",
                }}
              >
                Full Stack Developer
              </p>

              <p
                style={{
                  marginTop: "8px",
                  color: "#60A5FA",
                  fontSize: ".9rem",
                }}
              >
                
              </p>
            </div>

            {/* Floating React */}

            <motion.div
              animate={{
                y: [-12, 12, -12],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="glass"
              style={{
                position: "absolute",
                left: "-10px",
                top: "45px",
                width: "74px",
                height: "74px",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              <FaReact
                style={{
                  color: "#61DAFB",
                }}
              />
            </motion.div>

            {/* Java */}

            <motion.div
              animate={{
                y: [12, -12, 12],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="glass"
              style={{
                position: "absolute",
                right: "-15px",
                top: "70px",
                width: "74px",
                height: "74px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
              }}
            >
              <FaJava
                style={{
                  color: "#f97316",
                }}
              />
            </motion.div>

            {/* Node */}

            <motion.div
              animate={{
                x: [-10, 10, -10],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="glass"
              style={{
                position: "absolute",
                bottom: "25px",
                left: "25px",
                width: "74px",
                height: "74px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
              }}
            >
              <FaNodeJs
                style={{
                  color: "#22C55E",
                }}
              />
            </motion.div>

            {/* MongoDB */}

            <motion.div
              animate={{
                x: [10, -10, 10],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="glass"
              style={{
                position: "absolute",
                bottom: "25px",
                right: "25px",
                width: "74px",
                height: "74px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
              }}
            >
              <SiMongodb
                style={{
                  color: "#22C55E",
                }}
              />
            </motion.div>

          </div>

        </motion.div>

      </div>
      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          delay: 2,
          duration: 1.8,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          left: "50%",
          bottom: "18px",
          transform: "translateX(-50%)",
        }}
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          aria-label="Scroll to About section"
          style={{
            width: "58px",
            height: "58px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#60A5FA",
            fontSize: "1.4rem",
            border: "1px solid rgba(96,165,250,.35)",
            background: "rgba(15,23,42,.55)",
            backdropFilter: "blur(18px)",
            transition: ".35s",
          }}
        >
          <FaArrowDown />
        </Link>
      </motion.div>
    </div>
  );
}

export default Hero;