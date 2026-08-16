import { NextRequest, NextResponse } from "next/server";

// TODO: Hier einen echten Versand anschließen, z. B. mit Resend
// (https://resend.com) oder SMTP über nodemailer. Aktuell wird die
// Anfrage nur serverseitig geloggt, damit das Formular schon
// funktioniert, ohne dass ein E-Mail-Anbieter konfiguriert ist.
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { name, betrieb, email, telefon, interesse, nachricht } = data ?? {};

    if (!name || !email || !nachricht) {
      return NextResponse.json(
        { ok: false, error: "Pflichtfelder fehlen." },
        { status: 400 }
      );
    }

    console.log("Neue Kontaktanfrage:", {
      name,
      betrieb,
      email,
      telefon,
      interesse,
      nachricht,
    });

    // Beispiel für späteren Versand mit Resend:
    // await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     from: "Zeitwerk <hallo@zeitwerk.de>",
    //     to: "hallo@zeitwerk.de",
    //     subject: `Neue Potenzialanalyse-Anfrage von ${name}`,
    //     text: nachricht,
    //   }),
    // });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Serverfehler." },
      { status: 500 }
    );
  }
}
