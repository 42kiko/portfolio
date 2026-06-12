// Generiert die zweisprachigen Nachhall-Info-PDFs fuer die Portfolio-Karte.
// Aufruf: node tools/nachhall-info/build.mjs  (schreibt nach assets/docs/)
import { chromium } from "@playwright/test";
import { fileURLToPath } from "url";
import path from "path";

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, "../../assets/docs");

const t = {
  de: {
    tagline: "Meetings, die nachhallen.",
    intro:
      "Nachhall ist eine selbst gehostete Meeting-Intelligence-Plattform: Browser-Meetings werden aufgezeichnet, transkribiert und von einer KI-Pipeline zu strukturiertem Wissen destilliert &ndash; Zusammenfassungen, Aufgaben, Entscheidungen und Ideen, automatisch dort abgelegt, wo man sie wiederfindet.",
    howTitle: "So funktioniert es",
    steps: [
      ["Aufnehmen", "Meetings direkt im Browser &ndash; ohne Installation, Teilnehmende treten per persönlichem Einladungslink mit einem Klick bei."],
      ["Transkribieren", "Automatische Spracherkennung mit Sprecher-Zuordnung, direkt nach Meeting-Ende."],
      ["Verstehen", "Lokale KI-Modelle destillieren Aufgaben, Entscheidungen, Ideen und eine Zusammenfassung &ndash; inklusive Konfidenz-Angabe."],
      ["Wiederfinden", "Durchsuchbares Archiv, Kanban-Board pro Projekt, Zusammenfassung per E-Mail und PDF-Export."],
    ],
    shotHomeCaption: "Die Startseite: laufende Räume, geplante Termine mit Countdown und alle Kennzahlen auf einen Blick.",
    shotMeetingCaption:
      "Jedes Meeting wird zur strukturierten Auswertung: Zusammenfassung, Aufgaben mit Verantwortlichen, Fälligkeit und Priorität, Entscheidungen &ndash; jeweils mit Konfidenz der KI.",
    featTitle: "Funktionen",
    features: [
      "Kalender mit Einladungen (ICS) und One-Click-RSVP",
      "Geplante Termine, Regeltermine und spontane Räume",
      "Projekte &amp; Personen mit eigener Farbe und Icon",
      "Kanban-Board: Aufgaben bestätigen, zuweisen, abhaken",
      "Zusammenfassungs-Mail an alle Teilnehmenden",
      "PDF-Export jeder Meeting-Auswertung",
    ],
    privacyTitle: "Datenhoheit statt Cloud-Vendor",
    privacy:
      "Nachhall läuft komplett auf eigener Infrastruktur. Die KI-Auswertung &ndash; Zusammenfassungen, Aufgaben, Entscheidungen &ndash; übernehmen lokale Sprachmodelle auf Servern in Deutschland. Keine Meeting-Plattform aus der US-Cloud, kein Vendor-Lock-in: Die Daten bleiben im Haus.",
    contact: "Interesse an einer eigenen Instanz? <strong>kiko97@tuta.io</strong> &middot; 42kiko.space",
  },
  en: {
    tagline: "Meetings that resonate.",
    intro:
      "Nachhall is a self-hosted meeting intelligence platform: browser meetings are recorded, transcribed and distilled by an AI pipeline into structured knowledge &ndash; summaries, tasks, decisions and ideas, automatically filed where you will find them again.",
    howTitle: "How it works",
    steps: [
      ["Record", "Meetings right in the browser &ndash; no installs; participants join with one click via a personal invite link."],
      ["Transcribe", "Automatic speech recognition with speaker attribution, right after the meeting ends."],
      ["Understand", "Local AI models distil tasks, decisions, ideas and a summary &ndash; each with a confidence score."],
      ["Retrieve", "Searchable archive, per-project Kanban board, summary e-mails and PDF export."],
    ],
    shotHomeCaption: "The home screen: live rooms, scheduled meetings with countdown and all key figures at a glance.",
    shotMeetingCaption:
      "Every meeting becomes a structured digest: summary, tasks with assignees, due dates and priority, decisions &ndash; each with the AI's confidence score.",
    featTitle: "Features",
    features: [
      "Calendar with invitations (ICS) and one-click RSVP",
      "Scheduled, recurring and ad-hoc meetings",
      "Projects &amp; people with their own colour and icon",
      "Kanban board: confirm, assign and complete tasks",
      "Summary e-mail to all participants",
      "PDF export of every meeting digest",
    ],
    privacyTitle: "Data sovereignty instead of cloud vendors",
    privacy:
      "Nachhall runs entirely on its own infrastructure. The AI processing &ndash; summaries, tasks, decisions &ndash; is done by local language models on servers in Germany. No US-cloud meeting platform, no vendor lock-in: the data stays in-house.",
    contact: "Interested in your own instance? <strong>kiko97@tuta.io</strong> &middot; 42kiko.space",
  },
};

const html = (l) => `<!DOCTYPE html>
<html lang="${l === "de" ? "de" : "en"}">
<head>
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root { --ink:#e8eaf2; --dim:#9aa1b5; --accent:#7da2ff; --bg:#0b0e16; --card:#11151f; --line:#222838; }
  * { margin:0; padding:0; box-sizing:border-box; }
  html, body { background:var(--bg); color:var(--ink); font-family:Poppins,sans-serif; font-size:10.5px; line-height:1.55; -webkit-print-color-adjust:exact; }
  .page { width:210mm; height:296mm; padding:16mm 18mm; position:relative; overflow:hidden; page-break-after:always; }
  .page:last-child { page-break-after:auto; }
  .aurora { position:absolute; inset:0; background:
    radial-gradient(60% 38% at 85% -8%, rgba(125,162,255,.16), transparent 70%),
    radial-gradient(50% 30% at -10% 30%, rgba(186,125,255,.10), transparent 70%); pointer-events:none; }
  h1 { font-family:'Libre Baskerville',serif; font-size:42px; letter-spacing:-.5px; }
  .tagline { font-family:'Libre Baskerville',serif; font-style:italic; font-size:17px; color:#d9c9f5; margin-top:2px; }
  .intro { margin:14px 0 18px; color:var(--dim); font-size:11.5px; max-width:158mm; }
  h2 { font-family:'Libre Baskerville',serif; font-style:italic; font-size:19px; margin:16px 0 10px; }
  .steps { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
  .step { background:var(--card); border:1px solid var(--line); border-radius:10px; padding:10px 12px; }
  .step b { color:var(--accent); display:block; font-size:11px; margin-bottom:2px; }
  .step span { color:var(--dim); }
  .shot { width:100%; border-radius:10px; border:1px solid var(--line); display:block; }
  .caption { color:var(--dim); font-size:9.5px; margin-top:6px; }
  .feats { columns:2; gap:18px; margin-top:6px; }
  .feats li { list-style:none; padding-left:14px; position:relative; margin-bottom:5px; color:var(--ink); break-inside:avoid; }
  .feats li::before { content:""; position:absolute; left:0; top:.45em; width:6px; height:6px; border-radius:50%; background:var(--accent); }
  .privacy { background:linear-gradient(135deg, rgba(125,162,255,.10), rgba(186,125,255,.08)); border:1px solid #2c3550; border-radius:12px; padding:12px 14px; margin-top:14px; }
  .privacy b { font-family:'Libre Baskerville',serif; font-style:italic; font-size:13px; display:block; margin-bottom:4px; }
  .privacy p { color:var(--dim); }
  .contact { position:absolute; left:18mm; right:18mm; bottom:12mm; border-top:1px solid var(--line); padding-top:8px; color:var(--dim); font-size:10px; }
  .contact strong { color:var(--ink); }
  .pageno { position:absolute; right:18mm; bottom:12mm; color:#3a4158; font-size:9px; }
</style>
</head>
<body>
  <div class="page">
    <div class="aurora"></div>
    <h1>Nachhall</h1>
    <div class="tagline">${t[l].tagline}</div>
    <p class="intro">${t[l].intro}</p>
    <h2>${t[l].howTitle}</h2>
    <div class="steps">
      ${t[l].steps.map(([h, s], i) => `<div class="step"><b>${i + 1} &middot; ${h}</b><span>${s}</span></div>`).join("")}
    </div>
    <h2 style="margin-top:18px;">${l === "de" ? "Alles im Blick" : "Everything at a glance"}</h2>
    <img class="shot" src="shot-home.jpeg" alt="">
    <div class="caption">${t[l].shotHomeCaption}</div>
    <div class="pageno">1 / 2</div>
  </div>
  <div class="page">
    <div class="aurora"></div>
    <h2 style="margin-top:0;">${l === "de" ? "Vom Gespräch zum Ergebnis" : "From conversation to outcome"}</h2>
    <img class="shot" src="shot-meeting.jpeg" alt="">
    <div class="caption">${t[l].shotMeetingCaption}</div>
    <h2>${t[l].featTitle}</h2>
    <ul class="feats">${t[l].features.map((f) => `<li>${f}</li>`).join("")}</ul>
    <div class="privacy"><b>${t[l].privacyTitle}</b><p>${t[l].privacy}</p></div>
    <div class="contact">${t[l].contact}</div>
    <div class="pageno">2 / 2</div>
  </div>
</body>
</html>`;

import { writeFileSync } from "fs";
const browser = await chromium.launch();
const page = await browser.newPage();
for (const l of ["de", "en"]) {
  const file = path.join(here, `_render-${l}.html`);
  writeFileSync(file, html(l));
  await page.goto("file://" + file, { waitUntil: "networkidle" });
  await page.pdf({
    path: path.join(out, `nachhall-info-${l}.pdf`),
    format: "A4",
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });
  console.log(`OK: assets/docs/nachhall-info-${l}.pdf`);
}
await browser.close();
