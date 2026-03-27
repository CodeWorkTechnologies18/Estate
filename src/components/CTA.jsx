import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[36px] px-6 py-16 text-white shadow-premium sm:px-10 lg:px-16"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(11,31,58,0.94) 0%, rgba(18,38,63,0.88) 50%, rgba(212,162,73,0.7) 100%), url('https://images.unsplash.com/photo-1431578500526-4d9613015464?auto=format&fit=crop&w=1400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-premium-grid bg-[size:34px_34px] opacity-20" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.34em] text-accent">Ready To Start</p>
              <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
                Ready To Build Your Dream Project?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">
                Let&apos;s plan a premium residential, commercial, or development project with trusted experts by your side.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="premium-button">
                Get Quote
              </a>
              <a href="tel:+919876543210" className="premium-button-outline">
                Contact Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
