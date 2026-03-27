import { motion } from "framer-motion";
import { services } from "../data/siteData";
import SectionIntro from "./SectionIntro";

function Services() {
  return (
    <section id="services" className="section-space bg-white">
      <div className="section-shell">
        <SectionIntro
          kicker="Our Services"
          title="Integrated consulting, design, and construction solutions for premium developments."
          copy="We combine strategic advisory, engineering precision, and refined execution to create projects that feel built for long-term trust."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="premium-card group h-full bg-gradient-to-b from-white to-slate-50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-accent shadow-glow transition group-hover:bg-accent group-hover:text-primary">
                  <Icon />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-primary">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
