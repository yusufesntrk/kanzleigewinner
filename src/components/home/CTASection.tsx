const CTASection = () => {
  return (
    <section id="kontakt" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-8 md:p-12 text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/20 translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-sm font-medium mb-6 animate-fade-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Kostenlos & Unverbindlich
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Fachkräfte finden war noch nie so einfach
            </h2>

            {/* Subheadline */}
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
              Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden,
              wie wir Ihre offenen Stellen schnell und passend besetzen können.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
              <a
                href="tel:078163909966"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0781 63909966
              </a>
              <a
                href="mailto:info@kanzleigewinner.de"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                E-Mail senden
              </a>
            </div>

            {/* Trust Text */}
            <p className="text-white/60 text-sm mt-8 animate-fade-in animation-delay-300">
              Über 500 erfolgreiche Vermittlungen für 100+ Kanzleien
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
