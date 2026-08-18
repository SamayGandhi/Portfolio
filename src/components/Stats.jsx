import { motion } from "framer-motion";
import stats from "../data/stats";

function Stats() {
  return (
    <div className="container relative z-20" style={{ marginTop: "-40px" }}>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass"
        style={{ padding: "40px", boxSizing: "border-box", borderRadius: "24px" }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "32px" }}>

          {stats.map((item) => (
            <div
              key={item.id}
              style={{ textAlign: "center", flex: "1 1 150px" }}
            >
              <h2 className="text-5xl font-bold gradient-text" style={{ marginBottom: "12px" }}>
                {item.number}
              </h2>

              <p className="text-slate-400 m-0">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </motion.div>
    </div>
  );
}

export default Stats;