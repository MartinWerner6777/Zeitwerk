import type { Metadata } from "next";
import Container from "@/components/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ablauf — W&M Digital",
  description: "So läuft eine Zusammenarbeit mit W&M Digital ab — von der Analyse bis zur Optimierung.",
};

const SCHRITTE = [
  {
    nr: "01",
    titel: "Analyse",
    dauer: "ca. 15–30 Min. Gespräch",
    text: "Wir gehen gemeinsam durch, wo im Alltag Zeit verloren geht — am Telefon, beim Terminbuch, bei Rückfragen. Kein Verkaufsgespräch, sondern eine ehrliche Bestandsaufnahme.",
  },
  {
    nr: "02",
    titel: "Strategie",
    dauer: "1–2 Werktage",
    text: "Du bekommst einen konkreten Vorschlag: welche Leistungen sinnvoll sind, in welcher Reihenfolge, und was es kostet. Keine Buzzwords, keine unnötigen Extras.",
  },
  {
    nr: "03",
    titel: "Umsetzung",
    dauer: "meist wenige Tage bis 2 Wochen",
    text: "Ich richte alles ein — Buchungssystem, Chatbot, Automatisierungen. Du testest zwischendurch, ich passe an. Dein laufendes Geschäft wird dabei nicht unterbrochen.",
  },
  {
    nr: "04",
    titel: "Optimierung",
    dauer: "laufend",
    text: "Nach dem Start schauen wir, was funktioniert und was nachjustiert werden muss. Automatisierung ist kein einmaliges Projekt, sondern wird mit deinem Betrieb feiner.",
  },
];

export default function ProzessPage() {
  return (
    <>
      <section className="bg-werkstatt py-20 text-papier md:py-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
            Ablauf
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Vier Schritte, keine Überraschungen.
          </h1>
        </Container>
      </section>

      <section className="bg-papier py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl">
            {SCHRITTE.map((s, i) => (
              <div key={s.nr} className="relative flex gap-6 pb-14 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-messing font-mono text-sm text-messing">
                    {s.nr}
                  </span>
                  {i < SCHRITTE.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-tinte/15" />
                  )}
                </div>
                <div className="pt-1.5">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h2 className="font-display text-2xl font-semibold text-tinte">
                      {s.titel}
                    </h2>
                    <span className="font-mono text-xs uppercase tracking-wider text-tinte/40">
                      {s.dauer}
                    </span>
                  </div>
                  <p className="mt-3 max-w-lg font-sans text-[15px] leading-relaxed text-tinte/70">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-tinte py-16 text-papier md:py-20">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg font-display text-2xl font-semibold md:text-3xl">
            Schritt 01 kostet nichts außer 15 Minuten.
          </h2>
          <Link
            href="/kontakt"
            className="focus-ring shrink-0 rounded-sm bg-messing px-7 py-4 font-sans text-[15px] font-semibold text-tinte transition-transform hover:-translate-y-0.5"
          >
            Analyse-Termin anfragen
          </Link>
        </Container>
      </section>
    </>
  );
}
