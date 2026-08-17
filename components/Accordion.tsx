"use client";

import { useState, ReactNode } from "react";

type Item = {
  id: string;
  titel: string;
  untertitel?: string;
  icon?: ReactNode;
  badge?: string;
  inhalt: ReactNode;
};

export default function Accordion({
  items,
  variant = "light",
}: {
  items: Item[];
  variant?: "light" | "dark";
}) {
  const [offen, setOffen] = useState<string | null>(null);

  const isDark = variant === "dark";

  return (
    <div className="divide-y divide-tinte/10 overflow-hidden rounded-sm border border-tinte/10">
      {items.map((item) => {
        const istOffen = offen === item.id;
        return (
          <div key={item.id} className={isDark ? "bg-tinte" : "bg-papier"}>
            <button
              type="button"
              onClick={() => setOffen(istOffen ? null : item.id)}
              aria-expanded={istOffen}
              className={`focus-ring flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors sm:px-6 ${
                isDark ? "hover:bg-werkstatt2" : "hover:bg-papier2"
              }`}
            >
              <div className="flex items-start gap-4">
                {item.icon && (
                  <span
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-sm ${
                      isDark
                        ? "bg-papier/10 text-messing"
                        : "bg-messing/15 text-messing"
                    }`}
                  >
                    {item.icon}
                  </span>
                )}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3
                      className={`font-display text-base font-semibold sm:text-lg ${
                        isDark ? "text-papier" : "text-tinte"
                      }`}
                    >
                      {item.titel}
                    </h3>
                    {item.badge && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-messing">
                        <span className="h-1.5 w-1.5 rounded-full bg-messing" />
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.untertitel && (
                    <p
                      className={`mt-1 font-sans text-sm ${
                        isDark ? "text-papier/55" : "text-tinte/55"
                      }`}
                    >
                      {item.untertitel}
                    </p>
                  )}
                </div>
              </div>

              <span
                className={`mt-1.5 shrink-0 font-mono text-lg leading-none transition-transform duration-200 ${
                  isDark ? "text-messing" : "text-messing"
                } ${istOffen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                istOffen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`px-5 pb-6 pl-[3.75rem] pr-6 font-sans text-sm leading-relaxed sm:px-6 sm:pl-[4.25rem] ${
                    isDark ? "text-papier/75" : "text-tinte/70"
                  }`}
                >
                  {item.inhalt}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
