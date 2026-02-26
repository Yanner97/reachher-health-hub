import { motion } from "framer-motion";
import { Smartphone, BookOpen, Stethoscope, Users, Brain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Programs = () => {
  const { t } = useLanguage();

  const programs = [
    { icon: Smartphone, title: t("programs.digitalHealth"), description: t("programs.digitalHealthDesc"), tag: t("programs.digitalHealthTag") },
    { icon: BookOpen, title: t("programs.communityHealth"), description: t("programs.communityHealthDesc"), tag: t("programs.communityHealthTag") },
    { icon: Stethoscope, title: t("programs.cancerScreening"), description: t("programs.cancerScreeningDesc"), tag: t("programs.cancerScreeningTag") },
    { icon: Users, title: t("programs.peerHealth"), description: t("programs.peerHealthDesc"), tag: t("programs.peerHealthTag") },
    { icon: Brain, title: t("programs.mentalWellness"), description: t("programs.mentalWellnessDesc"), tag: t("programs.mentalWellnessTag") },
  ];

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-body font-semibold text-gold-dark tracking-widest uppercase">{t("programs.label")}</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
            {t("programs.title1")} <span className="text-primary">{t("programs.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">{t("programs.description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {programs.map((program, i) => (
            <motion.div key={program.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-green-light group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center">
                  <program.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                </div>
                <span className="text-xs font-body font-semibold text-gold-dark bg-gold/15 px-3 py-1 rounded-full">{program.tag}</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">{program.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
