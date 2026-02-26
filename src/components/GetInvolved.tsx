import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Handshake, UserPlus, Send } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const GetInvolved = () => {
  const [form, setForm] = useState({ name: "", email: "", interest: "" });
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error(t("involved.errorMsg"));
      return;
    }
    toast.success(t("involved.successMsg"));
    setForm({ name: "", email: "", interest: "" });
  };

  const cards = [
    { icon: Heart, title: t("involved.donateTitle"), desc: t("involved.donateDesc"), color: "bg-gold/15 text-gold-dark" },
    { icon: Handshake, title: t("involved.partnerTitle"), desc: t("involved.partnerDesc"), color: "bg-green-light text-primary" },
    { icon: UserPlus, title: t("involved.volunteerTitle"), desc: t("involved.volunteerDesc"), color: "bg-gold/15 text-gold-dark" },
  ];

  return (
    <section id="get-involved" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-body font-semibold text-gold-dark tracking-widest uppercase">{t("involved.label")}</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
            {t("involved.title1")} <span className="text-primary">{t("involved.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">{t("involved.description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {cards.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-md transition-shadow">
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-5`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-xl mx-auto bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-2 text-center">{t("involved.formTitle")}</h3>
          <p className="text-muted-foreground font-body text-sm mb-8 text-center">{t("involved.formSubtitle")}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder={t("involved.name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
            <input type="email" placeholder={t("involved.email")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
            <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40">
              <option value="">{t("involved.interest")}</option>
              <option value="tech">{t("involved.interestTech")}</option>
              <option value="health">{t("involved.interestHealth")}</option>
              <option value="outreach">{t("involved.interestOutreach")}</option>
              <option value="fundraising">{t("involved.interestFundraising")}</option>
              <option value="other">{t("involved.interestOther")}</option>
            </select>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Send size={18} />
              {t("involved.submit")}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;
