import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaDesktop,
  FaTimes,
  FaArrowRight,
  FaChrome,
  FaStar,
} from "react-icons/fa";

function DesktopRecommendation() {
  const [open, setOpen] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const alreadySeen = localStorage.getItem(
        "desktop_notice_seen"
      );

      const isMobile =
        window.matchMedia("(max-width:1023px)").matches ||
        /Android|iPhone|iPad|iPod|Mobile/i.test(
          navigator.userAgent
        );

      if (isMobile && !alreadySeen) {
        document.body.style.overflow = "hidden";
        setOpen(true);
      } else {
        document.body.style.overflow = "auto";
        setOpen(false);
      }
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);
    window.addEventListener(
      "orientationchange",
      checkDevice
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkDevice
      );
      window.removeEventListener(
        "orientationchange",
        checkDevice
      );

      document.body.style.overflow = "auto";
    };
  }, []);

  const closePopup = () => {
    if (dontShowAgain) {
      localStorage.setItem(
        "desktop_notice_seen",
        "true"
      );
    }

    document.body.style.overflow = "auto";
    setShowGuide(false);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .25 }}
          onClick={closePopup}
          role="dialog"
          aria-modal="true"
          aria-label="Desktop experience recommendation"
          style={{
            position: "fixed",
            inset: 0,
            background:
              "rgba(0,0,0,.82)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter:
              "blur(12px)",
            zIndex: 999999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "22px",
          }}
        >
          <motion.div
            initial={{
              scale: .85,
              opacity: 0,
              y: 40,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: .85,
              opacity: 0,
            }}
            transition={{
              duration: .4,
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
            className="glass"
            style={{
              width: "100%",
              maxWidth: "460px",
              borderRadius: "28px",
              padding: "36px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "240px",
                height: "240px",
                background:
                  "radial-gradient(circle,#2563eb55,transparent)",
                top: "-120px",
                right: "-120px",
                filter: "blur(25px)",
                pointerEvents: "none",
              }}
            />

            <button
              onClick={closePopup}
              aria-label="Close dialog"
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
                width: "42px",
                height: "42px",
                border: "none",
                borderRadius: "50%",
                background:
                  "rgba(255,255,255,.08)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1rem",
              }}
            >
              <FaTimes />
            </button>

            {!showGuide ? (
              <>
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  style={{
                    width: "100px",
                    height: "100px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg,#2563eb,#7c3aed)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "2.5rem",
                    boxShadow:
                      "0 0 35px rgba(59,130,246,.4)",
                  }}
                >
                  <FaDesktop />
                </motion.div>

                <div
                  style={{
                    marginTop: "28px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    color: "#60A5FA",
                    alignItems: "center",
                  }}
                >
                  <FaStar />
                  <span
                    style={{
                      fontSize: ".9rem",
                      letterSpacing: ".8px",
                      textTransform:
                        "uppercase",
                    }}
                  >
                    Recommended Experience
                  </span>
                </div>

                <h2
                  style={{
                    marginTop: "18px",
                    textAlign: "center",
                    fontSize: "2rem",
                    lineHeight: "1.3",
                    fontWeight: "700",
                  }}
                >
                  Experience It the Way
                  <br />
                  It Was Designed
                </h2>

                <p
                  style={{
                    marginTop: "20px",
                    textAlign: "center",
                    color: "#94A3B8",
                    lineHeight: "1.9",
                  }}
                >
                  This portfolio has been
                  crafted primarily for
                  desktop and laptop
                  screens.

                  <br />
                  <br />

                  You can continue on
                  mobile, but the complete
                  layout, animations and
                  interactions are best
                  experienced in Desktop
                  Site mode.
                </p>
                <button
                  onClick={closePopup}
                  className="btn btn-primary btn-block"
                  style={{ marginTop: "34px" }}
                >
                  Continue Anyway
                  <FaArrowRight />
                </button>

                <button
                  onClick={() => setShowGuide(true)}
                  className="btn btn-secondary btn-block"
                  style={{ marginTop: "14px" }}
                >
                  Show Desktop Site Guide
                </button>

                <label
                  style={{
                    marginTop: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    color: "#CBD5E1",
                    cursor: "pointer",
                    userSelect: "none",
                    fontSize: ".95rem",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={dontShowAgain}
                    onChange={() =>
                      setDontShowAgain(!dontShowAgain)
                    }
                    style={{
                      width: "18px",
                      height: "18px",
                      accentColor: "#2563EB",
                      cursor: "pointer",
                    }}
                  />

                  Don't show this again
                </label>
              </>
            ) : (
              <>
                <div
                  style={{
                    width: "85px",
                    height: "85px",
                    margin: "0 auto 26px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg,#2563EB,#7C3AED)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "2rem",
                    boxShadow:
                      "0 0 30px rgba(37,99,235,.35)",
                  }}
                >
                  <FaChrome />
                </div>

                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "1.8rem",
                    fontWeight: "700",
                    marginBottom: "26px",
                  }}
                >
                  Enable Desktop Site
                </h2>

                <div
                  style={{
                    display: "grid",
                    gap: "14px",
                  }}
                >
                  {[
                    "Open Chrome browser.",
                    "Tap the ⋮ menu in the top-right corner.",
                    "Enable Desktop site.",
                    "Refresh this page.",
                  ].map((step, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "14px 16px",
                        borderRadius: "14px",
                        background:
                          "rgba(255,255,255,.04)",
                        border:
                          "1px solid rgba(255,255,255,.05)",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "34px",
                          height: "34px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg,#2563EB,#7C3AED)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#fff",
                          fontWeight: "700",
                        }}
                      >
                        {index + 1}
                      </div>

                      <span
                        style={{
                          color: "#CBD5E1",
                          lineHeight: "1.6",
                        }}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setShowGuide(false)}
                  className="btn btn-primary btn-block"
                  style={{ marginTop: "28px" }}
                >
                  Back
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DesktopRecommendation;