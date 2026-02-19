import { content } from "../../config/content.config.js";
import { $ } from "../../utils/dom.js";

/** Instantly resets all bars in `container` to 0, then animates them to --skill-level. */
function animateBarsIn(container) {
  const bars = container.querySelectorAll(".skills__percentage");
  // Hard-reset to 0 (no transition)
  bars.forEach((bar) => {
    bar.style.transition = "none";
    bar.style.width = "0";
  });
  // Double-rAF ensures the 0-state is painted before we add the transition
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      bars.forEach((bar, idx) => {
        bar.style.transition = `width 1s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.07}s`;
        bar.style.width = "var(--skill-level)";
      });
    });
  });
}

export function renderSkills() {
  const app = $("#app");

  const sections = content.skills.map((grp) => `
    <div class="skills__content ${grp.open ? "skills__open" : "skills__close"}">
      <div class="skills__header">
        <i class="${grp.icon} skills__icon"></i>
        <div>
          <h1 class="skills__title" id="${grp.titleKey}"></h1>
          <span class="skills__subtitle" id="${grp.subtitleKey}"></span>
        </div>
        <i class="uil uil-angle-down skills__arrow"></i>
      </div>
      <div class="skills__list grid">
        ${grp.items.map((item) => {
          const name  = typeof item === "string" ? item : item.name;
          const level = typeof item === "string" ? 75  : item.level;
          return `
          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">${name}</h3>
            </div>
            <div class="skills__bar">
              <span class="skills__percentage" style="--skill-level: ${level}%"></span>
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>`).join("");

  app.insertAdjacentHTML("beforeend", `
    <section class="skills section" id="skills">
      <h2 class="section__title" id="skills-title"></h2>
      <span class="section__subtitle" id="skills-subtitle"></span>
      <div class="skills__container container grid">${sections}</div>
    </section>`);

  // ── Accordion with bar animation ──────────────────────────────────────────
  document.querySelectorAll(".skills__header").forEach((h) => {
    h.addEventListener("click", function () {
      const parent = this.parentNode;
      const isClosing = parent.classList.contains("skills__open");

      // Collapse every section and instantly reset their bars
      document.querySelectorAll(".skills__content").forEach((c) => {
        c.className = "skills__content skills__close";
        c.querySelectorAll(".skills__percentage").forEach((bar) => {
          bar.style.transition = "none";
          bar.style.width = "0";
        });
      });

      // Open the clicked section (unless it was already open)
      if (!isClosing) {
        parent.classList.replace("skills__close", "skills__open");
        animateBarsIn(parent);
      }
    });
  });

  // ── Animate bars when the section scrolls into view (initial load) ─────────
  const skillsSection = document.querySelector("#skills");
  if (skillsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const openContent = skillsSection.querySelector(".skills__open");
            if (openContent) animateBarsIn(openContent);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(skillsSection);
  }
}
