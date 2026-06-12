import { content } from "../../config/content.config.js";
import { $ } from "../../utils/dom.js";
import { LanguageStore } from "../language.js";

export function renderPortfolio() {
  const lang = LanguageStore.get();
  const slides = content.portfolio.map((p) => {
    const tagArray = Array.isArray(p.tags) ? p.tags : (p.tags?.[lang] || p.tags?.de || []);
    // href darf sprachabhaengig sein ({de, en}), z.B. fuer Info-PDFs
    const href = typeof p.href === "string" ? p.href : (p.href?.[lang] || p.href?.de || "#");
    const hashtags = tagArray.length
      ? `<div class="entry-tags">${tagArray.map((t) => `<span class="hashtag">#${t.replace(/\s+/g, "")}</span>`).join("")}</div>`
      : "";

    return `
    <div class="portfolio__content grid swiper-slide">
      <img src="${p.img}" alt="" class="portfolio__img" loading="lazy" decoding="async" />
      <div class="portfolio__data">
        <h3 class="portfolio__title" id="${p.titleKey}"></h3>
        <p class="portfolio__description" id="${p.descKey}"></p>
        <a href="${href}" target="_blank" class="button button--flex button--small portfolio__button" id="${p.ctaKey}">
          <i class="uil uil-arrow-right button__icon"></i>
        </a>
        ${hashtags}
      </div>
    </div>`;
  }).join("");

  const app = $("#app");
  app.insertAdjacentHTML("beforeend", `
    <section class="portfolio section" id="portfolio">
      <h2 class="section__title" id="portfolio-title"></h2>
      <span class="section__subtitle" id="portfolio-subtitle"></span>
      <div class="portfolio__container container swiper-container">
        <div class="swiper-wrapper">${slides}</div>
        <div class="swiper-button-next"><i class="uil uil-angle-right-b swiper-portfolio-icon"></i></div>
        <div class="swiper-button-prev"><i class="uil uil-angle-left-b swiper-portfolio-icon"></i></div>
        <div class="swiper-pagination"></div>
      </div>
    </section>`);
}
