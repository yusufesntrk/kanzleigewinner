import { Link } from "react-router-dom";

const JobsTalentsSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Stellen & <span className="gradient-text">Talente</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Entdecken Sie offene Positionen oder finden Sie qualifizierte Fachkräfte für Ihre Kanzlei.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stellen Card */}
          <Link to="/stellen" className="group">
            <div className="feature-card h-full flex flex-col items-center text-center p-8 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Offene Stellen</h3>
              <p className="text-muted-foreground mb-6 flex-1">
                Aktuelle Positionen im Steuerberatungsumfeld — von Steuerfachangestellten bis hin zu Bilanzbuchhaltern und Steuerfachwirten.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Stellen ansehen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Talente Card */}
          <Link to="/talente" className="group">
            <div className="feature-card h-full flex flex-col items-center text-center p-8 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Top-Talente</h3>
              <p className="text-muted-foreground mb-6 flex-1">
                Qualifizierte Fachkräfte aus unserem Netzwerk — vorab geprüft, sofort verfügbar und bereit für Ihre Kanzlei.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                Talente entdecken
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobsTalentsSection;
