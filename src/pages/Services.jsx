import CTA from "../components/CTA";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";

function ServicesPage() {
  return (
    <main className="pt-28">
      <section className="bg-primary py-24 text-white">
        <div className="section-shell">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Our Expertise</p>
          <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">Professional services for premium real estate and construction projects.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Strategic consulting, planning, architecture coordination, construction management, renovation, and turnkey delivery.
          </p>
        </div>
      </section>
      <Services />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}

export default ServicesPage;
