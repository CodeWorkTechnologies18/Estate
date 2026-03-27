import CTA from "../components/CTA";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

function ProjectsPage() {
  return (
    <main className="pt-28">
      <section className="bg-gradient-to-r from-primary to-slateDeep py-24 text-white">
        <div className="section-shell">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Portfolio</p>
          <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">Project showcases designed to build confidence and trust.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Explore residential, commercial, villa, apartment, and corporate developments delivered with premium quality.
          </p>
        </div>
      </section>
      <Projects />
      <Testimonials />
      <CTA />
    </main>
  );
}

export default ProjectsPage;
