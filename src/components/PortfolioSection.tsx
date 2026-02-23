import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X } from "lucide-react";
import serviceBeds from "@/assets/service-beds.jpg";
import serviceSofas from "@/assets/service-sofas.jpg";
import serviceWardrobes from "@/assets/service-wardrobes.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import galleryTvstand from "@/assets/gallery-tvstand.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import serviceDoors from "@/assets/service-doors.jpg";

const galleryItems = [
  { title: "King Size Bed", image: serviceBeds, span: "col-span-2 row-span-2" },
  { title: "L-Shaped Sofa", image: serviceSofas, span: "" },
  { title: "Custom Wardrobe", image: serviceWardrobes, span: "" },
  { title: "Kitchen Cabinet", image: serviceKitchen, span: "col-span-2" },
  { title: "TV Stand", image: galleryTvstand, span: "" },
  { title: "Dining Table", image: galleryDining, span: "" },
  { title: "Wooden Door", image: serviceDoors, span: "" },
];

const PortfolioSection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useScrollReveal();

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Premium <span className="text-gradient-gold">Portfolio</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <div key={item.title}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${item.span}`}
              onClick={() => setLightbox(i)}>
              <img src={item.image} alt={item.title} className="w-full h-full min-h-[200px] object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-center justify-center">
                <span className="text-foreground font-heading font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-lg">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[90] bg-background/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={32} />
          </button>
          <img src={galleryItems[lightbox].image} alt={galleryItems[lightbox].title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
