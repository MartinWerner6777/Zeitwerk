import type { Metadata } from "next";
import Container from "@/components/Container";
import Accordion from "@/components/Accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Häufige Fragen bei Zeitwerk",
  description: "Antworten auf die häufigsten Fragen vor der Zusammenarbeit mit Zeitwerk.",
};

const FRAGEN = [
  {
    id: "ablauf",
    titel: "Wie läuft die Zusammenarbeit ab?",
    inhalt:
      "Auf ein kurzes, unverbindliches Analysegespräch folgt ein schriftliches Angebot mit allen Leistungen und dem Festpreis. Nach deiner Bestätigung setze ich alles um, du testest zwischendurch, ich passe an. Den genauen Ablauf mit allen Schritten findest du auf der Ablauf-Seite.",
  },
  {
    id: "dauer",
    titel: "Wie lange dauert eine Website?",
    inhalt:
      "Je nach Umfang meist zwischen wenigen Tagen und zwei Wochen ab Projektstart. Beim Analysegespräch bekommst du eine konkrete Einschätzung für dein Projekt, keine vage Range.",
  },
  {
    id: "anzahlung",
    titel: "Muss ich etwas anzahlen?",
    inhalt:
      "Nach der Strategiephase werden 20 % des vereinbarten Projektpreises als Anzahlung fällig. Die restlichen 80 % werden erst berechnet, wenn das Ergebnis fertig ist und du wirklich zufrieden bist.",
  },
  {
    id: "aenderungen",
    titel: "Was passiert, wenn ich Änderungen wünsche?",
    inhalt:
      "Solange sich Änderungen im vereinbarten Projektumfang bewegen, sind sie selbstverständlich inklusive. Ein Projekt ist für mich erst abgeschlossen, wenn das Ergebnis wirklich passt. Für Änderungen danach gibt es die monatlichen Betreuungspakete, oder ich kümmere mich auf Anfrage einzeln darum.",
  },
  {
    id: "eigentum",
    titel: "Bin ich Eigentümer der Website?",
    inhalt:
      "Ja. Nach vollständiger Bezahlung gehören dir Website und Inhalte vollständig. Du bist an keinerlei Verträge oder laufende Bindungen gebunden, auch nicht an eine Betreuung bei mir, auch wenn ich sie natürlich gerne anbiete.",
  },
  {
    id: "laufende-kosten",
    titel: "Gibt es laufende Kosten?",
    inhalt:
      "Nur Leistungen, die technisch laufende Kosten verursachen, zum Beispiel ein Chatbot, haben entsprechende monatliche Gebühren. Diese werden transparent bei jedem Paket ausgewiesen. Ein Betreuungspaket ist optional, freiwillig und jederzeit kündbar, kein verstecktes Abo.",
  },
  {
    id: "warum-zeitwerk",
    titel: "Warum solltet ihr euch für Zeitwerk entscheiden?",
    inhalt:
      "Du sprichst während des gesamten Projekts mit mir persönlich, nicht mit wechselnden Ansprechpartnern einer Agentur. Ich kalkuliere transparent und arbeite so lange weiter, bis das Ergebnis wirklich passt.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-werkstatt py-20 text-papier md:py-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
            Häufige Fragen
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Was Kunden vor dem Start am häufigsten fragen.
          </h1>
        </Container>
      </section>

      <section className="bg-papier py-20 md:py-28">
        <Container className="max-w-2xl">
          <Accordion
            items={FRAGEN.map((f) => ({
              id: f.id,
              titel: f.titel,
              inhalt: f.inhalt,
            }))}
          />
        </Container>
      </section>

      <section className="bg-tinte py-16 text-papier md:py-20">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg font-display text-2xl font-semibold md:text-3xl">
            Frage nicht dabei?
          </h2>
          <Link
            href="/kontakt"
            className="focus-ring shrink-0 rounded-sm bg-messing px-7 py-4 font-sans text-[15px] font-semibold text-tinte transition-transform hover:-translate-y-0.5"
          >
            Direkt fragen
          </Link>
        </Container>
      </section>
    </>
  );
}
