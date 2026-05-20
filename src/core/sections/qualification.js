import { content } from "../../config/content.config.js";
import { $ } from "../../utils/dom.js";
import { LanguageStore } from "../language.js";

export function renderQualification() {
  const app = $("#app");
  const lang = LanguageStore.get();

  const timelineItems = content.experience.map((e) => {
    const docs = (e.docs && e.docs.length)
      ? `<div class="timeline-docs">${e.docs.map((d) => `
          <a href="${d[lang] || d.de}" target="_blank" rel="noopener" class="timeline-doc link">
            <i class="uil uil-file-download-alt tag-icon"></i><span id="${d.labelKey}"></span>
          </a>`).join("")}</div>`
      : "";

    // Arbeitgeber-Tag: verlinkt, falls eine href vorhanden ist – sonst statisch
    const tr = e.tagRight;
    const employer = tr.href
      ? `<a href="${tr.href}" target="_blank" class="timeline-tag tag-employer link"><i class="${tr.icon} tag-icon"></i><div id="${tr.labelKey}"></div></a>`
      : `<span class="timeline-tag tag-employer"><i class="${tr.icon} tag-icon"></i><div id="${tr.labelKey}"></div></span>`;

    return `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-period" id="${e.periodKey}"></div>
        <h3 class="timeline-title" id="${e.titleKey}"></h3>
        <p class="timeline-description" id="${e.descKey}"></p>
        <div class="timeline-tags">
          <span class="timeline-tag tag-education"><i class="${e.tagLeft.icon} tag-icon"></i><div id="${e.tagLeft.key}"></div></span>
          ${employer}
        </div>
        ${docs}
      </div>
    </div>`;
  }).join("");

  app.insertAdjacentHTML("beforeend", `
    <section class="qualification__section" id="qualification">
      <h2 class="section__title" id="qualification-title"></h2>
      <span class="section__subtitle" id="qualification-subtitle"></span>
      <section class="timeline">${timelineItems}</section>
    </section>`);
}
