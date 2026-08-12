import type { Metadata } from "next";
import Container from "@/components/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pakete bei Zeitwerk",
  description: "Starter, Professional und Premium: Festpreise für Automatisierung und Website bei Zeitwerk.",
};

const PAKETE = [
  {
    name: "Starter",
    ticket: "№ 01",
    preis: "1.490 €",
    preisHinweis: "einmalig · 29 €/Monat Betriebskosten",
    zielgruppe: "Für Betriebe, die zum ersten Mal automatisieren.",
    items: [
      "Terminautomatisierung",
      "Bewertungsautomatisierung",
      "Website-/WhatsApp-FAQ-Chatbot",
      "Einrichtung & Testlauf inklusive",
      "Abstimmungen & Anpassungen bis zur Zufriedenheit",
    ],
    hervorgehoben: false,
  },
  {
    name: "Professional",
    ticket: "№ 02",
    preis: "3.900 €",
    preisHinweis: "einmalig · 59 €/Monat Betriebskosten",
    zielgruppe: "Für Betriebe mit spürbarem Anfragevolumen.",
    items: [
      "Alles aus Starter",
      "Kontaktformular-Automatisierung",
      "Unternehmenswebsite (1–5 Seiten)",
      "Lead-Erfassung & CRM-Setup",
      "Multi-Kanal-Anfragen-Bündelung",
      "Reservierungs-/Wartelisten-System",
      "Abstimmungen & Anpassungen bis zur Zufriedenheit",
    ],
    hervorgehoben: true,
    sparhinweis: "Einzeln gebucht über 5.400 €, im Paket sparst du über 1.500 €.",
  },
  {
    name: "Premium",
    ticket: "№ 03",
    preis: "ab 6.900 €",
    preisHinweis: "individuelles Angebot · ab 129 €/Monat",
    zielgruppe: "Für Betriebe, die intern und extern automatisieren wollen.",
    items: [
      "Alles aus Professional",
      "Interner KI-Assistent / Wissensdatenbank",
      "Dokumentenautomatisierung",
      "E-Mail-Automatisierung",
      "Priorisierter Support",
      "Abstimmungen & Anpassungen bis zur Zufriedenheit",
    ],
    hervorgehoben: false,
    fussnote: "Sprachbot/Telefon-Assistent auf Wunsch als separat kalkuliertes Zusatzmodul.",
  },
];

const VERGLEICH = [
  { label: "Terminautomatisierung", starter: true, pro: true, premium: true },
  { label: "Bewertungsautomatisierung", starter: true, pro: true, premium: true },
  { label: "FAQ-Chatbot", starter: true, pro: true, premium: true },
  { label: "Kontaktformular-Automatisierung", starter: false, pro: true, premium: true },
  { label: "Website (1–5 Seiten)", starter: false, pro: true, premium: true },
  { label: "Lead-Erfassung & CRM", starter: false, pro: true, premium: true },
  { label: "Multi-Kanal-Bündelung", starter: false, pro: true, premium: true },
  { label: "Reservierungssystem", starter: false, pro: true, premium: true },
  { label: "Interner KI-Assistent", starter: false, pro: false, premium: true },
  { label: "Dokumentenautomatisierung", starter: false, pro: false, premium: true },
  { label: "E-Mail-Automatisierung", starter: false, pro: false, premium: true },
];

const WEBSITE_KERN = [
  {
    name: "Website-Start",
    preis: "890 €",
    zielgruppe: "Für den ersten Auftritt oder eine einzelne Aktion.",
    items: [
      "1 Seite, klar strukturiert (Angebot, über den Betrieb, Kontakt)",
      "Individuelles Design, kein Baukasten-Look",
      "Vollständig mobiloptimiert",
      "Kontaktformular & Google Maps inklusive",
      "SEO-Grundlagen",
      "Lieferzeit: 5 bis 7 Werktage",
    ],
    hervorgehoben: false,
  },
  {
    name: "Unternehmenswebsite",
    preis: "2.200 €",
    zielgruppe: "Für Betriebe mit mehreren Leistungen oder Bereichen.",
    items: [
      "1 bis 5 Seiten, individuelles Design",
      "Kontaktformular, Google Maps, SEO-Grundlagen",
      "Impressum & Datenschutz strukturell integriert",
      "2 Korrekturrunden inklusive",
      "Lieferzeit: 1 bis 2 Wochen",
    ],
    hervorgehoben: true,
  },
  {
    name: "Premium-Website",
    preis: "ab 4.200 €",
    zielgruppe: "Für komplexere Anforderungen: Buchungssysteme, Shop-Anbindung, individuelle Funktionen.",
    items: [
      "Beliebiger Seitenumfang, vollständig individuell",
      "Individuelle Funktionen nach Bedarf",
      "Enge Abstimmung während der gesamten Umsetzung",
      "Lieferzeit nach Absprache",
    ],
    hervorgehoben: false,
  },
];

const WEBSITE_ZUSATZ = [
  { name: "Website-Relaunch", preis: "ab 1.200 €", info: "Überarbeitung einer bestehenden Website" },
  { name: "Website-Überarbeitung (klein)", preis: "ab 390 €", info: "Punktuelle Anpassungen" },
];

const ABOS = [
  {
    name: "Sorglos",
    preis: "39 €/Monat",
    haken: "Deine Website läuft, ohne dass du je daran denken musst.",
    items: [
      "Hosting & SSL inklusive",
      "Sicherheitsupdates laufend eingespielt",
      "Automatische Backups",
      "Bis zu 2 kleine Textänderungen/Monat",
      "E-Mail-Support",
    ],
    hervorgehoben: false,
  },
  {
    name: "Wachstum",
    preis: "89 €/Monat",
    haken: "Deine Website und dein Google-Auftritt entwickeln sich aktiv weiter.",
    items: [
      "Alles aus Sorglos",
      "Pflege des Google-Unternehmensprofils",
      "Kleine Design-Anpassungen nach Bedarf",
      "Sichtbarkeits-Check (SEO-Kontrolle) 1×/Monat",
      "2 Social-Media-Beiträge/Monat",
      "Monatliche Auswertung: Anfragen, Buchungen, Bewertungen im Überblick",
      "Priorisierter Support",
    ],
    hervorgehoben: true,
  },
  {
    name: "Partner",
    preis: "149 €/Monat",
    haken: "Ein monatliches Gespräch, das dich wirklich weiterbringt.",
    items: [
      "Alles aus Wachstum",
      "Monatliches Beratungsgespräch (30 Min.) zu KI & Automatisierung",
      "Konkrete Conversion-Optimierungsvorschläge für deine Seite",
      "Schnellste Reaktionszeit bei Anfragen",
    ],
    hinweis: "Bewusst auf wenige Plätze begrenzt, für persönliche Betreuung in dieser Tiefe.",
    hervorgehoben: false,
  },
];

const FREMDKOSTEN = [
  { pos: "Domain", bereich: "1–2 €/Monat" },
  { pos: "Hosting (falls nicht über Basis-Pflege)", bereich: "10–20 €/Monat" },
  { pos: "API-Nutzung Chatbot (bei hohem Volumen)", bereich: "15–50 €/Monat" },
  { pos: "Premium-Plugins (nur bei Sonderwünschen)", bereich: "0–150 € einmalig oder 5–20 €/Monat" },
];

export default function PaketePage() {
  return (
    <>
      <section className="bg-werkstatt py-20 text-papier md:py-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
            Pakete
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Drei Wege, weniger Zeit mit Verwaltung zu verlieren.
          </h1>
          <p className="mt-5 max-w-xl font-sans text-[15px] leading-relaxed text-papier/70">
            Jedes Paket ist auf ein Wachstumsstadium zugeschnitten. Alle
            Preise sind Festpreise, ohne versteckte Kosten und ohne
            Überraschungsrechnung.
          </p>
        </Container>
      </section>

      <section className="bg-messing/15 py-10 md:py-12">
        <Container className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-tinte/50">
            Zufriedenheitsgarantie
          </p>
          <p className="mx-auto mt-3 max-w-2xl font-display text-xl font-semibold text-tinte md:text-2xl">
            Ein Projekt ist für mich erst fertig, wenn es für dich passt.
          </p>
          <p className="mx-auto mt-3 max-w-2xl font-sans text-sm leading-relaxed text-tinte/65">
            Bis dahin sind sämtliche Abstimmungen, Termine, Besprechungen und
            notwendigen Anpassungen im Rahmen des vereinbarten Projekts
            selbstverständlich im Preis enthalten. Ich arbeite so lange
            weiter, bis es wirklich stimmt, nicht bis die Rechnung raus ist.
          </p>
        </Container>
      </section>

      <section className="bg-werkstatt py-20 text-papier md:py-24">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
            Website-Erstellung
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">
            Der meist unkomplizierteste erste Schritt: eine eigene Website.
          </h2>
          <p className="mt-4 max-w-xl font-sans text-[15px] leading-relaxed text-papier/70">
            Auch ohne Automatisierungspaket buchbar, und für viele Betriebe
            der naheliegendste Einstieg.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {WEBSITE_KERN.map((w) => (
              <div
                key={w.name}
                className={`flex flex-col rounded-sm p-7 ${
                  w.hervorgehoben
                    ? "border-2 border-messing bg-tinte md:-translate-y-3"
                    : "border border-papier/15 bg-werkstatt2"
                }`}
              >
                <h3 className="font-display text-xl font-semibold text-papier">
                  {w.name}
                </h3>
                <p className="mt-2 font-mono text-lg text-messing">{w.preis}</p>
                <p className="mt-2 font-sans text-sm text-papier/60">
                  {w.zielgruppe}
                </p>
                <div className="my-4 border-t border-dashed border-papier/20" />
                <ul className="flex-1 space-y-2 font-sans text-sm">
                  {w.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-papier/80">
                      <span className="text-messing">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className={`focus-ring mt-6 rounded-sm px-5 py-3 text-center font-sans text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    w.hervorgehoben ? "bg-messing text-tinte" : "bg-papier text-tinte"
                  }`}
                >
                  {w.name} anfragen
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4 border-t border-papier/10 pt-8">
            {WEBSITE_ZUSATZ.map((l) => (
              <div key={l.name} className="flex items-baseline gap-2 font-sans text-sm text-papier/70">
                <span className="font-semibold text-papier">{l.name}</span>
                <span className="font-mono text-messing">{l.preis}</span>
                <span className="text-papier/45">· {l.info}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-papier py-16 md:py-20">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
            Automatisierungspakete
          </p>
          <h2 className="mt-3 max-w-lg font-display text-2xl font-semibold text-tinte md:text-3xl">
            Wenn mehr laufen soll als nur die Website.
          </h2>
        </Container>
      </section>

      <section className="bg-papier py-4 md:py-8">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {PAKETE.map((paket) => (
              <div
                key={paket.name}
                className={`relative flex flex-col rounded-sm border p-8 ${
                  paket.hervorgehoben
                    ? "border-messing bg-tinte text-papier md:-translate-y-4 md:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]"
                    : "border-tinte/10 bg-papier text-tinte"
                }`}
              >
                {paket.hervorgehoben && (
                  <span className="absolute -top-3 left-8 rounded-full bg-messing px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-tinte">
                    empfohlener nächster Schritt
                  </span>
                )}

                <p
                  className={`font-mono text-xs uppercase tracking-[0.2em] ${
                    paket.hervorgehoben ? "text-messing" : "text-tinte/40"
                  }`}
                >
                  Auftragsticket {paket.ticket}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold">
                  {paket.name}
                </h2>
                <p
                  className={`mt-2 font-sans text-sm ${
                    paket.hervorgehoben ? "text-papier/70" : "text-tinte/60"
                  }`}
                >
                  {paket.zielgruppe}
                </p>

                <div className="mt-5">
                  <span className="font-display text-3xl font-semibold">
                    {paket.preis}
                  </span>
                  <p
                    className={`mt-1 font-mono text-xs uppercase tracking-wider ${
                      paket.hervorgehoben ? "text-papier/50" : "text-tinte/40"
                    }`}
                  >
                    {paket.preisHinweis}
                  </p>
                </div>

                <div
                  className={`my-6 border-t border-dashed ${
                    paket.hervorgehoben ? "border-papier/25" : "border-tinte/20"
                  }`}
                />

                <ul className="flex-1 space-y-3 font-sans text-sm">
                  {paket.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span
                        className={
                          paket.hervorgehoben ? "text-messing" : "text-erledigt"
                        }
                      >
                        ✓
                      </span>
                      <span
                        className={
                          paket.hervorgehoben ? "text-papier/85" : "text-tinte/80"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {paket.sparhinweis && (
                  <p className="mt-5 rounded-sm bg-messing/15 px-3 py-2.5 font-sans text-xs text-papier/85">
                    {paket.sparhinweis}
                  </p>
                )}
                {paket.fussnote && (
                  <p className="mt-5 font-sans text-xs text-tinte/50">
                    {paket.fussnote}
                  </p>
                )}

                <Link
                  href="/kontakt"
                  className={`focus-ring mt-6 rounded-sm px-5 py-3 text-center font-sans text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    paket.hervorgehoben
                      ? "bg-messing text-tinte"
                      : "bg-tinte text-papier"
                  }`}
                >
                  {paket.name} unverbindlich anfragen
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-papier2 py-16 md:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-tinte md:text-3xl">
            Paket-Vergleich
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse font-sans text-sm">
              <thead>
                <tr className="border-b border-tinte/15 text-left">
                  <th className="py-3 pr-4 font-medium text-tinte/50">Leistung</th>
                  <th className="px-4 py-3 text-center font-medium text-tinte/50">Starter</th>
                  <th className="px-4 py-3 text-center font-medium text-tinte/50">Professional</th>
                  <th className="px-4 py-3 text-center font-medium text-tinte/50">Premium</th>
                </tr>
              </thead>
              <tbody>
                {VERGLEICH.map((row) => (
                  <tr key={row.label} className="border-b border-tinte/8">
                    <td className="py-3 pr-4 text-tinte/80">{row.label}</td>
                    <td className="px-4 py-3 text-center">{row.starter ? "✓" : "-"}</td>
                    <td className="px-4 py-3 text-center">{row.pro ? "✓" : "-"}</td>
                    <td className="px-4 py-3 text-center">{row.premium ? "✓" : "-"}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-3 pr-4 font-medium text-tinte">Preis</td>
                  <td className="px-4 py-3 text-center font-medium text-tinte">1.490 €</td>
                  <td className="px-4 py-3 text-center font-medium text-tinte">3.900 €</td>
                  <td className="px-4 py-3 text-center font-medium text-tinte">ab 6.900 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-papier2 py-16 md:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-tinte md:text-3xl">
            Monatliche Betreuung
          </h2>
          <p className="mt-2 max-w-xl font-sans text-sm text-tinte/60">
            Kein Pflicht-Abo, sondern echter laufender Mehrwert, jederzeit
            monatlich kündbar. Wichtig zur Einordnung: Das ist etwas anderes
            als die Betriebskosten bei den Automatisierungspaketen weiter
            oben. Betriebskosten sind reine technische Weiterreichung (z. B.
            Chatbot-Nutzung), diese Betreuung hier ist ein zusätzlicher,
            komplett optionaler Service rund um deine Website.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {ABOS.map((abo) => (
              <div
                key={abo.name}
                className={`flex flex-col rounded-sm p-6 ${
                  abo.hervorgehoben
                    ? "border-2 border-messing bg-tinte text-papier md:-translate-y-3"
                    : "border border-tinte/10 bg-papier text-tinte"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold">{abo.name}</h3>
                  <span className={`font-mono text-sm ${abo.hervorgehoben ? "text-messing" : "text-messing"}`}>
                    {abo.preis}
                  </span>
                </div>
                <p
                  className={`mt-2 font-sans text-sm font-medium leading-snug ${
                    abo.hervorgehoben ? "text-papier/90" : "text-tinte/80"
                  }`}
                >
                  {abo.haken}
                </p>
                <div
                  className={`my-4 border-t border-dashed ${
                    abo.hervorgehoben ? "border-papier/20" : "border-tinte/15"
                  }`}
                />
                <ul className="flex-1 space-y-2 font-sans text-sm">
                  {abo.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="text-messing">✓</span>
                      <span className={abo.hervorgehoben ? "text-papier/80" : "text-tinte/70"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {abo.hinweis && (
                  <p className="mt-4 font-sans text-xs italic text-tinte/45">
                    {abo.hinweis}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 font-sans text-xs text-tinte/45">
            Monatlich kündbar, kein Mindestvertrag.
          </p>
        </Container>
      </section>

      <section className="bg-papier py-16 md:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-tinte md:text-3xl">
            Zusätzliche Kosten, transparent aufgelistet
          </h2>
          <p className="mt-2 max-w-xl font-sans text-sm text-tinte/60">
            Diese Kosten fließen nicht an Zeitwerk, sondern direkt an
            die jeweiligen Anbieter. Nichts wird ohne vorherige Absprache
            gebucht.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse font-sans text-sm">
              <tbody>
                {FREMDKOSTEN.map((f) => (
                  <tr key={f.pos} className="border-b border-tinte/8">
                    <td className="py-3 pr-4 text-tinte/80">{f.pos}</td>
                    <td className="py-3 text-right font-mono text-tinte/60">{f.bereich}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-tinte py-16 text-papier md:py-20">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg font-display text-2xl font-semibold md:text-3xl">
            Nicht sicher, welches Paket passt?
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
