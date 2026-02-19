import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Mitarbeiter, die bleiben",
    description: "Keine Frühkündigungen mehr. Unsere Kandidaten passen wirklich zu Ihrer Kanzlei und bleiben langfristig.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Keine gelben Scheine",
    description: "Motivierte Mitarbeiter, die gerne zur Arbeit kommen. Weniger Krankheitstage, mehr Produktivität.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Intrinsisch motiviert",
    description: "Menschen, die aus eigenem Antrieb arbeiten. Kein Micromanagement nötig, volle Eigenverantwortung.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Proaktive Teamplayer",
    description: "Mitarbeiter, die sich aktiv einbringen, Prozesse verbessern und Ihr Team nach vorne bringen.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Anforderungsprofil",
    description: "Wir analysieren detailliert, wen Sie wirklich brauchen. Fachlich und menschlich.",
  },
  {
    number: "02",
    title: "Aktive Suche",
    description: "Unser Recruiter-Team durchsucht alle Kanäle nach passenden Kandidaten.",
  },
  {
    number: "03",
    title: "Tiefes Screening",
    description: "Jeder Kandidat wird persönlich geprüft: Fachkompetenz, Motivation, Persönlichkeit.",
  },
  {
    number: "04",
    title: "Vorstellung",
    description: "Sie erhalten nur Kandidaten, die wirklich zu Ihrer Kanzlei passen.",
  },
];

const FuerKanzleien = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 animate-fade-in">
              Für Kanzleien
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-in-up">
              Mitarbeiter, die bleiben.
              <span className="text-primary"> Garantiert.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
              Keine Algorithmen. Kein KI-Matching. Sondern ein echtes Team aus erfahrenen Recruitern,
              die jeden Kandidaten persönlich screenen und testen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
              <a href="#kontakt" className="btn-primary">
                Unverbindlich beraten lassen
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#prozess" className="btn-secondary">
                So funktioniert's
              </a>
            </div>
          </div>
        </section>

        {/* USP Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-4 animate-fade-in">Unser Ansatz</p>
              <h2 className="section-heading mb-4 animate-fade-in-up">
                Echte Recruiter. Echtes Screening.
              </h2>
              <p className="section-subheading mx-auto animate-fade-in-up animation-delay-100">
                Wir setzen nicht auf Technologie, sondern auf Menschen. Unser Team nimmt sich
                die Zeit, jeden Kandidaten wirklich kennenzulernen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Persönliche Gespräche</h3>
                <p className="text-muted-foreground">
                  Jeder Kandidat führt ausführliche Gespräche mit unserem Team. Wir lernen den Menschen kennen, nicht nur den Lebenslauf.
                </p>
              </div>

              <div className="text-center p-6 animate-fade-in-up animation-delay-100">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Detaillierte Tests</h3>
                <p className="text-muted-foreground">
                  Fachliche Kompetenz, Arbeitsweise, Motivation – wir prüfen alles, bevor ein Kandidat bei Ihnen vorgestellt wird.
                </p>
              </div>

              <div className="text-center p-6 animate-fade-in-up animation-delay-200">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Persönlichkeits-Match</h3>
                <p className="text-muted-foreground">
                  Wir achten darauf, dass der Kandidat nicht nur fachlich, sondern auch menschlich zu Ihrer Kanzlei passt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Network Section */}
        <section className="py-20 px-4 md:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <p className="text-primary font-medium mb-4">Das glauben Sie nicht?</p>
                <h2 className="section-heading mb-6">
                  Es gibt Bewerber, die warten auf den richtigen Arbeitgeber.
                </h2>
                <p className="text-muted-foreground mb-6">
                  Anders als klassische Recruiter suchen wir nicht erst, wenn Sie uns beauftragen.
                  Wir sind <strong className="text-secondary">permanent aktiv</strong> auf der Suche nach
                  den besten Talenten im Steuerbereich.
                </p>
                <p className="text-muted-foreground">
                  Deshalb sind wir bereits <strong className="text-secondary">extrem gut vernetzt</strong> mit
                  sehr vielen qualifizierten Profilen. Das ermöglicht uns kurze Recruiting-Zeiten –
                  und vor allem: dass Persönlichkeit und Anforderungen wirklich zusammenpassen.
                </p>
              </div>

              <div className="space-y-6 animate-fade-in-up animation-delay-100">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Proaktiv statt reaktiv</h3>
                    <p className="text-muted-foreground text-sm">
                      Wir warten nicht auf Ihre Anfrage. Unser Netzwerk wächst jeden Tag –
                      damit wir sofort liefern können, wenn Sie uns brauchen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Bestehendes Netzwerk</h3>
                    <p className="text-muted-foreground text-sm">
                      Hunderte qualifizierte Fachkräfte im Steuerbereich kennen und vertrauen uns bereits.
                      Sie warten auf den richtigen Arbeitgeber.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Richtige Matches</h3>
                    <p className="text-muted-foreground text-sm">
                      Uns ist wichtig, dass unsere Kandidaten beim richtigen Arbeitgeber landen.
                      Nur dann funktioniert es langfristig – für beide Seiten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 md:px-8 bg-secondary text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-4">Das Ergebnis</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mitarbeiter, die wirklich funktionieren
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Unser gründliches Screening sorgt dafür, dass Sie nur Kandidaten bekommen,
                die langfristig zu Ihrer Kanzlei beitragen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="prozess" className="py-20 px-4 md:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-4 animate-fade-in">Der Prozess</p>
              <h2 className="section-heading mb-4 animate-fade-in-up">
                So finden wir Ihre idealen Mitarbeiter
              </h2>
              <p className="section-subheading mx-auto animate-fade-in-up animation-delay-100">
                Ein strukturierter Prozess, der sicherstellt, dass Sie nur die besten Kandidaten kennenlernen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative p-6 rounded-2xl bg-white border border-border animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                <div className="font-semibold text-secondary mb-1">Vermittlungen</div>
                <div className="text-muted-foreground text-sm">Erfolgreich besetzte Stellen</div>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-100">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
                <div className="font-semibold text-secondary mb-1">Kanzleien</div>
                <div className="text-muted-foreground text-sm">Im DACH-Raum betreut</div>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-200">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4-6</div>
                <div className="font-semibold text-secondary mb-1">Wochen</div>
                <div className="text-muted-foreground text-sm">Durchschnittliche Besetzungszeit</div>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
                <div className="font-semibold text-secondary mb-1">Erfolgsquote</div>
                <div className="text-muted-foreground text-sm">Nach der Probezeit</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="py-20 px-4 md:px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
              Bereit für Mitarbeiter, die wirklich passen?
            </h2>
            <p className="text-white/90 text-lg mb-8 animate-fade-in-up animation-delay-100">
              Lassen Sie uns in einem unverbindlichen Gespräch herausfinden,
              wie wir Ihre Kanzlei mit den richtigen Menschen verstärken können.
            </p>
            <a
              href="https://calendly.com/kanzleigewinner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 animate-fade-in-up animation-delay-200"
            >
              Jetzt Erstgespräch buchen
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

export default FuerKanzleien;
