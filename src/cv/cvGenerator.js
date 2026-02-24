// src/cv/cvGenerator.js
// CV Generator - now uses translations.js + content.config.js

import { content } from "../config/content.config.js";
import { translations } from "../config/translations.js";

/**
 * Helper: Resolve a translation key to actual text
 */
function t(key, lang) {
  const entry = translations[key];
  if (!entry) {
    console.warn(`[cvGenerator] Missing translation for key: ${key}`);
    return key;
  }
  return entry[lang] || entry.de || key;
}

/**
 * Helper: Extract "from" or "to" from a period string like "Juli 2024 - Dezember 2024"
 */
function extractPeriod(periodText, part = "from") {
  if (!periodText) return "";
  const parts = periodText.split(/\s*[-–]\s*/);
  if (part === "from") return parts[0]?.trim() || "";
  if (part === "to") return parts[1]?.trim() || parts[0]?.trim() || "";
  return periodText;
}

function escHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Build CV data from translations + content.config
 */
function buildCvData(lang) {
  const cvConfig = content.cv;

  const profile = {
    name: t(cvConfig.profile.nameKey, lang),
    title: t(cvConfig.profile.titleKey, lang),
    location: t(cvConfig.profile.locationKey, lang),
    phone: t(cvConfig.profile.phoneKey, lang),
    email: t(cvConfig.profile.emailKey, lang),
    summary: t(cvConfig.profile.summaryKey, lang),
    profiles: [
      { label: "LinkedIn", url: cvConfig.profile.linkedIn },
      { label: "GitHub", url: cvConfig.profile.github },
      ...(cvConfig.profile.website ? [{ label: "Portfolio", url: cvConfig.profile.website }] : []),
    ],
  };

  // Build experience
  const experience = cvConfig.experience.map((exp) => {
    const periodText = t(exp.fromKey, lang);
    return {
      company: exp.company,
      role: t(exp.roleKey, lang),
      location: exp.location,
      from: extractPeriod(periodText, "from"),
      to: extractPeriod(periodText, "to"),
      bullets: exp.bulletKeys.map((key) => t(key, lang)),
    };
  });

  // Build education
  const education = cvConfig.education.map((edu) => {
    const periodText = t(edu.fromKey, lang);
    return {
      institution: t(edu.institutionKey, lang),
      program: t(edu.programKey, lang),
      location: edu.location,
      from: extractPeriod(periodText, "from"),
      to: extractPeriod(periodText, "to"),
      bullets: edu.bulletKeys.map((key) => t(key, lang)),
    };
  });

  // Build projects
  const projects = cvConfig.projects.map((proj) => ({
    name: t(proj.nameKey, lang),
    date: t(proj.dateKey, lang),
    stack: t(proj.stackKey, lang),
    url: "#",
    bullets: proj.bulletKeys.map((key) => t(key, lang)),
  }));

  // Build sidebar sections (generic)
  const sidebarSections = cvConfig.sidebarSections.map((section) => {
    const result = {
      title: t(section.titleKey, lang),
    };

    // Languages / Certifications with structured items
    if (section.items) {
      result.items = section.items.map((item) => {
        const obj = {};
        Object.keys(item).forEach((key) => {
          const cleanKey = key.replace(/Key$/, ""); // remove "Key" suffix
          obj[cleanKey] = t(item[key], lang);
        });
        return obj;
      });
    }

    // Skills as chips (can be plain strings or objects with textKey)
    if (section.chips) {
      result.chips = section.chips.map((chip) => {
        if (typeof chip === "string") return chip;
        if (chip.textKey) return t(chip.textKey, lang);
        return chip;
      });
    }

    return result;
  });

  return {
    profile,
    experience,
    education,
    projects,
    sidebarSections,
  };
}

/**
 * Erzeugt ein HTML-Fragment (String) für einen modernen CV im Karten-Layout.
 */
/** Render a single experience/education timeline item */
function _timelineItemHtml(item, isEdu = false) {
  const title = isEdu ? item.program : item.role;
  const sub   = isEdu ? item.institution : `${item.company} · ${item.location}`;
  return `
    <article class="cv-card__timeline-item">
      <header class="cv-card__timeline-header">
        <div>
          <h3 class="cv-card__timeline-title">${escHtml(title)}</h3>
          <p class="cv-card__timeline-sub">${escHtml(sub)}</p>
        </div>
        <span class="cv-card__timeline-period">${escHtml(item.from)} – ${escHtml(item.to)}</span>
      </header>
      <ul class="cv-card__timeline-list">
        ${(item.bullets || []).map((b) => `<li class="cv-card__timeline-bullet">${escHtml(b)}</li>`).join("")}
      </ul>
    </article>`;
}

/** Render a single project item */
function _projectItemHtml(p) {
  return `
    <article class="cv-card__project">
      <header class="cv-card__project-header">
        <h3 class="cv-card__project-title">${escHtml(p.name)}</h3>
        <span class="cv-card__project-meta">${escHtml(p.date)} · ${escHtml(p.stack)}</span>
      </header>
      <ul class="cv-card__timeline-list">
        ${(p.bullets || []).map((b) => `<li class="cv-card__timeline-bullet">${escHtml(b)}</li>`).join("")}
      </ul>
    </article>`;
}

/**
 * Wrap section heading + first item together so they can never be split
 * across pages. Remaining items follow outside the anchor.
 */
function _anchoredSection(sectionTitle, items, renderFn) {
  if (!items.length) return sectionTitle;
  const [first, ...rest] = items;
  return `
    <div class="cv-card__section-anchor">
      ${sectionTitle}
      ${renderFn(first)}
    </div>
    ${rest.map(renderFn).join("")}`.trim();
}

export function buildCvHtml({ lang = "de" } = {}) {
  const data = buildCvData(lang);

  // Profile links
  const profileLinksHtml = (data.profile.profiles || [])
    .map(
      (p) => `
        <a href="${p.url}" class="cv-card__hero-link" target="_blank" rel="noreferrer">
          ${escHtml(p.label)}
        </a>`
    )
    .join("");

  // Experience — title anchored to first item
  const expTitle      = `<h2 class="cv-card__section-title">${t("cv-section-experience", lang)}</h2>`;
  const experienceHtml = _anchoredSection(expTitle, data.experience, (e) => _timelineItemHtml(e, false));

  // Education — title anchored to first item
  const eduTitle      = `<h2 class="cv-card__section-title">${t("cv-section-education", lang)}</h2>`;
  const educationHtml = _anchoredSection(eduTitle, data.education, (e) => _timelineItemHtml(e, true));

  // Projects — title anchored to first item
  const projTitle    = `<h2 class="cv-card__section-title">${t("cv-section-projects", lang)}</h2>`;
  const projectsHtml = _anchoredSection(projTitle, data.projects, _projectItemHtml);

  // Sidebar sections (generic rendering)
  const sidebarHtml = data.sidebarSections
    .map((section) => {
      let content = "";

      // Render items (languages, certifications)
      if (section.items) {
        content = `<ul class="cv-card__meta-list">
          ${section.items
            .map((item) => {
              // Languages: name + level
              if (item.level) {
                return `<li class="cv-card__meta-item">${escHtml(item.name)}
                  <span class="cv-card__meta-pill">${escHtml(item.level)}</span>
                </li>`;
              }
              // Certifications: name + issuer + date
              if (item.issuer) {
                return `<li class="cv-card__meta-item">${escHtml(item.name)}
                  <span class="cv-card__meta-sub">${escHtml(item.issuer)} · ${escHtml(item.date)}</span>
                </li>`;
              }
              return `<li class="cv-card__meta-item">${escHtml(item.name)}</li>`;
            })
            .join("")}
        </ul>`;
      }

      // Render chips (skills, soft skills)
      if (section.chips) {
        content = `<ul class="cv-card__chips">
          ${section.chips.map((chip) => `<li class="cv-card__chip">${escHtml(chip)}</li>`).join("")}
        </ul>`;
      }

      return `<section class="cv-card__block">
        <h3 class="cv-card__block-title">${escHtml(section.title)}</h3>
        ${content}
      </section>`;
    })
    .join("");

  return `
  <div class="cv-card">
    <header class="cv-card__hero">
      <div class="cv-card__hero-left">
        <p class="cv-card__hero-kicker">${
          lang === "de" ? "Lebenslauf" : "Curriculum Vitae"
        }</p>
        <h1 class="cv-card__hero-name">${escHtml(data.profile.name)}</h1>
        <p class="cv-card__hero-role">${escHtml(data.profile.title)}</p>
        <p class="cv-card__hero-location">${escHtml(data.profile.location)}</p>
      </div>
      <div class="cv-card__hero-right">
        <div class="cv-card__hero-contact">
          <span>${escHtml(data.profile.email)}</span>
          <span>${escHtml(data.profile.phone)}</span>
        </div>
        ${profileLinksHtml
          ? `<div class="cv-card__hero-links">${profileLinksHtml}</div>`
          : ""}
      </div>
    </header>
    <div class="cv-card__columns">
      <aside class="cv-card__side">
        ${sidebarHtml}
      </aside>
      <main class="cv-card__main">
        <section class="cv-card__block cv-card__block--summary">
          <div class="cv-card__section-anchor">
            <h2 class="cv-card__section-title">${t("cv-section-profile", lang)}</h2>
            <p class="cv-card__summary">${escHtml(data.profile.summary)}</p>
          </div>
        </section>
        <section class="cv-card__block">
          ${experienceHtml}
        </section>
        <section class="cv-card__block">
          ${educationHtml}
        </section>
        <section class="cv-card__block">
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
