import { Globe, Camera, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-amets.jpeg";

const socials = [
  { icon: Globe, href: "https://facebook.com", label: "Facebook" },
  { icon: Camera, href: "https://instagram.com", label: "Instagram" },
  { icon: Phone, href: "https://wa.me/221778396015", label: "WhatsApp" },
];

const Footer = () => (
  <footer className="bg-navy-gradient pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="AMETS" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <span className="font-heading font-bold text-lg text-primary-foreground">AMETS</span>
              <p className="text-primary-foreground/50 text-xs">Association Médicale des Étudiants Tchadiens au Sénégal</p>
            </div>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Unis par la vocation médicale, engagés pour la santé de nos communautés au Tchad et au Sénégal.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Navigation</h4>
          <ul className="space-y-2">
            {["Accueil", "À propos", "Activités", "Équipe", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l === "Accueil" ? "accueil" : l === "À propos" ? "apropos" : l === "Activités" ? "activites" : l === "Équipe" ? "equipe" : "contact"}`}
                  className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact</h4>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <MapPin size={14} className="shrink-0" /> Dakar, Sénégal
            </div>
            <a href="mailto:hassanmaidegaga@gmail.com" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              <Mail size={14} className="shrink-0" /> hassanmaidegaga@gmail.com
            </a>
            <a href="tel:+221778396015" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              <Phone size={14} className="shrink-0" /> +221 77 839 60 15
            </a>
          </div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-3">Suivez-nous</h4>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors group"
              >
                <s.icon size={18} className="text-primary-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} AMETS. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
