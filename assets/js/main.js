/* init language */

import { translations } from './translations.js';

let currentLang = "de";

const hues = [270, 177, 201, 341, 48, 80, 12];
const hueChars = ['v', 't', 'b', 'p', 'y', 'g', 'o'];
// Violet (v), Türkis (t), Blue (b), Pink (p), Yellow (y), Green (g), Orange (o)

const faviconLinks = {
    'apple-touch-icon': document.getElementById('apple-touch-icon'),
    'icon-32x32': document.getElementById('icon-32x32'),
    'icon-16x16': document.getElementById('icon-16x16')
};
setLanguage()

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
});
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    }
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    let scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// init color theme
setColorTheme()


// init CVs
setCVs()


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')



// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}



// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})






function setColorTheme() {
    const hues = [270, 177, 201, 341, 48, 80, 12];


    // get color index or default to 0
    let currentIndex = Number(localStorage.getItem('hue-index')) || 0;

    // set hue colors
    function applyHue(index) {
        const hue = hues[index];
        document.documentElement.style.setProperty('--hue-color', hue);
        localStorage.setItem('hue-index', index);
        localStorage.setItem('hue-color', hue);
        updateFavicon(hueChars[currentIndex])
    }

    // Eventlistener für Buttonklick zum Durchschalten
    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % hues.length;
        applyHue(currentIndex);
    });

    // Initial hue
    applyHue(currentIndex);


}

function updateFavicon(colorChar) {
    for (const key in faviconLinks) {
        if (faviconLinks.hasOwnProperty(key)) {
            let href = faviconLinks[key].getAttribute('href');
            // Ersetze den Buchstaben im Pfad
            href = href.replace(/favicon-[btpvogy]/i, 'favicon-' + colorChar);
            faviconLinks[key].setAttribute('href', href);
        }
    }
}
function setLanguage() {

    function render(lang) {
        Object.keys(translations).forEach(id => {
            const elements = document.querySelectorAll(`[id="${id}"]`);
            elements.forEach(el => {
                el.innerHTML = translations[id][lang];
            });
        });

        setTimeout(() => {
            swiperTestimonial.update();
        }, 100);
    }


    document.getElementById("lang-toggle-btn").addEventListener("click", () => {
        currentLang = currentLang === "de" ? "en" : "de";
        render(currentLang);

        const btn = document.getElementById("lang-toggle-btn");
        btn.style.transform = "rotate(360deg)";
        setTimeout(() => { btn.style.transform = ""; }, 400);
    });


    render(currentLang);
}


function setCVs() {
    const hues = [270, 177, 201, 341, 48, 80, 12];
    // Violet (v), Türkis (t), Blue (b), Pink (p), Yellow (y), Green (g), Orange (o)
    const colorSuffixes = ['v', 't', 'b', 'p', 'y', 'g', 'o'];

    let currentIndex = Number(localStorage.getItem('hue-index')) || 0;
    let currentLang = 'de';

    function getCurrentCvLink() {
        const colorSuffix = colorSuffixes[currentIndex];
        return `assets/cv/${currentLang}/Kiko-DS-${currentLang}-${colorSuffix}.pdf`;
    }

    function updateCvLink() {
        const downloadButton = document.getElementById('cv-download-btn');
        if (downloadButton) {
            downloadButton.setAttribute('href', getCurrentCvLink());
        }
    }

    document.getElementById('cv-download-btn').addEventListener('click', (e) => {
        e.currentTarget.setAttribute('href', getCurrentCvLink());
    });

    document.getElementById('lang-toggle-btn').addEventListener('click', () => {
        currentLang = currentLang === 'de' ? 'en' : 'de';
        render(currentLang);
        updateCvLink();

        const btn = document.getElementById('lang-toggle-btn');
        btn.style.transform = 'rotate(360deg)';
        setTimeout(() => btn.style.transform = '', 400);
    });

    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % hues.length;
        updateCvLink();
    });

    updateCvLink();

}

// Event-Listener für Impressum und Datenschutz Popups
document.addEventListener('DOMContentLoaded', function () {
    // Popup-Elemente
    const impressumPopup = document.getElementById('impressum-popup');
    const privacyPopup = document.getElementById('privacy-popup');

    // Schließen-Buttons
    const impressumClose = document.getElementById('impressum-close');
    const privacyClose = document.getElementById('privacy-close');

    // Footer-Links
    const footerImpressum = document.querySelector('a[href="#impressum"]');
    const footerPrivacy = document.querySelector('a[href="#privacy"]');

    // Impressum Popup öffnen
    if (footerImpressum) {
        footerImpressum.addEventListener('click', function (e) {
            e.preventDefault();
            impressumPopup.classList.add('active-popup');
            document.body.style.overflow = 'hidden'; // Scrollen im Hintergrund verhindern
        });
    }

    // Datenschutz Popup öffnen
    if (footerPrivacy) {
        footerPrivacy.addEventListener('click', function (e) {
            e.preventDefault();
            privacyPopup.classList.add('active-popup');
            document.body.style.overflow = 'hidden'; // Scrollen im Hintergrund verhindern
        });
    }

    // Impressum Popup schließen
    if (impressumClose) {
        impressumClose.addEventListener('click', function () {
            impressumPopup.classList.remove('active-popup');
            document.body.style.overflow = 'auto'; // Scrollen wieder erlauben
        });
    }

    // Datenschutz Popup schließen
    if (privacyClose) {
        privacyClose.addEventListener('click', function () {
            privacyPopup.classList.remove('active-popup');
            document.body.style.overflow = 'auto'; // Scrollen wieder erlauben
        });
    }

    // Popup schließen bei Klick außerhalb des Inhalts
    if (impressumPopup) {
        impressumPopup.addEventListener('click', function (e) {
            if (e.target === impressumPopup) {
                impressumPopup.classList.remove('active-popup');
                document.body.style.overflow = 'auto';
            }
        });
    }

    if (privacyPopup) {
        privacyPopup.addEventListener('click', function (e) {
            if (e.target === privacyPopup) {
                privacyPopup.classList.remove('active-popup');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Popup mit ESC-Taste schließen
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (impressumPopup.classList.contains('active-popup')) {
                impressumPopup.classList.remove('active-popup');
                document.body.style.overflow = 'auto';
            }
            if (privacyPopup.classList.contains('active-popup')) {
                privacyPopup.classList.remove('active-popup');
                document.body.style.overflow = 'auto';
            }
        }
    });
});




/*
emailjs.init('RtGyWiRyTmv5ZM3Op');

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.textContent = 'Wird gesendet...';
        btn.disabled = true;

        const serviceID = 'default_service';
        const templateID = 'template_kfsfjo5';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = 'Nachricht senden';
                btn.disabled = false;
                alert('Nachricht wurde erfolgreich gesendet!');
                document.getElementById('form').reset();
            }, (err) => {
                btn.textContent = 'Nachricht senden';
                btn.disabled = false;
                alert('Fehler: ' + JSON.stringify(err));
            });
    });
*/


/*==================== EMAIL FORM WITH STATUS MODAL ====================*/
const btn = document.getElementById('contact-button-text');
const form = document.getElementById('form');

// === Status Popup ===
const statusPopup = document.getElementById('status-popup');
const statusMessage = document.getElementById('status-message');
const statusClose = document.getElementById('status-close');



// Popup anzeigen
function showStatus(success = true) {
    const titleId = success ? "status-success-title" : "status-error-title";
    const textId = success ? "status-success-text" : "status-error-text";

    // Texte aus Translations holen
    const title = translations[titleId][currentLang];
    const text = translations[textId][currentLang];

    statusMessage.innerHTML = `
        <h4 style="color:${success ? 'var(--first-color)' : 'red'};">${title}</h4>
        <p>${text}</p>
    `;

    // Modal aktivieren
    statusPopup.classList.add('active-popup');
    document.body.style.overflow = 'hidden';

    // Automatisch schließen nach 5 Sekunden
    setTimeout(() => {
        statusPopup.classList.remove('active-popup');
        document.body.style.overflow = 'auto';
    }, 5000);
}

// Manuelles Schließen
statusClose.addEventListener('click', () => {
    statusPopup.classList.remove('active-popup');
    document.body.style.overflow = 'auto';
});

// ESC-Taste schließt Modal
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && statusPopup.classList.contains('active-popup')) {
        statusPopup.classList.remove('active-popup');
        document.body.style.overflow = 'auto';
    }
});

// Klick außerhalb schließt Modal
statusPopup.addEventListener('click', function (e) {
    if (e.target === statusPopup) {
        statusPopup.classList.remove('active-popup');
        document.body.style.overflow = 'auto';
    }
});

// === EmailJS-Formular absenden ===
form.addEventListener('submit', function (event) {
    event.preventDefault();
    btn.value = currentLang === "de" ? "Sende..." : "Sending...";

    const serviceID = 'default_service';
    const templateID = 'template_2klottr';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = currentLang === "de" ? "Nachricht senden" : "Send Message";
            showStatus(true);
            form.reset(); // Formular leeren
        }, (err) => {
            console.error(err);
            btn.value = currentLang === "de" ? "Nachricht senden" : "Send Message";
            showStatus(false);
        });
});

// === Sprachwechsel überwachen ===
document.getElementById("lang-toggle-btn").addEventListener("click", () => {
    currentLang = currentLang === "de" ? "en" : "de";
});

/**
document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_2klottr';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

    **/