import { useState } from "react";

const faqs = [
  {
    question: "Welche Positionen vermitteln Sie?",
    answer: "Wir sind spezialisiert auf Fachkräfte für Steuerberatungs- und Rechtsanwaltskanzleien: Steuerfachangestellte, Steuerfachwirte, Bilanzbuchhalter, Lohnbuchhalter, Rechtsanwaltsfachangestellte und weitere Kanzlei-Positionen.",
  },
  {
    question: "Wie lange dauert es, bis ich Kandidaten bekomme?",
    answer: "In der Regel präsentieren wir Ihnen die ersten qualifizierten Kandidaten innerhalb von 1-2 Wochen. Die durchschnittliche Besetzungszeit liegt bei 4-6 Wochen.",
  },
  {
    question: "Was kostet die Vermittlung?",
    answer: "Wir arbeiten erfolgsbasiert – Sie zahlen erst, wenn Sie einen von uns vermittelten Kandidaten einstellen. Die genauen Konditionen besprechen wir im Erstgespräch.",
  },
  {
    question: "Was passiert, wenn der Kandidat in der Probezeit kündigt?",
    answer: "Wir bieten eine Nachbesetzungs-Garantie: Sollte ein Kandidat innerhalb der Probezeit ausscheiden, suchen wir kostenfrei einen Ersatz für Sie.",
  },
  {
    question: "Wie wählen Sie die Kandidaten aus?",
    answer: "Jeder Kandidat durchläuft einen mehrstufigen Prozess: Qualifikations-Check, Telefon-Interview, Persönlichkeits-Assessment und Abgleich mit Ihren Anforderungen. Sie erhalten nur vorgeprüfte Bewerber.",
  },
  {
    question: "Arbeiten Sie auch mit Kanzleien außerhalb Deutschlands?",
    answer: "Ja, wir vermitteln Fachkräfte im gesamten DACH-Raum – also Deutschland, Österreich und der Schweiz.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-4 animate-fade-in">FAQ</p>
          <h2 className="section-heading mb-4 animate-fade-in-up">
            Häufig gestellte Fragen
          </h2>
          <p className="section-subheading mx-auto animate-fade-in-up animation-delay-100">
            Alles, was Sie über unsere Personalvermittlung wissen müssen.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="feature-card !p-0 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-secondary pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Noch Fragen? Wir beraten Sie gerne persönlich.
          </p>
          <a href="tel:078163909966" className="btn-primary">
            Jetzt anrufen
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
