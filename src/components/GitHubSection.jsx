import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaUsers,
  FaCodeBranch,
} from "react-icons/fa";

import useGithub from "../hooks/useGithub";

function GitHubSection() {
  const { profile, loading, error } = useGithub();

  if (loading) {
    return (
      <div className="container">
        <div
          className="glass"
          role="status"
          aria-live="polite"
          style={{
            padding: "40px",
            borderRadius: "24px",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <h2 className="text-3xl font-bold">
            Loading GitHub Profile...
          </h2>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="container">
        <div
          className="glass"
          role="alert"
          style={{
            padding: "40px",
            borderRadius: "24px",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <h2 className="text-3xl font-bold text-red-400">
            Unable to load GitHub Profile
          </h2>

          <p
            className="text-slate-400"
            style={{
              marginTop: "16px",
            }}
          >
            Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          My <span className="gradient-text">GitHub</span>
        </h2>

        <p className="section-subtitle">
          My latest GitHub profile information fetched
          directly from the GitHub API.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass"
        style={{
          padding: "40px",
          borderRadius: "24px",
          boxSizing: "border-box",
        }}
      >
        {/* Top */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left */}

          <div
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              src={profile.avatar_url}
              alt={profile.login}
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                border: "4px solid var(--color-primary)",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />

            <div>
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                {profile.name || profile.login}
              </h3>

              <p
                className="text-slate-400"
                style={{
                  marginTop: "8px",
                }}
              >
                @{profile.login}
              </p>

              <p
                className="text-slate-400"
                style={{
                  marginTop: "14px",
                  maxWidth: "600px",
                  lineHeight: "1.8",
                }}
              >
                {profile.bio || "No bio available."}
              </p>
            </div>
          </div>

          {/* Button */}

          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <FaGithub />

            Visit GitHub

            <FaExternalLinkAlt size={14} />
          </a>
        </div>

        {/* Stats */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {/* Repository */}

          <div
            className="glass"
            style={{
              flex: "1 1 220px",
              padding: "24px",
              borderRadius: "18px",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            <FaCodeBranch
              className="text-blue-500"
              style={{
                fontSize: "2rem",
                marginBottom: "16px",
              }}
            />

            <h2 className="gradient-text text-4xl font-bold">
              {profile.public_repos}
            </h2>

            <p
              className="text-slate-400"
              style={{
                marginTop: "10px",
              }}
            >
              Public Repositories
            </p>
          </div>

          {/* Followers */}

          <div
            className="glass"
            style={{
              flex: "1 1 220px",
              padding: "24px",
              borderRadius: "18px",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            <FaUsers
              className="text-blue-500"
              style={{
                fontSize: "2rem",
                marginBottom: "16px",
              }}
            />

            <h2 className="gradient-text text-4xl font-bold">
              {profile.followers}
            </h2>

            <p
              className="text-slate-400"
              style={{
                marginTop: "10px",
              }}
            >
              Followers
            </p>
          </div>

          {/* Following */}

          <div
            className="glass"
            style={{
              flex: "1 1 220px",
              padding: "24px",
              borderRadius: "18px",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            <FaGithub
              className="text-blue-500"
              style={{
                fontSize: "2rem",
                marginBottom: "16px",
              }}
            />

            <h2 className="gradient-text text-4xl font-bold">
              {profile.following}
            </h2>

            <p
              className="text-slate-400"
              style={{
                marginTop: "10px",
              }}
            >
              Following
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default GitHubSection;