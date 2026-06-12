// Generiert die zweisprachigen Nachhall-Info-PDFs fuer die Portfolio-Karte.
// Aufruf: node tools/nachhall-info/build.mjs  (schreibt nach assets/docs/)
import { chromium } from "@playwright/test";
import { fileURLToPath } from "url";
import path from "path";
import { writeFileSync } from "fs";

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, "../../assets/docs");

const t = {
  de: {
    tagline: "Meetings, die nachhallen.",
    intro:
      "Nachhall ist eine selbst gehostete Meeting-Intelligence-Plattform: Browser-Meetings werden aufgezeichnet, transkribiert und von einer KI-Pipeline zu strukturiertem Wissen destilliert &ndash; Zusammenfassungen, Aufgaben, Entscheidungen und Ideen, automatisch dort abgelegt, wo man sie wiederfindet.",
    howTitle: "So funktioniert es",
    steps: [
      ["Aufnehmen", "Meetings direkt im Browser &ndash; ohne Installation, Beitritt per persönlichem Link mit einem Klick."],
      ["Transkribieren", "Automatische Spracherkennung mit Sprecher-Zuordnung, direkt nach Meeting-Ende."],
      ["Verstehen", "Lokale KI-Modelle destillieren Aufgaben, Entscheidungen, Ideen und eine Zusammenfassung &ndash; mit Konfidenz-Angabe."],
      ["Wiederfinden", "Durchsuchbares Archiv, Kanban-Board, Kalender, E-Mail-Zusammenfassung und PDF-Export."],
    ],
    overviewTitle: "Alles im Blick",
    shotHomeCaption: "Die Startseite: laufende Räume, geplante Termine mit Countdown und alle Kennzahlen auf einen Blick.",
    digestTitle: "Vom Gespräch zum Ergebnis",
    shotMeetingCaption:
      "Jedes Meeting wird zur strukturierten Auswertung: Zusammenfassung, Aufgaben mit Verantwortlichen, Fälligkeit und Priorität, Entscheidungen &ndash; jeweils mit Konfidenz der KI.",
    galleryTitle: "Ein Werkzeug f&uuml;r den ganzen Arbeitsalltag",
    gallery: [
      ["shot-kalender.jpeg", "Kalender", "Geplante Termine, Regeltermine und fällige Aufgaben &ndash; mit Einladungs-Mail (ICS) und One-Click-RSVP."],
      ["shot-board.jpeg", "Kanban-Board", "KI-extrahierte Aufgaben pro Projekt bestätigen, zuweisen, abhaken &ndash; jede Karte verlinkt ihr Quell-Meeting."],
    ],
    learnTitle: "Lernt mit jedem Meeting",
    learn:
      "Nachhall führt eine interne Wissensdatenbank: Personen, Projekte, Aufgaben und Entscheidungen werden über Meetings hinweg verknüpft. Neues landet nicht isoliert im Archiv, sondern über Aliases und Routing-Keywords automatisch beim richtigen Projekt &ndash; Unklares wartet in der Triage. So kennt das System jederzeit den aktuellen Stand jedes Projekts und wird mit jedem Gespräch besser.",
    shotProjectsCaption: "Projekte mit Aliases &amp; Routing-Keywords: das Ged&auml;chtnis, das jedes neue Meeting einsortiert.",
    featTitle: "Funktionen kompakt",
    features: [
      "Browser-Meetings ohne Installation, Multi-Screenshare",
      "Kalender mit ICS-Einladungen und One-Click-RSVP",
      "Benachrichtigungen: Einladungs- &amp; Zusammenfassungs-Mails",
      "Kanban-Board pro Projekt (Tasks, Ideen, Entscheidungen)",
      "Projekte &amp; Personen mit eigener Farbe und Icon",
      "Durchsuchbares Archiv und PDF-Export jeder Auswertung",
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
      ["Record", "Meetings right in the browser &ndash; no installs, one-click join via a personal link."],
      ["Transcribe", "Automatic speech recognition with speaker attribution, right after the meeting ends."],
      ["Understand", "Local AI models distil tasks, decisions, ideas and a summary &ndash; each with a confidence score."],
      ["Retrieve", "Searchable archive, Kanban board, calendar, summary e-mails and PDF export."],
    ],
    overviewTitle: "Everything at a glance",
    shotHomeCaption: "The home screen: live rooms, scheduled meetings with countdown and all key figures at a glance.",
    digestTitle: "From conversation to outcome",
    shotMeetingCaption:
      "Every meeting becomes a structured digest: summary, tasks with assignees, due dates and priority, decisions &ndash; each with the AI's confidence score.",
    galleryTitle: "One tool for the whole workday",
    gallery: [
      ["shot-kalender.jpeg", "Calendar", "Scheduled and recurring meetings plus due tasks &ndash; with invitation e-mails (ICS) and one-click RSVP."],
      ["shot-board.jpeg", "Kanban board", "Confirm, assign and complete AI-extracted tasks per project &ndash; every card links back to its source meeting."],
    ],
    learnTitle: "Gets smarter with every meeting",
    learn:
      "Nachhall maintains an internal knowledge base: people, projects, tasks and decisions are linked across meetings. New items are not filed away in isolation &ndash; aliases and routing keywords route them to the right project automatically, anything ambiguous waits in triage. The system always knows the current state of every project and gets better with every conversation.",
    shotProjectsCaption: "Projects with aliases &amp; routing keywords: the memory that files every new meeting.",
    featTitle: "Features at a glance",
    features: [
      "Browser meetings without installs, multi-screenshare",
      "Calendar with ICS invitations and one-click RSVP",
      "Notifications: invitation &amp; summary e-mails",
      "Per-project Kanban board (tasks, ideas, decisions)",
      "Projects &amp; people with their own colour and icon",
      "Searchable archive and PDF export of every digest",
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
  .duo { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:4px; }
  .duo b { display:block; font-size:11px; margin:6px 0 2px; color:var(--ink); }
  .duo .caption { margin-top:0; }
  .feats { columns:2; gap:18px; margin-top:6px; }
  .feats li { list-style:none; padding-left:14px; position:relative; margin-bottom:5px; color:var(--ink); break-inside:avoid; }
  .feats li::before { content:""; position:absolute; left:0; top:.45em; width:6px; height:6px; border-radius:50%; background:var(--accent); }
  .panel { border-radius:12px; padding:12px 14px; margin-top:14px; border:1px solid #2c3550; }
  .panel.blue { background:linear-gradient(135deg, rgba(125,162,255,.10), rgba(186,125,255,.08)); }
  .panel.green { background:linear-gradient(135deg, rgba(125,255,196,.08), rgba(125,162,255,.08)); border-color:#27433c; }
  .panel b { font-family:'Libre Baskerville',serif; font-style:italic; font-size:13px; display:block; margin-bottom:4px; }
  .panel p { color:var(--dim); }
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
    <h2 style="margin-top:18px;">${t[l].overviewTitle}</h2>
    <img class="shot" src="shot-home.jpeg" alt="">
    <div class="caption">${t[l].shotHomeCaption}</div>
    <div class="pageno">1 / 3</div>
  </div>
  <div class="page">
    <div class="aurora"></div>
    <h2 style="margin-top:0;">${t[l].digestTitle}</h2>
    <img class="shot" src="shot-meeting.jpeg" alt="">
    <div class="caption">${t[l].shotMeetingCaption}</div>
    <h2>${t[l].galleryTitle}</h2>
    <div class="duo">
      ${t[l].gallery.map(([img, h, s]) => `<div><img class="shot" src="${img}" alt=""><b>${h}</b><div class="caption">${s}</div></div>`).join("")}
    </div>
    <div class="pageno">2 / 3</div>
  </div>
  <div class="page">
    <div class="aurora"></div>
    <div class="panel green" style="margin-top:0;"><b>${t[l].learnTitle}</b><p>${t[l].learn}</p></div>
    <div style="margin-top:12px;">
      <img class="shot" src="shot-projekte.jpeg" alt="">
      <div class="caption">${t[l].shotProjectsCaption}</div>
    </div>
    <h2>${t[l].featTitle}</h2>
    <ul class="feats">${t[l].features.map((f) => `<li>${f}</li>`).join("")}</ul>
    <div class="panel blue"><b>${t[l].privacyTitle}</b><p>${t[l].privacy}</p></div>
    <div class="contact">${t[l].contact}</div>
    <div class="pageno">3 / 3</div>
  </div>
</body>
</html>`;

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
