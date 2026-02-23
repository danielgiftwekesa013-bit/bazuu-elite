import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">Find Us</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
          Our <span className="text-gradient-gold">Location</span>
        </h2>
        <div className="glass-panel rounded-lg p-8 md:p-12 gold-border-glow">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Gatua, Kitale</h3>
          <p className="text-muted-foreground font-body">Trans-Nzoia County, Kenya</p>
          <div className="mt-8 w-full h-48 rounded-lg bg-muted/50 flex items-center justify-center border border-border/50">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2 animate-float" />
              <p className="text-sm text-muted-foreground font-body">Bazuu Furnitures Workshop</p>
              <p className="text-xs text-muted-foreground/70 font-body mt-1">Gatua, Kitale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
