import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold text-primary">REACHHER</span>
          <span className="text-sm font-body font-medium text-gold-dark tracking-wider">HEALTHTECH</span>
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
          <a
            href="#get-involved"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-body font-semibold hover:opacity-90 transition-opacity"
          >
            Donate
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
              <a
                href="#get-involved"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-lg text-center text-sm font-body font-semibold"
              >
                Donate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
