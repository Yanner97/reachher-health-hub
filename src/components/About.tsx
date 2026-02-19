import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Our Vision",
    text: "A Tanzania where every woman and girl has access to quality health information and services through technology and community support.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "To bridge the health information gap for women and girls using digital innovation, grassroots education, and peer-driven empowerment programs.",
  },
  {
    icon: HeartHandshake,
    title: "Why We Exist",
    text: "Millions of women in Tanzania face barriers to healthcare — limited access, stigma, and lack of information. We're changing that through technology.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-section-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-gold-dark tracking-widest uppercase">About Us</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
            Reaching Her, <span className="text-primary">Reaching Health</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            REACHHER HEALTHTECH is a nonprofit organization based in Kilimanjaro, Tanzania, dedicated to improving the health of women and girls through digital innovation, community outreach, and empowerment programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-green-light flex items-center justify-center mb-5">
                <card.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Founder's message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm"
        >
          <p className="text-lg font-body text-muted-foreground italic leading-relaxed mb-6">
            "Every woman deserves to know her body, understand her health, and make informed choices. At REACHHER HEALTHTECH, we believe that technology and community are the bridges to a healthier future for women and girls across Tanzania."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">
              R
            </div>
            <div>
              <p className="font-body font-semibold text-foreground">Founder & Executive Director</p>
              <p className="text-sm text-muted-foreground font-body">REACHHER HEALTHTECH</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
