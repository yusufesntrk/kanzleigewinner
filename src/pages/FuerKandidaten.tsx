import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Passende Kanzleien",
    description: "Wir stellen dir nur Kanzleien vor, die wirklich zu deinen Anforderungen und Wünschen passen.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Bewerbungscoaching",
    description: "Wir bereiten dich optimal auf Vorstellungsgespräche vor – damit du überzeugst.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Besseres Gehalt",
    description: "Wir kennen den Markt und helfen dir, das Gehalt zu bekommen, das du verdienst.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "100% Kostenlos",
    description: "Für dich als Kandidat entstehen keinerlei Kosten. Wir werden von den Kanzleien bezahlt.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Erstgespräch",
    description: "Wir lernen dich kennen. Was sind deine Ziele? Was ist dir wichtig? Wo willst du hin?",
  },
  {
    number: "02",
    title: "Dein Profil",
    description: "Gemeinsam erstellen wir dein Profil und verstehen genau, was du suchst.",
  },
  {
    number: "03",
    title: "Passende Stellen",
    description: "Wir stellen dir nur Kanzleien vor, die wirklich zu dir passen.",
  },
  {
    number: "04",
    title: "Vorbereitung",
    description: "Du bekommst ein individuelles Coaching für deine Vorstellungsgespräche.",
  },
  {
    number: "05",
    title: "Dein neuer Job",
    description: "Du startest in deiner neuen Kanzlei – mit einem Job, der wirklich zu dir passt.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Steuerfachangestellte",
    company: "Jetzt: Kanzlei in München",
    quote: "Ich war skeptisch, ob eine Vermittlung wirklich was bringt. Aber das Team hat sich wirklich Zeit für mich genommen und mir eine Kanzlei vorgestellt, die perfekt zu mir passt. Ich bin super happy!",
  },
  {
    name: "Thomas K.",
    role: "Steuerfachwirt",
    company: "Jetzt: Mittelständische Kanzlei",
    quote: "Das Bewerbungscoaching war Gold wert. Ich habe mich noch nie so gut auf ein Gespräch vorbereitet gefühlt. Und das Ergebnis: 20% mehr Gehalt als vorher!",
  },
  {
    name: "Lisa B.",
    role: "Steuerfachangestellte",
    company: "Jetzt: Boutique-Kanzlei",
    quote: "Endlich jemand, der mir zugehört hat. Keine Massenabfertigung, sondern echte persönliche Betreuung. Mein neuer Job macht mir richtig Spaß!",
  },
];

const FuerKandidaten = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 animate-fade-in">
              Für Kandidaten
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-in-up">
              Du stehst im
              <span className="text-primary"> Mittelpunkt.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
              Finde die Kanzlei, die wirklich zu dir passt. Mit persönlicher Betreuung,
              die sich Zeit für dich nimmt – nicht für Algorithmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
              <a href="#kontakt" className="btn-primary">
                Kostenlos Erstgespräch buchen
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#vorteile" className="btn-secondary">
                Deine Vorteile
              </a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <p className="text-primary font-medium mb-4">Kennst du das?</p>
                <h2 className="section-heading mb-6">
                  Du bist gut in dem, was du tust. Aber irgendwas fehlt.
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-muted-foreground">Du verdienst weniger, als du eigentlich wert bist?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-muted-foreground">Das Arbeitsklima passt nicht zu dir?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-muted-foreground">Du willst dich weiterentwickeln, aber es gibt keine Perspektive?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-muted-foreground">Du hast keine Zeit oder Lust auf endlose Bewerbungen?</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted/50 p-8 rounded-2xl animate-fade-in-up animation-delay-100">
                <p className="text-lg font-semibold text-secondary mb-4">
                  Dann lass uns das ändern.
                </p>
                <p className="text-muted-foreground mb-6">
                  Wir nehmen uns persönlich die Zeit, dich kennenzulernen. Nicht als Nummer,
                  sondern als Mensch. Deine Ziele, deine Wünsche, dein Leben – darum geht es uns.
                </p>
                <p className="text-muted-foreground">
                  Wir stellen dir nur Kanzleien vor, die wirklich zu dir passen. Damit du
                  endlich einen Job hast, der dich glücklich macht.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="vorteile" className="py-20 px-4 md:px-8 bg-secondary text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-4">Deine Vorteile</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Wir sind für dich da
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Persönliche Betreuung von Anfang bis Ende. Weil du mehr verdienst
                als Massenabfertigung.
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
        <section className="py-20 px-4 md:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-4 animate-fade-in">So läuft's ab</p>
              <h2 className="section-heading mb-4 animate-fade-in-up">
                Dein Weg zum Traumjob
              </h2>
              <p className="section-subheading mx-auto animate-fade-in-up animation-delay-100">
                Einfach, persönlich und komplett kostenlos für dich.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative p-6 rounded-2xl bg-white border border-border animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-4 animate-fade-in">Erfolgsgeschichten</p>
              <h2 className="section-heading mb-4 animate-fade-in-up">
                Das sagen unsere Kandidaten
              </h2>
              <p className="section-subheading mx-auto animate-fade-in-up animation-delay-100">
                Echte Menschen, echte Geschichten, echte Erfolge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="p-6 rounded-2xl bg-white border border-border animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex items-center gap-1 text-primary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-secondary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="py-20 px-4 md:px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
              Bereit für deinen Traumjob?
            </h2>
            <p className="text-white/90 text-lg mb-8 animate-fade-in-up animation-delay-100">
              Lass uns in einem kostenlosen Erstgespräch herausfinden,
              welche Kanzlei perfekt zu dir passt.
            </p>
            <a
              href="https://calendly.com/kanzleigewinner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 animate-fade-in-up animation-delay-200"
            >
              Jetzt kostenlos Erstgespräch buchen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="text-white/70 text-sm mt-4 animate-fade-in-up animation-delay-300">
              100% kostenlos und unverbindlich
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FuerKandidaten;
