import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useTalents } from "../hooks/useTalents";

const availabilityLabel = (status: string | null) => {
  switch (status) {
    case "immediately": return "Sofort verfügbar";
    case "two_weeks": return "In 2 Wochen";
    case "one_month": return "In 1 Monat";
    case "three_months": return "In 3 Monaten";
    case "not_looking": return "Nicht aktiv suchend";
    default: return null;
  }
};

const availabilityColor = (status: string | null) => {
  switch (status) {
    case "immediately": return "bg-green-100 text-green-700";
    case "two_weeks": return "bg-emerald-100 text-emerald-700";
    case "one_month": return "bg-yellow-100 text-yellow-700";
    case "three_months": return "bg-orange-100 text-orange-700";
    default: return "bg-muted text-muted-foreground";
  }
};

const Talente = () => {
  const { talents, loading, error } = useTalents();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 animate-fade-in">Unsere Kandidaten</p>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 animate-fade-in-up">
              Top-<span className="text-primary">Talente</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
              {loading
                ? "Profile werden geladen..."
                : `${talents.length} qualifizierte Fachkräfte aus dem Steuerberatungsumfeld`}
            </p>
          </div>
        </section>

        {/* Talents Grid */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {error && (
              <div className="text-center py-12">
                <p className="text-destructive">Fehler beim Laden: {error}</p>
              </div>
            )}

            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="feature-card animate-pulse">
                    <div className="h-5 bg-muted rounded w-24 mb-3" />
                    <div className="h-6 bg-muted rounded w-3/4 mb-4" />
                    <div className="flex gap-2 mb-3">
                      <div className="h-6 bg-muted rounded-full w-20" />
                      <div className="h-6 bg-muted rounded-full w-16" />
                    </div>
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </div>
                ))}
              </div>
            )}

            {!loading && !error && talents.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">Aktuell keine Profile verfügbar.</p>
              </div>
            )}

            {!loading && !error && talents.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {talents.map((talent, index) => {
                  const topSkills = (talent.candidate_skills || [])
                    .sort((a, b) => (b.proficiency_level || 0) - (a.proficiency_level || 0))
                    .slice(0, 3);
                  const code = `KG-${String(index + 1).padStart(3, "0")}`;

                  return (
                    <Link
                      key={talent.id}
                      to={`/talente/${talent.id}`}
                      className="feature-card group animate-fade-in-up"
                      style={{ animationDelay: `${(index % 9) * 60}ms` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                          {code}
                        </span>
                        {availabilityLabel(talent.availability_status) && (
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${availabilityColor(talent.availability_status)}`}>
                            {availabilityLabel(talent.availability_status)}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors mb-1">
                        {talent.current_title || "Fachkraft Steuerwesen"}
                      </h3>

                      {talent.city && (
                        <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {talent.city}{talent.country ? `, ${talent.country}` : ""}
                        </p>
                      )}

                      {topSkills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {topSkills.map((skill) => (
                            <span
                              key={skill.id}
                              className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                            >
                              {skill.skill_name}
                            </span>
                          ))}
                          {talent.candidate_skills.length > 3 && (
                            <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                              +{talent.candidate_skills.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
                        <span className="text-sm text-primary font-medium group-hover:underline">
                          Profil ansehen
                        </span>
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
              Interesse an einem Talent?
            </h2>
            <p className="text-white/90 text-lg mb-8 animate-fade-in-up animation-delay-100">
              Kontaktieren Sie uns und wir stellen Ihnen die passenden Kandidaten persönlich vor.
            </p>
            <a
              href="https://calendly.com/kanzleigewinner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 animate-fade-in-up animation-delay-200"
            >
              Erstgespräch vereinbaren
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Talente;
