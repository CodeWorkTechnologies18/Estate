import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../data/siteData";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  const renderLink = (item, mobile = false) => (
    <button
      key={item.name}
      type="button"
      onClick={() => handleNavClick(item.href)}
      className={[
        "transition duration-300",
        mobile
          ? "block w-full rounded-2xl px-4 py-3 text-left text-base text-primary hover:bg-primary hover:text-white"
          : "text-sm font-medium text-primary hover:text-slateDeep",
      ].join(" ")}
    >
      {item.name}
    </button>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md backdrop-blur-xl transition duration-300">
      <div className="section-shell">
        <div className="flex items-center justify-between py-4">
          <button type="button" onClick={() => handleNavClick("#home")} className="flex items-center gap-3 text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
              S
            </div>
            <div>
              <p className="font-heading text-lg font-bold text-primary">Skyline</p>
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">Real Estate & Construction</p>
            </div>
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => renderLink(item))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              Get Quote
            </button>
            <a
              href="tel:+919876543210"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slateDeep"
            >
              Call Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="border-t border-neutral-200 bg-white lg:hidden"
          >
            <div className="section-shell py-4">
              <div className="space-y-2">{navLinks.map((item) => renderLink(item, true))}</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleNavClick("#contact")}
                  className="rounded-full border border-primary px-4 py-3 text-center text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  Get Quote
                </button>
                <a href="tel:+919876543210" className="rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-white">
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
