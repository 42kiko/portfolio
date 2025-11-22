import { translations } from "../config/translations.js";
import { $, $$ } from "../utils/dom.js";

export const LanguageStore = (() => {
  let lang = document.documentElement.getAttribute("lang") || "de";
  const listeners = new Set();
  return {
    get: () => lang,
    set(next) {
      if (next !== lang) {
        lang = next;
        document.documentElement.setAttribute("lang", lang);
        listeners.forEach((fn) => fn(lang));
      }
    },
    subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },
  };
})();

export function applyTranslations(root = document) {
  // IDs (legacy-kompatibel) und data-i18n unterstützen
  Object.keys(translations).forEach((key) => {
    const nodes = [
      ...$$(`[id="${key}"]`, root),
      ...$$(`[data-i18n="${key}"]`, root),
    ];
    const t = translations[key]?.[LanguageStore.get()];
    if (typeof t === "undefined") return;
    nodes.forEach((el) => (el.innerHTML = t));
  });
}
