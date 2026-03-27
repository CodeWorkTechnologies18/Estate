import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section-space bg-mist/60">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-[28px] bg-accent/20 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1529429617124-aee711a5ac1c?auto=format&fit=crop&w=1200&q=80"
            alt="Construction professionals discussing project plans"
            className="relative h-[540px] w-full rounded-[34px] object-cover shadow-premium"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/20 bg-primary/85 p-6 text-white backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.32em] text-accent">Trusted Since 2014</p>
            <p className="mt-3 font-heading text-2xl font-bold">Built on reliability, quality, and premium execution.</p>
          </div>
        </motion.div>

        <div>
          <div className="section-kicker">About Company</div>
          <h2 className="section-title">A corporate construction and real estate partner focused on confidence, clarity, and premium delivery.</h2>
          <p className="section-copy mt-5">
            Skyline Real Estate & Construction supports clients from consultation to completion with a disciplined team of planners, consultants, engineers, and project specialists.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "150+", label: "Projects" },
              { value: "200+", label: "Clients" },
              { value: "50+", label: "Team Members" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="premium-card"
              >
                <p className="font-heading text-3xl font-bold text-accentDark">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-slate-600">
            <p>We bring together market insight, planning excellence, and craftsmanship to create highly functional spaces that elevate lifestyle and asset value.</p>
            <p>Every project is managed with transparent communication, strong process control, and a quality-first mindset that helps clients move forward with certainty.</p>
          </div>

          <a href="#services" className="premium-button mt-8">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
