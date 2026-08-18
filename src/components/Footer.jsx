import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaArrowUp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-scroll";
import siteConfig from "../data/siteConfig";

function Footer() {
  const year = new Date().getFullYear();
  const { personal, social } = siteConfig;

  return (
    <footer
      style={{
        marginTop: "96px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="container"
        style={{
          padding: "56px 16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          {/* Left */}
          <div style={{ flex: "1 1 340px" }}>
            <h2
              className="gradient-text"
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              {personal.name}
            </h2>

            <p
              className="text-slate-400"
              style={{
                lineHeight: "1.9",
              }}
            >
              {personal.description}
            </p>

            <div
              style={{
                marginTop: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <FaEnvelope className="text-blue-500" />
                <span className="text-slate-400">
                  {personal.email}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <FaMapMarkerAlt className="text-blue-500" />
                <span className="text-slate-400">
                  {personal.location}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ flex: "1 1 180px" }}>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Navigation
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {[
                "home",
                "about",
                "skills",
                "projects",
                "education",
                "contact",
              ].map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth
                  duration={500}
                  className="text-slate-400 hover:text-blue-400 transition cursor-pointer"
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div style={{ flex: "1 1 220px" }}>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Connect
            </h3>

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "28px",
              }}
            >
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="bg-slate-800 hover:bg-blue-600 transition"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <FaGithub />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="bg-slate-800 hover:bg-blue-600 transition"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <FaLinkedin />
              </a>
            </div>

            <Link
              to="home"
              smooth
              duration={500}
              className="text-[var(--color-primary-light)] hover:text-blue-300 transition"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              <FaArrowUp />
              Back To Top
            </Link>
          </div>
        </div>

        <div
          style={{
            marginTop: "56px",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,.08)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <p className="text-slate-500">
            © {year} {personal.name}. All Rights Reserved.
          </p>

          <p
            className="text-slate-500"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Made with
            <FaHeart className="text-red-500" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;