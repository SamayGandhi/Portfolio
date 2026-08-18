import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      animate={{
        x: position.x - 140,
        y: position.y - 140,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 180,
        mass: 0.4,
      }}
      style={{
        position: "fixed",
        width: "280px",
        height: "280px",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: -1,
        background:
          "radial-gradient(circle, rgba(37,99,235,.20) 0%, rgba(37,99,235,.08) 45%, transparent 75%)",
        filter: "blur(28px)",
      }}
    />
  );
}

export default CursorGlow;