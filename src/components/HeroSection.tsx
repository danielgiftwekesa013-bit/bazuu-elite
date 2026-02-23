import heroImage from "@/assets/hero-showroom.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Luxury furniture showroom by Bazuu Furnitures" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <p className="text-primary text-sm md:text-base tracking-[0.4em] uppercase mb-6 font-body animate-reveal">
          Premium Handcrafted Furniture
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6 animate-reveal" style={{ animationDelay: "0.2s" }}>
          Luxury Furniture{" "}
          <span className="text-gradient-gold">Designed to Impress</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body animate-reveal" style={{ animationDelay: "0.4s" }}>
          Premium handcrafted wood solutions in Gatua, Kitale.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal" style={{ animationDelay: "0.6s" }}>
          <a href="#portfolio" className="px-8 py-3.5 rounded-sm gold-border-glow text-primary font-body font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View Portfolio
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-sm border border-border text-foreground font-body font-medium tracking-wide hover:border-primary/50 transition-all duration-300">
            Get a Quote
          </a>
          <a href="https://wa.me/254700904945" target="_blank" rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-sm bg-primary text-primary-foreground font-body font-medium tracking-wide hover:bg-primary/90 transition-all duration-300">
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
