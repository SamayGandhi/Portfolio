import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import siteConfig from "../data/siteConfig";

function FloatingDock() {
  const { personal, social } = siteConfig;

  const items = [
    {
      icon: <FaGithub />,
      link: social.github,
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      link: `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`,
      label: "Email",
    },
    {
      icon: <FaFileDownload />,
      link: personal.resume,
      label: "Resume",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "80px",
        right: "15px",
        zIndex: 999,
      }}
    >
      <div
        className="glass"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          padding: "10px",
          borderRadius: "999px",
          boxSizing: "border-box",
        }}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.link}
            target={
              item.label === "Email"
                ? "_self"
                : "_blank"
            }
            rel="noreferrer"
            title={item.label}
            aria-label={item.label}
            className="dock-item"
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              background: "#1e293b",
              fontSize: "1.3rem",
              transition: "background var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-out)",
            }}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FloatingDock;