import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Target, Users, Heart, BookOpen } from "lucide-react";
import activityHealth from "@/assets/activity-health.jpg";
import activityAcademic from "@/assets/activity-academic.jpg";
import activityHumanitarian from "@/assets/activity-humanitarian.jpg";
import activityFormation from "@/assets/activity-formation.jpg";

const activities = [
  {
    image: activityHealth,
    title: "Campagnes de santé communautaire",
    desc: "Organisation de journées de sensibilisation, dépistage gratuit et consultations médicales au profit des populations défavorisées à Dakar et au Tchad.",
    tag: "Santé publique",
    icon: Target,
    details: [
      "Journées de dépistage gratuit (diabète, hypertension, VIH) dans les quartiers de Dakar",
      "Campagnes de sensibilisation sur les maladies tropicales",
      "Consultations médicales gratuites pour les communautés défavorisées",
      "Distribution de médicaments essentiels et de moustiquaires imprégnées",
      "Collaboration avec les structures de santé locales pour un impact durable",
    ],
    impact: "Plus de 500 personnes bénéficiaires chaque année",
  },
  {
    image: activityAcademic,
    title: "Soutien académique & tutorat",
    desc: "Sessions de révision collectives, partage de cours et préparation intensive aux examens pour garantir la réussite de chaque membre.",
    tag: "Académique",
    icon: BookOpen,
    details: [
      "Séances de tutorat hebdomadaires pour les étudiants en première année",
      "Préparation collective aux examens avec QCM et cas cliniques",
      "Bibliothèque partagée de ressources pédagogiques numériques",
      "Mentorat par les étudiants des années supérieures",
      "Ateliers de méthodologie de travail et de gestion du stress",
    ],
    impact: "Taux de réussite amélioré de 30% chez les membres",
  },
  {
    image: activityHumanitarian,
    title: "Actions humanitaires",
    desc: "Collectes de fonds, dons de matériel médical et missions de santé organisées chaque été au Tchad pour nos communautés d'origine.",
    tag: "Humanitaire",
    icon: Heart,
    details: [
      "Missions de santé annuelles au Tchad pendant les vacances d'été",
      "Collecte et envoi de matériel médical (stéthoscopes, tensiomètres, etc.)",
      "Campagnes de collecte de fonds pour financer les projets communautaires",
      "Partenariats avec des ONG pour maximiser l'impact des interventions",
      "Suivi post-mission pour assurer la continuité des soins",
    ],
    impact: "3 missions humanitaires réalisées ",
  },
  {
    image: activityFormation,
    title: "Conférences & formations",
    desc: "Organisation de séminaires, conférences et ateliers avec des professionnels de santé pour enrichir la formation de nos membres.",
    tag: "Formation",
    icon: Users,
    details: [
      "Conférences mensuelles avec des médecins spécialistes et chercheurs",
      "Ateliers pratiques sur les gestes de premiers secours",
      "Séminaires sur les enjeux de santé publique en Afrique",
      "Formation en leadership et gestion de projets de santé",
      "Rencontres avec des anciens membres devenus professionnels de santé",
    ],
    impact: "Plus de 20 conférences organisées depuis la création",
  },
];

const ActivitiesSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="activites" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">
            Ce que nous faisons
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2">
            Nos Activités
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Découvrez les principales actions menées par l'AMETS pour soutenir ses membres et contribuer à la santé communautaire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  width={800}
                  height={544}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                  {a.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {a.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {a.desc}
                </p>
                <button
                  onClick={() => setSelected(i)}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all cursor-pointer bg-transparent border-none p-0"
                >
                  En savoir plus <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activity Detail Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card rounded-2xl overflow-hidden max-w-lg w-full max-h-[85vh] overflow-y-auto border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48">
                <img
                  src={activities[selected].image}
                  alt={activities[selected].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                    {activities[selected].tag}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white mt-2">
                    {activities[selected].title}
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-5">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {activities[selected].desc}
                </p>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                    {(() => { const Icon = activities[selected].icon; return <Icon size={18} className="text-primary" />; })()}
                    Nos actions concrètes
                  </h4>
                  <ul className="space-y-2">
                    {activities[selected].details.map((d, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        {d}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 border border-border">
                  <p className="text-sm font-semibold text-primary flex items-center gap-2">
                    📊 Impact : <span className="text-foreground font-normal">{activities[selected].impact}</span>
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelected(null);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition"
                >
                  Nous rejoindre
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ActivitiesSection;
