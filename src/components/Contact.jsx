import { motion } from "framer-motion";
import { FaEnvelope, FaLocationDot, FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";
import { contactInfo } from "../data/siteData";
import SectionIntro from "./SectionIntro";

function Contact() {
  return (
    <section id="contact" className="section-space bg-mist/60">
      <div className="section-shell">
        <SectionIntro
          kicker="Contact Us"
          title="Start your project conversation with a team built for premium consulting and construction delivery."
          copy="Share your requirements and we’ll help you move from idea to execution with clarity, professionalism, and dependable support."
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-[32px] bg-primary p-8 text-white shadow-premium"
          >
            <h3 className="font-heading text-3xl font-bold">{contactInfo.company}</h3>
            <p className="mt-4 leading-8 text-slate-200">
              Trusted advisory, design coordination, and construction expertise for projects that deserve a premium presentation and disciplined execution.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <FaLocationDot className="mt-1 text-accent" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneVolume className="mt-1 text-accent" />
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}>{contactInfo.phone}</a>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="mt-1 text-accent" />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10">
              <iframe
                title="Company location map"
                src="https://www.google.com/maps?q=MG%20Road%20Bengaluru&z=13&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[280px] w-full border-0"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="premium-card rounded-[32px] p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-600">Name</span>
                <input type="text" placeholder="Your name" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-accent" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-600">Phone</span>
                <input type="tel" placeholder="Phone number" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-accent" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-600">Email</span>
                <input type="email" placeholder="Email address" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-accent" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-600">Project Type</span>
                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-accent">
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Real Estate Consulting</option>
                  <option>Interior Designing</option>
                  <option>Renovation</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-slate-600">Message</span>
              <textarea
                rows="6"
                placeholder="Tell us about your project goals"
                className="w-full rounded-[24px] border border-slate-200 px-4 py-3 outline-none transition focus:border-accent"
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <button type="submit" className="premium-button border-0">
                Send Message
              </button>
              <a
                href="https://wa.me/919876543210"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-green-600"
              >
                <FaWhatsapp />
                WhatsApp Button
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
