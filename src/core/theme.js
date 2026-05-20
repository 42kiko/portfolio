import { site } from "../config/site.config.js";
import { LanguageStore } from "./language.js";

// HUES and HUE_CHARS share the same index across:
// - main accent color (HUES)
// - favicon variant (HUE_CHARS)
// Order: Violet (v), Turquoise (t), Blue (b), Pink (p), Yellow (y), Green (g), Orange (o)
const HUES = [270, 177, 201, 341, 48, 80, 12];
const HUE_CHARS = ["v", "t", "b", "p", "y", "g", "o"];

export function initTheme() {
  const themeBtn = document.getElementById("theme-button");
  const darkTheme = "dark-theme";
  const iconTheme = "uil-sun";

  const getTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
  const getIcon = () => (themeBtn.classList.contains(iconTheme) ? "uil-moon" : "uil-sun");

  const savedTheme = localStorage.getItem("selected-theme");
  const savedIcon = localStorage.getItem("selected-icon");

  if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeBtn?.classList[savedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
  }

  themeBtn?.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getTheme());
    localStorage.setItem("selected-icon", getIcon());
  });
}

export function initColorTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const favicons = {
    "apple-touch-icon": document.getElementById("apple-touch-icon"),
    "icon-32x32": document.getElementById("icon-32x32"),
    "icon-16x16": document.getElementById("icon-16x16"),
  };

  let idx = Number(localStorage.getItem("hue-index")) || site.hueIndex || 0;

  const applyHue = (i) => {
    const hue = HUES[i];
    document.documentElement.style.setProperty("--hue-color", hue);
    localStorage.setItem("hue-index", i);
    updateFavicons(HUE_CHARS[i]);
  };

  const updateFavicons = (char) => {
    for (const key in favicons) {
      const link = favicons[key];
      if (!link) continue;
      const href = link.getAttribute("href") || "";
      link.setAttribute("href", href.replace(/favicon-[btpvogy]/i, "favicon-" + char));
    }
  };

  // Note: CV download now uses downloadModernCvPdf() from cv-lab.js
  // No href updates needed anymore

  toggleBtn?.addEventListener("click", () => {
    idx = (idx + 1) % HUES.length;
    applyHue(idx);
  });

  applyHue(idx);
}
