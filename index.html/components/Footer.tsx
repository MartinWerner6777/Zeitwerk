import Link from "next/link";
import Container from "./Container";

const NAV = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/pakete", label: "Pakete" },
  { href: "/prozess", label: "Ablauf" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber-uns", label: "Über mich" },
  { href: "/wissen", label: "Wissen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="border-t border-papier2 bg-werkstatt text-papier">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:py-20">
        <div>
          <p className="font-display text-2xl font-semibold">
            W&amp;M <span className="text-messing">Digital</span>
          </p>
          <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-papier/70">
            Automatisierung für kleine Betriebe in und um Berlin. Termine,
            Bewertungen und Kundenfragen laufen automatisch — der Rest bleibt
            deine Zeit.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-papier/40">
            Berlin-Mahlsdorf
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-papier/40">
            Seiten
          </p>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring rounded font-sans text-sm text-papier/75 transition-colors hover:text-messing"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-papier/40">
            Kontakt
          </p>
          <ul className="mt-4 space-y-2.5 font-sans text-sm text-papier/75">
            <li>
              <a
                href="mailto:hallo@wm-digital.de"
                className="focus-ring rounded transition-colors hover:text-messing"
              >
                hallo@wm-digital.de
              </a>
            </li>
            <li>Antwort in der Regel innerhalb eines Werktags</li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-papier/10 py-6 font-mono text-xs text-papier/40 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} W&amp;M Digital · Martin — Einzelunternehmen</p>
        <div className="flex items-center gap-4">
          <Link href="/impressum" className="focus-ring rounded hover:text-messing">
            Impressum
          </Link>
          <p>Beleg #{new Date().getFullYear()}-∞ · automatisiert erstellt, persönlich betreut</p>
        </div>
      </Container>
    </footer>
  );
}
