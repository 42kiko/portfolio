import { content } from "../../config/content.config.js";
import { $ } from "../../utils/dom.js";

export function renderContact() {
  const app = $("#app");
  app.insertAdjacentHTML("beforeend", `
    <section class="contact section" id="contact">
      <h2 class="section__title" id="contact-title"></h2>
      <span class="section__subtitle" id="contact-subtitle"></span>
      <div class="contact__container container grid">
        <div>
          <div class="contact__information">
            <i class="uil uil-envelope contact__icon"></i>
            <div><h3 class="contact__title" id="contact-email-title"></h3><span class="contact__subtitle">${content.profile.email}</span></div>
          </div>
          <div class="contact__information">
            <i class="uil uil-map-marker contact__icon"></i>
            <div><h3 class="contact__title" id="contact-location-title"></h3><span class="contact__subtitle" id="contact-location-subtitle"></span></div>
          </div>
        </div>
        <form id="form" class="contact__form grid">
          <div class="contact__inputs grid">
            <div class="contact__content"><label for="name" class="contact__label">Name</label><input id="name" name="name" type="text" class="contact__input" required /></div>
            <div class="contact__content"><label for="email" class="contact__label">Email</label><input id="email" name="email" type="email" class="contact__input" required /></div>
          </div>
          <div class="contact__content"><label for="title" class="contact__label" id="contact-label-title">Title</label><input type="text" name="title" class="contact__input" id="title" required /></div>
          <div class="contact__content"><label for="message" class="contact__label" id="contact-label-message">Message</label><textarea name="message" id="message" cols="0" rows="7" class="contact__input" required></textarea></div>
          <div><button type="submit" class="button button--flex btn-submit" id="contact-button-text"><i class="uil uil-message button__icon"></i></button></div>
        </form>
        <div id="status"></div>
      </div>
    </section>`);
}
