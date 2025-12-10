import { content } from "../../config/content.config.js";
import { $ } from "../../utils/dom.js";

export function renderQualification() {
  const app = $("#app");
  const timelineItems = content.experience.map((e) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-period" id="${e.periodKey}"></div>
        <h3 class="timeline-title" id="${e.titleKey}"></h3>
        <p class="timeline-description" id="${e.descKey}"></p>
        <div class="timeline-tags">
          <span class="timeline-tag tag-education"><i class="${e.tagLeft.icon} tag-icon"></i><div id="${e.tagLeft.key}"></div></span>
          <a href="${e.tagRight.href}" target="_blank" class="timeline-tag tag-employer link"><i class="${e.tagRight.icon} tag-icon"></i><div id="${e.tagRight.labelKey}"></div></a>
        </div>
      </div>
    </div>`).join("");

  app.insertAdjacentHTML("beforeend", `
    <section class="qualification__section" id="qualification">
      <h2 class="section__title" id="qualification-title"></h2>
      <span class="section__subtitle" id="qualification-subtitle"></span>
      <section class="timeline">${timelineItems}</section>
    </section>`);
}
