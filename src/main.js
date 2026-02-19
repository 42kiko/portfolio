import { site } from "./config/site.config.js";
import { applyTranslations, LanguageStore } from "./core/language.js";
import { initTheme, initColorTheme } from "./core/theme.js";
import { initNavigation, initScrollHandlers } from "./core/navigation.js";
import { initTimelineAnimations } from "./core/timeline.js";
import { initContactForm } from "./core/contact.js";
import { renderAll } from "./core/renderer.js";
import { initOnboarding } from "./core/onboarding.js";
import { initEffects } from "./core/effects.js";

// Initial render of the whole app
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.setAttribute("lang", site.defaultLang || "de");
  initNavigation();
  initTheme();
  initColorTheme();
  renderAll();
  applyTranslations();
  initTimelineAnimations();
  initScrollHandlers();
  initContactForm();
  initOnboarding();
  initEffects();

  const langBtn = document.getElementById("lang-toggle-btn");
  langBtn?.addEventListener("click", () => {
    const next = LanguageStore.get() === "de" ? "en" : "de";
    LanguageStore.set(next);
    document.getElementById("app").innerHTML = ""; // re-render all sections
    renderAll();
    /* Trigger CV href sync after re-render (lazy, without changing exports) */
    try {
      if (window.requestAnimationFrame) requestAnimationFrame(() => {
        const evt = new Event('kiko-sync-cv');
        document.dispatchEvent(evt);
      });
    } catch { }
    initTimelineAnimations();
  });
});
