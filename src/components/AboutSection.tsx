import { useScrollReveal } from "@/hooks/useScrollReveal";
import workshopImage from "@/assets/about-workshop.jpg";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="wood-divider mb-16" />
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">About Us</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Crafting <span className="text-gradient-gold">Excellence</span> Since Day One
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Bazuu Furnitures is a premium furniture workshop based in Gatua, Kitale. We specialize in custom wood furniture, interior finishing, luxury sofas, wardrobes, cabinets, doors, and professional repair services.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Every piece is built with strength, style, and durability. Our commitment to quality craftsmanship and attention to detail sets us apart in the furniture industry.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-bronze/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <img src={workshopImage} alt="Bazuu Furnitures workshop in Gatua, Kitale" className="relative rounded-lg w-full h-80 md:h-96 object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
