import { content } from "../../config/content.config.js";
import { $ } from "../../utils/dom.js";

export function renderTestimonials() {
  const slides = content.testimonials.map((tst) => `
    <div class="testimonial__content swiper-slide">
      <div class="testimonial__data">
        <div class="testimonial__header">
          <img src="${tst.logo}" alt="" class="testimonial__img" />
          <div>
            <h3 class="testimonial__name" id="${tst.titleKey}"></h3>
            <span class="testimonial__client" id="${tst.posKey}"></span>
          </div>
        </div>
        <div><i class="uil uil-bookmark testimonial__icon-star"></i></div>
      </div>
      <p class="testimonial__description" id="${tst.subKey}"></p>
    </div>`).join("");

  const app = $("#app");
  app.insertAdjacentHTML("beforeend", `
    <section class="testimonial section">
      <h2 class="section__title" id="job-ref"></h2>
      <span class="section__subtitle__ref" id="job-ref-subtitle"></span>
      <div class="testimonial__container container swiper-container">
        <div class="swiper-wrapper">${slides}</div>
        <div class="swiper-pagination swiper-pagination-testimonial"></div>
      </div>
    </section>`);
}
