import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo-amets.jpeg";

const HeroSection = () => (
  <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-hero-pattern overflow-hidden">
    {/* Subtle decorative elements */}
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
    <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

    <div className="container mx-auto px-4 pt-20 pb-16 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6"
      >
        <img
          src={logo}
          alt="Logo AMETS"
          className="w-28 h-28 md:w-36 md:h-36 rounded-2xl shadow-2xl object-cover"
        />
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight max-w-3xl">
          Association Médicale des Étudiants Tchadiens au Sénégal
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl font-light">
          Unis par la vocation médicale, engagés pour la santé de nos communautés.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="#apropos"
            className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition text-sm"
          >
            Découvrir
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition text-sm"
          >
            Nous contacter
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#apropos">
          <ArrowDown className="text-primary-foreground/50 animate-bounce" size={28} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
