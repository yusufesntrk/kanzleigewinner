const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Active Sourcing",
    description: "Wir suchen proaktiv nach passenden Kandidaten in unserem Netzwerk und auf allen relevanten Plattformen.",
    features: ["LinkedIn & Xing Recruiting", "Direktansprache", "Kandidaten-Datenbank"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Social Recruiting",
    description: "Datengetriebene Kampagnen auf Facebook, Instagram und LinkedIn, um auch passive Kandidaten zu erreichen.",
    features: ["Facebook & Instagram Ads", "Zielgruppen-Targeting", "Performance-Optimierung"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Kandidaten-Vorauswahl",
    description: "Wir prüfen Qualifikationen, führen Erstgespräche und präsentieren Ihnen nur passende Bewerber.",
    features: ["Qualifikations-Check", "Telefon-Interviews", "Persönlichkeits-Matching"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Schnelle Besetzung",
    description: "Durch unser Netzwerk und erprobte Prozesse besetzen wir Ihre offenen Stellen in kürzester Zeit.",
    features: ["Ø 4-6 Wochen Besetzungszeit", "Garantie auf Nachbesetzung", "Persönliche Betreuung"],
  },
];

const ServicesSection = () => {
  return (
    <section id="leistungen" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 animate-fade-in">Unsere Leistungen</p>
          <h2 className="section-heading mb-4 animate-fade-in-up">
            So finden wir Ihre neuen Mitarbeiter
          </h2>
          <p className="section-subheading mx-auto animate-fade-in-up animation-delay-100">
            Wir kombinieren moderne Recruiting-Methoden mit tiefem Branchenwissen,
            um die besten Fachkräfte für Ihre Kanzlei zu gewinnen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="feature-card group animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
