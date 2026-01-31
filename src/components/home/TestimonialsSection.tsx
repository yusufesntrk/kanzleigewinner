const testimonials = [
  {
    quote: "Innerhalb von 4 Wochen hatten wir 3 qualifizierte Steuerfachangestellte zur Auswahl. Der Prozess war unkompliziert und professionell.",
    author: "Thomas M.",
    role: "Steuerberater, München",
    avatar: "TM",
  },
  {
    quote: "Wir haben monatelang selbst gesucht ohne Erfolg. Kanzleigewinner hat uns in kürzester Zeit den perfekten Bilanzbuchhalter vermittelt.",
    author: "Sandra K.",
    role: "Kanzleiinhaberin, Frankfurt",
    avatar: "SK",
  },
  {
    quote: "Die Vorauswahl ist Gold wert. Wir bekommen nur Kandidaten, die wirklich zu uns passen. Das spart enorm viel Zeit.",
    author: "Michael B.",
    role: "Steuerberater, Hamburg",
    avatar: "MB",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 animate-fade-in">Kundenstimmen</p>
          <h2 className="section-heading mb-4 animate-fade-in-up">
            Das sagen unsere Kunden
          </h2>
          <p className="section-subheading mx-auto animate-fade-in-up animation-delay-100">
            Kanzleien aus ganz Deutschland vertrauen auf unsere Personalvermittlung.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="feature-card animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-secondary">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
