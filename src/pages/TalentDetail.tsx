import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useTalentDetail } from "../hooks/useTalentDetail";

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

const proficiencyLabel = (level: number | null) => {
  switch (level) {
    case 1: return "Grundkenntnisse";
    case 2: return "Fortgeschritten";
    case 3: return "Gut";
    case 4: return "Sehr gut";
    case 5: return "Experte";
    default: return "";
  }
};

const formatDate = (dateStr: string | null) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("de-DE", { month: "short", year: "numeric" });
};

const TalentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { talent, loading, error } = useTalentDetail(id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in">
              <Link to="/talente" className="hover:text-primary transition-colors">Talente</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-foreground">{loading ? "..." : talent?.current_title || "Profil"}</span>
            </nav>

            {error && (
              <div className="text-center py-12">
                <p className="text-destructive">Fehler beim Laden: {error}</p>
                <Link to="/talente" className="btn-primary mt-4 inline-flex">Zurück zu Talente</Link>
              </div>
            )}

            {loading && (
              <div className="animate-pulse space-y-6">
                <div className="h-10 bg-muted rounded w-3/4" />
                <div className="flex gap-3">
                  <div className="h-8 bg-muted rounded-full w-32" />
                  <div className="h-8 bg-muted rounded-full w-28" />
                </div>
                <div className="h-40 bg-muted rounded-2xl" />
                <div className="h-40 bg-muted rounded-2xl" />
              </div>
            )}

            {!loading && !error && !talent && (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-secondary mb-4">Profil nicht gefunden</h2>
                <p className="text-muted-foreground mb-6">Dieses Profil existiert nicht mehr.</p>
                <Link to="/talente" className="btn-primary">Alle Talente ansehen</Link>
              </div>
            )}

            {!loading && !error && talent && (
              <div className="animate-fade-in-up space-y-8">
                {/* Header */}
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    {talent.current_title || "Fachkraft Steuerwesen"}
                  </h1>
                  <div className="flex flex-wrap gap-3">
                    {talent.city && (
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-muted text-muted-foreground font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {talent.city}{talent.country ? `, ${talent.country}` : ""}
                      </span>
                    )}
                    {availabilityLabel(talent.availability_status) && (
                      <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-medium ${availabilityColor(talent.availability_status)}`}>
                        {availabilityLabel(talent.availability_status)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Skills */}
                {talent.candidate_skills.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-card">
                    <h2 className="text-xl font-semibold text-secondary mb-6 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Fähigkeiten
                    </h2>
                    <div className="space-y-4">
                      {talent.candidate_skills
                        .sort((a, b) => (b.proficiency_level || 0) - (a.proficiency_level || 0))
                        .map((skill) => (
                          <div key={skill.id}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-medium text-secondary">{skill.skill_name}</span>
                              <div className="flex items-center gap-3">
                                {skill.years_experience && (
                                  <span className="text-xs text-muted-foreground">
                                    {skill.years_experience} {skill.years_experience === 1 ? "Jahr" : "Jahre"}
                                  </span>
                                )}
                                <span className="text-xs text-muted-foreground">
                                  {proficiencyLabel(skill.proficiency_level)}
                                </span>
                              </div>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary rounded-full transition-all duration-500"
                                style={{ width: `${((skill.proficiency_level || 0) / 5) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Experience */}
                {talent.candidate_experience.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-card">
                    <h2 className="text-xl font-semibold text-secondary mb-6 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Berufserfahrung
                    </h2>
                    <div className="space-y-6">
                      {talent.candidate_experience
                        .sort((a, b) => {
                          if (a.is_current && !b.is_current) return -1;
                          if (!a.is_current && b.is_current) return 1;
                          return (b.start_date || "").localeCompare(a.start_date || "");
                        })
                        .map((exp) => (
                          <div key={exp.id} className="relative pl-6 border-l-2 border-primary/20">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                              <h3 className="font-semibold text-secondary">{exp.position_title}</h3>
                              {exp.is_current && (
                                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                                  Aktuell
                                </span>
                              )}
                            </div>
                            {exp.company_name && (
                              <p className="text-primary font-medium text-sm mb-1">{exp.company_name}</p>
                            )}
                            <p className="text-xs text-muted-foreground mb-2">
                              {formatDate(exp.start_date)} – {exp.is_current ? "Heute" : formatDate(exp.end_date)}
                            </p>
                            {exp.description && (
                              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Education */}
                {talent.candidate_education.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-card">
                    <h2 className="text-xl font-semibold text-secondary mb-6 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      Ausbildung
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {talent.candidate_education.map((edu) => (
                        <div key={edu.id} className="p-4 rounded-xl bg-muted/50 border border-border/30">
                          <h3 className="font-semibold text-secondary mb-1">
                            {edu.degree}{edu.field_of_study ? ` – ${edu.field_of_study}` : ""}
                          </h3>
                          {edu.institution && (
                            <p className="text-sm text-primary font-medium mb-1">{edu.institution}</p>
                          )}
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            {edu.graduation_year && <span>Abschluss {edu.graduation_year}</span>}
                            {edu.grade && <span>Note: {edu.grade}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Languages */}
                {talent.candidate_languages.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-card">
                    <h2 className="text-xl font-semibold text-secondary mb-6 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                      Sprachen
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {talent.candidate_languages.map((lang) => (
                        <span
                          key={lang.id}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-secondary font-medium"
                        >
                          {lang.language}
                          {lang.proficiency && (
                            <span className="text-xs text-muted-foreground bg-background px-2 py-0.5 rounded-full">
                              {lang.proficiency}
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications */}
                {talent.candidate_certifications.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-card">
                    <h2 className="text-xl font-semibold text-secondary mb-6 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Zertifikate
                    </h2>
                    <div className="space-y-3">
                      {talent.candidate_certifications.map((cert) => (
                        <div key={cert.id} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-border/30">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-secondary">{cert.name}</p>
                            {cert.issuing_organization && (
                              <p className="text-sm text-muted-foreground">{cert.issuing_organization}</p>
                            )}
                            {cert.issue_date && (
                              <p className="text-xs text-muted-foreground mt-1">
                                Ausgestellt: {formatDate(cert.issue_date)}
                                {cert.expiry_date && ` · Gültig bis: ${formatDate(cert.expiry_date)}`}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-primary rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">Interesse an diesem Talent?</h3>
                  <p className="text-white/90 mb-6">
                    Kontaktieren Sie uns und wir stellen Ihnen dieses Talent persönlich vor.
                  </p>
                  <a
                    href="https://calendly.com/kanzleigewinner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300"
                  >
                    Kontakt aufnehmen
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <p className="text-white/60 text-sm mt-3">Unverbindliche Erstberatung</p>
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

export default TalentDetail;
