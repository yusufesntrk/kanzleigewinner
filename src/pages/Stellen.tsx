import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useJobs } from "../hooks/useJobs";

const Stellen = () => {
  const { jobs, loading, error } = useJobs();

  const formatSalary = (salary: { min: number; max: number; currency: string } | null) => {
    if (!salary) return null;
    const fmt = (n: number) =>
      new Intl.NumberFormat("de-DE", { style: "currency", currency: salary.currency, maximumFractionDigits: 0 }).format(n);
    return `${fmt(salary.min)} – ${fmt(salary.max)}`;
  };

  const remoteLabel = (option: string | null) => {
    switch (option) {
      case "full": return "100% Remote";
      case "hybrid": return "Hybrid";
      case "partial": return "Teilweise Remote";
      default: return null;
    }
  };

  const employmentLabel = (type: string | null) => {
    switch (type) {
      case "full_time": return "Vollzeit";
      case "part_time": return "Teilzeit";
      case "contract": return "Freiberuflich";
      case "internship": return "Praktikum";
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 animate-fade-in">Karriere</p>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 animate-fade-in-up">
              Offene <span className="text-primary">Stellen</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
              {loading
                ? "Stellen werden geladen..."
                : `${jobs.length} offene Positionen im Steuerberatungsumfeld`}
            </p>
          </div>
        </section>

        {/* Jobs Grid */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {error && (
              <div className="text-center py-12">
                <p className="text-destructive">Fehler beim Laden: {error}</p>
              </div>
            )}

            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="feature-card animate-pulse">
                    <div className="h-6 bg-muted rounded w-3/4 mb-4" />
                    <div className="h-4 bg-muted rounded w-1/2 mb-3" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                  </div>
                ))}
              </div>
            )}

            {!loading && !error && jobs.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">Aktuell keine offenen Stellen.</p>
              </div>
            )}

            {!loading && !error && jobs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.map((job, index) => (
                  <Link
                    key={job.id}
                    to={`/stellen/${job.id}`}
                    className="feature-card group animate-fade-in-up"
                    style={{ animationDelay: `${(index % 6) * 80}ms` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.department && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {job.department.name}
                        </span>
                      )}
                      {job.location && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location.city || job.location.name}
                        </span>
                      )}
                      {remoteLabel(job.remote_option) && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          {remoteLabel(job.remote_option)}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {employmentLabel(job.employment_type) && (
                        <span>{employmentLabel(job.employment_type)}</span>
                      )}
                      {formatSalary(job.salary_range) && (
                        <span className="font-medium text-secondary">{formatSalary(job.salary_range)}</span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
              Nichts Passendes dabei?
            </h2>
            <p className="text-white/90 text-lg mb-8 animate-fade-in-up animation-delay-100">
              Wir haben oft Positionen, die noch nicht ausgeschrieben sind.
              Lass uns in einem Erstgespräch herausfinden, was zu dir passt.
            </p>
            <a
              href="https://calendly.com/kanzleigewinner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 animate-fade-in-up animation-delay-200"
            >
              Initiativ bewerben
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

export default Stellen;
