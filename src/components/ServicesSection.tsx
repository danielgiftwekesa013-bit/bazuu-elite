import { useScrollReveal } from "@/hooks/useScrollReveal";
import serviceBeds from "@/assets/service-beds.jpg";
import serviceSofas from "@/assets/service-sofas.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceWardrobes from "@/assets/service-wardrobes.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceDoors from "@/assets/service-doors.jpg";

const services = [
  { icon: "🛏", title: "Custom Beds & Furniture", desc: "Modern and classic bed designs.", image: serviceBeds },
  { icon: "🛋", title: "Sofa Sets", desc: "Luxury sofa designs with premium finishing.", image: serviceSofas },
  { icon: "🏡", title: "Interior Design", desc: "Wood finishing and interior space transformation.", image: serviceInterior },
  { icon: "🚪", title: "Wardrobes", desc: "Custom built-in wardrobes.", image: serviceWardrobes },
  { icon: "🍽", title: "Kitchen Cabinets", desc: "Modern kitchen cabinetry and fittings.", image: serviceKitchen },
  { icon: "🔧", title: "Repair Services", desc: "Restoration and repair of old furniture.", image: serviceRepair },
  { icon: "🔐", title: "Doors & Locks", desc: "Strong wooden doors and professional lock installations.", image: serviceDoors },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="group relative glass-panel rounded-lg overflow-hidden hover:gold-border-glow transition-all duration-500"
      style={{ transitionDelay: `${index * 50}ms` }}>
      <div className="relative h-48 overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <span className="absolute top-4 left-4 text-2xl">{service.icon}</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
        <p className="text-sm text-muted-foreground font-body">{service.desc}</p>
      </div>
    </div>
  );
};

export default ServicesSection;
