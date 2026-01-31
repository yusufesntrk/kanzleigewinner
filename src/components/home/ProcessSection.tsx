import RecruitingCycleAnimation from "./RecruitingAnimation";

const ProcessSection = () => {
  return (
    <section id="prozess" className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-primary font-medium mb-4 animate-fade-in">So einfach geht's</p>
          <h2 className="section-heading mb-4 animate-fade-in-up">
            Von der Anfrage zur Einstellung
          </h2>
          <p className="section-subheading mx-auto animate-fade-in-up animation-delay-100">
            In nur 1-2 Wochen zu Ihrem neuen Mitarbeiter. Garantiert.
          </p>
        </div>

        {/* Cycle Animation */}
        <div className="animate-fade-in-up animation-delay-200">
          <RecruitingCycleAnimation />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 animate-fade-in-up animation-delay-300">
          <a href="#kontakt" className="btn-primary">
            Jetzt Anfrage stellen
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
