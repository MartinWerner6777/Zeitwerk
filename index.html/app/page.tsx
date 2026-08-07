import Link from "next/link";
import Container from "@/components/Container";
import Beleg from "@/components/Beleg";

const STARTER = [
  {
    titel: "Terminautomatisierung",
    beschreibung:
      "Kunden buchen online, die Bestätigung geht automatisch raus, die Erinnerung kommt rechtzeitig vorher. Kein Hin-und-Her am Telefon.",
  },
  {
    titel: "Bewertungsautomatisierung",
    beschreibung:
      "Nach jedem Termin oder Kauf fragt das System automatisch nach einer Google-Bewertung, genau dann, wenn die Erfahrung noch frisch ist.",
  },
  {
    titel: "FAQ-Chatbot",
    beschreibung:
      "Öffnungszeiten, Preise, Anfahrt, Verfügbarkeit: Der Chatbot auf Website oder WhatsApp beantwortet die immer gleichen Fragen sofort, auch um 23 Uhr.",
  },
];

const SCHRITTE = [
  { nr: "01", titel: "Analyse", text: "Wir schauen uns an, wo bei dir Zeit verloren geht." },
  { nr: "02", titel: "Strategie", text: "Du bekommst einen konkreten Plan, keine Buzzwords." },
  { nr: "03", titel: "Umsetzung", text: "Ich baue und richte alles ein, du machst weiter dein Geschäft." },
  { nr: "04", titel: "Optimierung", text: "Nach dem Start wird nachjustiert, bis es rund läuft." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-werkstatt text-papier">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #F0E6D6 0px, #F0E6D6 1px, transparent 1px, transparent 28px)",
          }}
        />
        <Container className="relative grid gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
              Automatisierung für kleine Betriebe · Berlin
            </p>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              Dein Laden läuft weiter, auch wenn du gerade keine Zeit hast.
            </h1>
            <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-papier/75">
              Zeitwerk automatisiert Terminbuchung, Bewertungsanfragen
              und Kundenfragen für Restaurants, Handwerker und
              Dienstleister, eingerichtet in wenigen Tagen, ohne dass du
              dich mit Software auskennen musst.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/kontakt"
                className="focus-ring rounded-sm bg-messing px-6 py-3.5 font-sans text-[15px] font-semibold text-tinte transition-transform hover:-translate-y-0.5"
              >
                Kostenlose Potenzialanalyse starten
              </Link>
              <Link
                href="/pakete"
                className="focus-ring rounded-sm border border-papier/25 px-6 py-3.5 font-sans text-[15px] font-medium text-papier transition-colors hover:border-papier/60"
              >
                Pakete ansehen
              </Link>
            </div>
            <p className="mt-8 font-mono text-xs text-papier/40">
              Ein Ansprechpartner. Kein Callcenter, keine Agentur-Warteschleife.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Beleg />
          </div>
        </Container>
      </section>

      <section className="bg-messing/15 py-10 md:py-12">
        <Container className="flex flex-col items-center gap-2 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-tinte/50">
            Mein Versprechen
          </p>
          <p className="max-w-2xl font-display text-xl font-semibold text-tinte md:text-2xl">
            Ich arbeite so lange an einem Projekt, bis das Ergebnis wirklich
            passt. Nicht bis die Rechnung geschrieben ist.
          </p>
        </Container>
      </section>

      <section className="bg-papier py-20 md:py-28">
        <Container>
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
              Starter-Paket
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-tinte md:text-4xl">
              Die drei Automatisierungen, die bei den meisten Betrieben zuerst den Unterschied machen.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-tinte/10 bg-tinte/10 md:grid-cols-3">
            {STARTER.map((item, i) => (
              <div key={item.titel} className="bg-papier p-8">
                <p className="font-mono text-xs text-tinte/35">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-tinte">
                  {item.titel}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-tinte/70">
                  {item.beschreibung}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/leistungen"
              className="focus-ring rounded font-sans text-[15px] font-medium text-tinte underline decoration-messing decoration-2 underline-offset-4 hover:text-werkstatt"
            >
              Alle 18 Leistungen ansehen →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-werkstatt2 py-20 text-papier md:py-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
            Ablauf
          </p>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold md:text-4xl">
            Vier Schritte, keine Überraschungen.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {SCHRITTE.map((s) => (
              <div key={s.nr} className="border-t border-papier/20 pt-5">
                <p className="font-mono text-sm text-messing">{s.nr}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {s.titel}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-papier/65">
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/prozess"
              className="focus-ring rounded font-sans text-[15px] font-medium text-papier underline decoration-messing decoration-2 underline-offset-4"
            >
              Ablauf im Detail →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-papier py-20 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
                Referenz
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-tinte md:text-4xl">
                Döner Point: eine komplette Website, von Grund auf.
              </h2>
              <p className="mt-5 font-sans text-[15px] leading-relaxed text-tinte/70">
                Für einen Döner-Imbiss auf der Chemnitzer Straße habe ich die
                komplette Website entwickelt, ein funktionierendes
                Kontaktformular programmiert und zusätzlich eine digitale
                Visitenkarte gestaltet und veröffentlicht.
              </p>
              <Link
                href="/referenzen"
                className="focus-ring mt-6 inline-block rounded font-sans text-[15px] font-medium text-tinte underline decoration-messing decoration-2 underline-offset-4"
              >
                Projekt ansehen →
              </Link>
            </div>
            <div className="rounded-sm border border-tinte/10 bg-papier2 p-8 font-mono text-sm text-tinte/70">
              <p className="text-xs uppercase tracking-[0.2em] text-tinte/35">
                Projektbeleg
              </p>
              <div className="my-3 border-t border-dashed border-tinte/25" />
              <p>Kunde: Döner Point, Chemnitzer Str.</p>
              <p>Leistung: Website, Kontaktformular, Visitenkarte</p>
              <p>Status: im Einsatz</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-tinte py-20 text-papier md:py-24">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg font-display text-3xl font-semibold md:text-4xl">
            15 Minuten Gespräch zeigen, wo bei dir Zeit verloren geht.
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
