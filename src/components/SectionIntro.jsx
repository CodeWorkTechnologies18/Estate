import { motion } from "framer-motion";

function SectionIntro({ kicker, title, copy, align = "left", theme = "light" }) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl";
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={alignment}
    >
      {kicker ? <span className={`section-kicker ${isDark ? "section-kicker-dark" : ""}`}>{kicker}</span> : null}
      <h2 className={`section-title ${isDark ? "section-title-dark" : ""}`}>{title}</h2>
      {copy ? <p className={`section-copy mt-5 ${isDark ? "section-copy-dark" : ""}`}>{copy}</p> : null}
    </motion.div>
  );
}

export default SectionIntro;
