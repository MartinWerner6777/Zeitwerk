import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Datenschutzerklärung von Zeitwerk",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="bg-papier py-20 md:py-28">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-tinte md:text-4xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-10 space-y-10 font-sans text-[15px] leading-relaxed text-tinte/80">
          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              1. Verantwortlicher
            </h2>
            <p className="mt-2">
              Martin Werner
              <br />
              Zeitwerk
              <br />
              [Straße und Hausnummer einfügen]
              <br />
              [Postleitzahl und Ort einfügen]
              <br />
              E-Mail: hallo@zeitwerk.de
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              2. Hosting
            </h2>
            <p className="mt-2">
              Diese Website wird bei [Hosting-Anbieter einfügen, z. B.
              Vercel Inc.] gehostet. Beim Aufruf der Website erhebt der
              Hosting-Anbieter automatisch technische Server-Log-Daten
              (u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs,
              aufgerufene Seite, verwendeter Browser). Diese Verarbeitung
              erfolgt auf Grundlage unseres berechtigten Interesses an
              einem technisch fehlerfreien und sicheren Betrieb der
              Website (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="mt-3 rounded-sm border border-dashed border-tinte/25 bg-papier2 p-4 text-sm text-tinte/60">
              <strong className="text-tinte/80">Hinweis:</strong> Falls
              der gewählte Hosting-Anbieter Server außerhalb der EU/des
              EWR betreibt (z. B. in den USA), muss hier zusätzlich ein
              Absatz zur Datenübermittlung in Drittländer und zur
              Rechtsgrundlage (z. B. Standardvertragsklauseln) ergänzt
              werden. Bitte beim finalen Hosting-Anbieter prüfen, im
              Zweifel dessen eigene Datenschutzhinweise für Kunden als
              Vorlage nutzen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              3. Schriftarten
            </h2>
            <p className="mt-2">
              Diese Website nutzt Schriftarten von Google Fonts. Die
              Schriftdateien werden beim Erstellen der Website lokal
              eingebunden und beim Aufruf der Seite ausschließlich von
              unserem eigenen Server ausgeliefert. Es findet dabei
              <strong> keine Verbindung zu Servern von Google statt</strong>{" "}
              und es werden keine Daten an Google übermittelt.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              4. Kontaktformular
            </h2>
            <p className="mt-2">
              Wenn du das Kontaktformular nutzt, verarbeiten wir die von
              dir angegebenen Daten (Name, ggf. Betrieb, E-Mail-Adresse,
              ggf. Telefonnummer, ausgewähltes Interesse, Nachrichtentext)
              ausschließlich zur Bearbeitung deiner Anfrage und für den
              Fall von Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. b DSGVO (Anfrage zur Vorbereitung eines Vertrags) bzw.
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Beantwortung von Anfragen), falls kein Vertrag zustande
              kommt.
            </p>
            <p className="mt-3">
              Deine Angaben werden gelöscht, sobald sie für die
              Bearbeitung deiner Anfrage nicht mehr erforderlich sind,
              spätestens nach [Aufbewahrungsfrist festlegen, z. B. 12
              Monate], vorbehaltlich gesetzlicher Aufbewahrungspflichten
              (z. B. aus dem Handels- oder Steuerrecht bei
              zustandegekommenen Aufträgen).
            </p>
            <p className="mt-3 rounded-sm border border-dashed border-tinte/25 bg-papier2 p-4 text-sm text-tinte/60">
              <strong className="text-tinte/80">Hinweis:</strong> Sobald
              der E-Mail-Versand für das Formular technisch aktiv
              geschaltet wird (siehe README im Projekt), hier ergänzen,
              über welchen Dienst (z. B. Resend) der Versand läuft, denn auch
              dieser Anbieter gehört als Auftragsverarbeiter in diese
              Erklärung.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              5. Cookies & Analyse-Tools
            </h2>
            <p className="mt-2">
              Diese Website setzt aktuell keine Cookies zu Analyse- oder
              Marketingzwecken ein und bindet keine Analyse-Tools (z. B.
              Google Analytics) ein. Sollte sich das ändern, wird diese
              Erklärung entsprechend ergänzt und, sofern gesetzlich
              erforderlich, vorab eine Einwilligung eingeholt.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              6. SSL-/TLS-Verschlüsselung
            </h2>
            <p className="mt-2">
              Diese Seite nutzt aus Sicherheitsgründen eine
              SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennst du daran, dass die Adresszeile des Browsers von
              „http://" auf „https://" wechselt.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              7. Deine Rechte
            </h2>
            <p className="mt-2">
              Du hast jederzeit das Recht auf Auskunft über deine
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger sowie den Zweck der Datenverarbeitung (Art. 15
              DSGVO), außerdem ein Recht auf Berichtigung (Art. 16
              DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der
              Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20
              DSGVO) sowie Widerspruch gegen die Verarbeitung (Art. 21
              DSGVO). Wende dich dazu gerne an{" "}
              <a href="mailto:hallo@zeitwerk.de" className="underline decoration-messing decoration-2 underline-offset-4">
                hallo@zeitwerk.de
              </a>
              .
            </p>
            <p className="mt-3">
              Du hast außerdem das Recht, dich bei einer
              Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist
              in der Regel die Berliner Beauftragte für Datenschutz und
              Informationsfreiheit.
            </p>
          </div>

          <div className="rounded-sm border border-dashed border-tinte/25 bg-papier2 p-5 text-sm text-tinte/60">
            <strong className="text-tinte/80">Wichtiger Hinweis:</strong>{" "}
            Diese Erklärung deckt den aktuellen, bekannten Stand der
            Website ab. Die eckigen Klammern sind Platzhalter für Angaben,
            die von deiner endgültigen Anschrift und deinem gewählten
            Hosting-/E-Mail-Anbieter abhängen, bitte vor dem Live-Gang
            ausfüllen. Ich bin kein Anwalt: Für eine rechtssichere
            Datenschutzerklärung empfehle ich, das Ergebnis einmal von
            einem Anwalt oder einer Anwältin für Datenschutzrecht prüfen
            zu lassen, insbesondere sobald Analyse-Tools, Werbe-Pixel
            oder ein externer Hosting-/Mail-Anbieter außerhalb der EU
            hinzukommen.
          </div>
        </div>
      </Container>
    </section>
  );
}
