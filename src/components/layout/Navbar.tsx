import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <nav className="w-full py-4 px-4 md:px-8 fixed top-0 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between bg-card/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-card border border-border/50">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 min-h-[44px]">
            <img
              src="/logo.svg"
              alt="Kanzleigewinner Logo"
              className="h-8 md:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/fuer-kanzleien" className="nav-link">Für Kanzleien</Link>
            <Link to="/fuer-kandidaten" className="nav-link">Für Kandidaten</Link>
            <Link to="/referenzen" className="nav-link">Referenzen</Link>
            {isHomepage && (
              <a href="#prozess" className="nav-link">Ablauf</a>
            )}
          </div>

          {/* CTA Button */}
          <a href={isHomepage ? "#kontakt" : "https://calendly.com/kanzleigewinner"} target={isHomepage ? undefined : "_blank"} rel={isHomepage ? undefined : "noopener noreferrer"} className="hidden md:inline-flex btn-primary">
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
              <Link to="/" className="nav-link text-center" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/fuer-kanzleien" className="nav-link text-center" onClick={() => setIsOpen(false)}>Für Kanzleien</Link>
              <Link to="/fuer-kandidaten" className="nav-link text-center" onClick={() => setIsOpen(false)}>Für Kandidaten</Link>
              <Link to="/referenzen" className="nav-link text-center" onClick={() => setIsOpen(false)}>Referenzen</Link>
              {isHomepage && (
                <a href="#prozess" className="nav-link text-center" onClick={() => setIsOpen(false)}>Ablauf</a>
              )}
              <a href={isHomepage ? "#kontakt" : "https://calendly.com/kanzleigewinner"} target={isHomepage ? undefined : "_blank"} rel={isHomepage ? undefined : "noopener noreferrer"} className="btn-primary text-center mt-2" onClick={() => setIsOpen(false)}>Erstgespräch</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
