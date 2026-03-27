import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { contactInfo, services } from "../data/siteData";

function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary pb-8 pt-16 text-white">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr_1fr_0.8fr]">
          <div>
            <a href="#home" className="font-heading text-3xl font-bold text-white">
              Skyline
            </a>
            <p className="mt-4 max-w-sm leading-8 text-slate-300">
              Premium real estate consulting and construction solutions crafted for residential, commercial, and development success.
            </p>
            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#home"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent transition hover:bg-accent hover:text-primary"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold">Quick Links</h3>
            <div className="mt-5 space-y-3 text-slate-300">
              {quickLinks.map((item) => (
                <a key={item.label} href={item.href} className="block transition hover:text-accent">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold">Services</h3>
            <div className="mt-5 space-y-3 text-slate-300">
              {services.slice(0, 5).map((service) => (
                <p key={service.title}>{service.title}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold">Contact Info</h3>
            <div className="mt-5 space-y-3 text-slate-300">
              <p>{contactInfo.address}</p>
              <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="block">
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="block">
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>

        <p className="pt-8 text-sm text-slate-400">
          Copyright © 2026 Skyline Real Estate & Construction. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
