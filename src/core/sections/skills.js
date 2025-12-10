import { content } from "../../config/content.config.js";
import { $ } from "../../utils/dom.js";

export function renderSkills() {
  const app = $("#app");
  const sections = content.skills.map((grp) => `
    <div class="skills__content ${grp.open ? "skills__open" : "skills__close"}">
      <div class="skills__header">
        <i class="${grp.icon} skills__icon"></i>
        <div><h1 class="skills__title" id="${grp.titleKey}"></h1><span class="skills__subtitle" id="${grp.subtitleKey}"></span></div>
        <i class="uil uil-angle-down skills__arrow"></i>
      </div>
      <div class="skills__list grid">
        ${grp.items.map((name) => `
          <div class="skills__data"><div class="skills__titles"><h3 class="skills__name">${name}</h3></div><div class="skills__bar"><span class="skills__percentage"></span></div></div>`).join("")}
      </div>
    </div>`).join("");

  app.insertAdjacentHTML("beforeend", `
    <section class="skills section" id="skills">
      <h2 class="section__title" id="skills-title"></h2>
      <span class="section__subtitle" id="skills-subtitle"></span>
      <div class="skills__container container grid">${sections}</div>
    </section>`);

  // Skills accordion behavior
  document.querySelectorAll(".skills__header").forEach((h) => {
    h.addEventListener("click", function () {
      document.querySelectorAll(".skills__content").forEach((c) => (c.className = "skills__content skills__close"));
      const parent = this.parentNode;
      if (parent.classList.contains("skills__close")) parent.classList.replace("skills__close", "skills__open");
    });
  });
}
