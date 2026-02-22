import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-heading mb-8">Impressum</h1>

          <div className="prose prose-lg text-foreground space-y-6">
            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">Angaben gemäß § 5 TMG</h2>
              <p className="text-muted-foreground">
                Agentur Marketing Invasion UG (haftungsbeschränkt)<br />
                Hauptstraße 126<br />
                77652 Offenburg
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">Kontakt</h2>
              <p className="text-muted-foreground">
                Telefon: <a href="tel:078163909966" className="text-primary hover:underline">0781 63909966</a><br />
                E-Mail: <a href="mailto:info@kanzleigewinner.de" className="text-primary hover:underline">info@kanzleigewinner.de</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">Handelsregister</h2>
              <p className="text-muted-foreground">
                Registergericht: Amtsgericht Freiburg<br />
                Registernummer: HRB (wird nachgetragen)
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">Geschäftsführer</h2>
              <p className="text-muted-foreground">
                (wird nachgetragen)
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">Umsatzsteuer-ID</h2>
              <p className="text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
                (wird nachgetragen)
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-muted-foreground">
                Agentur Marketing Invasion UG (haftungsbeschränkt)<br />
                Hauptstraße 126<br />
                77652 Offenburg
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">Streitschlichtung</h2>
              <p className="text-muted-foreground">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                {" "}<a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.
                <br /><br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
