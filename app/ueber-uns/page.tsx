import type { Metadata } from "next";
import Container from "@/components/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über mich bei Zeitwerk",
  description: "Martin Werner steckt hinter Zeitwerk. Hintergrund, Projekte und Arbeitsweise.",
};

const PROJEKTE = [
  {
    name: "ChemLab",
    text: "Eine interaktive Chemie-Lernplattform mit Periodensystem, Reaktions-Rechner, Quiz-System und einem integrierten Chatbot. Als Einzelprojekt entwickelt und live auf Vercel.",
  },
];

const VERSPRECHEN = [
  {
    titel: "Direkt erreichbar",
    text: "Keine Support-Warteschleife, kein Ticket-System. Eine Nachricht an mich, und ich melde mich in der Regel innerhalb eines Werktags persönlich zurück.",
  },
  {
    titel: "Du sprichst mit mir",
    text: "Nicht mit „dem Support-Team“ oder wechselnden Sachbearbeitern. Vom ersten Gespräch bis zur laufenden Betreuung bin ich dein einziger Ansprechpartner.",
  },
  {
    titel: "Zufriedenheit vor Abschluss",
    text: "Ein Projekt ist für mich erst fertig, wenn es für dich wirklich passt, nicht, wenn die letzte Rechnung raus ist.",
  },
  {
    titel: "Langfristig gedacht",
    text: "Mir geht es nicht um ein einzelnes Projekt, sondern darum, über Jahre dein Ansprechpartner für alles Digitale zu bleiben.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="bg-werkstatt py-20 text-papier md:py-28">
        <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
              Über mich
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Junger Gründer. Kein Umweg über eine Agentur mit zehn Ansprechpartnern.
            </h1>
          </div>
          <div className="rounded-sm border border-papier/15 p-6 font-mono text-sm text-papier/70">
            <p className="text-xs uppercase tracking-[0.2em] text-papier/35">
              Kurzprofil
            </p>
            <div className="my-3 border-t border-dashed border-papier/20" />
            <p>Martin Werner</p>
            <p>Berlin-Mahlsdorf</p>
            <p>Zeitwerk, Einzelunternehmen</p>
          </div>
        </Container>
      </section>

      <section className="bg-papier py-20 md:py-28">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-tinte md:text-3xl">
            Warum ein junger Gründer, und warum jetzt?
          </h2>
          <div className="mt-6 space-y-5 font-sans text-[15px] leading-relaxed text-tinte/75">
            <p>
              Ich bin früh in Webentwicklung, Automatisierung und den
              praktischen Einsatz moderner Technologien eingestiegen. Nicht
              in der Theorie, sondern durch echte eigene Projekte. Genau so
              habe ich mir auch das meiste angeeignet, was ich heute
              beruflich einsetze.
            </p>
            <p>
              Zeitwerk ist bewusst ein Einzelunternehmen. Du hast immer nur
              einen Ansprechpartner: mich. Keine Warteschleifen, keine
              wechselnden Mitarbeiter, dafür schnelle Kommunikation. Was ich
              zusage, setze ich auch um.
            </p>
            <p>
              Ein paar Dinge über mich, ganz direkt: Ich bin 17 Jahre alt und
              spreche vier Sprachen. Technik, KI und Wirtschaft interessieren
              mich, seit ich denken kann, und Disziplin ist für mich einer
              der wichtigsten Werte überhaupt, gerade weil niemand sie mir
              vorschreibt.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-papier2 py-20 md:py-28">
        <Container className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
            Praxiserfahrung
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold text-tinte md:text-3xl">
            Praxiserprobt in der Erstellung schlüsselfertiger E-Commerce-Systeme und moderner Unternehmensauftritte
          </h2>
          <p className="mt-5 font-sans text-[15px] leading-relaxed text-tinte/75">
            Bevor ich Zeitwerk gegründet habe, habe ich mir das nötige
            Handwerk an echten, laufenden Projekten angeeignet statt an
            Tutorials: von der ersten Konzeption über das Design bis zur
            technischen Entwicklung voll funktionsfähiger Websites,
            digitaler Speisekarten und WooCommerce-Onlineshops.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-sm border border-tinte/10 bg-papier p-5">
              <p className="font-sans text-sm font-semibold text-tinte">
                Konzeption &amp; Design
              </p>
              <p className="mt-1 font-sans text-sm text-tinte/65">
                Von der Idee bis zum fertigen Layout, abgestimmt auf die
                jeweilige Zielgruppe.
              </p>
            </div>
            <div className="rounded-sm border border-tinte/10 bg-papier p-5">
              <p className="font-sans text-sm font-semibold text-tinte">
                Technische Entwicklung
              </p>
              <p className="mt-1 font-sans text-sm text-tinte/65">
                Voll funktionsfähige Websites, von der Struktur bis zum
                laufenden Betrieb.
              </p>
            </div>
            <div className="rounded-sm border border-tinte/10 bg-papier p-5">
              <p className="font-sans text-sm font-semibold text-tinte">
                Digitale Speisekarten
              </p>
              <p className="mt-1 font-sans text-sm text-tinte/65">
                Übersichtlich, mobil optimiert und vom Betrieb selbst
                pflegbar.
              </p>
            </div>
            <div className="rounded-sm border border-tinte/10 bg-papier p-5">
              <p className="font-sans text-sm font-semibold text-tinte">
                WooCommerce-Onlineshops
              </p>
              <p className="mt-1 font-sans text-sm text-tinte/65">
                Produktkatalog, Zahlungsabwicklung und Bestellprozess aus
                einer Hand.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-sm border border-tinte/10 bg-papier p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-tinte/40">
              Lieber sehen als lesen?
            </p>
            <p className="mt-2 font-sans text-[15px] leading-relaxed text-tinte/75">
              Auf Anfrage zeige ich dir gern eine kurze Bildschirmaufnahme
              (Screen-Recording) eines der von mir entwickelten Systeme im
              persönlichen Gespräch.
            </p>
            <Link
              href="/kontakt"
              className="focus-ring mt-4 inline-block rounded font-sans text-[15px] font-medium text-tinte underline decoration-messing decoration-2 underline-offset-4"
            >
              Demo anfragen →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-papier2 py-20 md:py-28">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-tinte md:text-3xl">
            Worauf du dich verlassen kannst
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {VERSPRECHEN.map((v) => (
              <div key={v.titel} className="rounded-sm border border-tinte/10 bg-papier p-6">
                <h3 className="font-display text-lg font-semibold text-tinte">
                  {v.titel}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-tinte/65">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-papier py-20 md:py-28">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-tinte md:text-3xl">
            Woran ich vorher gearbeitet habe
          </h2>
          <p className="mt-2 max-w-lg font-sans text-sm text-tinte/60">
            Eigene Projekte, an denen die technische Basis für Zeitwerk
            entstanden ist.
          </p>

          <div className="mt-10 max-w-md">
            {PROJEKTE.map((p) => (
              <div key={p.name} className="rounded-sm border border-tinte/10 bg-papier2 p-6">
                <h3 className="font-display text-lg font-semibold text-tinte">
                  {p.name}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-tinte/65">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-tinte py-16 text-papier md:py-20">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg font-display text-2xl font-semibold md:text-3xl">
            Lust auf ein unverbindliches Gespräch?
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
