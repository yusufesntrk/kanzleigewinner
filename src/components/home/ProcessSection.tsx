const steps = [
  {
    number: "01",
    title: "Anfrage senden",
    description: "Sagen Sie uns, wen Sie suchen. In 2 Minuten erledigt.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    color: "from-red-500 to-orange-500",
  },
  {
    number: "02",
    title: "Profile erhalten",
    description: "Innerhalb von 48h erhalten Sie passende Kandidaten.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "from-orange-500 to-amber-500",
  },
  {
    number: "03",
    title: "Auswählen",
    description: "Wählen Sie Ihre Favoriten für ein Gespräch aus.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-amber-500 to-yellow-500",
  },
  {
    number: "04",
    title: "Einstellen",
    description: "Vertrag unterschreiben. Fertig in einer Woche.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: "from-green-500 to-emerald-500",
  },
];

const ProcessSection = () => {
  return (
    <section id="prozess" className="py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 animate-fade-in">So einfach geht's</p>
          <h2 className="section-heading mb-4 animate-fade-in-up">
            Neuer Mitarbeiter in <span className="text-primary">einer Woche</span>
          </h2>
          <p className="section-subheading mx-auto animate-fade-in-up animation-delay-100">
            Kein langes Suchen. Kein Warten. Kein Risiko.
          </p>
        </div>

        {/* Animated Steps */}
        <div className="relative">
          {/* Connection Line - Animated */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            <div className="h-full bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full"
                 style={{
                   animation: 'shimmer 3s ease-in-out infinite',
                   backgroundSize: '200% 100%'
                 }}
            />
          </div>

          <style>{`
            @keyframes shimmer {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }

            @keyframes step-pop {
              0% { transform: scale(0.8); opacity: 0; }
              60% { transform: scale(1.05); }
              100% { transform: scale(1); opacity: 1; }
            }

            @keyframes number-pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.1); }
            }

            .step-card {
              animation: step-pop 0.6s ease-out forwards;
              opacity: 0;
            }

            .step-card:hover .step-number {
              animation: number-pulse 0.5s ease-in-out;
            }

            .step-card:hover .step-icon {
              transform: rotate(10deg) scale(1.1);
            }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="step-card relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="relative bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-lg transition-all duration-300 group">
                  {/* Step Number - Floating */}
                  <div className={`step-number absolute -top-4 -right-2 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white font-bold text-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="step-icon w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-secondary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>

                  {/* Arrow to next (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-500">
          <p className="text-muted-foreground mb-4">
            Bereit für Ihren neuen Mitarbeiter?
          </p>
          <a href="#kontakt" className="btn-primary">
            Jetzt starten
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
