import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-amets.jpeg";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Activités", href: "#activites" },
  { label: "Équipe", href: "#equipe" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#accueil" className="flex items-center gap-3">
          <img src={logo} alt="AMETS" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-heading font-bold text-lg text-primary">AMETS</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition"
          >
            Rejoindre
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-foreground/70 hover:text-primary py-2"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="block px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold text-center">
            Rejoindre
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
