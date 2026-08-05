import type { Metadata } from "next";
import Container from "@/components/Container";
import Accordion from "@/components/Accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Häufige Fragen — Zeitwerk",
  description: "Antworten auf die häufigsten Fragen vor der Zusammenarbeit mit Zeitwerk.",
};

const FRAGEN = [
  {
    id: "ablauf",
    titel: "Wie läuft ein Projekt ab?",
    inhalt:
      "Auf ein kurzes, unverbindliches Analysegespräch folgt ein schriftliches Angebot mit allen Leistungen und dem Festpreis. Nach deiner Bestätigung setze ich alles um, du testest zwischendurch, ich passe an. Den genauen Ablauf findest du auf der Ablauf-Seite.",
  },
  {
    id: "dauer",
    titel: "Wie lange dauert eine Website?",
    inhalt:
      "Je nach Umfang meist zwischen wenigen Tagen und zwei Wochen ab Projektstart. Beim Analysegespräch bekommst du eine konkrete Einschätzung für dein Projekt.",
  },
  {
    id: "aenderungen",
    titel: "Kann ich später Änderungen vornehmen?",
    inhalt:
      "Ja. Während der Umsetzung sind Anpassungen im Rahmen des vereinbarten Projekts selbstverständlich inklusive. Für Änderungen nach Projektabschluss gibt es die monatlichen Betreuungspakete — oder ich kümmere mich auf Anfrage einzeln darum.",
  },
  {
    id: "inhalte",
    titel: "Muss ich bereits Inhalte haben?",
    inhalt:
      "Nein. Texte, Struktur und teils auch Bildmaterial entwickle ich gemeinsam mit dir — du musst nicht mit fertigen Inhalten starten.",
  },
  {
    id: "bestehend",
    titel: "Arbeitet ihr auch mit bestehenden Websites?",
    inhalt:
      "Ja, über den Website-Relaunch bzw. die kleine Website-Überarbeitung. Wir schauen uns deine bestehende Seite gemeinsam an und legen fest, was sich lohnt zu übernehmen und was neu entstehen sollte.",
  },
  {
    id: "bezahlung",
    titel: "Wie funktioniert die Bezahlung?",
    inhalt:
      "Nach dem Analysegespräch wird eine kleine Pauschale fällig, die den Projektstart bestätigt. Die restliche Zahlung erfolgt nach Fertigstellung und deiner Freigabe. Details dazu stehen auf der Pakete-Seite.",
  },
  {
    id: "laufende-kosten",
    titel: "Gibt es laufende Kosten?",
    inhalt:
      "Nur, wenn eine Leistung technisch laufende Betriebskosten verursacht (z. B. Chatbot-Nutzung) — das steht transparent bei jedem Paket. Ein monatliches Betreuungspaket ist optional und jederzeit kündbar, kein verstecktes Abo.",
  },
  {
    id: "nach-fertigstellung",
    titel: "Was passiert nach Fertigstellung?",
    inhalt:
      "Ein Projekt ist für mich erst abgeschlossen, wenn es wirklich zu deinem Betrieb passt — notwendige Abstimmungen bis dahin sind im vereinbarten Projekt enthalten. Danach bleibe ich auf Wunsch dein laufender Ansprechpartner, per Einzelanfrage oder über ein Betreuungspaket.",
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
