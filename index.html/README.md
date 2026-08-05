# W&M Digital — Website

Next.js 14 (App Router) + React + Tailwind CSS.

## Struktur

- `/` — Startseite
- `/ueber-uns` — Über mich
- `/leistungen` — Alle 20 Leistungen, gruppiert
- `/pakete` — Starter / Professional / Premium
- `/prozess` — Ablauf in 4 Schritten
- `/referenzen` — Döner Point (echt) + Café-Demo
- `/wissen` — Wissensbereich (aktuell Platzhalter-Themen für später)
- `/kontakt` — Formular „Kostenlose KI-Potenzialanalyse starten“

Design-System (Farben, Fonts) steckt in `tailwind.config.ts`. Die
animierte „Beleg“-Komponente (Signature-Element im Hero) liegt in
`components/Beleg.tsx`.

## Lokal starten

Voraussetzung: Node.js 18+ (getestet mit Node 22) und npm.

```bash
npm install
npm run dev
```

Danach ist die Seite unter http://localhost:3000 erreichbar. Änderungen
an Dateien werden automatisch neu geladen.

## Produktions-Build lokal testen

```bash
npm run build
npm run start
```

## Kontaktformular — E-Mail-Versand aktivieren

Das Formular auf `/kontakt` sendet aktuell an die API-Route
`app/api/kontakt/route.ts`. Dort wird die Anfrage nur geloggt, es wird
noch keine echte E-Mail verschickt. Um das zu aktivieren:

1. Einen Anbieter wählen, z. B. [Resend](https://resend.com) (kostenlose
   Stufe reicht für den Start) oder ein bestehendes SMTP-Postfach über
   `nodemailer`.
2. API-Key als Umgebungsvariable in `.env.local` eintragen, z. B.
   `RESEND_API_KEY=...` (diese Datei nicht ins Git-Repository geben —
   sie ist in `.gitignore` bereits ausgeschlossen).
3. Den auskommentierten Beispielcode in `app/api/kontakt/route.ts`
   aktivieren und die eigene Absender-/Empfänger-Adresse eintragen.

## Online stellen (empfohlen: Vercel)

Next.js kommt vom Vercel-Team — der Deploy-Weg ist entsprechend
unkompliziert und hat eine kostenlose Stufe:

1. Projekt auf GitHub hochladen (neues Repository anlegen, Code pushen).
2. Auf [vercel.com](https://vercel.com) mit dem GitHub-Account
   einloggen, „Add New Project“ wählen und das Repository verbinden.
3. Vercel erkennt Next.js automatisch — keine weitere Konfiguration
   nötig. „Deploy“ klicken.
4. Nach ein bis zwei Minuten ist die Seite unter einer
   `*.vercel.app`-Adresse live.
5. Eigene Domain (z. B. `wm-digital.de`) unter Project Settings →
   Domains hinzufügen und die angezeigten DNS-Einträge beim
   Domain-Registrar setzen.
6. Falls E-Mail-Versand aktiviert wurde: den API-Key unter Project
   Settings → Environment Variables eintragen, danach neu deployen.

Alternativ funktionieren auch Netlify oder ein eigener Server — dafür
wird zusätzlich `npm run build` und `npm run start` bzw. ein
Node-Hosting benötigt, da die Kontaktformular-Route serverseitig läuft
(kein reiner statischer Export).

## Offene Punkte (bewusst nicht erfunden)

- **Preise** auf `/pakete` sind aktuell „Preis auf Anfrage“ — es gibt
  noch keine festgelegten Beträge.
- **E-Mail-Versand** des Kontaktformulars ist vorbereitet, aber nicht
  aktiv (siehe oben).
- **Wissensbereich** enthält nur Themen-Platzhalter, noch keine
  fertigen Artikel.
- **Impressum/Datenschutz** fehlen noch — für eine Website mit
  Kontaktformular in Deutschland rechtlich verpflichtend. Sollte vor
  dem Live-Gang ergänzt werden.
