import { content } from "../../config/content.config.js";
import { $ } from "../../utils/dom.js";

// Radar-Geometrie (SVG-Koordinaten)
const SIZE = 320;
const C = SIZE / 2;
const MAX_R = 110;
const ICON_R = MAX_R + 24; // Achsen-Icons knapp ausserhalb der Eckpunkte
const RINGS = [0.25, 0.5, 0.75, 1];

// Punkt auf Achse i von n, im Abstand r vom Zentrum
function axisPoint(i, n, r) {
  const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
  return [C + r * Math.cos(angle), C + r * Math.sin(angle)];
}

const toPolygon = (pts) =>
  pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

export function renderSkills() {
  const app = $("#app");
  const cats = content.skills;
  const n = cats.length;

  // Gitter: konzentrische Ringe
  const rings = RINGS.map((lvl) => {
    const pts = cats.map((_, i) => axisPoint(i, n, MAX_R * lvl));
    return `<polygon class="radar__ring" points="${toPolygon(pts)}" />`;
  }).join("");

  // Gitter: Achsen vom Zentrum nach aussen
  const axes = cats
    .map((_, i) => {
      const [x, y] = axisPoint(i, n, MAX_R);
      return `<line class="radar__axis radar__axis--${i}" x1="${C}" y1="${C}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" />`;
    })
    .join("");

  // Datenflaeche aus den level-Werten
  const dataPts = cats.map((c, i) => axisPoint(i, n, MAX_R * (c.level / 100)));
  const area = `<polygon class="radar__area" points="${toPolygon(dataPts)}" />`;
  const dots = dataPts
    .map(([x, y], i) =>
      `<circle class="radar__dot radar__dot--${i}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" />`
    )
    .join("");

  // Kategorie-Icons an den Achsenenden (HTML-Overlay, exakt positioniert)
  const icons = cats
    .map((c, i) => {
      const [x, y] = axisPoint(i, n, ICON_R);
      return `<i class="${c.icon} radar__axisicon radar__axisicon--${i}" style="left:${((x / SIZE) * 100).toFixed(2)}%;top:${((y / SIZE) * 100).toFixed(2)}%;"></i>`;
    })
    .join("");

  // Kategorie-Karten mit Skill-Chips
  const cards = cats
    .map(
      (c, i) => `
      <article class="skillcard" data-axis="${i}">
        <div class="skillcard__head">
          <i class="${c.icon} skillcard__icon"></i>
          <div class="skillcard__heading">
            <h3 class="skillcard__title" id="${c.titleKey}"></h3>
            <span class="skillcard__sub" id="${c.subtitleKey}"></span>
          </div>
          <span class="skillcard__level">${c.level}</span>
        </div>
        <div class="skillcard__chips">
          ${c.items.map((s) => `<span class="skillchip">${s}</span>`).join("")}
        </div>
      </article>`
    )
    .join("");

  app.insertAdjacentHTML(
    "beforeend",
    `
    <section class="skills section" id="skills">
      <h2 class="section__title" id="skills-title"></h2>
      <span class="section__subtitle" id="skills-subtitle"></span>
      <div class="skills__container container">
        <div class="radar" aria-hidden="true">
          <svg class="radar__svg" viewBox="0 0 ${SIZE} ${SIZE}">
            <g class="radar__grid">${rings}${axes}</g>
            <g class="radar__shape">${area}${dots}</g>
          </svg>
          ${icons}
        </div>
        <div class="skills__cards">${cards}</div>
      </div>
    </section>`
  );

  // Hover auf einer Karte hebt die zugehoerige Radar-Achse hervor
  const radar = document.querySelector("#skills .radar");
  document.querySelectorAll("#skills .skillcard").forEach((card) => {
    const i = card.dataset.axis;
    card.addEventListener("mouseenter", () => radar?.setAttribute("data-active", i));
    card.addEventListener("mouseleave", () => radar?.removeAttribute("data-active"));
  });

  // Einblende-Animation, sobald die Sektion in den Viewport scrollt
  const section = document.getElementById("skills");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(section);
  } else {
    section.classList.add("is-visible");
  }
}
