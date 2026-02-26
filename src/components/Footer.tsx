import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const linkKeys = [
    { key: "nav.about", href: "#about" },
    { key: "nav.programs", href: "#programs" },
    { key: "nav.impact", href: "#impact" },
    { key: "nav.getInvolved", href: "#get-involved" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="bg-green-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <img src={logo} alt="REACHHER HEALTHTECH logo" className="h-12 w-auto mb-3 brightness-0 invert" />
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">{t("footer.description")}</p>
          </div>
          <div>
            <h4 className="font-body font-semibold text-primary-foreground mb-3">{t("footer.quickLinks")}</h4>
            <div className="flex flex-col gap-2">
              {linkKeys.map((link) => (
                <a key={link.key} href={link.href} className="text-primary-foreground/60 hover:text-gold font-body text-sm transition-colors">{t(link.key)}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold text-primary-foreground mb-3">{t("footer.newsletter")}</h4>
            <p className="text-primary-foreground/70 font-body text-sm mb-3">{t("footer.newsletterDesc")}</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input type="email" placeholder={t("footer.emailPlaceholder")} maxLength={255} className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
              <button type="submit" className="bg-gold-gradient text-foreground px-4 py-2 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity">{t("footer.join")}</button>
            </form>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 font-body text-sm">{t("footer.rights")}</p>
          <p className="text-primary-foreground/50 font-body text-sm flex items-center gap-1">
            {t("footer.madeWith")} <Heart size={14} className="text-gold" /> {t("footer.inTanzania")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
