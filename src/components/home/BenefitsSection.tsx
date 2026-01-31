const benefits = [
  {
    number: "100+",
    label: "Kanzleien betreut",
    description: "Im gesamten DACH-Raum",
  },
  {
    number: "6+",
    label: "Jahre Erfahrung",
    description: "Seit 2018 am Markt",
  },
  {
    number: "1000+",
    label: "Bewerbungen generiert",
    description: "Für unsere Kunden",
  },
  {
    number: "95%",
    label: "Kundenzufriedenheit",
    description: "Langfristige Partnerschaften",
  },
];

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Branchenexperten",
    description: "Wir kennen die Herausforderungen von Steuerberatern und Rechtsanwälten aus erster Hand.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Schnelle Ergebnisse",
    description: "Unsere erprobten Systeme liefern messbare Ergebnisse bereits in den ersten Wochen.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Persönliche Betreuung",
    description: "Ein fester Ansprechpartner begleitet Sie durch den gesamten Prozess.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Messbare Erfolge",
    description: "Transparentes Reporting und klare KPIs für Ihren nachhaltigen Erfolg.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="vorteile" className="py-20 px-4 md:px-8 bg-secondary text-white">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {benefit.number}
              </div>
              <div className="font-semibold mb-1">{benefit.label}</div>
              <div className="text-white/60 text-sm">{benefit.description}</div>
            </div>
          ))}
        </div>

        {/* Why Us */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-4">Warum Kanzleigewinner?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ihr Partner für den digitalen Erfolg
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Wir verstehen die besonderen Anforderungen von Kanzleien und bieten
            maßgeschneiderte Lösungen für Ihren nachhaltigen Erfolg.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-white/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
