import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-section-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-gold-dark tracking-widest uppercase">Contact Us</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={22} />
              </div>
              <div>
                <h4 className="font-body font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground font-body text-sm">Kilimanjaro, Tanzania</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <h4 className="font-body font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground font-body text-sm">info@reachherhealthtech.org</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={22} />
              </div>
              <div>
                <h4 className="font-body font-semibold text-foreground mb-1">WhatsApp</h4>
                <p className="text-muted-foreground font-body text-sm">+255 XXX XXX XXX</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-body font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
