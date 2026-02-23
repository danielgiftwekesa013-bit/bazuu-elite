import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-panel shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="text-xl md:text-2xl font-heading font-bold text-gradient-gold">
          Bazuu
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase">
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/254700904945" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-body font-medium rounded-sm gold-border-glow text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            WhatsApp Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground p-2" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-border/50 animate-reveal">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                className="text-sm font-body text-muted-foreground hover:text-primary transition-colors py-2 uppercase tracking-wide">
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/254700904945" target="_blank" rel="noopener noreferrer"
              className="px-5 py-3 text-sm font-body font-medium rounded-sm gold-border-glow text-primary text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
