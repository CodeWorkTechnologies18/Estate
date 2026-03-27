import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary pt-28 text-white"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(11,31,58,0.92) 0%, rgba(11,31,58,0.72) 50%, rgba(11,31,58,0.58) 100%), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-premium-grid bg-[size:42px_42px] opacity-20" />
      <div className="section-shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent backdrop-blur-sm"
          >
            Premium Real Estate & Construction Partner
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl"
          >
            Building Your Dream Projects With Trust & Quality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-200"
          >
            Professional real estate consulting and construction services crafted for visionary homeowners,
            developers, and businesses seeking premium outcomes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#contact" className="premium-button">
              Get Free Consultation
            </a>
            <a href="#projects" className="premium-button-outline">
              View Projects
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1"
        >
          <div className="rounded-[30px] border border-white/10 bg-white/10 p-6 shadow-glow backdrop-blur-md">
            <p className="font-heading text-4xl font-bold text-accent">150+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-200">Projects Delivered</p>
          </div>
          <div className="rounded-[30px] border border-white/10 bg-white/10 p-6 shadow-glow backdrop-blur-md lg:translate-x-8">
            <p className="font-heading text-4xl font-bold text-accent">10+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-200">Years Experience</p>
          </div>
          <div className="rounded-[30px] border border-white/10 bg-white/10 p-6 shadow-glow backdrop-blur-md">
            <p className="font-heading text-4xl font-bold text-accent">200+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-200">Satisfied Clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
