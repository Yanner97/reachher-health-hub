import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Impact = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "15,000+", label: t("impact.stat1") },
    { number: "120+", label: t("impact.stat2") },
    { number: "3,500+", label: t("impact.stat3") },
    { number: "50+", label: t("impact.stat4") },
  ];

  const testimonials = [
    { quote: t("impact.testimonial1"), name: "Neema M.", location: "Moshi, Kilimanjaro" },
    { quote: t("impact.testimonial2"), name: "Amina K.", location: "Hai, Kilimanjaro" },
  ];

  return (
    <section id="impact" className="py-24 bg-section-green">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-body font-semibold text-gold-dark tracking-widest uppercase">{t("impact.label")}</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
            {t("impact.title1")} <span className="text-primary">{t("impact.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border">
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-sm font-body text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div key={testimonial.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <Quote className="text-gold mb-4" size={32} />
              <p className="text-foreground font-body leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-body font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground font-body">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
