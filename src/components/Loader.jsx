import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030712]"
        >

          <div className="flex flex-col items-center">

            {/* Logo */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-28 h-28 rounded-full border-4 border-blue-500 border-t-cyan-400 border-r-purple-500 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,.6)]"
            >

              <motion.span
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                }}
                className="text-4xl font-bold gradient-text"
              >
                SG
              </motion.span>

            </motion.div>

            {/* Name */}

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
              }}
              className="mt-8 text-3xl font-bold gradient-text"
            >
              Samay Gandhi
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6,
              }}
              className="mt-3 text-slate-400 tracking-widest uppercase text-sm"
            >
              Loading Portfolio...
            </motion.p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default Loader;