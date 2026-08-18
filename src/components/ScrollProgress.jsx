import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        zIndex: 99999,
        background:
          "linear-gradient(90deg,#2563eb,#06b6d4,#7c3aed)",
      }}
    />
  );
}

export default ScrollProgress;