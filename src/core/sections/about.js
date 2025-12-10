import { content } from "../../config/content.config.js";
import { $ } from "../../utils/dom.js";

export function renderAbout() {
  const app = $("#app");
  app.insertAdjacentHTML("beforeend", `
    <section class="about section" id="about">
      <h2 class="section__title" id="about-title"></h2>
      <span class="section__subtitle" id="about-subtitle"></span>
      <div class="about__container container grid">
        <video class="about__img" autoplay loop muted><source src="${content.about.video}" type="video/mp4" /></video>
        <div class="about__data">
          <p class="about__description" id="about-text"></p>
          <div class="about__info">
            ${content.about.stats.map(s => `
              <div>
                <span class="about__info-title" id="${s.titleKey}"></span>
                <span class="about__info-name" id="${s.nameKey}"></span>
              </div>`).join("")}
          </div>
          <div class="about__buttons"><a download href="#" class="button button--flex" id="cv-download-btn"><div id="about-button"></div><i class="uil uil-download-alt button__icon"></i></a></div>
        </div>
      </div>
    </section>`);
}
