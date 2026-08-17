"use client";

import { useEffect, useRef, useState } from "react";

type Zeile = {
  zeit: string;
  text: string;
};

const ZEILEN: Zeile[] = [
  { zeit: "19:42", text: "Terminanfrage eingegangen" },
  { zeit: "19:42", text: "Bestätigung an Kunde gesendet" },
  { zeit: "19:43", text: "Erinnerung geplant (24h vorher)" },
  { zeit: "20:15", text: "Google-Bewertung angefragt" },
  { zeit: "20:16", text: "Frage im Chat automatisch beantwortet" },
];

export default function Beleg() {
  const [sichtbar, setSichtbar] = useState(0);
  const [fertig, setFertig] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setSichtbar(ZEILEN.length);
      setFertig(true);
      return;
    }

    let i = 0;
    const step = () => {
      i += 1;
      setSichtbar(i);
      if (i >= ZEILEN.length) {
        timeoutRef.current = setTimeout(() => setFertig(true), 500);
        return;
      }
      timeoutRef.current = setTimeout(step, 550);
    };
    timeoutRef.current = setTimeout(step, 600);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative w-full max-w-sm rotate-1 rounded-sm bg-papier px-6 py-7 font-mono text-tinte shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] md:rotate-2">
      <div className="absolute -top-2 left-0 right-0 flex justify-between px-1 text-papier">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-werkstatt" />
        ))}
      </div>

      <p className="text-[11px] uppercase tracking-[0.2em] text-tinte/50">
        Zeitwerk
      </p>
      <p className="text-sm font-semibold uppercase tracking-wide">
        Automatisierungsbeleg
      </p>
      <div className="my-3 border-t border-dashed border-tinte/30" />

      <ul className="space-y-2 text-[13px] leading-snug" aria-live="polite">
        {ZEILEN.map((zeile, i) => (
          <li
            key={zeile.text}
            className={`flex gap-3 transition-opacity duration-300 ${
              i < sichtbar ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-tinte/40">{zeile.zeit}</span>
            <span>{zeile.text}</span>
          </li>
        ))}
      </ul>

      <div className="my-3 border-t border-dashed border-tinte/30" />

      <div
        className={`flex items-center justify-between text-[13px] font-semibold transition-opacity duration-500 ${
          fertig ? "opacity-100" : "opacity-0"
        }`}
      >
        <span>STATUS</span>
        <span className="text-erledigt">automatisch erledigt ✓</span>
      </div>

      <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-tinte/30">
        Kein Café-Besuch nötig
      </p>
    </div>
  );
}
