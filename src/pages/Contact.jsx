import Contact from "../components/Contact";
import CTA from "../components/CTA";

function ContactPage() {
  return (
    <main className="pt-28">
      <section className="bg-primary py-24 text-white">
        <div className="section-shell">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Contact Skyline</p>
          <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">Let&apos;s discuss your residential, commercial, or investment project.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Reach out for consulting, planning, execution, and premium construction support tailored to your goals.
          </p>
        </div>
      </section>
      <Contact />
      <CTA />
    </main>
  );
}

export default ContactPage;
