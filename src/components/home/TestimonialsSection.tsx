import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const testimonials = [
  {
    quote: "Mit Kanzleigewinner haben wir endlich Mitarbeiter gefunden, die wirklich zu uns passen. Die Fluktuation ist seitdem deutlich gesunken.",
    name: "Jürgen Berger",
    role: "Steuerberater & Partner",
    company: "B&L Berger Lindzus Lutz",
    image: "/testimonials/juergen-berger.jpg",
    metric: { value: "+95%", label: "Mitarbeiterbindung" },
  },
  {
    quote: "Die Qualität der Kandidaten ist herausragend. Wir haben 3 Steuerfachangestellte eingestellt – alle sind nach einem Jahr noch bei uns.",
    name: "Christian Eckhardt",
    role: "Steuerberater & Partner",
    company: "Quentin / Quitter & Eckhardt",
    image: "/testimonials/christian-eckhardt.jpg",
    metric: { value: "4 Wochen", label: "Besetzungszeit" },
  },
  {
    quote: "Endlich ein Personalvermittler, der versteht, worauf es in Kanzleien ankommt. Die vorgestellten Kandidaten waren alle top.",
    name: "Dr. Ralf Schauer",
    role: "Geschäftsführer",
    company: "Dr. Schauer Steuerberater",
    image: "/testimonials/dr-ralf-schauer.jpg",
    metric: { value: "140+", label: "Mitarbeiter" },
  },
  {
    quote: "Kanzleigewinner hat uns genau die Mitarbeiter gebracht, die zu unserer Kanzleikultur passen. Das macht einen riesigen Unterschied.",
    name: "Martina Kronbiegel",
    role: "Steuerberaterin",
    company: "Kanzlei Kronbiegel",
    image: "/testimonials/martina-kronbiegel.jpg",
    metric: { value: "100%", label: "Probezeit bestanden" },
  },
  {
    quote: "Wir haben monatelang selbst gesucht. Mit Kanzleigewinner hatten wir innerhalb von 3 Wochen 5 qualifizierte Kandidaten.",
    name: "Marc Wüst",
    role: "Steuerberater & Partner",
    company: "adam, wüst & partner",
    image: "/testimonials/marc-wuest.jpg",
    metric: { value: "3 Wochen", label: "Bis zur Vorstellung" },
  },
  {
    quote: "Die vorgestellten Kandidaten waren alle motiviert und fachlich fit. Kein Vergleich zu den Bewerbungen, die wir sonst bekommen.",
    name: "Florian Rendler",
    role: "Geschäftsführer",
    company: "Rendler & Hoferer",
    image: "/testimonials/florian-rendler.jpg",
    metric: { value: "+80%", label: "Weniger Fehlbesetzungen" },
  },
  {
    quote: "Endlich ein Personalvermittler, der die Steuerbranche versteht. Die Kandidaten wissen, worauf es ankommt.",
    name: "Peter Gilpert",
    role: "Steuerberater & Geschäftsführer",
    company: "Gilpert & Kollegen",
    image: "/testimonials/peter-gilpert.jpg",
    metric: { value: "5 von 5", label: "Vermittlungen erfolgreich" },
  },
  {
    quote: "Als Teil des ETL-Netzwerks setzen wir auf starke Partner. Kanzleigewinner ist unser Partner für Recruiting.",
    name: "Alfred Nelles",
    role: "Steuerberater",
    company: "ETL Nelles & Kollegen",
    image: "/testimonials/alfred-nelles.jpg",
    metric: { value: "+75%", label: "Schnellere Besetzung" },
  },
  {
    quote: "Die regionale Vernetzung von Kanzleigewinner hat uns Kandidaten gebracht, die wir selbst nie gefunden hätten.",
    name: "Oliver Reichelt",
    role: "Geschäftsführer",
    company: "Reichelt Steuerberatung",
    image: "/testimonials/oliver-reichelt.jpg",
    metric: { value: "+120%", label: "Mehr Bewerber" },
  },
  {
    quote: "In der zweiten Generation führe ich die Kanzlei. Mit Kanzleigewinner haben wir das Team erfolgreich verjüngt.",
    name: "Jochen Beck",
    role: "Steuerberater",
    company: "Beck Steuerberatung",
    image: "/testimonials/jochen-beck.jpg",
    metric: { value: "+80%", label: "Teamverjüngung" },
  },
];

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("");

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-4 animate-fade-in">Kundenstimmen</p>
          <h2 className="section-heading mb-4 animate-fade-in-up">
            Das sagen unsere Kunden
          </h2>
          <p className="section-subheading mx-auto animate-fade-in-up animation-delay-100">
            Über 100 Kanzleien im DACH-Raum vertrauen auf unsere Personalvermittlung.
          </p>
        </div>
      </div>

      {/* Manual Swiper Carousel */}
      <div className="w-full">
        <Swiper
          spaceBetween={24}
          slidesPerView="auto"
          grabCursor={true}
          className="!px-4 md:!px-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="!w-[320px] md:!w-[360px]">
              <div className="bg-white rounded-2xl border border-border overflow-hidden h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove("hidden");
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary/40">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                    {testimonial.company}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Metric Badge */}
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold mb-3 w-fit">
                    <span>{testimonial.metric.value}</span>
                    <span className="text-primary/70 font-normal">{testimonial.metric.label}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-foreground text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-border pt-3 mt-auto">
                    <div className="font-semibold text-secondary text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA to References */}
      <div className="text-center mt-12 px-4">
        <Link to="/referenzen" className="btn-secondary">
          Alle Referenzen ansehen
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default TestimonialsSection;
