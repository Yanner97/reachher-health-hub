import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Eye, title: t("about.vision"), text: t("about.visionText") },
    { icon: Target, title: t("about.mission"), text: t("about.missionText") },
    { icon: HeartHandshake, title: t("about.whyWeExist"), text: t("about.whyWeExistText") },
  ];

  return (
    <section id="about" className="py-24 bg-section-warm">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-body font-semibold text-gold-dark tracking-widest uppercase">{t("about.label")}</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
            {t("about.title1")} <span className="text-primary">{t("about.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">{t("about.description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-green-light flex items-center justify-center mb-5">
                <card.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-20 max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
          <p className="text-lg font-body text-muted-foreground italic leading-relaxed mb-6">{t("about.founderQuote")}</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">R</div>
            <div>
              <p className="font-body font-semibold text-foreground">{t("about.founderTitle")}</p>
              <p className="text-sm text-muted-foreground font-body">REACHHER HEALTHTECH</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
