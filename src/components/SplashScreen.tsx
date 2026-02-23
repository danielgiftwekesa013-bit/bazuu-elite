import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "services" | "done">("logo");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("services"), 3000);
    const timer2 = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 5500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden transition-opacity duration-700"
      style={{ opacity: phase === "done" ? 0 : 1 }}>
      {/* Animated wood grain bg */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, hsl(var(--bronze) / 0.3) 40px, hsl(var(--bronze) / 0.3) 41px)`,
          animation: "grain 8s steps(6) infinite",
        }}
      />

      {phase === "logo" && (
        <div className="text-center animate-reveal z-10">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gold-border-glow flex items-center justify-center">
              <span className="text-3xl font-heading font-bold text-gradient-gold">B</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient-gold gold-text-glow mb-4">
            Bazuu Furnitures
          </h1>
          <p className="text-muted-foreground text-lg tracking-[0.3em] uppercase font-body">
            Crafting Luxury. Building Comfort.
          </p>
          <div className="mt-8 w-48 h-0.5 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
        </div>
      )}

      {phase === "services" && (
        <div className="w-full max-w-5xl px-4 z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: "🛏", name: "Custom Beds" },
              { icon: "🛋", name: "Sofa Sets" },
              { icon: "🏡", name: "Interior Design" },
              { icon: "🚪", name: "Wardrobes" },
              { icon: "🍽", name: "Kitchen Cabinets" },
              { icon: "🔧", name: "Furniture Repair" },
              { icon: "🔐", name: "Doors & Locks" },
              { icon: "✨", name: "Explore More" },
            ].map((item, i) => (
              <div
                key={item.name}
                className="glass-panel rounded-lg p-4 md:p-6 text-center gold-border-glow animate-reveal hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="text-2xl md:text-3xl block mb-2">{item.icon}</span>
                <span className="text-xs md:text-sm font-body text-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
