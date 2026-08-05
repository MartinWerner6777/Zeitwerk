import type { Metadata } from "next";
import Container from "@/components/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen — W&M Digital",
  description: "Alle Automatisierungs- und Web-Leistungen von W&M Digital für kleine Betriebe.",
};

type Leistung = { titel: string; text: string; starter?: boolean };
type Gruppe = { titel: string; intro: string; items: Leistung[] };

const GRUPPEN: Gruppe[] = [
  {
    titel: "Kundenkontakt automatisieren",
    intro: "Der Großteil der täglichen Kleinarbeit: Anfragen, Buchungen, Rückfragen.",
    items: [
      { titel: "Terminautomatisierung", text: "Online-Buchung, automatische Bestätigung, Erinnerungen.", starter: true },
      { titel: "Bewertungsautomatisierung", text: "Automatische Bitte um Google-Bewertung nach Termin oder Kauf.", starter: true },
      { titel: "Website-/WhatsApp-FAQ-Chatbot", text: "Beantwortet häufige Kundenfragen automatisch.", starter: true },
      { titel: "Kontaktformular-Automatisierung", text: "Anfragen landen automatisch sortiert im Postfach oder CRM." },
      { titel: "Sprachbot / Telefon-Assistent", text: "Automatische Anrufannahme außerhalb der Öffnungszeiten." },
      { titel: "Multi-Kanal-Anfragen-Bündelung", text: "WhatsApp, Instagram und E-Mail in einem Postfach." },
      { titel: "Reservierungs-/Wartelisten-System", text: "Für Restaurants — Tische und Wartezeiten im Blick." },
      { titel: "Automatisierte Terminerinnerungen", text: "Reduziert No-Shows durch rechtzeitige Erinnerung." },
    ],
  },
  {
    titel: "Web-Präsenz",
    intro: "Der digitale Auftritt selbst — schnell aufgesetzt, sauber gepflegt.",
    items: [
      { titel: "Einfache Unternehmenswebsite", text: "1–5-seitige moderne Website, KI-gestützt erstellt." },
      { titel: "Einfache Landingpage", text: "Für einzelne Kampagnen oder Aktionen." },
      { titel: "KI-gestützte Produktbeschreibungen", text: "Für kleine Online-Shops." },
    ],
  },
  {
    titel: "Verwaltung & Dokumente",
    intro: "Was sonst manuell in Excel oder auf Papier passiert.",
    items: [
      { titel: "Dokumentenautomatisierung", text: "Automatisch generierte Rechnungen und Angebote." },
      { titel: "Rechnungserinnerungen / Mahnwesen", text: "Automatisierte Erinnerung bei offenen Rechnungen." },
      { titel: "Lead-Erfassung & einfaches CRM-Setup", text: "Alle Anfragen strukturiert erfasst." },
      { titel: "Automatisierte Kundendaten-Erfassung", text: "Formulardaten landen strukturiert in Tabelle oder Datenbank." },
    ],
  },
  {
    titel: "Intern & Wachstum",
    intro: "Für Betriebe, die schon laufen und jetzt skalieren wollen.",
    items: [
      { titel: "Interner KI-Assistent / Wissensdatenbank", text: "Beantwortet interne Mitarbeiterfragen aus Dokumenten." },
      { titel: "E-Mail-Automatisierung", text: "Automatische Nachfass-E-Mail-Sequenzen." },
      { titel: "Automatisiertes Onboarding", text: "Für neue Kunden oder Mitarbeiter." },
      { titel: "KI-Zusammenfassung von Kundenfeedback", text: "Monatlicher Report aus Bewertungen und Rückmeldungen." },
      { titel: "Social-Media-Post-Automatisierung", text: "KI erstellt und plant regelmäßige Posts." },
    ],
  },
];

export default function LeistungenPage() {
  return (
    <>
      <section className="bg-werkstatt py-20 text-papier md:py-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
            Leistungen
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            20 Bausteine. Du brauchst nie alle — nur die, die bei dir Zeit kosten.
          </h1>
          <p className="mt-5 max-w-xl font-sans text-[15px] leading-relaxed text-papier/70">
            Jede Leistung lässt sich einzeln buchen oder in einem Paket
            kombinieren. Die drei mit dem Messing-Punkt bilden das
            Starter-Paket — den üblichen Einstieg.
          </p>
        </Container>
      </section>

      {GRUPPEN.map((gruppe, gi) => (
        <section
          key={gruppe.titel}
          className={gi % 2 === 0 ? "bg-papier py-16 md:py-20" : "bg-papier2 py-16 md:py-20"}
        >
          <Container>
            <div className="max-w-lg">
              <h2 className="font-display text-2xl font-semibold text-tinte md:text-3xl">
                {gruppe.titel}
              </h2>
              <p className="mt-2 font-sans text-sm text-tinte/60">{gruppe.intro}</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {gruppe.items.map((item) => (
                <div
                  key={item.titel}
                  className="rounded-sm border border-tinte/10 bg-papier p-5"
                >
                  {item.starter && (
                    <span className="mb-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-messing">
                      <span className="h-1.5 w-1.5 rounded-full bg-messing" />
                      Starter-Paket
                    </span>
                  )}
                  <h3 className="font-display text-base font-semibold text-tinte">
                    {item.titel}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-tinte/65">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-tinte py-16 text-papier md:py-20">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg font-display text-2xl font-semibold md:text-3xl">
            Nicht sicher, was für deinen Betrieb passt?
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
