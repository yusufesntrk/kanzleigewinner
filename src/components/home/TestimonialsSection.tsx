const testimonials = [
  {
    quote: "Dank Kanzleigewinner konnten wir innerhalb von 3 Monaten 5 neue qualifizierte Mitarbeiter einstellen. Das Social Recruiting System funktioniert hervorragend.",
    author: "Thomas M.",
    role: "Steuerberater, München",
    avatar: "TM",
  },
  {
    quote: "Die neue Website hat unsere Online-Präsenz komplett transformiert. Wir erhalten jetzt regelmäßig Anfragen von Wunsch-Mandanten.",
    author: "Sandra K.",
    role: "Rechtsanwältin, Frankfurt",
    avatar: "SK",
  },
  {
    quote: "Professionelle Beratung und schnelle Umsetzung. Das Team versteht die Bedürfnisse einer modernen Kanzlei.",
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
            Was unsere Kunden sagen
          </h2>
          <p className="section-subheading mx-auto animate-fade-in-up animation-delay-100">
            Erfahren Sie, wie wir Kanzleien in ganz Deutschland zum Erfolg verholfen haben.
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
