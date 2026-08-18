import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  return (
    <div className="container">

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>

        <p className="section-subtitle">
          Here are the technologies, programming languages and tools
          I use to build modern web applications.
        </p>
      </motion.div>

      <div className="space-y-12 mt-16">

        {skills.map((group) => (

          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass"
            style={{
              padding: "38px",
              borderRadius: "28px",
            }}
          >

            {/* Category */}

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px 22px",
                borderRadius: "999px",
                marginBottom: "34px",
                background:
                  "linear-gradient(135deg,rgba(37,99,235,.16),rgba(124,58,237,.16))",
                border:
                  "1px solid rgba(96,165,250,.22)",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--color-primary-light)",
                  boxShadow: "0 0 15px var(--color-primary-light)",
                }}
              />

              <h3
                className="gradient-text"
                style={{
                  margin: 0,
                  fontSize: "1.55rem",
                  fontWeight: "700",
                }}
              >
                {group.category}
              </h3>
            </div>

            {/* Skills Grid */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {group.items.map((skill) => {

                const Icon = skill.icon;

                return (

                  <motion.div
                    key={skill.name}
                    whileHover={{
                      y: -6,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: .25,
                    }}
                    style={{
                      padding: "22px",
                      borderRadius: "20px",
                      background:
                        "rgba(255,255,255,.03)",
                      border:
                        "1px solid rgba(255,255,255,.06)",
                      display: "flex",
                      alignItems: "center",
                      gap: "18px",
                      cursor: "default",
                    }}
                  >

                    <div
                      style={{
                        width: "58px",
                        height: "58px",
                        borderRadius: "18px",
                        background:
                          "linear-gradient(135deg,rgba(37,99,235,.20),rgba(124,58,237,.20))",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#60A5FA",
                        fontSize: "1.8rem",
                        flexShrink: 0,
                      }}
                    >
                      <Icon />
                    </div>

                    <div>
                      <h4
                        style={{
                          margin: 0,
                          fontSize: "1.08rem",
                          fontWeight: "600",
                        }}
                      >
                        {skill.name}
                      </h4>

                      <p
                        style={{
                          marginTop: "6px",
                          marginBottom: 0,
                          color: "#94A3B8",
                          fontSize: ".88rem",
                        }}
                      >
                        Technology
                      </p>
                    </div>
                  </motion.div>
                  );

                })}

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default Skills;