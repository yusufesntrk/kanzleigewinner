const benefits = [
  {
    number: "500+",
    label: "Vermittlungen",
    description: "Erfolgreich besetzte Stellen",
  },
  {
    number: "100+",
    label: "Kanzleien",
    description: "Im DACH-Raum betreut",
  },
  {
    number: "4-6",
    label: "Wochen",
    description: "Durchschnittliche Besetzungszeit",
  },
  {
    number: "95%",
    label: "Erfolgsquote",
    description: "Nach der Probezeit",
  },
];

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Kanzlei-Spezialisten",
    description: "Wir verstehen die besonderen Anforderungen von Steuerberatungs- und Rechtsanwaltskanzleien.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Vorqualifizierte Kandidaten",
    description: "Sie erhalten nur Bewerber, die wir persönlich geprüft haben und die zu Ihrer Kanzlei passen.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Nachbesetzungs-Garantie",
    description: "Sollte ein Kandidat in der Probezeit ausscheiden, finden wir kostenfrei Ersatz.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Erfolgsbasierte Vergütung",
    description: "Sie zahlen erst bei erfolgreicher Vermittlung. Kein Risiko, kein Vorabkosten.",
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
            Ihr Partner für Kanzlei-Recruiting
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Der Markt für Steuerfachkräfte ist hart umkämpft. Mit uns haben Sie einen
            spezialisierten Partner an Ihrer Seite.
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
