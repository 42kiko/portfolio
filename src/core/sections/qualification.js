import { content } from "../../config/content.config.js";
import { $ } from "../../utils/dom.js";
import { LanguageStore } from "../language.js";

function buildDocs(e, lang) {
  if (!e.docs || !e.docs.length) return "";
  return `<div class="timeline-docs">${e.docs.map(d => `
      <a href="${d[lang] || d.de}" target="_blank" rel="noopener" class="timeline-doc link">
        <i class="uil uil-file-download-alt tag-icon"></i><span id="${d.labelKey}"></span>
      </a>`).join("")}</div>`;
}

function buildHashtags(e, lang) {
  const tagArray = Array.isArray(e.tags) ? e.tags : (e.tags?.[lang] || e.tags?.de || []);
  if (!tagArray.length) return "";
  return `<div class="entry-tags">${tagArray.map(t => `<span class="hashtag">#${t.replace(/\s+/g, "")}</span>`).join("")}</div>`;
}

function buildEmployerTag(tr) {
  return tr.href
    ? `<a href="${tr.href}" target="_blank" class="timeline-tag tag-employer link"><i class="${tr.icon} tag-icon"></i><div id="${tr.labelKey}"></div></a>`
    : `<span class="timeline-tag tag-employer"><i class="${tr.icon} tag-icon"></i><div id="${tr.labelKey}"></div></span>`;
}

function buildCardBody(e, lang) {
  return `
    <div class="timeline-period" id="${e.periodKey}"></div>
    <h3 class="timeline-title" id="${e.titleKey}"></h3>
    <p class="timeline-description" id="${e.descKey}"></p>
    <div class="timeline-tags">
      <span class="timeline-tag tag-education"><i class="${e.tagLeft.icon} tag-icon"></i><div id="${e.tagLeft.key}"></div></span>
      ${buildEmployerTag(e.tagRight)}
    </div>
    ${buildDocs(e, lang)}
    ${buildHashtags(e, lang)}`;
}

export function renderQualification() {
  const app = $("#app");
  const lang = LanguageStore.get();

  const currentEntries = content.experience.filter(e => e.current);
  const pastEntries    = content.experience.filter(e => !e.current);

  const nowBlock = currentEntries.length ? `
    <div class="timeline-now">
      <div class="timeline-now__marker">
        <span class="timeline-now__pulse"></span>
        <span class="timeline-now__badge" id="now-heading"></span>
      </div>
      <div class="timeline-now__grid">
        ${currentEntries.map(e => `
          <div class="timeline-now__col">
            <div class="timeline-content">
              ${buildCardBody(e, lang)}
            </div>
          </div>`).join("")}
      </div>
    </div>` : "";

  const timelineItems = pastEntries.map(e => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        ${buildCardBody(e, lang)}
      </div>
    </div>`).join("");

  app.insertAdjacentHTML("beforeend", `
    <section class="qualification__section" id="qualification">
      <h2 class="section__title" id="qualification-title"></h2>
      <span class="section__subtitle" id="qualification-subtitle"></span>
      <section class="timeline">
        ${nowBlock}
        ${timelineItems}
      </section>
    </section>`);
}
