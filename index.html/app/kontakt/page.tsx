import type { Metadata } from "next";
import Container from "@/components/Container";
import KontaktFormular from "@/components/KontaktFormular";

export const metadata: Metadata = {
  title: "Kontakt — W&M Digital",
  description: "Kostenlose KI-Potenzialanalyse für deinen Betrieb starten.",
};

export default function KontaktPage() {
  return (
    <section className="bg-papier py-20 md:py-28">
      <Container className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-messing">
            Kontakt
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-tinte md:text-5xl">
            Kostenlose KI-Potenzialanalyse starten
          </h1>
          <p className="mt-5 max-w-md font-sans text-[15px] leading-relaxed text-tinte/70">
            Kurz beschreiben, wo bei dir Zeit verloren geht — ich melde mich
            mit einem konkreten Vorschlag, was sich zuerst lohnt.
          </p>

          <div className="mt-10 space-y-4 border-t border-tinte/10 pt-8 font-sans text-sm text-tinte/70">
            <p>
              <span className="block font-mono text-xs uppercase tracking-wider text-tinte/40">
                E-Mail
              </span>
              <a href="mailto:hallo@wm-digital.de" className="focus-ring rounded underline decoration-messing decoration-2 underline-offset-4">
                hallo@wm-digital.de
              </a>
            </p>
            <p>
              <span className="block font-mono text-xs uppercase tracking-wider text-tinte/40">
                Standort
              </span>
              Berlin-Mahlsdorf
            </p>
            <p>
              <span className="block font-mono text-xs uppercase tracking-wider text-tinte/40">
                Antwortzeit
              </span>
              in der Regel innerhalb eines Werktags
            </p>
          </div>
        </div>

        <div className="rounded-sm border border-tinte/10 bg-papier2 p-6 md:p-10">
          <KontaktFormular />
        </div>
      </Container>
    </section>
  );
}
