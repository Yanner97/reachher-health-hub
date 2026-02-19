import { motion } from "framer-motion";
import { Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tanzanian women and girls using health technology in their community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block bg-gold/20 text-gold border border-gold/30 px-4 py-1.5 rounded-full text-sm font-body font-semibold mb-6 tracking-wide">
            🌍 Kilimanjaro, Tanzania
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Empowering Women.{" "}
            <span className="text-gold">Advancing Health.</span>{" "}
            Transforming Communities.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
            REACHHER HEALTHTECH uses technology, education, and community leadership to ensure every woman and girl is informed, confident, and empowered to take control of her health.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#get-involved"
              className="bg-gold-gradient text-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
            >
              <Heart size={20} />
              Donate Now
            </a>
            <a
              href="#about"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-colors flex items-center gap-2"
            >
              <Users size={20} />
              Partner With Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
