import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Globe } from "lucide-react";

const values = [
  { icon: Heart, title: "Solidarité", desc: "Entraide entre étudiants tchadiens en médecine au Sénégal." },
  { icon: Users, title: "Communauté", desc: "Un réseau soudé de futurs professionnels de santé." },
  { icon: BookOpen, title: "Excellence", desc: "Promouvoir l'excellence académique et professionnelle." },
  { icon: Globe, title: "Engagement", desc: "Actions de santé communautaire au Tchad et au Sénégal." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const AboutSection = () => (
  <section id="apropos" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-accent">Qui sommes-nous</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2">
          À propos de l'AMETS
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          L'AMETS regroupe les étudiants tchadiens en sciences de la santé au Sénégal. 
          Notre mission est de renforcer les liens entre étudiants, favoriser l'entraide 
          et contribuer au développement sanitaire du Tchad.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <v.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-sm">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
