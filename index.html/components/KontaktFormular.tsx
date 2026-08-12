"use client";

import { useState } from "react";

const INTERESSEN = [
  "Terminautomatisierung",
  "Bewertungsautomatisierung",
  "FAQ-Chatbot",
  "Website",
  "Etwas anderes / bin unsicher",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function KontaktFormular() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Versand fehlgeschlagen");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-erledigt/30 bg-erledigt/10 p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-erledigt">
          Beleg gebucht
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-tinte">
          Angekommen, danke dir.
        </h3>
        <p className="mt-2 font-sans text-sm text-tinte/70">
          Ich melde mich in der Regel innerhalb eines Werktags mit einem
          Terminvorschlag für die Potenzialanalyse.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Feld label="Name" name="name" required autoComplete="name" />
        <Feld label="Betrieb" name="betrieb" autoComplete="organization" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Feld
          label="E-Mail"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Feld label="Telefon (optional)" name="telefon" autoComplete="tel" />
      </div>

      <div>
        <label className="font-sans text-sm font-medium text-tinte">
          Was interessiert dich am meisten?
        </label>
        <select
          name="interesse"
          className="focus-ring mt-2 w-full rounded-sm border border-tinte/20 bg-papier px-4 py-3 font-sans text-sm text-tinte"
          defaultValue={INTERESSEN[0]}
        >
          {INTERESSEN.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="font-sans text-sm font-medium text-tinte">
          Kurz beschrieben: wo geht bei dir aktuell Zeit verloren?
        </label>
        <textarea
          name="nachricht"
          required
          rows={4}
          className="focus-ring mt-2 w-full rounded-sm border border-tinte/20 bg-papier px-4 py-3 font-sans text-sm text-tinte"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring w-full rounded-sm bg-tinte px-6 py-4 font-sans text-[15px] font-semibold text-papier transition-colors hover:bg-werkstatt disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Wird gesendet …" : "Kostenlose Potenzialanalyse anfragen"}
      </button>

      <p className="font-sans text-xs text-tinte/45">
        Mit dem Absenden stimmst du der Verarbeitung deiner Angaben gemäß{" "}
        <a
          href="/datenschutz"
          className="underline decoration-messing decoration-2 underline-offset-4"
        >
          Datenschutzerklärung
        </a>{" "}
        zu.
      </p>

      {status === "error" && (
        <p className="font-sans text-sm text-red-700">
          Da ist etwas schiefgelaufen. Schreib mir stattdessen direkt an{" "}
          <a href="mailto:hallo@zeitwerk.de" className="underline">
            hallo@zeitwerk.de
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Feld({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="font-sans text-sm font-medium text-tinte">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="focus-ring mt-2 w-full rounded-sm border border-tinte/20 bg-papier px-4 py-3 font-sans text-sm text-tinte"
      />
    </label>
  );
}
