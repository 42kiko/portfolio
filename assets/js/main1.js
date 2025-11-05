// ================== IMPORTS ==================
import { translations } from "./translations.js";


// ================== GLOBAL STATE (LanguageStore) ==================
// Central language state used across the whole app.
const LanguageStore = (() => {
    let lang = "de";
    const listeners = new Set();

    return {
        get: () => lang,
        set: (next) => {
            if (next !== lang) {
                lang = next;
                document.documentElement.setAttribute("lang", lang);
                // notify subscribers (e.g., CV updater)
                listeners.forEach((fn) => fn(lang));
            }
        },
        subscribe: (fn) => {
            listeners.add(fn);
            return () => listeners.delete(fn);
        },
    };
})();
window.LanguageStore = LanguageStore; // optional: for debugging


// ================== CONSTANTS ==================
const HUES = [270, 177, 201, 341, 48, 80, 12];
const HUE_CHARS = ["v", "t", "b", "p", "y", "g", "o"];


// ================== INITIALIZATION ==================
document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initTheme();
    initColorTheme();
    initCVs();
    initNavigation();
    initSkillsAccordion();
    initTimeline();
    initServiceModals();
    initEmailForm();
    initImpressumPrivacyPopups();
    initScrollHandlers();
});


// ================== LANGUAGE ==================
function initLanguage() {
    const langBtn = document.getElementById("lang-toggle-btn");

    // Render all translatable nodes by id
    function render(lang) {
        Object.keys(translations).forEach((id) => {
            const nodes = document.querySelectorAll(`[id="${id}"]`);
            const t = translations[id]?.[lang];
            // skip silently if key missing
            if (typeof t === "undefined") return;
            nodes.forEach((el) => (el.innerHTML = t));
        });

        // Re-init UI parts whose DOM was affected by text changes
        reinitAfterLanguageChange();
    }

    // initial render
    render(LanguageStore.get());

    // toggle handler (DE <-> EN)
    langBtn?.addEventListener("click", () => {
        const next = LanguageStore.get() === "de" ? "en" : "de";
        LanguageStore.set(next);
        render(next);

        // small visual feedback
        langBtn.style.transform = "rotate(360deg)";
        setTimeout(() => (langBtn.style.transform = ""), 400);
    });
}

// Called after every translation render to restore interactivity
function reinitAfterLanguageChange() {
    // Rebuild testimonial swiper
    if (window.swiperTestimonial) window.swiperTestimonial.destroy(true, true);
    window.swiperTestimonial = new Swiper(".testimonial__container", {
        loop: true,
        grabCursor: true,
        spaceBetween: 48,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: { 568: { slidesPerView: 2 } },
    });

    // Rebuild portfolio swiper
    if (window.swiperPortfolio) window.swiperPortfolio.destroy(true, true);
    window.swiperPortfolio = new Swiper(".portfolio__container", {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: { el: ".swiper-pagination", clickable: true },
    });

    // Rebuild timeline
    initTimeline();
}


// ================== THEME (Dark/Light) ==================
function initTheme() {
    const themeBtn = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "uil-sun";

    const getTheme = () =>
        document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getIcon = () =>
        themeBtn.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

    // Load saved preference
    const savedTheme = localStorage.getItem("selected-theme");
    const savedIcon = localStorage.getItem("selected-icon");

    if (savedTheme) {
        document.body.classList[savedTheme === "dark" ? "add" : "remove"](darkTheme);
        themeBtn.classList[savedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
    }

    themeBtn?.addEventListener("click", () => {
        document.body.classList.toggle(darkTheme);
        themeBtn.classList.toggle(iconTheme);
        localStorage.setItem("selected-theme", getTheme());
        localStorage.setItem("selected-icon", getIcon());
    });
}


// ================== COLOR THEME ROTATION ==================
function initColorTheme() {
    const toggleBtn = document.getElementById("theme-toggle-btn");
    const faviconLinks = {
        "apple-touch-icon": document.getElementById("apple-touch-icon"),
        "icon-32x32": document.getElementById("icon-32x32"),
        "icon-16x16": document.getElementById("icon-16x16"),
    };

    let idx = Number(localStorage.getItem("hue-index")) || 0;

    const applyHue = (i) => {
        const hue = HUES[i];
        document.documentElement.style.setProperty("--hue-color", hue);
        localStorage.setItem("hue-index", i);
        updateFavicons(HUE_CHARS[i]);
    };

    const updateFavicons = (char) => {
        for (const key in faviconLinks) {
            const link = faviconLinks[key];
            if (!link) continue;
            const href = link.getAttribute("href") || "";
            link.setAttribute("href", href.replace(/favicon-[btpvogy]/i, "favicon-" + char));
        }
    };

    toggleBtn?.addEventListener("click", () => {
        idx = (idx + 1) % HUES.length;
        applyHue(idx);
    });

    applyHue(idx);
}


// ================== CV LINKS ==================
function initCVs() {
    const cvBtn = document.getElementById("cv-download-btn");
    const colorSuffixes = ["v", "t", "b", "p", "y", "g", "o"];
    let idx = Number(localStorage.getItem("hue-index")) || 0;

    const getCvLink = (lang) =>
        `assets/cv/${lang}/Kiko-DS-${lang}-${colorSuffixes[idx]}.pdf`;

    const updateCv = (lang) => {
        if (!cvBtn) return;
        cvBtn.setAttribute("href", getCvLink(lang));
    };

    // update on language change
    const unsubscribe = LanguageStore.subscribe((lang) => updateCv(lang));

    // update on color change
    const toggleBtn = document.getElementById("theme-toggle-btn");
    toggleBtn?.addEventListener("click", () => {
        idx = (idx + 1) % colorSuffixes.length;
        updateCv(LanguageStore.get());
    });

    // initial set
    updateCv(LanguageStore.get());

    // optional: expose cleanup
    window.__unsubCV = unsubscribe;
}


// ================== NAVIGATION ==================
function initNavigation() {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");

    navToggle?.addEventListener("click", () => navMenu.classList.add("show-menu"));
    navClose?.addEventListener("click", () => navMenu.classList.remove("show-menu"));

    document.querySelectorAll(".nav__link").forEach((link) =>
        link.addEventListener("click", () => navMenu.classList.remove("show-menu"))
    );
}


// ================== SKILLS ACCORDION ==================
function initSkillsAccordion() {
    const headers = document.querySelectorAll(".skills__header");
    const contents = document.getElementsByClassName("skills__content");

    headers.forEach((header) => {
        header.addEventListener("click", function () {
            [...contents].forEach((c) => (c.className = "skills__content skills__close"));
            const parent = this.parentNode;
            if (parent.classList.contains("skills__close")) {
                parent.classList.replace("skills__close", "skills__open");
            }
        });
    });
}


// ================== TIMELINE ANIMATION ==================
function initTimeline() {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.1 }
    );

    items.forEach((item) => {
        item.style.opacity = 0;
        item.style.transform = "translateY(20px)";
        item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(item);
    });
}
window.initTimeline = initTimeline;


// ================== SERVICE MODALS ==================
function initServiceModals() {
    const modals = document.querySelectorAll(".services__modal");
    const buttons = document.querySelectorAll(".services__button");
    const closes = document.querySelectorAll(".services__modal-close");

    buttons.forEach((btn, i) =>
        btn.addEventListener("click", () => modals[i].classList.add("active-modal"))
    );

    closes.forEach((close) =>
        close.addEventListener("click", () =>
            modals.forEach((m) => m.classList.remove("active-modal"))
        )
    );
}


// ================== EMAIL FORM (Status modal with live language) ==================
function initEmailForm() {
    const form = document.getElementById("form");
    const btn = document.getElementById("contact-button-text");
    const popup = document.getElementById("status-popup");
    const msg = document.getElementById("status-message");
    const closeBtn = document.getElementById("status-close");

    if (!form) return;

    // Read *current* language at the moment of showing the modal
    const showStatus = (success) => {
        const lang = LanguageStore.get();
        const titleKey = success ? "status-success-title" : "status-error-title";
        const textKey = success ? "status-success-text" : "status-error-text";
        const title = translations[titleKey]?.[lang] || (success ? "Sent successfully" : "Sending failed");
        const text =
            translations[textKey]?.[lang] ||
            (success
                ? "Your message has been sent successfully."
                : "Please try again later or contact me directly.");

        msg.innerHTML = `
      <h4 style="color:${success ? "var(--first-color)" : "red"}">${title}</h4>
      <p>${text}</p>
    `;

        popup.classList.add("active-popup");
        document.body.style.overflow = "hidden";

        setTimeout(() => {
            popup.classList.remove("active-popup");
            document.body.style.overflow = "auto";
        }, 5000);
    };

    closeBtn?.addEventListener("click", () => {
        popup.classList.remove("active-popup");
        document.body.style.overflow = "auto";
    });

    popup?.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("active-popup");
            document.body.style.overflow = "auto";
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const lang = LanguageStore.get();
        btn.value = lang === "de" ? "Sende..." : "Sending...";

        const serviceID = "default_service";
        const templateID = "template_2klottr";

        emailjs
            .sendForm(serviceID, templateID, form)
            .then(() => {
                btn.value = lang === "de" ? "Nachricht senden" : "Send Message";
                showStatus(true);
                form.reset();
            })
            .catch((err) => {
                console.error(err);
                btn.value = lang === "de" ? "Nachricht senden" : "Send Message";
                showStatus(false);
            });
    });
}


// ================== IMPRESSUM & PRIVACY POPUPS ==================
function initImpressumPrivacyPopups() {
    const impressum = document.getElementById("impressum-popup");
    const privacy = document.getElementById("privacy-popup");
    const impClose = document.getElementById("impressum-close");
    const privClose = document.getElementById("privacy-close");
    const impLink = document.querySelector('a[href="#impressum"]');
    const privLink = document.querySelector('a[href="#privacy"]');

    const togglePopup = (popup, show) => {
        popup.classList[show ? "add" : "remove"]("active-popup");
        document.body.style.overflow = show ? "hidden" : "auto";
    };

    impLink?.addEventListener("click", (e) => {
        e.preventDefault();
        togglePopup(impressum, true);
    });

    privLink?.addEventListener("click", (e) => {
        e.preventDefault();
        togglePopup(privacy, true);
    });

    impClose?.addEventListener("click", () => togglePopup(impressum, false));
    privClose?.addEventListener("click", () => togglePopup(privacy, false));

    [impressum, privacy].forEach((popup) => {
        popup?.addEventListener("click", (e) => {
            if (e.target === popup) togglePopup(popup, false);
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            togglePopup(impressum, false);
            togglePopup(privacy, false);
        }
    });
}


// ================== SCROLL EVENTS ==================
function initScrollHandlers() {
    const header = document.getElementById("header");
    const scrollTopBtn = document.getElementById("scroll-top");

    const scrollHeader = () =>
        window.scrollY >= 80
            ? header.classList.add("scroll-header")
            : header.classList.remove("scroll-header");

    const scrollUp = () =>
        window.scrollY >= 200
            ? scrollTopBtn.classList.add("show-scroll")
            : scrollTopBtn.classList.remove("show-scroll");

    window.addEventListener("scroll", () => {
        scrollHeader();
        scrollUp();
    });
}