import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Wissen — W&M Digital",
  description: "Praktische Automatisierungstipps für kleine Betriebe — in Vorbereitung.",
};

const THEMEN = [
  {
    titel: "Warum die meisten No-Shows an der Erinnerung scheitern, nicht am Kunden",
    thema: "Terminmanagement",
  },
  {
    titel: "Google-Bewertungen: Wann man fragt, entscheidet mehr als wie",
    thema: "Reputation",
  },
  {
    titel: "Was ein FAQ-Chatbot wirklich abnehmen kann — und was nicht",
    thema: "Kundenservice",
  },
];

export default function WissenPage() {
  return (
    <>
      <section className="bg-werkstatt py-20 text-papier md:py-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
            Wissen
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Praktische Automatisierungstipps für kleine Betriebe.
          </h1>
          <p className="mt-5 max-w-xl font-sans text-[15px] leading-relaxed text-papier/70">
            Dieser Bereich entsteht gerade. Hier sind die Themen, an denen
            als Nächstes geschrieben wird.
          </p>
        </Container>
      </section>

      <section className="bg-papier py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {THEMEN.map((t) => (
              <div
                key={t.titel}
                className="flex flex-col rounded-sm border border-dashed border-tinte/20 bg-papier p-6"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-tinte/40">
                  {t.thema} · in Vorbereitung
                </span>
                <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-tinte">
                  {t.titel}
                </h2>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
