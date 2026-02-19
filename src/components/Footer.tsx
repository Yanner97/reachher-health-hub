import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
              REACHHER <span className="text-gold">HEALTHTECH</span>
            </h3>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Empowering women and girls through technology, education, and community leadership in Tanzania.
            </p>
          </div>
          <div>
            <h4 className="font-body font-semibold text-primary-foreground mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Programs", "Impact", "Get Involved", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-primary-foreground/60 hover:text-gold font-body text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold text-primary-foreground mb-3">Newsletter</h4>
            <p className="text-primary-foreground/70 font-body text-sm mb-3">Stay updated on our work and impact.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                maxLength={255}
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              <button
                type="submit"
                className="bg-gold-gradient text-foreground px-4 py-2 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 font-body text-sm">
            © 2026 REACHHER HEALTHTECH. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 font-body text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-gold" /> in Tanzania
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
