import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Impressum von Zeitwerk",
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
              Martin Til Werner
              <br />
              Zeitwerk
              <br />
              Bergedorfer Str. 136
              <br />
              12621 Berlin
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              Kontakt
            </h2>
            <p className="mt-2">
              E-Mail:{" "}
              <a
                href="mailto:martin.zeitwerk@gmail.com"
                className="underline decoration-messing decoration-2 underline-offset-4"
              >
                martin.zeitwerk@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              Umsatzsteuer
            </h2>
            <p className="mt-2">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz: [USt-IdNr. beantragt]
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinte">
              Verantwortlich für den Inhalt
            </h2>
            <p className="mt-2">
              Martin Til Werner (Anschrift wie oben)
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

          <div>
            <p className="text-sm text-tinte/50">
              Stand: August 2025
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
