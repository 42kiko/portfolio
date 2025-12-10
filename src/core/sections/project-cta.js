import { $ } from "../../utils/dom.js";

export function renderProjectCTA() {
  const app = $("#app");
  app.insertAdjacentHTML("beforeend", `
    <section class="project section">
      <div class="project__bg">
        <div class="project__container container grid">
          <div class="project__data">
            <h2 class="project__title" id="project-contact-title"></h2>
            <p class="project__description" id="project-contact-description"></p>
            <a href="#contact" class="button button--flex button--white" id="project-contact-button"><i class="uil uil-message button__icon"></i></a>
          </div>
          <img src="assets/img/me/busniess3.png" alt="" class="project__img" />
        </div>
      </div>
    </section>`);
}
