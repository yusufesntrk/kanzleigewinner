import { useState } from "react";

const faqs = [
  {
    question: "Für welche Kanzleien ist Kanzleigewinner geeignet?",
    answer: "Wir arbeiten mit Steuerberatungskanzleien und Rechtsanwaltskanzleien jeder Größe zusammen. Egal ob Einzelkanzlei oder größere Sozietät – unsere Lösungen sind skalierbar und werden individuell an Ihre Bedürfnisse angepasst.",
  },
  {
    question: "Wie schnell kann ich mit Ergebnissen rechnen?",
    answer: "Die ersten Ergebnisse sehen unsere Kunden in der Regel bereits nach 2-4 Wochen. Bei Social Recruiting Kampagnen erhalten Sie oft schon in der ersten Woche qualifizierte Bewerbungen. Die genaue Zeitspanne hängt von Ihren individuellen Zielen ab.",
  },
  {
    question: "Was kostet die Zusammenarbeit?",
    answer: "Die Kosten richten sich nach dem Umfang der gewünschten Leistungen. In einem kostenlosen Erstgespräch analysieren wir Ihre Situation und erstellen Ihnen ein individuelles Angebot – transparent und ohne versteckte Kosten.",
  },
  {
    question: "Muss ich mich um etwas kümmern?",
    answer: "Wir übernehmen die komplette Umsetzung für Sie. Sie müssen lediglich in einem kurzen Onboarding-Gespräch Ihre Anforderungen besprechen. Danach können Sie sich voll auf Ihr Kerngeschäft konzentrieren, während wir die digitale Arbeit erledigen.",
  },
  {
    question: "Arbeitet ihr auch mit Kanzleien außerhalb Deutschlands?",
    answer: "Ja, wir betreuen Kanzleien im gesamten DACH-Raum – also Deutschland, Österreich und der Schweiz. Unsere digitalen Lösungen funktionieren standortunabhängig.",
  },
  {
    question: "Wie läuft das Erstgespräch ab?",
    answer: "Das Erstgespräch ist kostenlos und unverbindlich. Wir analysieren gemeinsam Ihre aktuelle Situation, besprechen Ihre Ziele und zeigen Ihnen auf, welche Potenziale wir für Ihre Kanzlei sehen. Das Gespräch dauert in der Regel 30-45 Minuten.",
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
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Leistungen.
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
            Noch Fragen? Wir helfen Ihnen gerne weiter.
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
