import { motion } from "framer-motion";
import { User } from "lucide-react";

const team = [
  { name: "Président(e)", role: "Président(e)", initials: "PR" },
  { name: "Vice-Président(e)", role: "Vice-Président(e)", initials: "VP" },
  { name: "Secrétaire Général(e)", role: "Secrétaire Général(e)", initials: "SG" },
  { name: "Trésorier(ère)", role: "Trésorier(ère)", initials: "TR" },
  { name: "Chargé(e) de Communication", role: "Communication", initials: "CM" },
  { name: "Chargé(e) des Activités", role: "Activités", initials: "AC" },
];

const TeamSection = () => (
  <section id="equipe" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-accent">
          Notre équipe
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2">
          Bureau Exécutif
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Les membres dévoués qui dirigent et coordonnent les activités de l'AMETS.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {team.map((m, i) => (
          <motion.div
            key={m.role}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-navy-gradient flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow ring-4 ring-secondary/30">
              <User className="text-primary-foreground" size={36} />
            </div>
            <h3 className="font-heading font-semibold text-foreground text-sm md:text-base">
              {m.name}
            </h3>
            <p className="text-muted-foreground text-xs mt-1">{m.role}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-sm mt-12 italic"
      >
        Les photos et noms des membres seront ajoutés prochainement.
      </motion.p>
    </div>
  </section>
);

export default TeamSection;
