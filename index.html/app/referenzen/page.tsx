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
            Ehrlich gesagt: Ich stehe am Anfang. Das hier ist, was bisher entstanden ist.
          </h1>
          <p className="mt-5 max-w-xl font-sans text-[15px] leading-relaxed text-papier/70">
            Kein erfundenes Kundenlogo, keine aufgeblähte Projektliste. Ein
            echtes Kundenprojekt, das zeigt, wie eine Umsetzung bei mir
            aussieht.
          </p>
        </Container>
      </section>

      <section className="bg-papier py-20 md:py-28">
        <Container className="max-w-xl">
          <div className="rounded-sm border border-tinte/10 bg-papier p-8">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-erledigt">
              <span className="h-1.5 w-1.5 rounded-full bg-erledigt" />
              Kundenprojekt · im Einsatz
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-tinte">
              Döner Point
            </h2>
            <p className="mt-1 font-mono text-xs text-tinte/40">
              Döner-Imbiss, Chemnitzer Straße
            </p>
            <p className="mt-5 font-sans text-[15px] leading-relaxed text-tinte/70">
              Mein erstes reales Kundenprojekt: Ich habe die komplette
              Website entwickelt, ein funktionierendes Kontaktformular
              programmiert, mehrere weitere Funktionen integriert und
              zusätzlich eine digitale Visitenkarte gestaltet und
              veröffentlicht.
            </p>
            <ul className="mt-6 space-y-2 font-sans text-sm text-tinte/70">
              <li className="flex gap-2.5">
                <span className="text-messing">•</span> Komplette Website-Entwicklung
              </li>
              <li className="flex gap-2.5">
                <span className="text-messing">•</span> Kontaktformular
              </li>
              <li className="flex gap-2.5">
                <span className="text-messing">•</span> Weitere Funktionen nach Bedarf
              </li>
              <li className="flex gap-2.5">
                <span className="text-messing">•</span> Digitale Visitenkarte
              </li>
            </ul>
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
