import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Erreur", description: "Veuillez remplir tous les champs.", variant: "destructive" });
      return;
    }

    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) throw error;

      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
      setTimeout(() => setSent(false), 4000);
    } catch {
      toast({ title: "Erreur", description: "Impossible d'envoyer le message. Réessayez.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Restons en contact</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2">Contactez-nous</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Vous êtes étudiant tchadien en sciences de la santé au Sénégal ? Rejoignez l'AMETS
              et faites partie d'une communauté engagée et solidaire.
            </p>
            <div className="space-y-4">
              <a href="mailto:hassanmaidegaga@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <span className="text-sm">hassanmaidegaga@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="text-sm">Dakar, Sénégal</span>
              </div>
              <a href="tel:+221778396015" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="text-sm">+221 77 839 60 15</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Nom complet"
              value={formData.name}
              onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              maxLength={100}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              maxLength={255}
              required
            />
            <textarea
              rows={4}
              placeholder="Votre message..."
              value={formData.message}
              onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              maxLength={1000}
              required
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {sending ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Envoi en cours...
                </>
              ) : sent ? (
                <>
                  <CheckCircle size={16} /> Envoyé !
                </>
              ) : (
                <>
                  <Send size={16} /> Envoyer
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
