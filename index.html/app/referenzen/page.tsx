import type { Metadata } from "next";
import Container from "@/components/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Referenzen bei Zeitwerk",
  description: "Reale Kundenprojekte von Zeitwerk.",
};

export default function ReferenzenPage() {
  return (
    <>
      <section className="bg-werkstatt py-20 text-papier md:py-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
            Referenzen
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Ehrlich gesagt: Ich stehe am Anfang. Öffentliche Referenzen folgen, sobald sie live sind.
          </h1>
          <p className="mt-5 max-w-xl font-sans text-[15px] leading-relaxed text-papier/70">
            Kein erfundenes Kundenlogo, keine aufgeblähte Projektliste. Was
            ich bereits praktisch umsetzen kann, zeige ich dir lieber
            persönlich statt über eine Referenzliste.
          </p>
        </Container>
      </section>

      <section className="bg-papier py-20 md:py-28">
        <Container className="max-w-xl">
          <div className="rounded-sm border border-dashed border-tinte/20 bg-papier2 p-8 text-center">
            <p className="font-mono text-xs uppercase tracking-wider text-tinte/40">
              Aktueller Stand
            </p>
            <h2 className="mt-4 font-display text-xl font-semibold text-tinte">
              Noch kein öffentliches Referenzprojekt
            </h2>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-tinte/70">
              Sobald ein Kundenprojekt live und final abgestimmt ist,
              erscheint es genau hier. Bis dahin zeige ich meine praktische
              Erfahrung lieber direkt: auf der Seite „Über mich“ oder in
              einer kurzen Demo im persönlichen Gespräch.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/ueber-uns"
                className="focus-ring rounded font-sans text-[15px] font-medium text-tinte underline decoration-messing decoration-2 underline-offset-4"
              >
                Praxiserfahrung ansehen →
              </Link>
              <Link
                href="/kontakt"
                className="focus-ring rounded-sm bg-messing px-6 py-3 font-sans text-sm font-semibold text-tinte transition-transform hover:-translate-y-0.5"
              >
                Demo anfragen
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-tinte py-16 text-papier md:py-20">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg font-display text-2xl font-semibold md:text-3xl">
            Dein Betrieb könnte das nächste Projekt hier sein.
          </h2>
          <Link
            href="/kontakt"
            className="focus-ring shrink-0 rounded-sm bg-messing px-7 py-4 font-sans text-[15px] font-semibold text-tinte transition-transform hover:-translate-y-0.5"
          >
            Kostenlose Potenzialanalyse starten
          </Link>
        </Container>
      </section>
    </>
  );
}
