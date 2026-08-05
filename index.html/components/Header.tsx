"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

const NAV = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/pakete", label: "Pakete" },
  { href: "/prozess", label: "Ablauf" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber-uns", label: "Über mich" },
  { href: "/wissen", label: "Wissen" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-tinte/10 bg-papier/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="focus-ring rounded font-display text-xl font-semibold tracking-tight text-tinte md:text-2xl"
          onClick={() => setOpen(false)}
        >
          W&amp;M <span className="text-messing">Digital</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded font-sans text-[15px] text-tinte/80 transition-colors hover:text-tinte"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="focus-ring rounded-sm bg-tinte px-4 py-2 font-sans text-[15px] font-medium text-papier transition-colors hover:bg-werkstatt"
          >
            Potenzialanalyse starten
          </Link>
        </nav>

        <button
          className="focus-ring flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-[2px] w-6 bg-tinte transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-tinte transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-tinte transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {open && (
        <div className="border-t border-tinte/10 bg-papier md:hidden">
          <Container className="flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded py-3 font-sans text-base text-tinte/85"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="focus-ring mt-2 rounded-sm bg-tinte px-4 py-3 text-center font-sans text-base font-medium text-papier"
              onClick={() => setOpen(false)}
            >
              Potenzialanalyse starten
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
