// src/cv/cvGenerator.js
// Zentrale CV-Daten (DE/EN) + moderner SVG/HTML-Renderer

import { content } from "../config/content.config.js";

/**
 * Inhalt deines Lebenslaufs, einmalig gepflegt und sprachspezifisch.
 * Hier ist alles, was später für PDF/SVG/HTML genutzt werden kann.
 */
export const cvContent = {
  en: {
    profile: {
      name: "Kiko Ramon Lukas",
      title: "Data Scientist",
      location: "Hannover, Germany",
      phone: "+49 1577 3664735",
      email: "kiko97@tuta.io",
      summary:
        "Data Scientist with a background in software development and consulting, currently transitioning into the data science field. Currently enrolled in the Data Science training program at Masterschool with a focus on Python, Exploratory Data Analysis and Machine Learning. Eager to leverage my skills to transform complex data into actionable insights, implement ML models and support data-driven strategies.",
      profiles: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/kiko97/",
        },
        {
          label: "GitHub",
          url: "https://github.com/42kiko",
        },
      ],
    },
    skills: {
      technical: [
        {
          title: "Data Analytics and Visualization",
          items: [
            "Exploratory Data Analysis",
            "Probability Visualization",
            "Pandas",
            "Seaborn",
          ],
        },
        {
          title: "Programming and Query Languages",
          items: [
            "Python",
            "Java",
            "JavaScript",
            "C#",
            "TypeScript",
            "SQL",
          ],
        },
        {
          title: "Tools and Software",
          items: [
            "Git/GitHub",
            "Jenkins",
            "VS Code",
            "IntelliJ",
            "Excel (Pivot)",
            "Confluence",
            "Trello",
          ],
        },
        {
          title: "Methodologies & Frameworks",
          items: ["Scrum", "Kanban", "Agile", "OKR"],
        },
        {
          title: "Web Development",
          items: ["Angular", "React", "Node.js", "RESTful APIs"],
        },
        {
          title: "Cloud & Deployment",
          items: ["Docker", "CI/CD"],
        },
      ],
      soft: [
        "Analytical Thinking",
        "Problem-Solving",
        "Collaboration",
        "Adaptability",
        "Continuous Learning",
      ],
    },
    experience: [
      {
        company: "City of Hannover",
        role: "Organizational Programmer",
        location: "Hannover",
        from: "Jul 2024",
        to: "Dec 2024",
        bullets: [
          "Maintained and supported core applications used by over 300 employees, acting as a vital link between business units and software providers.",
          "Improved workflows and digital processes by implementing an automated script that reduced weekly update time by 30 minutes, raising system efficiency for all stakeholders.",
          "Collaborated with colleagues to introduce Grafana and create dashboards, automating reports that were previously compiled manually on a monthly basis.",
        ],
      },
      {
        company: "Otto Group",
        role: "Fullstack Developer",
        location: "Hamburg",
        from: "Jan 2023",
        to: "Dec 2023",
        bullets: [
          "Developed an internal collections system with React, Angular, and C# as part of an agile Scrum team of 8 people.",
          "Implemented modules and interfaces, reducing processing times by over 20%.",
          "Collaborated with project management and business analysts to deliver robust and efficient solutions.",
        ],
      },
      {
        company: "NT Neue Technologie AG",
        role: "Software Developer",
        location: "Erfurt",
        from: "Sep 2021",
        to: "Dec 2022",
        bullets: [
          "Developed and maintained three large-scale web applications (FinAdvisory, FINService, FinProcess) with a reported customer satisfaction rate of 99%.",
          "Took on key account responsibilities within the FinProcess project, including direct customer communication and support.",
          "Increased customer satisfaction by customizing the loan processing software to unique client needs.",
        ],
      },
      {
        company: "frobese GmbH",
        role: "IT Consultant",
        location: "Hannover",
        from: "Oct 2018",
        to: "Aug 2021",
        bullets: [
          "Developed and implemented web tools and applications for both external and internal clientele, including the migration of over 1 million customer records for KKH.",
          "Managed diverse projects including a business card scanner (Hackathon), onboarding tools, and significant framework enhancements that improved onboarding efficiency by 40%.",
          "Championed the adoption of agile methodologies and spearheaded the modernization of team workflows.",
        ],
      },
    ],
    certifications: [
      {
        name: "Scrum Master",
        issuer: "Scrum.org",
        date: "Oct 2018",
        url: "#",
      },
      {
        name: "Developing Web Apps with SAPUI5",
        issuer: "SAP",
        date: "Jun 2016",
        url: "#",
      },
      {
        name: "AWS Technical Essentials",
        issuer: "AWS",
        date: "Jan 2016",
        url: "#",
      },
    ],
    languages: [
      { name: "German", level: "Native" },
      { name: "English", level: "B1" },
      { name: "Spanish", level: "A1" },
    ],
    education: [
      {
        institution: "Masterschool",
        program: "Data Science (Training Program)",
        location: "",
        from: "Mar 2025",
        to: "May 2026",
        bullets: [
          "Acquired hands-on experience analyzing large datasets using Python, SQL, and Pandas to extract meaningful insights.",
          "Developed data-driven reports and visualizations with Tableau, Power BI, and Matplotlib to enhance business intelligence and decision-making.",
          "Applied statistical analysis and predictive modeling techniques, implementing machine learning algorithms, regression models, and clustering methods to identify trends.",
        ],
      },
      {
        institution: "tecRacer GmbH & Co. KG",
        program: "Software Development (Vocational Training)",
        location: "",
        from: "Jul 2014",
        to: "Jan 2018",
        bullets: [
          "Hands-on vocational training focused on software development with emphasis on agile methodologies (Scrum, Kanban).",
          "Gained solid Java skills and applied Clean Code principles in production contexts.",
        ],
      },
    ],
    projects: [
      {
        name: "Vehicle Data Analysis (Exploratory Data Science Project)",
        date: "Jul 2025",
        url: "#",
        stack: "Python (Pandas, NumPy, Matplotlib, Seaborn), Jupyter Notebook",
        bullets: [
          "Explored a vehicle dataset to uncover patterns in efficiency, engine size, and pricing.",
          "Identified correlations and visualized key trends for market and efficiency insights.",
        ],
      },
      {
        name: "Bring Climate Action into Your Company – Digital Climate Roadmap",
        date: "Oct 2022",
        url: "#",
        stack: "JavaScript, TypeScript, Angular, PostgreSQL, GitLab, Agile",
        bullets: [
          "Developed a digital tool to help companies implement concrete climate actions.",
          "Launched a roadmap with 60+ sustainability actions, adopted by several organizations.",
        ],
      },
      {
        name: "Frobese IT Consulting Knowledge Hub",
        date: "Aug 2019",
        url: "#",
        stack: "Hugo (static site generator), GitHub, Markdown-based content management",
        bullets: [
          "Created a central platform for knowledge-sharing and collaboration within the company.",
          "Released a knowledge hub; an OKR article increased forum engagement by 20%.",
        ],
      },
    ],
  },
  de: {
    profile: {
      name: "Kiko Ramon Lukas",
      title: "Data Scientist",
      location: "Hannover, Deutschland",
      phone: "+49 1577 3664735",
      email: "kiko97@tuta.io",
      summary:
        "Data Scientist mit Erfahrung in der Softwareentwicklung und Beratung, der sich derzeit auf den Bereich Data Science spezialisiert. Momentan nehme ich an einem Data-Science-Weiterbildungsprogramm bei Masterschool teil, mit Fokus auf Python, explorative Datenanalyse und maschinelles Lernen. Mein Ziel ist es, meine Fähigkeiten einzusetzen, um komplexe Daten in verwertbare Erkenntnisse zu verwandeln, Machine-Learning-Modelle zu implementieren und datenbasierte Strategien zu unterstützen.",
      profiles: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/kiko97/",
        },
        {
          label: "GitHub",
          url: "https://github.com/42kiko",
        },
      ],
    },
    skills: {
      technical: [
        {
          title: "Datenanalyse und Visualisierung",
          items: [
            "Explorative Datenanalyse",
            "Datenvisualisierung",
            "Pandas",
            "Seaborn",
          ],
        },
        {
          title: "Programmier- & Datenbank-Sprachen",
          items: [
            "Python",
            "Java",
            "JavaScript",
            "C#",
            "TypeScript",
            "SQL",
          ],
        },
        {
          title: "Tools und Software",
          items: [
            "Git/GitHub",
            "Jenkins",
            "VS Code",
            "IntelliJ",
            "Excel (Pivot)",
            "Confluence",
            "Trello",
          ],
        },
        {
          title: "Methodiken & Frameworks",
          items: ["Scrum", "Kanban", "Agile", "OKR"],
        },
        {
          title: "Webentwicklung",
          items: ["Angular", "React", "Node.js", "RESTful APIs"],
        },
        {
          title: "Cloud & Deployment",
          items: ["Docker", "CI/CD"],
        },
      ],
      soft: [
        "Analytisches Denken",
        "Problemlösungsfähigkeit",
        "Teamarbeit & Kollaboration",
        "Anpassungsfähigkeit",
        "Lernbereitschaft",
      ],
    },
    experience: [
      {
        company: "Landeshauptstadt Hannover (LHH)",
        role: "Organisationsprogrammierer",
        location: "Hannover",
        from: "Jul 2024",
        to: "Dez 2024",
        bullets: [
          "Betreuung und Weiterentwicklung zentraler Applikationen für über 300 Mitarbeitende.",
          "Verbesserung von Workflows und digitalen Prozessen durch ein automatisiertes Skript, das die wöchentliche Update-Zeit um 30 Minuten reduzierte und so die Systemeffizienz für alle Beteiligten steigerte.",
          "Einführung von Grafana und Erstellung von Dashboards in Zusammenarbeit mit Kollegen, um monatliche Reports zu automatisieren, die zuvor manuell erstellt wurden.",
        ],
      },
      {
        company: "Otto Group",
        role: "Fullstack Entwickler",
        location: "Hamburg",
        from: "Jan 2023",
        to: "Dez 2023",
        bullets: [
          "Entwicklung eines Inkasso-Systems mit React, Angular und C# im Scrum-Team mit 8 Personen.",
          "Umsetzung von Modulen und Schnittstellen, reduzierte Prozesszeiten um über 20%.",
          "Enge Zusammenarbeit mit Projektmanagement und Business Analysts, um robuste und effiziente Lösungen zu liefern.",
        ],
      },
      {
        company: "NT Neue Technologie AG",
        role: "Softwareentwickler",
        location: "Erfurt",
        from: "Sep 2021",
        to: "Dez 2022",
        bullets: [
          "Entwicklung und Pflege von drei großen Webanwendungen (FinAdvisory, FINService, FinProcess) mit einer gemeldeten Kundenzufriedenheit von 99%.",
          "Übernahme von Key-Account-Verantwortlichkeiten im FinProcess-Projekt, einschließlich direkter Kundenkommunikation und -support.",
          "Steigerung der Kundenzufriedenheit durch individuelle Anpassung der Kreditbearbeitungssoftware an spezifische Kundenbedürfnisse.",
        ],
      },
      {
        company: "frobese GmbH",
        role: "IT Consultant",
        location: "Hannover",
        from: "Okt 2018",
        to: "Aug 2021",
        bullets: [
          "Entwicklung und Implementierung von Web-Tools und Anwendungen für externe und interne Kunden, inklusive der Migration von über 1 Million Kundendatensätzen für die KKH.",
          "Management diverser Projekte, u. a. einer Visitenkarten-Scanner-App (Hackathon), Onboarding-Tools und bedeutenden Framework-Erweiterungen, die die Onboarding-Effizienz um 40% steigerten.",
          "Einführung agiler Methodiken und Modernisierung der Team-Workflows.",
        ],
      },
    ],
    certifications: [
      {
        name: "Scrum Master",
        issuer: "Scrum.org",
        date: "Okt 2018",
        url: "#",
      },
      {
        name: "Developing Web Apps with SAPUI5",
        issuer: "SAP",
        date: "Jun 2016",
        url: "#",
      },
      {
        name: "AWS Technical Essentials",
        issuer: "AWS",
        date: "Jan 2016",
        url: "#",
      },
    ],
    languages: [
      { name: "Deutsch", level: "Muttersprache" },
      { name: "Englisch", level: "B1" },
      { name: "Spanisch", level: "A1" },
    ],
    education: [
      {
        institution: "Masterschool",
        program: "Data Science (Weiterbildung)",
        location: "",
        from: "März 2025",
        to: "Mai 2026",
        bullets: [
          "Praktische Erfahrung in der Analyse großer Datensätze mit Python, SQL und Pandas, um aussagekräftige Erkenntnisse zu gewinnen.",
          "Erstellung datengestützter Berichte und Visualisierungen mit Tableau, Power BI und Matplotlib zur Verbesserung der Business Intelligence und Entscheidungsfindung.",
          "Anwendung statistischer Analysen und prädiktiver Modellierungstechniken; Implementierung von Machine-Learning-Algorithmen, Regressionsmodellen und Clustering-Methoden zur Trendidentifikation.",
        ],
      },
      {
        institution: "tecRacer GmbH & Co. KG",
        program: "Softwareentwicklung (Berufsausbildung)",
        location: "",
        from: "Jul 2014",
        to: "Jan 2018",
        bullets: [
          "Praxisorientierte Berufsausbildung mit Schwerpunkt auf Softwareentwicklung und agilen Methodiken (Scrum, Kanban).",
          "Verwendung solider Java-Kenntnisse und Anwendung von Clean-Code-Prinzipien.",
        ],
      },
    ],
    projects: [
      {
        name: "Fahrzeug-Datenanalyse (Exploratives Data-Science-Projekt)",
        date: "Jul 2025",
        url: "#",
        stack: "Python (Pandas, NumPy, Matplotlib, Seaborn), Jupyter Notebook",
        bullets: [
          "Analyse eines Fahrzeugdatensatzes zur Aufdeckung von Mustern in Effizienz, Motorgröße und Preisgestaltung.",
          "Identifizierung von Korrelationen und Visualisierung zentraler Trends für Markt- und Effizienz-Einblicke.",
        ],
      },
      {
        name: "Klimaschutzmaßnahmen in Unternehmen – Digitale Klimastrategie",
        date: "Okt 2022",
        url: "#",
        stack: "JavaScript, TypeScript, Angular, PostgreSQL, Kollaborationstools (GitLab, Agile)",
        bullets: [
          "Entwicklung eines digitalen Tools zur Unterstützung von Unternehmen bei der Umsetzung konkreter Klimamaßnahmen.",
          "Start einer Roadmap mit über 60 Nachhaltigkeitsmaßnahmen, die von mehreren Organisationen übernommen wurde.",
        ],
      },
      {
        name: "Frobese IT Berater Wissenszentrum",
        date: "Aug 2019",
        url: "#",
        stack: "Hugo (Static Site Generator), GitHub, Markdown-basiertes Content-Management",
        bullets: [
          "Erstellung einer zentralen Plattform für Wissensaustausch und Zusammenarbeit innerhalb des Unternehmens.",
          "Veröffentlichung einer Wissensplattform; ein Artikel zum Thema OKR steigerte die Besucher-Interaktion um 20%.",
        ],
      },
    ],
  },
};

// Farb- und Layout-Themes (für SVG oder HTML-Renderings)
export const cvThemes = {
  light: {
    background: "#f5f5f7",
    accent: "#6366f1",
    accentSoft: "#a5b4fc",
    text: "#111827",
    mutedText: "#6b7280",
    cardBg: "#ffffff",
  },
  dark: {
    background: "#020617",
    accent: "#22d3ee",
    accentSoft: "#0f172a",
    text: "#e5e7eb",
    mutedText: "#9ca3af",
    cardBg: "#020617",
  },
};

// ------- SVG-Modus (Legacy, aktuell im CV-Lab nicht aktiv genutzt) -------

/**
 * Gibt ein SVG als String zurück, das den Lebenslauf im modernen Layout rendert.
 *
 * @param {Object} options
 * @param {"de"|"en"} [options.lang="de"]
 * @param {"light"|"dark"} [options.theme="light"]
 * @param {number} [options.width=1240]
 * @param {number} [options.height=1754]
 */
export function getCvSvgString({ lang = "de", theme = "light", width = 1240, height = 1754 } = {}) {
  const data = cvContent[lang] || cvContent.de;
  const colors = cvThemes[theme] || cvThemes.light;

  const padding = 64;
  const columnGap = 40;
  const leftColWidth = 380;
  const rightColWidth = width - 2 * padding - leftColWidth - columnGap;

  const esc = (str) =>
    String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const renderProfiles = () => {
    if (!data.profile.profiles?.length) return "";
    const x = padding + 40;
    let y = padding + 300;
    const lines = [];

    lines.push(`
      <text x="${x}" y="${y}" fill="${colors.text}" font-size="16" font-weight="600">
        ${lang === "de" ? "Profile" : "Profiles"}
      </text>
    `);
    y += 26;

    data.profile.profiles.forEach((p) => {
      lines.push(`
        <text x="${x}" y="${y}" fill="${colors.accent}" font-size="13" text-decoration="underline">
          ${esc(p.label)}
        </text>
      `);
      y += 20;
    });

    return lines.join("\n");
  };

  const renderSkillChips = () => {
    const xStart = padding + 40;
    const maxWidth = leftColWidth - 80;
    let x = xStart;
    let y = padding + 430;
    const lines = [];

    const categories = [
      ...data.skills.technical,
      { title: lang === "de" ? "Soft Skills" : "Soft Skills", items: data.skills.soft },
    ];

    categories.forEach((cat, idx) => {
      if (idx === 0) {
        lines.push(`
          <text x="${xStart}" y="${padding + 380}" fill="${colors.text}" font-size="16" font-weight="600">
            Technical & Soft Skills
          </text>
        `);
      }

      // Kategorie-Titel
      lines.push(`
        <text x="${xStart}" y="${y}" fill="${colors.mutedText}" font-size="12" font-weight="600">
          ${esc(cat.title)}
        </text>
      `);
      y += 18;

      cat.items.forEach((item) => {
        const paddingX = 10;
        const paddingY = 6;
        const approxCharWidth = 6.5;
        const textWidth = item.length * approxCharWidth + paddingX * 2;

        if (x + textWidth > xStart + maxWidth) {
          x = xStart;
          y += 28;
        }

        lines.push(`
          <g>
            <rect x="${x}" y="${y - 16}" rx="999" ry="999" width="${textWidth}" height="${paddingY * 2 + 8}" fill="${colors.background}" />
            <text x="${x + paddingX}" y="${y}" fill="${colors.text}" font-size="11">
              ${esc(item)}
            </text>
          </g>
        `);
        x += textWidth + 6;
      });

      x = xStart;
      y += 30;
    });

    return lines.join("\n");
  };

  const renderLanguagesAndCerts = () => {
    const x = padding + 40;
    let y = height - padding - 260;
    const lines = [];

    // Languages
    lines.push(`
      <text x="${x}" y="${y}" fill="${colors.text}" font-size="16" font-weight="600">
        ${lang === "de" ? "Sprachen" : "Languages"}
      </text>
    `);
    y += 24;

    data.languages.forEach((l) => {
      lines.push(`
        <text x="${x}" y="${y}" fill="${colors.mutedText}" font-size="13">
          ${esc(l.name)} · ${esc(l.level)}
        </text>
      `);
      y += 18;
    });

    y += 22;

    // Certifications
    lines.push(`
      <text x="${x}" y="${y}" fill="${colors.text}" font-size="16" font-weight="600">
        ${lang === "de" ? "Zertifikate" : "Certifications"}
      </text>
    `);
    y += 24;

    data.certifications.forEach((c) => {
      lines.push(`
        <text x="${x}" y="${y}" fill="${colors.mutedText}" font-size="13">
          ${esc(c.name)} · ${esc(c.issuer)} · ${esc(c.date)}
        </text>
      `);
      y += 18;
    });

    return lines.join("\n");
  };

  const renderRightColumn = () => {
    const x = padding + leftColWidth + columnGap + 40;
    let y = padding + 260;
    const lines = [];

    // Summary
    lines.push(`
      <text x="${x}" y="${y}" fill="${colors.text}" font-size="18" font-weight="600">
        ${lang === "de" ? "Profil" : "Profile"}
      </text>
    `);
    y += 20;

    lines.push(`
      <foreignObject x="${x}" y="${y}" width="${rightColWidth - 60}" height="140">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:13px; line-height:1.6; color:${colors.mutedText};">
          ${esc(data.profile.summary)}
        </div>
      </foreignObject>
    `);

    y += 170;

    // Experience
    lines.push(`
      <text x="${x}" y="${y}" fill="${colors.text}" font-size="18" font-weight="600">
        ${lang === "de" ? "Erfahrung" : "Experience"}
      </text>
    `);
    y += 30;

    data.experience.forEach((exp) => {
      lines.push(`
        <text x="${x}" y="${y}" fill="${colors.text}" font-size="14" font-weight="600">
          ${esc(exp.role)} · ${esc(exp.company)}
        </text>
      `);
      y += 18;
      lines.push(`
        <text x="${x}" y="${y}" fill="${colors.mutedText}" font-size="12">
          ${esc(exp.from)} – ${esc(exp.to)} · ${esc(exp.location)}
        </text>
      `);
      y += 18;

      (exp.bullets || []).forEach((b) => {
        lines.push(`
          <text x="${x + 14}" y="${y}" fill="${colors.mutedText}" font-size="12">
            • ${esc(b)}
          </text>
        `);
        y += 16;
      });

      y += 14;
    });

    // Education
    y += 10;
    lines.push(`
      <text x="${x}" y="${y}" fill="${colors.text}" font-size="18" font-weight="600">
        ${lang === "de" ? "Bildung" : "Education"}
      </text>
    `);
    y += 30;

    data.education.forEach((edu) => {
      lines.push(`
        <text x="${x}" y="${y}" fill="${colors.text}" font-size="14" font-weight="600">
          ${esc(edu.program)}
        </text>
      `);
      y += 18;
      lines.push(`
        <text x="${x}" y="${y}" fill="${colors.mutedText}" font-size="12">
          ${esc(edu.institution)} · ${esc(edu.from)} – ${esc(edu.to)}
        </text>
      `);
      y += 18;

      (edu.bullets || []).slice(0, 3).forEach((b) => {
        lines.push(`
          <text x="${x + 14}" y="${y}" fill="${colors.mutedText}" font-size="12">
            • ${esc(b)}
          </text>
        `);
        y += 16;
      });

      y += 12;
    });

    // Projects (am Ende)
    y += 10;
    lines.push(`
      <text x="${x}" y="${y}" fill="${colors.text}" font-size="18" font-weight="600">
        ${lang === "de" ? "Projekte" : "Projects"}
      </text>
    `);
    y += 30;

    data.projects.forEach((p) => {
      lines.push(`
        <text x="${x}" y="${y}" fill="${colors.text}" font-size="14" font-weight="600">
          ${esc(p.name)}
        </text>
      `);
      y += 18;
      lines.push(`
        <text x="${x}" y="${y}" fill="${colors.mutedText}" font-size="11">
          ${esc(p.date)} · ${esc(p.stack)}
        </text>
      `);
      y += 18;

      (p.bullets || []).forEach((b) => {
        lines.push(`
          <text x="${x + 14}" y="${y}" fill="${colors.mutedText}" font-size="12">
            • ${esc(b)}
          </text>
        `);
        y += 16;
      });

      y += 10;
    });

    return lines.join("\n");
  };

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="background:${colors.background}; font-family:-apple-system,BlinkMacSystemFont,system-ui,sans-serif;">
  <defs>
    <linearGradient id="cv-accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${colors.accent}" stop-opacity="1" />
      <stop offset="100%" stop-color="${colors.accentSoft}" stop-opacity="1" />
    </linearGradient>
  </defs>

  <!-- Header-Card mit Name + Rolle -->
  <rect x="${padding}" y="${padding}" width="${width - padding * 2}" height="220" rx="32" fill="url(#cv-accent)" />

  <!-- Profilbild-Platzhalter (kann später durch echtes Bild ersetzt werden) -->
  <circle cx="${padding + 120}" cy="${padding + 110}" r="64" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.4)" stroke-width="3" />
  <text x="${padding + 120}" y="${padding + 118}" text-anchor="middle" fill="#e5e7eb" font-size="40" font-weight="700">
    ${esc(data.profile.name.charAt(0))}
  </text>

  <!-- Name & Titel -->
  <text x="${padding + 220}" y="${padding + 95}" fill="#ffffff" font-size="34" font-weight="700">
    ${esc(data.profile.name)}
  </text>
  <text x="${padding + 220}" y="${padding + 135}" fill="#e5e7eb" font-size="18" font-weight="500">
    ${esc(data.profile.title)}
  </text>

  <!-- Ort + Kontakt kurz im Header -->
  <text x="${padding + 220}" y="${padding + 165}" fill="#e5e7eb" font-size="13">
    ${esc(data.profile.location)} · ${esc(data.profile.phone)} · ${esc(data.profile.email)}
  </text>

  <!-- Hauptlayout: zwei Spalten-Karten -->
  <rect x="${padding}" y="${padding + 240}" width="${leftColWidth}" height="${height - padding * 2 - 260}" rx="24" fill="${colors.cardBg}" />
  <rect x="${padding + leftColWidth + columnGap}" y="${padding + 240}" width="${rightColWidth}" height="${height - padding * 2 - 260}" rx="24" fill="${colors.cardBg}" />

  <!-- Linke Spalte: Profile, Skills, Sprachen/Zertifikate -->
  ${renderProfiles()}
  ${renderSkillChips()}
  ${renderLanguagesAndCerts()}

  <!-- Rechte Spalte: Summary, Erfahrung, Bildung, Projekte -->
  ${renderRightColumn()}
</svg>`;

  return svg;
}

/**
 * Rendert den Lebenslauf-SVG in ein DOM-Element.
 *
 * @param {Object} options
 * @param {HTMLElement} options.container – Ziel-Element im DOM
 * @param {"de"|"en"} [options.lang="de"]
 * @param {"light"|"dark"} [options.theme="light"]
 */
export function renderCvInto({ container, lang = "de", theme = "light" } = {}) {
  if (!container) throw new Error("renderCvInto: container fehlt");
  const svg = getCvSvgString({ lang, theme });
  container.innerHTML = svg;
}

/**
 * Hilfsfunktion für spätere Downloads: erzeugt ein Blob-URL aus dem SVG.
 * Damit kannst du z. B. einen Download-Button bauen:
 *   const url = createCvDownloadUrl({ lang: 'de' });
 *   a.href = url; a.download = 'Kiko-CV-de.svg';
 */
export function createCvDownloadUrl({ lang = "de", theme = "light" } = {}) {
  const svg = getCvSvgString({ lang, theme });
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  return URL.createObjectURL(blob);
}

// ------- HTML-Modus: für on-page-Preview + PDF-Export -------

function escHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildSectionHeading(key, lang) {
  const map = {
    profile: { de: "Profil", en: "Profile" },
    experience: { de: "Erfahrung", en: "Experience" },
    education: { de: "Bildung", en: "Education" },
    projects: { de: "Projekte", en: "Projects" },
    skills: { de: "Skills", en: "Skills" },
    languages: { de: "Sprachen", en: "Languages" },
    certifications: { de: "Zertifikate", en: "Certifications" },
  };
  return map[key]?.[lang] || map[key]?.de || key;
}

/**
 * Erzeugt ein HTML-Fragment (String) für einen modernen CV im Karten-Layout.
 * Nutzt das gleiche Blob-SVG wie der Home-Header als Hintergrund.
 */
export function buildCvHtml({ lang = "de" } = {}) {
  const data = cvContent[lang] || cvContent.de;

  const skillsHtml = [
    ...data.skills.technical,
    { title: lang === "de" ? "Soft Skills" : "Soft Skills", items: data.skills.soft },
  ]
    .map(
      (cat) => `
      <section class="cv-card__block">
        <h3 class="cv-card__block-title">${escHtml(cat.title)}</h3>
        <ul class="cv-card__chips">
          ${cat.items
            .map(
              (item) => `
              <li class="cv-card__chip">${escHtml(item)}</li>
            `,
            )
            .join("")}
        </ul>
      </section>`
    )
    .join("");

  const languagesHtml = data.languages
    .map(
      (l) => `
      <li class="cv-card__meta-item">${escHtml(l.name)}
        <span class="cv-card__meta-pill">${escHtml(l.level)}</span>
      </li>`
    )
    .join("");

  const certsHtml = data.certifications
    .map(
      (c) => `
      <li class="cv-card__meta-item">${escHtml(c.name)}
        <span class="cv-card__meta-sub">${escHtml(c.issuer)} · ${escHtml(c.date)}</span>
      </li>`
    )
    .join("");

  const experienceHtml = data.experience
    .map(
      (exp) => `
      <article class="cv-card__timeline-item">
        <header class="cv-card__timeline-header">
          <div>
            <h3 class="cv-card__timeline-title">${escHtml(exp.role)}</h3>
            <p class="cv-card__timeline-sub">${escHtml(exp.company)} · ${escHtml(exp.location)}</p>
          </div>
          <span class="cv-card__timeline-period">${escHtml(exp.from)} – ${escHtml(exp.to)}</span>
        </header>
        <ul class="cv-card__timeline-list">
          ${(exp.bullets || [])
            .map((b) => `<li class="cv-card__timeline-bullet">${escHtml(b)}</li>`)
            .join("")}
        </ul>
      </article>`
    )
    .join("");

  const educationHtml = data.education
    .map(
      (edu) => `
      <article class="cv-card__timeline-item">
        <header class="cv-card__timeline-header">
          <div>
            <h3 class="cv-card__timeline-title">${escHtml(edu.program)}</h3>
            <p class="cv-card__timeline-sub">${escHtml(edu.institution)}</p>
          </div>
          <span class="cv-card__timeline-period">${escHtml(edu.from)} – ${escHtml(edu.to)}</span>
        </header>
        <ul class="cv-card__timeline-list">
          ${(edu.bullets || [])
            .map((b) => `<li class="cv-card__timeline-bullet">${escHtml(b)}</li>`)
            .join("")}
        </ul>
      </article>`
    )
    .join("");

  const projectsHtml = data.projects
    .map(
      (p) => `
      <article class="cv-card__project">
        <header class="cv-card__project-header">
          <h3 class="cv-card__project-title">${escHtml(p.name)}</h3>
          <span class="cv-card__project-meta">${escHtml(p.date)} · ${escHtml(p.stack)}</span>
        </header>
        <ul class="cv-card__timeline-list">
          ${(p.bullets || [])
            .map((b) => `<li class="cv-card__timeline-bullet">${escHtml(b)}</li>`)
            .join("")}
        </ul>
      </article>`
    )
    .join("");

  const avatarSrc = content?.home?.avatarImg || "";
  const avatarX = content?.home?.imgPosition?.x ?? 130;
  const avatarY = content?.home?.imgPosition?.y ?? 70;

  return `
  <div class="cv-card">
    <div class="cv-card__columns">
      <aside class="cv-card__side">
        <div class="cv-card__avatar-wrap">
          <div class="cv-card__avatar cv-card__avatar--blob">
            <svg class="home__blob" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 600" aria-hidden="true">
              <path
                d="M425.5600448266467 14.779019439000905C376.76110480386023 -34.935723857304396 280.20983527261023 -72.614270762822 234.02745205320917 -73.13758364937799C187.84506883380817 -73.66089653593397 175.93968604165315 -31.403359965702833 148.46574551024042 11.639142119664967C120.99180497882767 54.68164420503288 70.6229186669787 123.75896684704136 69.18380886473261 185.1174288628293C67.74469906248652 246.47589087861707 81.48167822915318 345.77456387259474 139.83108669676386 379.78991421439173C198.18049516437458 413.80526455618826 354.781925421536 414.9827039279329 419.2802596703967 389.20953091361037C483.7785939192574 363.4363578992877 525.774461330553 287.55596137422253 526.821092189928 225.15087612845423C527.867723049303 162.74579088268618 474.35898484943306 64.49376273530632 425.5600448266467 14.779019439000905C376.76110480386023 -34.935723857304396 280.20983527261023 -72.614270762822 234.02745205320917 -73.13758364937799"
                transform="matrix(-0.9141716824785884,0.3327312814312597,-0.3327312814312597,-0.9141716824785884,627.160523415411,372.3445018250747)"
                fill-opacity="0.29">
              </path>
              <defs>
                <pattern id="cv-blob-pattern" width="76" height="76" viewBox="0 0 40 40" patternUnits="userSpaceOnUse">
                  <rect width="100%" height="100%"></rect>
                  <path class="home__blob-lines"
                    d="M0 20v20l14-20L20 0l-20 20zM20 20v20l14-20L40 0l-20 20z" fill-opacity="0.5">
                  </path>
                  <path class="home__blob-lines"
                    d="M0 40v-20l20-20l-10 20zM20 40v-20l20-20l-10 20zM20 20v20l-20 20l9-20zM20-20v20l-20 20l9-20zM40 20v20l-20 20l9-20zM40-20v20l-20 20l9-20z">
                  </path>
                </pattern>
              </defs>
              <mask id="cv-mask" mask-type="alpha">
                <path
                  d="M372.8963486528131 80.45407911572798C324.09740863002673 30.739335819422678 227.54613909877668 -6.939211086094929 181.36375587937562 -7.462523972650914C135.1813726599746 -7.9858368592068985 123.27598986781959 34.27169971102421 95.80204933640687 77.31420179639204C68.32810880499414 120.3567038817599 17.95922249314515 189.43402652376759 16.520112690899055 250.79248853955505C15.08100288865296 312.15095055534164 28.81798205531959 411.44962354931954 87.1673905229303 445.4649738911164C145.51679899054102 479.48032423291335 302.1182292477025 480.657763604658 366.6165634965631 454.8845905903351C431.11489774542383 429.1114175760122 473.11076515671937 353.2310210509471 474.15739601609437 290.8259358051789C475.20402687546937 228.42085055941197 421.6952886755995 130.16882241203328 372.8963486528131 80.45407911572798C324.09740863002673 30.739335819422678 227.54613909877668 -6.939211086094929 181.36375587937562 -7.462523972650914"
                  fill-opacity="1" fill="url(#cv-blob-pattern)" opacity="1"
                  transform="matrix(0.8291806643796716,0.3017970806632748,-0.3017970806632748,0.8291806643796716,181.80323066538816,25.555072447120665)">
                </path>
              </mask>
              <g mask="url(#cv-mask)">
                <path
                  d="M372.8963486528131 80.45407911572798C324.09740863002673 30.739335819422678 227.54613909877668 -6.939211086094929 181.36375587937562 -7.462523972650914C135.1813726599746 -7.9858368592068985 123.27598986781959 34.27169971102421 95.80204933640687 77.31420179639204C68.32810880499414 120.3567038817599 17.95922249314515 189.43402652376759 16.520112690899055 250.79248853955505C15.08100288865296 312.15095055534164 28.81798205531959 411.44962354931954 87.1673905229303 445.4649738911164C145.51679899054102 479.48032423291335 302.1182292477025 480.657763604658 366.6165634965631 454.8845905903351C431.11489774542383 429.1114175760122 473.11076515671937 353.2310210509471 474.15739601609437 290.8259358051789C475.20402687546937 228.42085055941197 421.6952886755995 130.16882241203328 372.8963486528131 80.45407911572798C324.09740863002673 30.739335819422678 227.54613909877668 -6.939211086094929 181.36375587937562 -7.462523972650914"
                  fill-opacity="1" fill="url(#cv-blob-pattern)" opacity="1"
                  transform="matrix(0.8291806643796716,0.3017970806632748,-0.3017970806632748,0.8291806643796716,181.80323066538816,25.555072447120665)">
                </path>
                ${avatarSrc
                  ? `<image class="home__blob-img" x="${avatarX}" y="${avatarY}" href="${avatarSrc}" />`
                  : `<text x="50%" y="55%" text-anchor="middle" fill="#fff" font-size="72" font-weight="700">${escHtml(
                      data.profile.name[0] || "K"
                    )}</text>`}
              </g>
            </svg>
          </div>
        </div>
        <div class="cv-card__identity">
          <h1 class="cv-card__name">${escHtml(data.profile.name)}</h1>
          <p class="cv-card__role">${escHtml(data.profile.title)}</p>
          <p class="cv-card__location">${escHtml(data.profile.location)}</p>
        </div>
        <div class="cv-card__contact">
          <p>${escHtml(data.profile.email)}</p>
          <p>${escHtml(data.profile.phone)}</p>
        </div>
        <div class="cv-card__profiles">
          ${data.profile.profiles
            .map(
              (p) => `
              <a href="${p.url}" class="cv-card__profile-link" target="_blank" rel="noreferrer">
                ${escHtml(p.label)}
              </a>`
            )
            .join("")}
        </div>
        <section class="cv-card__block">
          <h3 class="cv-card__block-title">${buildSectionHeading("languages", lang)}</h3>
          <ul class="cv-card__meta-list">${languagesHtml}</ul>
        </section>
        <section class="cv-card__block">
          <h3 class="cv-card__block-title">${buildSectionHeading("certifications", lang)}</h3>
          <ul class="cv-card__meta-list">${certsHtml}</ul>
        </section>
        ${skillsHtml}
      </aside>
      <main class="cv-card__main">
        <section class="cv-card__block cv-card__block--summary">
          <h2 class="cv-card__section-title">${buildSectionHeading("profile", lang)}</h2>
          <p class="cv-card__summary">${escHtml(data.profile.summary)}</p>
        </section>
        <section class="cv-card__block">
          <h2 class="cv-card__section-title">${buildSectionHeading("experience", lang)}</h2>
          ${experienceHtml}
        </section>
        <section class="cv-card__block">
          <h2 class="cv-card__section-title">${buildSectionHeading("education", lang)}</h2>
          ${educationHtml}
        </section>
        <section class="cv-card__block">
          <h2 class="cv-card__section-title">${buildSectionHeading("projects", lang)}</h2>
          ${projectsHtml}
        </section>
      </main>
    </div>
  </div>`;
}

/**
 * Rendert den HTML-CV in ein Container-Element.
 */
export function renderCvHtmlInto({ container, lang = "de" } = {}) {
  if (!container) throw new Error("renderCvHtmlInto: container fehlt");
  container.innerHTML = buildCvHtml({ lang });
}
