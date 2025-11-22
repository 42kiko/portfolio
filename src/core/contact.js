import { site } from "../config/site.config.js";
import { LanguageStore } from "./language.js";
import { translations } from "../config/translations.js";

export function initContactForm() {
  const form = document.getElementById("form");
  const btn = document.getElementById("contact-button-text");
  const popup = document.getElementById("status-popup");
  const msg = document.getElementById("status-message");
  const closeBtn = document.getElementById("status-close");
  if (!form) return;

  // EmailJS init
  if (window.emailjs && site.emailJS?.publicKey) {
    emailjs.init(site.emailJS.publicKey);
  }

  const showStatus = (success) => {
    const lang = LanguageStore.get();
    const titleKey = success ? "status-success-title" : "status-error-title";
    const textKey = success ? "status-success-text" : "status-error-text";
    const title = translations[titleKey]?.[lang] || (success ? "Sent successfully" : "Sending failed");
    const text = translations[textKey]?.[lang] || (success ? "Your message has been sent successfully." : "Please try again later or contact me directly.");

    msg.innerHTML = `<h4 style="color:${success ? "var(--first-color)" : "red"}">${title}</h4><p>${text}</p>`;
    popup.classList.add("active-popup");
    document.body.style.overflow = "hidden";
    setTimeout(() => { popup.classList.remove("active-popup"); document.body.style.overflow = "auto"; }, 5000);
  };

  closeBtn?.addEventListener("click", () => { popup.classList.remove("active-popup"); document.body.style.overflow = "auto"; });
  popup?.addEventListener("click", (e) => { if (e.target === popup) { popup.classList.remove("active-popup"); document.body.style.overflow = "auto"; } });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lang = LanguageStore.get();
    btn.value = lang === "de" ? "Sende..." : "Sending...";

    const { serviceId, templateId } = site.emailJS;
    emailjs
      .sendForm(serviceId, templateId, form)
      .then(() => { btn.value = lang === "de" ? "Nachricht senden" : "Send Message"; showStatus(true); form.reset(); })
      .catch((err) => { console.error(err); btn.value = lang === "de" ? "Nachricht senden" : "Send Message"; showStatus(false); });
  });
}
