import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useJobDetail } from "../hooks/useJobs";

const StellenDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { job, loading, error } = useJobDetail(id);

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
        <section className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in">
              <Link to="/stellen" className="hover:text-primary transition-colors">Stellen</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-foreground">{loading ? "..." : job?.title || "Nicht gefunden"}</span>
            </nav>

            {error && (
              <div className="text-center py-12">
                <p className="text-destructive">Fehler beim Laden: {error}</p>
                <Link to="/stellen" className="btn-primary mt-4 inline-flex">Zurück zu Stellen</Link>
              </div>
            )}

            {loading && (
              <div className="animate-pulse space-y-6">
                <div className="h-10 bg-muted rounded w-3/4" />
                <div className="flex gap-3">
                  <div className="h-8 bg-muted rounded-full w-32" />
                  <div className="h-8 bg-muted rounded-full w-28" />
                </div>
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-5/6" />
                <div className="h-4 bg-muted rounded w-4/6" />
              </div>
            )}

            {!loading && !error && !job && (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-secondary mb-4">Stelle nicht gefunden</h2>
                <p className="text-muted-foreground mb-6">Diese Stelle existiert nicht mehr oder wurde deaktiviert.</p>
                <Link to="/stellen" className="btn-primary">Alle Stellen ansehen</Link>
              </div>
            )}

            {!loading && !error && job && (
              <div className="animate-fade-in-up">
                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">{job.title}</h1>

                <div className="flex flex-wrap gap-3 mb-8">
                  {job.department && (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {job.department.name}
                    </span>
                  )}
                  {job.location && (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-muted text-muted-foreground font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location.city || job.location.name}
                    </span>
                  )}
                  {remoteLabel(job.remote_option) && (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {remoteLabel(job.remote_option)}
                    </span>
                  )}
                  {employmentLabel(job.employment_type) && (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-muted text-muted-foreground font-medium">
                      {employmentLabel(job.employment_type)}
                    </span>
                  )}
                  {formatSalary(job.salary_range) && (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {formatSalary(job.salary_range)}
                    </span>
                  )}
                </div>

                {/* Description */}
                {job.description && (
                  <div className="prose prose-lg max-w-none mb-12">
                    <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                      <h2 className="text-xl font-semibold text-secondary mb-4">Stellenbeschreibung</h2>
                      <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {job.description}
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-primary rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">Interesse an dieser Position?</h3>
                  <p className="text-white/90 mb-6">
                    Lass uns in einem unverbindlichen Gespräch herausfinden, ob diese Stelle zu dir passt.
                  </p>
                  <a
                    href="https://calendly.com/kanzleigewinner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300"
                  >
                    Jetzt bewerben
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <p className="text-white/60 text-sm mt-3">100% kostenlos und unverbindlich</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StellenDetail;
