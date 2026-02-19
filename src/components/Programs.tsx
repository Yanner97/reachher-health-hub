import { motion } from "framer-motion";
import { Smartphone, BookOpen, Stethoscope, Users, Brain } from "lucide-react";

const programs = [
  {
    icon: Smartphone,
    title: "Digital Health Solutions",
    description: "Mobile health apps, SMS appointment reminders, and WhatsApp support groups connecting women to vital health information.",
    tag: "Technology",
  },
  {
    icon: BookOpen,
    title: "Community Health Education",
    description: "Grassroots workshops and awareness campaigns addressing maternal health, family planning, and disease prevention.",
    tag: "Education",
  },
  {
    icon: Stethoscope,
    title: "Cancer Screening & Mobile Clinics",
    description: "Bringing cervical and breast cancer screening directly to underserved communities through mobile clinic outreach.",
    tag: "Healthcare",
  },
  {
    icon: Users,
    title: "Peer Health Champions",
    description: "Training young women as health ambassadors in their communities, creating a network of informed peer educators.",
    tag: "Leadership",
  },
  {
    icon: Brain,
    title: "Mental Wellness & Empowerment",
    description: "Support groups and mental health initiatives helping women and girls build confidence and emotional resilience.",
    tag: "Wellness",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-gold-dark tracking-widest uppercase">Our Programs</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
            What We <span className="text-primary">Do</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            From digital tools to in-person outreach, our programs are designed to meet women and girls where they are.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-green-light group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center">
                  <program.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                </div>
                <span className="text-xs font-body font-semibold text-gold-dark bg-gold/15 px-3 py-1 rounded-full">
                  {program.tag}
                </span>
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
