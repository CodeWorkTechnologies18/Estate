import { motion } from "framer-motion";
import { processSteps } from "../data/siteData";
import SectionIntro from "./SectionIntro";

function Process() {
  return (
    <section id="process" className="section-space bg-primary text-white">
      <div className="section-shell">
        <SectionIntro
          kicker="Work Process"
          title="A structured delivery process that keeps projects polished, predictable, and on track."
          copy="Our project lifecycle is designed to reduce uncertainty while increasing design quality, execution clarity, and stakeholder confidence."
          align="center"
          theme="dark"
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/15 lg:left-1/2 lg:block" />
          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const reverse = index % 2 === 1;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className={`grid gap-6 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="hidden lg:block" />
                  <div className="relative rounded-[28px] border border-white/10 bg-white/10 p-6 text-white shadow-premium backdrop-blur md:p-8">
                    <div className="absolute -left-3 top-10 hidden h-6 w-6 rounded-full border-4 border-primary bg-accent lg:block" />
                    <div className="flex items-start gap-5">
                      <div className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-accent text-2xl text-primary shadow-glow">
                        <Icon />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-accent">Step {index + 1}</p>
                        <h3 className="mt-2 font-heading text-2xl font-bold text-white">{step.title}</h3>
                        <p className="mt-3 max-w-xl text-slate-200">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
