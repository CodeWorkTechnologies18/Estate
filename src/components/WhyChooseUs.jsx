import { motion } from "framer-motion";
import { whyChooseUs } from "../data/siteData";
import SectionIntro from "./SectionIntro";

function WhyChooseUs() {
  return (
    <section className="section-space bg-gradient-to-b from-mist/70 to-white">
      <div className="section-shell">
        <SectionIntro
          kicker="Why Choose Us"
          title="A premium partner for projects that demand trust, planning discipline, and design credibility."
          copy="We focus on the details that matter to clients most: quality, accountability, delivery confidence, and long-term value."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="premium-card h-full"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-2xl text-accentDark">
                  <Icon />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
