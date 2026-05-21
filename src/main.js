import { site } from "./config/site.config.js";
import { applyTranslations, LanguageStore } from "./core/language.js";
import { initTheme, initColorTheme } from "./core/theme.js";
import { initNavigation, initScrollHandlers } from "./core/navigation.js";
import { initTimelineAnimations } from "./core/timeline.js";
import { initContactForm } from "./core/contact.js";
import { renderAll } from "./core/renderer.js";
import { initOnboarding } from "./core/onboarding.js";
import { initTextScramble, initCounterAnimations, initSectionTitleAnimations } from "./core/animations.js";

// Initial render of the whole app
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.setAttribute("lang", site.defaultLang || "de");
  initNavigation();
  initTheme();
  initColorTheme();
  renderAll();
  applyTranslations();
  initTimelineAnimations();
  initSectionTitleAnimations();
  initCounterAnimations();
  initTextScramble();
  initScrollHandlers();
  initContactForm();
  initOnboarding();

  const langBtn = document.getElementById("lang-toggle-btn");
  langBtn?.addEventListener("click", () => {
    const next = LanguageStore.get() === "de" ? "en" : "de";
    LanguageStore.set(next);
    document.getElementById("app").innerHTML = ""; // re-render all sections
    renderAll();
    try {
      if (window.requestAnimationFrame) requestAnimationFrame(() => {
        const evt = new Event('kiko-sync-cv');
        document.dispatchEvent(evt);
      });
    } catch { }
    initTimelineAnimations();
    initSectionTitleAnimations();
    initCounterAnimations();
    initTextScramble();
  });
});
