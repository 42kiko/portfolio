import { content } from "../../config/content.config.js";
import { $ } from "../../utils/dom.js";
import { downloadModernCvPdf } from "./cv-lab.js";

export function renderAbout() {
  const app = $("#app");
  app.insertAdjacentHTML("beforeend", `
    <section class="about section" id="about">
      <h2 class="section__title" id="about-title"></h2>
      <span class="section__subtitle" id="about-subtitle"></span>
      <div class="about__container container grid">
        <video class="about__img" autoplay loop muted playsinline preload="metadata"><source src="${content.about.video}" type="video/mp4" /></video>
        <div class="about__data">
          <p class="about__description" id="about-text"></p>
          <div class="about__info">
            ${content.about.stats.map(s => `
              <div>
                <span class="about__info-title" id="${s.titleKey}"${s.count != null ? ` data-count="${s.count}"` : ""}></span>
                <span class="about__info-name" id="${s.nameKey}"></span>
              </div>`).join("")}
          </div>
          <div class="about__buttons">
            <a href="#" class="button button--flex" id="cv-download-btn">
              <div style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.3;">
                <span id="about-button"></span>
                <span id="about-button-hint" style="font-size: 0.65rem; opacity: 0.75;"></span>
              </div>
              <i class="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>`);

  // Wire up the modern CV download
  const downloadBtn = $("#cv-download-btn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", (e) => {
      e.preventDefault();
      downloadModernCvPdf();
    });
  }
}
