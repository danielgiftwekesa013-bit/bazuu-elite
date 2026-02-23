const Footer = () => {
  return (
    <footer className="relative">
      <div className="wood-divider" />
      <div className="bg-card py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-heading font-bold text-gradient-gold mb-4">Bazuu Furnitures</h3>
          <p className="text-muted-foreground font-body text-sm mb-2">📍 Gatua, Kitale</p>
          <p className="text-muted-foreground font-body text-sm mb-6">📞 0700 904 945</p>
          <div className="wood-divider mb-6 max-w-xs mx-auto" />
          <p className="text-muted-foreground/60 font-body text-xs">
            © 2026 Bazuu Furnitures – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
