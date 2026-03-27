import { motion } from "framer-motion";
import { projects } from "../data/siteData";
import SectionIntro from "./SectionIntro";

function Projects({ limit }) {
  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="section-space bg-white">
      <div className="section-shell">
        <SectionIntro
          kicker="Featured Projects"
          title="Residential and commercial developments shaped with modern planning and premium execution."
          copy="From luxury residences to business infrastructure, our portfolio reflects strong design direction, reliable delivery, and a distinctly refined finish."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-[30px] bg-white shadow-premium"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentDark">{project.category}</p>
                <h3 className="mt-3 font-heading text-2xl font-bold text-primary">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">{project.location}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
                <a href="#contact" className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition hover:text-accentDark">
                  View Details
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
