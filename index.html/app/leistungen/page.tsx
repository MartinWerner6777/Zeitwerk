import type { Metadata } from "next";
import Container from "@/components/Container";
import Accordion from "@/components/Accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen — Zeitwerk",
  description: "Alle Automatisierungs- und Web-Leistungen von Zeitwerk für kleine Betriebe.",
};

type Leistung = { id: string; titel: string; untertitel: string; badge?: string; inhalt: string };
type Gruppe = { titel: string; intro: string; items: Leistung[] };

const GRUPPEN: Gruppe[] = [
  {
    titel: "Kundenkontakt automatisieren",
    intro: "Der Großteil der täglichen Kleinarbeit: Anfragen, Buchungen, Rückfragen.",
    items: [
      {
        id: "termin",
        titel: "Terminautomatisierung",
        untertitel: "Buchung, Bestätigung, Erinnerung — ohne dein Zutun",
        badge: "Starter",
        inhalt:
          "Kunden buchen selbstständig einen freien Termin über deine Website oder WhatsApp. Die Bestätigung geht automatisch raus, eine Erinnerung folgt rechtzeitig vorher. Für dich bedeutet das: kein Telefonieren zwischen zwei Kunden, keine Doppelbuchungen, kein Zettel am Empfang. Die Einrichtung wird exakt auf deine Öffnungszeiten und Terminarten abgestimmt.",
      },
      {
        id: "bewertung",
        titel: "Bewertungsautomatisierung",
        untertitel: "Mehr Google-Bewertungen, ganz ohne Nachfragen im Laden",
        badge: "Starter",
        inhalt:
          "Direkt nach einem Termin oder Kauf erhält der Kunde automatisch eine freundliche Bitte um eine Google-Bewertung — genau dann, wenn die Erfahrung noch frisch ist. Das erhöht die Zahl der Bewertungen spürbar, ohne dass du oder dein Team jemanden aktiv ansprechen müssen.",
      },
      {
        id: "chatbot",
        titel: "Website-/WhatsApp-FAQ-Chatbot",
        untertitel: "Beantwortet die immer gleichen Fragen — auch um 23 Uhr",
        badge: "Starter",
        inhalt:
          "Öffnungszeiten, Preise, Anfahrt, Verfügbarkeit: Ein auf deinen Betrieb trainierter Chatbot beantwortet die häufigsten Kundenfragen sofort, egal zu welcher Uhrzeit. Fragen, die er nicht sicher beantworten kann, werden klar an dich weitergegeben statt geraten.",
      },
      {
        id: "kontaktformular",
        titel: "Kontaktformular-Automatisierung",
        untertitel: "Jede Anfrage landet sortiert an der richtigen Stelle",
        inhalt:
          "Anfragen über dein Kontaktformular werden automatisch kategorisiert und landen strukturiert in deinem Postfach oder CRM — statt als eine von vielen unsortierten E-Mails unterzugehen.",
      },
      {
        id: "sprachbot",
        titel: "Sprachbot / Telefon-Assistent",
        untertitel: "Erreichbar, auch wenn niemand ans Telefon gehen kann",
        inhalt:
          "Außerhalb der Öffnungszeiten oder wenn alle Leitungen belegt sind, übernimmt ein Sprachassistent die Anrufannahme und beantwortet einfache Fragen oder nimmt eine Nachricht auf. Aufgrund der technischen Komplexität wird dieses Modul individuell kalkuliert.",
      },
      {
        id: "multikanal",
        titel: "Multi-Kanal-Anfragen-Bündelung",
        untertitel: "WhatsApp, Instagram und E-Mail an einem Ort",
        inhalt:
          "Statt zwischen drei Apps zu wechseln, laufen Anfragen aus WhatsApp, Instagram und E-Mail in einem gemeinsamen Postfach zusammen. Nichts geht mehr unter, nur weil es im falschen Kanal ankam.",
      },
      {
        id: "reservierung",
        titel: "Reservierungs-/Wartelisten-System",
        untertitel: "Für Restaurants — Tische und Wartezeiten im Blick",
        inhalt:
          "Tischreservierungen und Wartelisten laufen digital statt auf Papier. Gäste sehen in Echtzeit, ob und wann ein Platz frei wird.",
      },
      {
        id: "erinnerung",
        titel: "Automatisierte Terminerinnerungen",
        untertitel: "Weniger No-Shows, ohne manuellen Aufwand",
        inhalt:
          "Eigenständiges Modul für Betriebe, die bereits ein Buchungssystem nutzen, aber Erinnerungen ergänzen möchten — reduziert nachweislich die Zahl versäumter Termine.",
      },
    ],
  },
  {
    titel: "Web-Präsenz",
    intro: "Der digitale Auftritt selbst — schnell aufgesetzt, sauber gepflegt.",
    items: [
      {
        id: "website",
        titel: "Einfache Unternehmenswebsite",
        untertitel: "1–5 Seiten, modern und mobiloptimiert",
        inhalt:
          "Eine professionelle digitale Visitenkarte für deinen Betrieb — von Grund auf für dich konzipiert, nicht aus einem Baukasten. Inklusive Kontaktformular und den technischen SEO-Grundlagen.",
      },
      {
        id: "landingpage",
        titel: "Einfache Landingpage",
        untertitel: "Für eine einzelne Kampagne oder Aktion",
        inhalt:
          "Eine fokussierte Seite für einen konkreten Anlass — eine Aktion, eine Saison-Kampagne, ein Angebot — ohne deine Hauptwebsite anzufassen.",
      },
      {
        id: "produktbeschreibungen",
        titel: "KI-gestützte Produktbeschreibungen",
        untertitel: "Für kleine Online-Shops",
        inhalt:
          "Ansprechende, verkaufsfördernde Produkttexte für deinen Online-Shop, in deinem Tonfall geschrieben und von dir final freigegeben.",
      },
    ],
  },
  {
    titel: "Verwaltung & Dokumente",
    intro: "Was sonst manuell in Excel oder auf Papier passiert.",
    items: [
      {
        id: "dokumente",
        titel: "Dokumentenautomatisierung",
        untertitel: "Rechnungen und Angebote entstehen sich fast von selbst",
        inhalt:
          "Rechnungen und Angebote werden auf Basis hinterlegter Vorlagen automatisch generiert — weniger Tipparbeit, weniger Übertragungsfehler.",
      },
      {
        id: "mahnwesen",
        titel: "Rechnungserinnerungen / Mahnwesen",
        untertitel: "Offene Rechnungen bleiben nicht liegen",
        inhalt:
          "Automatisierte, freundlich formulierte Erinnerungen bei offenen Rechnungen — konsequent, ohne dass du selbst hinterhertelefonieren musst.",
      },
      {
        id: "crm",
        titel: "Lead-Erfassung & einfaches CRM-Setup",
        untertitel: "Jede Anfrage strukturiert erfasst",
        inhalt:
          "Alle eingehenden Anfragen werden an einem zentralen Ort erfasst, statt über E-Mail-Postfach, Notizzettel und Kopf verteilt zu sein.",
      },
      {
        id: "kundendaten",
        titel: "Automatisierte Kundendaten-Erfassung",
        untertitel: "Formulardaten landen strukturiert in einer Tabelle",
        inhalt:
          "Daten aus Formularen werden automatisch in eine übersichtliche Tabelle oder Datenbank übertragen — bereit zur Weiterverarbeitung, ohne manuelles Abtippen.",
      },
    ],
  },
  {
    titel: "Intern & Wachstum",
    intro: "Für Betriebe, die schon laufen und jetzt skalieren wollen.",
    items: [
      {
        id: "ki-assistent",
        titel: "Interner KI-Assistent / Wissensdatenbank",
        untertitel: "Beantwortet interne Mitarbeiterfragen aus euren Dokumenten",
        inhalt:
          "Ein interner Assistent, der auf Basis eurer eigenen Dokumente (Abläufe, Handbücher, Richtlinien) Mitarbeiterfragen direkt beantwortet — spart Einarbeitungszeit und Rückfragen.",
      },
      {
        id: "email",
        titel: "E-Mail-Automatisierung",
        untertitel: "Nachfass-Sequenzen, die von selbst laufen",
        inhalt:
          "Automatisierte, zeitlich gestaffelte Nachfass-E-Mails nach einer Anfrage oder einem Kauf — hält den Kontakt, ohne dass du jede E-Mail einzeln verschicken musst.",
      },
      {
        id: "onboarding",
        titel: "Automatisiertes Onboarding",
        untertitel: "Für neue Kunden oder Mitarbeiter",
        inhalt:
          "Ein strukturierter, automatisierter Ablauf, der neue Kunden oder Mitarbeitende Schritt für Schritt durch den Einstieg führt.",
      },
      {
        id: "feedback",
        titel: "KI-Zusammenfassung von Kundenfeedback",
        untertitel: "Monatlicher Report statt Einzelbewertungen lesen",
        inhalt:
          "Bewertungen und Rückmeldungen werden monatlich zu einer kompakten, verständlichen Zusammenfassung gebündelt — Muster erkennst du auf einen Blick statt in Dutzenden Einzelbewertungen.",
      },
      {
        id: "social",
        titel: "Social-Media-Post-Automatisierung",
        untertitel: "Regelmäßige Posts, ohne dass du selbst am Handy sitzt",
        inhalt:
          "Regelmäßige Social-Media-Beiträge werden erstellt und geplant — abgestimmt auf deinen Betrieb, final von dir freigegeben.",
      },
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
            Klicke eine Leistung an, um die Details zu sehen. Alle drei mit
            dem „Starter"-Kennzeichen bilden den üblichen Einstieg.
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

            <div className="mt-8">
              <Accordion
                items={gruppe.items.map((item) => ({
                  id: item.id,
                  titel: item.titel,
                  untertitel: item.untertitel,
                  badge: item.badge,
                  inhalt: item.inhalt,
                }))}
              />
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
