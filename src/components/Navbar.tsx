import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.programs"), href: "#programs" },
    { label: t("nav.impact"), href: "#impact" },
    { label: t("nav.getInvolved"), href: "#get-involved" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const toggleLang = () => setLang(lang === "en" ? "sw" : "en");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="REACHHER HEALTHTECH logo" className="h-10 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-body font-semibold text-foreground/70 hover:text-primary border border-border rounded-lg px-3 py-1.5 transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            {lang === "en" ? "SW" : "EN"}
          </button>

          <a
            href="#get-involved"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-body font-semibold hover:opacity-90 transition-opacity"
          >
            {t("nav.donate")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-body font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 text-base font-body font-semibold text-foreground/70 hover:text-primary transition-colors self-start"
              >
                <Globe size={18} />
                {lang === "en" ? "Swahili" : "English"}
              </button>

              <a
                href="#get-involved"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-lg text-center text-sm font-body font-semibold"
              >
                {t("nav.donate")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
