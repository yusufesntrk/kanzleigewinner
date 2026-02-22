import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-heading mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-lg text-foreground space-y-6">
            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-semibold text-secondary mb-1">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
                Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">2. Verantwortliche Stelle</h2>
              <p className="text-muted-foreground">
                Agentur Marketing Invasion UG (haftungsbeschränkt)<br />
                Hauptstraße 126<br />
                77652 Offenburg<br /><br />
                Telefon: <a href="tel:078163909966" className="text-primary hover:underline">0781 63909966</a><br />
                E-Mail: <a href="mailto:info@kanzleigewinner.de" className="text-primary hover:underline">info@kanzleigewinner.de</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg font-semibold text-secondary mb-1">Server-Log-Dateien</h3>
              <p className="text-muted-foreground">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary mb-1">Kontaktformular</h3>
              <p className="text-muted-foreground">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
                ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">4. Externe Dienste</h2>
              <h3 className="text-lg font-semibold text-secondary mb-1">Calendly</h3>
              <p className="text-muted-foreground">
                Wir nutzen den Dienst Calendly zur Terminbuchung. Wenn Sie einen Termin buchen, werden
                Ihre Daten an Calendly, Inc. übertragen. Weitere Informationen finden Sie in der
                {" "}<a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Datenschutzerklärung von Calendly</a>.
              </p>

              <h3 className="text-lg font-semibold text-secondary mb-1 mt-4">ShortSelect</h3>
              <p className="text-muted-foreground">
                Für die Darstellung offener Stellen und Kandidatenprofile nutzen wir eingebettete Widgets
                von ShortSelect. Dabei werden Daten an die Server von ShortSelect übermittelt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-2">5. Ihre Rechte</h2>
              <p className="text-muted-foreground">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
                personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung
                sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                <br /><br />
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit
                an uns wenden.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
