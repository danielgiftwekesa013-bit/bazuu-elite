import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, MessageCircle, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Bazuu Furnitures!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/254700904945?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div ref={ref}>
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Contact <span className="text-gradient-gold">Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <a href="tel:+254700904945" className="glass-panel rounded-lg p-5 flex items-center gap-4 hover:gold-border-glow transition-all duration-300 block">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Call Us</p>
                  <p className="text-foreground font-body font-medium">0700 904 945</p>
                </div>
              </a>
              <a href="https://wa.me/254700904945" target="_blank" rel="noopener noreferrer"
                className="glass-panel rounded-lg p-5 flex items-center gap-4 hover:gold-border-glow transition-all duration-300 block">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">WhatsApp</p>
                  <p className="text-foreground font-body font-medium">0700 904 945</p>
                </div>
              </a>
              <a href="sms:+254700904945" className="glass-panel rounded-lg p-5 flex items-center gap-4 hover:gold-border-glow transition-all duration-300 block">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">SMS</p>
                  <p className="text-foreground font-body font-medium">0700 904 945</p>
                </div>
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input type="text" placeholder="Your Name" required
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div>
                <input type="tel" placeholder="Your Phone" required
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div>
                <textarea placeholder="Your Message" rows={5} required
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full py-3.5 rounded-sm bg-primary text-primary-foreground font-body font-medium tracking-wide hover:bg-primary/90 transition-all duration-300">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
