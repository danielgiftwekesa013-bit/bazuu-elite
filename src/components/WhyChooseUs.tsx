import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";

const reasons = [
  "High-Quality Materials",
  "Skilled Craftsmanship",
  "Affordable Luxury",
  "Custom Designs",
  "Reliable Delivery",
];

const WhyChooseUs = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div ref={ref}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">Why Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
            Why Choose <span className="text-gradient-gold">Bazuu</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <div key={reason} className="glass-panel rounded-lg p-6 flex items-center gap-4 hover:gold-border-glow transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-foreground font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
