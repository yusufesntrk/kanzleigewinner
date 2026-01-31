import { useEffect, useState } from "react";

const TypingEffect = ({ texts }: { texts: string[] }) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pulsing Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
              style={{
                width: `${300 + i * 200}px`,
                height: `${300 + i * 200}px`,
                animation: `pulse-ring 4s ease-out infinite`,
                animationDelay: `${i * 1}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(var(--secondary) / 0.2) 0%, transparent 70%)',
          }}
        />

        {/* Floating Dots */}
        <div className="hidden lg:block">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30 animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDuration: `${4 + i}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Pre-headline Badge */}
        <div className="badge-floating mb-6 animate-fade-in">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Personalvermittlung für Kanzleien</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-secondary">Wir finden Ihre </span>
          <br />
          <span className="text-primary inline-block min-h-[1.2em]">
            <TypingEffect
              texts={[
                'Steuerfachangestellten',
                'Bilanzbuchhalter',
                'Steuerfachwirte',
                'Lohnbuchhalter',
              ]}
            />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-200 max-w-2xl mx-auto">
          Der Fachkräftemangel in Kanzleien ist real. Wir lösen ihn – mit gezieltem
          Social Recruiting und einem Netzwerk aus qualifizierten Kandidaten.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
          <a href="#kontakt" className="btn-primary">
            Kostenloses Erstgespräch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#prozess" className="btn-secondary">
            So funktioniert's
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-in animation-delay-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>100+ Kanzleien betreut</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>500+ erfolgreiche Vermittlungen</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>1-2 Wochen bis zur Einstellung</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
