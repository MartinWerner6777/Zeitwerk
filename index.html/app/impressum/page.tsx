import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Impressum — W&M Digital",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <section className="bg-papier py-20 md:py-28">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-tinte md:text-4xl">
          Impressum
        </h1>
        <p className="mt-4 font-sans text-sm text-tinte/60">
          Angaben gemäß § 5 TMG / § 5 DDG
        </p>

        <div className="mt-10 space-y-8 font-sans text-[15px] leading-relaxed text-tinte/80">
          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              Anbieter
            </h2>
            <p className="mt-2">
              Martin Werner
              <br />
              W&amp;M Digital
              <br />
              [Straße und Hausnummer einfügen]
              <br />
              [Postleitzahl und Ort einfügen]
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              Kontakt
            </h2>
            <p className="mt-2">
              E-Mail: hallo@wm-digital.de
              <br />
              Telefon: [Telefonnummer einfügen]
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              Umsatzsteuer
            </h2>
            <p className="mt-2">
              [Falls Kleinunternehmer nach § 19 UStG: „Gemäß § 19 UStG wird
              keine Umsatzsteuer berechnet." Andernfalls
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz einfügen.]
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              Verantwortlich für den Inhalt
            </h2>
            <p className="mt-2">
              Martin Werner (Anschrift wie oben)
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              Streitschlichtung
            </h2>
            <p className="mt-2">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                className="underline decoration-messing decoration-2 underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Wir sind nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="rounded-sm border border-dashed border-tinte/25 bg-papier2 p-5 text-sm text-tinte/60">
            <strong className="text-tinte/80">Hinweis:</strong> Die
            eckigen Klammern sind Platzhalter für Angaben, die ich nicht
            kenne (vollständige Anschrift, Telefonnummer,
            Umsatzsteuer-Status). Bitte vor dem Live-Gang ausfüllen — ein
            unvollständiges Impressum ist rechtlich nicht besser als gar
            keins. Bei Unsicherheit zum Umsatzsteuer-Status oder zur
            Rechtsform lohnt sich eine kurze Rücksprache mit einem
            Steuerberater oder einer Steuerberaterin.
          </div>
        </div>
      </Container>
    </section>
  );
}
