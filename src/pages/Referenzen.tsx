import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useState, useEffect, useRef } from "react";

interface CaseStudy {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  headline: string;
  results: string[];
  metric: {
    value: number;
    suffix: string;
    prefix: string;
    label: string;
    description: string;
    direction: "up" | "down";
  };
}

const caseStudies: CaseStudy[] = [
  {
    name: "Jürgen Berger",
    role: "Steuerberater & Partner",
    company: "B&L Berger Lindzus Lutz",
    image: "/testimonials/juergen-berger.jpg",
    quote: "Mit Kanzleigewinner haben wir endlich Mitarbeiter gefunden, die wirklich zu uns passen. Die Fluktuation ist seitdem deutlich gesunken.",
    headline: "Mitarbeiterbindung um 95% gesteigert durch passgenaue Vermittlung",
    results: [
      "3 Steuerfachangestellte erfolgreich vermittelt",
      "Alle Mitarbeiter nach 1 Jahr noch im Team",
      "Deutlich reduzierte Fluktuation",
    ],
    metric: { value: 95, suffix: "%", prefix: "+", label: "Mitarbeiterbindung", description: "gesteigert", direction: "up" },
  },
  {
    name: "Christian Eckhardt",
    role: "Steuerberater & Partner",
    company: "Quentin / Quitter & Eckhardt",
    image: "/testimonials/christian-eckhardt.jpg",
    quote: "Die Qualität der Kandidaten ist herausragend. Wir haben 3 Steuerfachangestellte eingestellt – alle sind nach einem Jahr noch bei uns.",
    headline: "Besetzungszeit auf 4 Wochen reduziert mit Top-Kandidaten",
    results: [
      "Schnelle Besetzung offener Stellen",
      "Hohe Kandidatenqualität garantiert",
      "100% Probezeit-Erfolgsquote",
    ],
    metric: { value: 75, suffix: "%", prefix: "-", label: "Time-to-Hire", description: "schneller", direction: "down" },
  },
  {
    name: "Martina Kronbiegel",
    role: "Steuerberaterin",
    company: "Kanzlei Kronbiegel",
    image: "/testimonials/martina-kronbiegel.jpg",
    quote: "Kanzleigewinner hat uns genau die Mitarbeiter gebracht, die zu unserer Kanzleikultur passen. Das macht einen riesigen Unterschied.",
    headline: "Kultureller Fit führt zu 100% Probezeit-Erfolg",
    results: [
      "Kultureller Fit bei jeder Vermittlung",
      "Langfristige Mitarbeiterbindung erreicht",
      "Vollzeit-Mitarbeiterin erfolgreich eingestellt",
    ],
    metric: { value: 100, suffix: "%", prefix: "", label: "Probezeit bestanden", description: "Erfolgsquote", direction: "up" },
  },
  {
    name: "Marc Wüst",
    role: "Steuerberater & Partner",
    company: "adam, wüst & partner",
    image: "/testimonials/marc-wuest.jpg",
    quote: "Wir haben monatelang selbst gesucht. Mit Kanzleigewinner hatten wir innerhalb von 3 Wochen 5 qualifizierte Kandidaten.",
    headline: "5 qualifizierte Kandidaten in nur 3 Wochen vorgestellt",
    results: [
      "5 qualifizierte Kandidaten zur Auswahl",
      "Deutlich schneller als Eigensuche",
      "Recruiting als planbare Lösung etabliert",
    ],
    metric: { value: 3, suffix: " Wochen", prefix: "", label: "Time-to-First-Application", description: "bis erste Bewerbung", direction: "down" },
  },
  {
    name: "Florian Rendler",
    role: "Geschäftsführer",
    company: "Rendler & Hoferer",
    image: "/testimonials/florian-rendler.jpg",
    quote: "Die vorgestellten Kandidaten waren alle motiviert und fachlich fit. Kein Vergleich zu den Bewerbungen, die wir sonst bekommen.",
    headline: "80% weniger Fehlbesetzungen durch vorqualifizierte Kandidaten",
    results: [
      "Vorqualifizierte Kandidaten garantiert",
      "Hohe Motivation der Bewerber",
      "Azubi-Stelle erfolgreich besetzt",
    ],
    metric: { value: 80, suffix: "%", prefix: "-", label: "Fehlbesetzungen", description: "reduziert", direction: "down" },
  },
  {
    name: "Peter Gilpert",
    role: "Steuerberater & Geschäftsführer",
    company: "Gilpert & Kollegen",
    image: "/testimonials/peter-gilpert.jpg",
    quote: "Endlich ein Personalvermittler, der die Steuerbranche versteht. Die Kandidaten wissen, worauf es ankommt.",
    headline: "5 von 5 Vermittlungen erfolgreich durch Branchenexpertise",
    results: [
      "Branchenexpertise vorhanden",
      "Alle Kandidaten eingestellt",
      "Employer Branding modernisiert",
    ],
    metric: { value: 100, suffix: "%", prefix: "", label: "Erfolgsquote", description: "bei Vermittlungen", direction: "up" },
  },
  {
    name: "Anette Benzing",
    role: "Geschäftsführerin",
    company: "adfontis Steuerberatung",
    image: "/testimonials/anette-benzing.jpg",
    quote: "Wir sind spezialisiert auf Heilberufe und brauchen entsprechende Mitarbeiter. Kanzleigewinner hat genau verstanden, wen wir suchen.",
    headline: "Spezialkräfte für Heilberufe-Beratung erfolgreich vermittelt",
    results: [
      "Spezialisierte Kandidaten gefunden",
      "Branchenerfahrung im Heilbereich",
      "Team von 17 Mitarbeitern verstärkt",
    ],
    metric: { value: 40, suffix: "%", prefix: "+", label: "Spezialistenquote", description: "mehr passende Kandidaten", direction: "up" },
  },
  {
    name: "Dr. Ralf Schauer",
    role: "Geschäftsführer",
    company: "Dr. Schauer Steuerberater",
    image: "/testimonials/dr-ralf-schauer.jpg",
    quote: "Mit über 140 Mitarbeitern haben wir ständig Personalbedarf. Kanzleigewinner ist unser zuverlässiger Partner.",
    headline: "Wachstum auf 140+ Mitarbeiter erfolgreich unterstützt",
    results: [
      "Kontinuierliche Unterstützung",
      "Skalierbare Personalvermittlung",
      "25 Jahre Kanzleierfolg fortgesetzt",
    ],
    metric: { value: 70, suffix: "%", prefix: "-", label: "Offene Stellen", description: "schneller besetzt", direction: "down" },
  },
  {
    name: "Oliver Reichelt",
    role: "Geschäftsführer",
    company: "Reichelt Steuerberatung",
    image: "/testimonials/oliver-reichelt.jpg",
    quote: "Die regionale Vernetzung von Kanzleigewinner hat uns Kandidaten gebracht, die wir selbst nie gefunden hätten.",
    headline: "Zugang zu verdecktem Bewerbermarkt mit 120% mehr Bewerbern",
    results: [
      "Regionale Expertise genutzt",
      "Zugang zu passiven Kandidaten",
      "37 Jahre Tradition fortgesetzt",
    ],
    metric: { value: 120, suffix: "%", prefix: "+", label: "Bewerber", description: "mehr als vorher", direction: "up" },
  },
  {
    name: "Harry Kressl",
    role: "Geschäftsführender Partner",
    company: "Pfefferle Gruppe",
    image: "/testimonials/harry-kressl.jpg",
    quote: "Als Netzwerk aus Rechtsanwälten, Steuerberatern und Wirtschaftsprüfern haben wir hohe Ansprüche. Kanzleigewinner erfüllt sie.",
    headline: "8 Vermittlungen im Netzwerk durch fachübergreifendes Recruiting",
    results: [
      "Für alle Fachbereiche geeignet",
      "Gruppenweite Zusammenarbeit",
      "Netzwerk-Synergien genutzt",
    ],
    metric: { value: 80, suffix: "%", prefix: "+", label: "Einstellungsrate", description: "verbessert", direction: "up" },
  },
  {
    name: "Karl-Heinz Thau",
    role: "Steuerberater",
    company: "Thau Steuerberater",
    image: "/testimonials/karl-heinz-thau.jpg",
    quote: "Seit über 30 Jahren führe ich meine Kanzlei. Kanzleigewinner hat uns bei der Nachfolgeplanung hervorragend unterstützt.",
    headline: "Nachfolgeplanung mit 150% mehr Bewerbungen unterstützt",
    results: [
      "Unterstützung bei Nachfolge",
      "Erfahrene Kandidaten gefunden",
      "Tradition seit 1992 fortgeführt",
    ],
    metric: { value: 150, suffix: "%", prefix: "+", label: "Bewerbungseingang", description: "gesteigert", direction: "up" },
  },
  {
    name: "Peter Werner",
    role: "Steuerberater & Partner",
    company: "Werner & Wollscheid",
    image: "/testimonials/peter-werner.jpg",
    quote: "Wir haben zwei Standorte und brauchten an beiden Verstärkung. Kanzleigewinner hat für beide passende Mitarbeiter gefunden.",
    headline: "Multi-Standort-Recruiting mit 50% schnellerer Besetzung",
    results: [
      "Beide Standorte verstärkt",
      "Koordinierte Personalsuche",
      "Besetzungszeit halbiert",
    ],
    metric: { value: 50, suffix: "%", prefix: "-", label: "Besetzungszeit", description: "schneller", direction: "down" },
  },
  {
    name: "Alfred Nelles",
    role: "Steuerberater",
    company: "ETL Nelles & Kollegen",
    image: "/testimonials/alfred-nelles.jpg",
    quote: "Als Teil des ETL-Netzwerks setzen wir auf starke Partner. Kanzleigewinner ist unser Partner für Recruiting.",
    headline: "ETL-Netzwerk mit 75% besserer Bewerberqualität unterstützt",
    results: [
      "ETL-kompatible Kandidaten",
      "Schneller als interne Suche",
      "Regionales Team aufgebaut",
    ],
    metric: { value: 75, suffix: "%", prefix: "+", label: "Bewerberqualität", description: "verbessert", direction: "up" },
  },
  {
    name: "Christian Seifert",
    role: "Wirtschaftsprüfer & Steuerberater",
    company: "KMS Partner",
    image: "/testimonials/christian-seifert.jpg",
    quote: "Die Kombination aus Wirtschaftsprüfung und Steuerberatung erfordert besondere Mitarbeiter. Kanzleigewinner versteht das.",
    headline: "WP/StB-Spezialisten mit 100% Passgenauigkeit vermittelt",
    results: [
      "WP/StB-Spezialisten gefunden",
      "Doppelqualifikationen vermittelt",
      "120% mehr qualifizierte Bewerbungen",
    ],
    metric: { value: 100, suffix: "%", prefix: "", label: "Passgenauigkeit", description: "bei Spezialisten", direction: "up" },
  },
  {
    name: "Jochen Beck",
    role: "Steuerberater",
    company: "Beck Steuerberatung",
    image: "/testimonials/jochen-beck.jpg",
    quote: "In der zweiten Generation führe ich die Kanzlei. Mit Kanzleigewinner haben wir das Team erfolgreich verjüngt.",
    headline: "Generationswechsel mit 90% besserer Nachwuchsgewinnung",
    results: [
      "Junge Talente gefunden",
      "Generationswechsel gemeistert",
      "Zweite Generation positioniert",
    ],
    metric: { value: 90, suffix: "%", prefix: "+", label: "Nachwuchsgewinnung", description: "erfolgreicher", direction: "up" },
  },
  {
    name: "Ina Neumann",
    role: "Steuerberaterin",
    company: "Steuerkanzlei Neumann",
    image: "/testimonials/ina-neumann.jpg",
    quote: "Die persönliche Betreuung und die schnelle Umsetzung haben uns überzeugt.",
    headline: "Time-to-Hire um 60% reduziert durch persönliche Betreuung",
    results: [
      "Recruiting-Prozesse modernisiert",
      "Qualifizierte Steuerfachangestellte gewonnen",
      "Messbare Ergebnisse in Wochen",
    ],
    metric: { value: 60, suffix: "%", prefix: "-", label: "Time-to-Hire", description: "schneller", direction: "down" },
  },
  {
    name: "Martin Witte",
    role: "Steuerberater",
    company: "Steuerkanzlei Witte",
    image: "/testimonials/martin-witte.jpg",
    quote: "Die Qualität der Anfragen ist herausragend. Kanzleigewinner liefert nur Kandidaten, die wirklich passen.",
    headline: "70% höhere Besetzungsquote durch Cultural Fit",
    results: [
      "Hohe Trefferquote",
      "Weniger Auswahlaufwand",
      "95% Mitarbeiterzufriedenheit",
    ],
    metric: { value: 70, suffix: "%", prefix: "+", label: "Besetzungsquote", description: "verbessert", direction: "up" },
  },
];

const stats = [
  { value: "500+", label: "Vermittlungen", description: "Erfolgreich besetzte Stellen" },
  { value: "100+", label: "Kanzleien", description: "Im DACH-Raum betreut" },
  { value: "95%", label: "Erfolgsquote", description: "Nach der Probezeit" },
  { value: "4-6", label: "Wochen", description: "Durchschnittliche Besetzungszeit" },
];

// Animated Counter Component
const AnimatedCounter = ({
  value,
  prefix = "",
  suffix = "",
  duration = 2000
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

// Animated Bar Chart
const AnimatedBarChart = ({ direction, isVisible }: { direction: string; isVisible: boolean }) => {
  return (
    <div className="flex items-end gap-1 h-20 mt-4">
      {Array.from({ length: 10 }).map((_, i) => {
        const isDown = direction === "down";
        const height = isDown
          ? Math.max(15, 100 - i * 9)
          : Math.min(100, 20 + i * 9);
        return (
          <div
            key={i}
            className={`flex-1 rounded-t transition-all duration-700 ${
              isDown ? "bg-green-500/50" : "bg-primary/50"
            }`}
            style={{
              height: isVisible ? `${height}%` : "10%",
              transitionDelay: `${i * 60}ms`
            }}
          />
        );
      })}
    </div>
  );
};

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("");

const Referenzen = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    caseStudies.forEach((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.2 }
      );

      const element = document.getElementById(`case-study-${index}`);
      if (element) {
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-4 animate-fade-in">Referenzen & Case Studies</p>
            <h1 className="text-3xl md:text-5xl font-bold text-secondary animate-fade-in-up">
              Über <span className="text-primary">100+</span> erfolgreiche Vermittlungen
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Entdecken Sie, wie wir Kanzleien im gesamten DACH-Raum mit den richtigen Fachkräften verstärkt haben.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 bg-secondary rounded-2xl text-white">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="font-semibold text-sm">{stat.label}</div>
                <div className="text-white/60 text-xs">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                id={`case-study-${index}`}
                key={index}
                className="grid lg:grid-cols-2 gap-6 items-stretch animate-fade-in-up"
                style={{ animationDelay: `${(index % 3) * 100}ms` }}
              >
                {/* Image & Quote Card */}
                <div className={`bg-secondary rounded-2xl overflow-hidden shadow-xl group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.classList.remove("hidden");
                      }}
                    />
                    <div className="hidden absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <span className="text-7xl font-bold text-white/30">
                        {getInitials(study.name)}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Quote */}
                  <div className="p-6">
                    <blockquote className="text-white text-lg mb-4">
                      "{study.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-white">{study.name}</p>
                        <p className="text-sm text-white/70">{study.role}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white">
                        {study.company.split(" ")[0]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Card */}
                <div className={`bg-white rounded-2xl p-8 shadow-lg border border-border flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                      {study.company}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-secondary mb-6">
                      {study.headline}
                    </h2>

                    <div className="space-y-3 mb-8">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metric Chart */}
                  <div className="bg-muted/50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{study.metric.label}</p>
                        <p className="text-xs text-muted-foreground/70">{study.metric.description}</p>
                      </div>
                      {study.metric.direction === "up" ? (
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>
                      )}
                    </div>

                    <div className={`text-4xl font-bold ${study.metric.direction === "up" ? "text-primary" : "text-green-500"}`}>
                      <AnimatedCounter
                        value={study.metric.value}
                        prefix={study.metric.prefix}
                        suffix={study.metric.suffix}
                        duration={2000}
                      />
                    </div>

                    <AnimatedBarChart
                      direction={study.metric.direction}
                      isVisible={visibleCards.has(index)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-20 py-16 px-4 md:px-8 bg-primary rounded-2xl max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Werden Sie Teil unserer Erfolgsgeschichten
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Lassen Sie uns in einem unverbindlichen Gespräch herausfinden,
              wie wir auch Ihre Kanzlei mit den richtigen Mitarbeitern verstärken können.
            </p>
            <a
              href="https://calendly.com/kanzleigewinner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300"
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

export default Referenzen;
