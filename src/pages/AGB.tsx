import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-heading mb-8">Allgemeine Geschäftsbedingungen</h1>

          <div className="prose prose-lg text-foreground space-y-6">
            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">§ 1 Geltungsbereich</h2>
              <p className="text-muted-foreground">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen
                der Agentur Marketing Invasion UG (haftungsbeschränkt), Hauptstraße 126, 77652 Offenburg
                (nachfolgend „Kanzleigewinner") und ihren Kunden (nachfolgend „Auftraggeber").
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">§ 2 Leistungen</h2>
              <p className="text-muted-foreground">
                Kanzleigewinner erbringt Personalvermittlungsdienstleistungen für Steuerberatungs- und
                Rechtsanwaltskanzleien. Der genaue Leistungsumfang ergibt sich aus der individuellen
                Vereinbarung zwischen Kanzleigewinner und dem Auftraggeber.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">§ 3 Vergütung</h2>
              <p className="text-muted-foreground">
                Die Vergütung für die Personalvermittlung wird individuell vereinbart. Die Provision wird
                fällig mit Abschluss eines Arbeitsvertrages zwischen dem Auftraggeber und dem durch
                Kanzleigewinner vorgestellten Kandidaten.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">§ 4 Vertraulichkeit</h2>
              <p className="text-muted-foreground">
                Alle im Rahmen der Zusammenarbeit übermittelten Informationen, insbesondere Kandidatenprofile,
                werden vertraulich behandelt und nur zum Zwecke der Personalvermittlung verwendet.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">§ 5 Haftung</h2>
              <p className="text-muted-foreground">
                Kanzleigewinner haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit.
                Die Haftung für leichte Fahrlässigkeit ist auf die Verletzung wesentlicher
                Vertragspflichten beschränkt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">§ 6 Schlussbestimmungen</h2>
              <p className="text-muted-foreground">
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Offenburg,
                soweit gesetzlich zulässig.
                <br /><br />
                Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der
                übrigen Bestimmungen unberührt.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Stand: Februar 2026
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
