import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <Link to="/">
              <img
                src="/logo-white.svg"
                alt="Kanzleigewinner Logo"
                className="h-10 mb-4"
              />
            </Link>
            <p className="text-white/70 mb-4 max-w-md">
              Kanzleigewinner ist Ihr spezialisierter Partner für die Vermittlung von
              Fachkräften an Steuerberatungs- und Rechtsanwaltskanzleien im DACH-Raum.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/kanzleigewinner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/kanzleigewinner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <div className="space-y-3">
              <Link to="/fuer-kanzleien" className="block text-white/70 hover:text-white transition-colors">
                Für Kanzleien
              </Link>
              <Link to="/fuer-kandidaten" className="block text-white/70 hover:text-white transition-colors">
                Für Kandidaten
              </Link>
              <a
                href="https://calendly.com/kanzleigewinner"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Erstgespräch buchen
              </a>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3 text-white/70">
              <p>Hauptstraße 126</p>
              <p>77652 Offenburg</p>
              <a href="tel:078163909966" className="block hover:text-white transition-colors">
                0781 63909966
              </a>
              <a href="mailto:info@kanzleigewinner.de" className="block hover:text-white transition-colors">
                info@kanzleigewinner.de
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Kanzleigewinner. Alle Rechte vorbehalten.</p>
            <p className="mt-1">Agentur Marketing Invasion UG (haftungsbeschränkt)</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="/agb" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
