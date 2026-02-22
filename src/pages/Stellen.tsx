import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ShortSelectWidget from "../components/ShortSelectWidget";

const JOBS_WIDGET_ID = "798031ac-905e-47a3-9dae-a10f66bdaded";

const Stellen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 animate-fade-in">Karriere</p>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 animate-fade-in-up">
              Offene <span className="text-primary">Stellen</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
              Entdecken Sie aktuelle Positionen im Steuerberatungsumfeld
            </p>
          </div>
        </section>

        {/* Jobs Widget */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <ShortSelectWidget widgetId={JOBS_WIDGET_ID} minHeight="600px" />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
              Nichts Passendes dabei?
            </h2>
            <p className="text-white/90 text-lg mb-8 animate-fade-in-up animation-delay-100">
              Wir haben oft Positionen, die noch nicht ausgeschrieben sind.
              Lass uns in einem Erstgespräch herausfinden, was zu dir passt.
            </p>
            <a
              href="https://calendly.com/kanzleigewinner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 animate-fade-in-up animation-delay-200"
            >
              Initiativ bewerben
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Stellen;
