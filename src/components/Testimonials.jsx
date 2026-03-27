import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../data/siteData";
import SectionIntro from "./SectionIntro";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className="section-space bg-white">
      <div className="section-shell">
        <SectionIntro
          kicker="Testimonials"
          title="Client confidence built through premium communication, planning, and project outcomes."
          copy="The strongest proof of our work is the trust our clients place in us across consulting, execution, and long-term relationships."
          align="center"
        />

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-[32px] bg-primary p-8 text-white shadow-premium">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">What Clients Say</p>
            <h3 className="mt-4 font-heading text-3xl font-bold">Built for trust. Managed with care.</h3>
            <p className="mt-4 leading-8 text-slate-200">
              We approach every engagement with professionalism, regular updates, and a long-term quality mindset that keeps projects moving with confidence.
            </p>
          </div>

          <div className="premium-card min-h-[320px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
                className="grid items-center gap-8 md:grid-cols-[220px_1fr]"
              >
                <img
                  src={active.image}
                  alt={active.name}
                  className="h-64 w-full rounded-[28px] object-cover"
                />
                <div>
                  <div className="mb-5 flex gap-1 text-accent">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <p className="text-lg leading-8 text-slate-600">&quot;{active.review}&quot;</p>
                  <h4 className="mt-6 font-heading text-2xl font-bold text-primary">{active.name}</h4>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{active.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex gap-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 rounded-full transition ${
                    index === activeIndex ? "w-12 bg-accent" : "w-3 bg-slate-300"
                  }`}
                  aria-label={`Show testimonial from ${item.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
