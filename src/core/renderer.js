import { renderHome } from "./sections/home.js";
import { renderAbout } from "./sections/about.js";
import { renderSkills } from "./sections/skills.js";
import { renderQualification } from "./sections/qualification.js";
import { renderPortfolio } from "./sections/portfolio.js";
import { renderProjectCTA } from "./sections/project-cta.js";
import { renderTestimonials } from "./sections/testimonials.js";
import { renderContact } from "./sections/contact.js";
import { renderFooter } from "./sections/footer.js";
import { applyTranslations } from "./language.js";

export function renderAll() {
  renderHome();
  renderAbout();
  renderSkills();
  renderQualification();
  renderPortfolio();
  renderProjectCTA();
  renderTestimonials();
  renderContact();
  renderFooter();
  applyTranslations();
  initSwipers();
  initImpressumPrivacyPopups();

  // Ensure CV download link gets a real PDF href on first render as well
  try {
    const evt = new Event("kiko-sync-cv");
    document.dispatchEvent(evt);
  } catch {
    // no-op; older browsers without Event ctor will just keep default href
  }
}
function initSwipers() {
  if (window.swiperTestimonial) window.swiperTestimonial.destroy(true, true);
  window.swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true, grabCursor: true, spaceBetween: 48,
    pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
    breakpoints: { 568: { slidesPerView: 2 } },
  });

  if (window.swiperPortfolio) window.swiperPortfolio.destroy(true, true);
  window.swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true, loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination", clickable: true },
  });
}

function initImpressumPrivacyPopups() {
  const impressum = document.getElementById("impressum-popup");
  const privacy = document.getElementById("privacy-popup");
  const impClose = document.getElementById("impressum-close");
  const privClose = document.getElementById("privacy-close");
  const impLink = document.querySelector('a[href="#impressum"]');
  const privLink = document.querySelector('a[href="#privacy"]');

  const toggle = (popup, show) => { popup.classList[show ? "add" : "remove"]("active-popup"); document.body.style.overflow = show ? "hidden" : "auto"; };
  impLink?.addEventListener("click", (e) => { e.preventDefault(); toggle(impressum, true); });
  privLink?.addEventListener("click", (e) => { e.preventDefault(); toggle(privacy, true); });
  impClose?.addEventListener("click", () => toggle(impressum, false));
  privClose?.addEventListener("click", () => toggle(privacy, false));
  [impressum, privacy].forEach((p) => p?.addEventListener("click", (e) => { if (e.target === p) toggle(p, false); }));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { toggle(impressum, false); toggle(privacy, false); } });
}
