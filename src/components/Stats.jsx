import { motion } from "framer-motion";
import { aboutStats } from "../data/siteData";

function Stats() {
  return (
    <section className="section-space bg-primary">
      <div className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aboutStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="rounded-[28px] border border-white/10 bg-white/10 p-8 text-center text-white backdrop-blur-sm"
            >
              <p className="font-heading text-5xl font-bold text-accent">{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.28em] text-slate-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
