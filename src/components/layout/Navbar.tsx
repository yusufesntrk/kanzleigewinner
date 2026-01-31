import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-4 md:px-8 fixed top-0 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between bg-card/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-card border border-border/50">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 min-h-[44px]">
            <img
              src="https://kanzleigewinner.de/wp-content/uploads/2020/07/Kanzleigewinner_logo.jpg"
              alt="Kanzleigewinner Logo"
              className="h-10 rounded-lg"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <a href="#leistungen" className="nav-link">Leistungen</a>
            <a href="#vorteile" className="nav-link">Vorteile</a>
            <a href="#prozess" className="nav-link">Ablauf</a>
            <a href="#testimonials" className="nav-link">Referenzen</a>
          </div>

          {/* CTA Button */}
          <a href="#kontakt" className="hidden md:inline-flex btn-primary">
            Erstgespräch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-card rounded-2xl shadow-card border border-border/50 p-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              <a href="#leistungen" className="nav-link text-center" onClick={() => setIsOpen(false)}>Leistungen</a>
              <a href="#vorteile" className="nav-link text-center" onClick={() => setIsOpen(false)}>Vorteile</a>
              <a href="#prozess" className="nav-link text-center" onClick={() => setIsOpen(false)}>Ablauf</a>
              <a href="#testimonials" className="nav-link text-center" onClick={() => setIsOpen(false)}>Referenzen</a>
              <a href="#kontakt" className="btn-primary text-center mt-2" onClick={() => setIsOpen(false)}>Erstgespräch</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
