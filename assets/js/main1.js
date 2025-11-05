// ================== IMPORTS ==================
import { translations } from "./translations.js";


// ================== GLOBAL STATE ==================
let currentLang = "de";
const hues = [270, 177, 201, 341, 48, 80, 12];
const hueChars = ["v", "t", "b", "p", "y", "g", "o"];


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

    function render(lang) {
        Object.keys(translations).forEach(id => {
            const elements = document.querySelectorAll(`[id="${id}"]`);
            elements.forEach(el => {
                el.innerHTML = translations[id][lang];
            });
        });

        // Re-init animations & sliders after DOM change
        reinitAfterLanguageChange();
    }

    langBtn?.addEventListener("click", () => {
        currentLang = currentLang === "de" ? "en" : "de";
        render(currentLang);
        langBtn.style.transform = "rotate(360deg)";
        setTimeout(() => (langBtn.style.transform = ""), 400);
    });

    render(currentLang);
}

// Rebuild interactive parts after translation
function reinitAfterLanguageChange() {
    // Reinit testimonial swiper
    if (window.swiperTestimonial) window.swiperTestimonial.destroy();
    window.swiperTestimonial = new Swiper(".testimonial__container", {
        loop: true,
        grabCursor: true,
        spaceBetween: 48,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: {
            568: { slidesPerView: 2 },
        },
    });

    // Reinit portfolio swiper
    if (window.swiperPortfolio) window.swiperPortfolio.destroy();
    window.swiperPortfolio = new Swiper(".portfolio__container", {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Reinit timeline animation
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
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const faviconLinks = {
        "apple-touch-icon": document.getElementById("apple-touch-icon"),
        "icon-32x32": document.getElementById("icon-32x32"),
        "icon-16x16": document.getElementById("icon-16x16"),
    };

    let currentIndex = Number(localStorage.getItem("hue-index")) || 0;

    const applyHue = index => {
        const hue = hues[index];
        document.documentElement.style.setProperty("--hue-color", hue);
        localStorage.setItem("hue-index", index);
        updateFavicons(hueChars[index]);
    };

    const updateFavicons = char => {
        for (const key in faviconLinks) {
            const link = faviconLinks[key];
            if (!link) continue;
            let href = link.getAttribute("href");
            href = href.replace(/favicon-[btpvogy]/i, "favicon-" + char);
            link.setAttribute("href", href);
        }
    };

    themeToggleBtn?.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % hues.length;
        applyHue(currentIndex);
    });

    applyHue(currentIndex);
}


// ================== CV LINKS ==================
function initCVs() {
    const cvBtn = document.getElementById("cv-download-btn");
    const langBtn = document.getElementById("lang-toggle-btn");
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const colorSuffixes = ["v", "t", "b", "p", "y", "g", "o"];

    let currentIndex = Number(localStorage.getItem("hue-index")) || 0;

    const getCvLink = () =>
        `assets/cv/${currentLang}/Kiko-DS-${currentLang}-${colorSuffixes[currentIndex]}.pdf`;

    const updateCv = () => cvBtn?.setAttribute("href", getCvLink());

    cvBtn?.addEventListener("click", e => {
        e.currentTarget.setAttribute("href", getCvLink());
    });

    langBtn?.addEventListener("click", () => {
        currentLang = currentLang === "de" ? "en" : "de";
        updateCv();
    });

    themeToggleBtn?.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % hues.length;
        updateCv();
    });

    updateCv();
}


// ================== NAVIGATION ==================
function initNavigation() {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");

    navToggle?.addEventListener("click", () => navMenu.classList.add("show-menu"));
    navClose?.addEventListener("click", () => navMenu.classList.remove("show-menu"));

    document.querySelectorAll(".nav__link").forEach(link =>
        link.addEventListener("click", () => navMenu.classList.remove("show-menu"))
    );
}


// ================== SKILLS ACCORDION ==================
function initSkillsAccordion() {
    const headers = document.querySelectorAll(".skills__header");
    const contents = document.getElementsByClassName("skills__content");

    headers.forEach(header => {
        header.addEventListener("click", function () {
            [...contents].forEach(c => (c.className = "skills__content skills__close"));
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
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.1 }
    );

    items.forEach(item => {
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

    closes.forEach(close =>
        close.addEventListener("click", () =>
            modals.forEach(m => m.classList.remove("active-modal"))
        )
    );
}


// ================== EMAIL FORM ==================
function initEmailForm() {
    const form = document.getElementById("form");
    const btn = document.getElementById("contact-button-text");
    const popup = document.getElementById("status-popup");
    const msg = document.getElementById("status-message");
    const closeBtn = document.getElementById("status-close");

    if (!form) return;

    const showStatus = success => {
        const titleKey = success ? "status-success-title" : "status-error-title";
        const textKey = success ? "status-success-text" : "status-error-text";
        const title = translations[titleKey]?.[currentLang] || (success ? "Sent successfully" : "Sending failed");
        const text = translations[textKey]?.[currentLang] || (success ? "Your message has been sent successfully." : "Please try again later or contact me directly.");

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

    popup?.addEventListener("click", e => {
        if (e.target === popup) {
            popup.classList.remove("active-popup");
            document.body.style.overflow = "auto";
        }
    });

    form.addEventListener("submit", e => {
        e.preventDefault();
        btn.value = currentLang === "de" ? "Sende..." : "Sending...";

        const serviceID = "default_service";
        const templateID = "template_2klottr";

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                btn.value = currentLang === "de" ? "Nachricht senden" : "Send Message";
                showStatus(true);
                form.reset();
            })
            .catch(err => {
                console.error(err);
                btn.value = currentLang === "de" ? "Nachricht senden" : "Send Message";
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

    impLink?.addEventListener("click", e => {
        e.preventDefault();
        togglePopup(impressum, true);
    });

    privLink?.addEventListener("click", e => {
        e.preventDefault();
        togglePopup(privacy, true);
    });

    impClose?.addEventListener("click", () => togglePopup(impressum, false));
    privClose?.addEventListener("click", () => togglePopup(privacy, false));

    [impressum, privacy].forEach(popup => {
        popup?.addEventListener("click", e => {
            if (e.target === popup) togglePopup(popup, false);
        });
    });

    document.addEventListener("keydown", e => {
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