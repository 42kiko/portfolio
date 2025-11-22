import { content } from "../config/content.config.js";
import { translations } from "../config/translations.js";
import { LanguageStore, applyTranslations } from "./language.js";
import { el, $, $$, clear } from "../utils/dom.js";

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
}

function t(key) { return translations[key]?.[LanguageStore.get()] ?? ""; }

function renderHome() {
  const app = $("#app");

  app.insertAdjacentHTML("beforeend", `
              <section class="home section" id="home">
            <div class="home__container container grid">
                <div class="home__content grid">
                    <div class="home__social">
                        <a href="https://www.linkedin.com/in/kiko97/" target="_blank" class="home__social-icon">
                            <i class="uil uil-linkedin-alt"></i>
                        </a>

                        <a href="https://github.com/42kiko" target="_blank" class="home__social-icon">
                            <i class="uil uil-github-alt"></i>
                        </a>
                    </div>

                    <div class="home__img">
                        <svg class="home__blob" xmlns="http://www.w3.org/2000/svg" version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"
                            viewBox="0 0 600 600" opacity="1">
                            <path
                                d="M425.5600448266467 14.779019439000905C376.76110480386023 -34.935723857304396 280.20983527261023 -72.614270762822 234.02745205320917 -73.13758364937799C187.84506883380817 -73.66089653593397 175.93968604165315 -31.403359965702833 148.46574551024042 11.639142119664967C120.99180497882767 54.68164420503288 70.6229186669787 123.75896684704136 69.18380886473261 185.1174288628293C67.74469906248652 246.47589087861707 81.48167822915318 345.77456387259474 139.83108669676386 379.78991421439173C198.18049516437458 413.80526455618826 354.781925421536 414.9827039279329 419.2802596703967 389.20953091361037C483.7785939192574 363.4363578992877 525.774461330553 287.55596137422253 526.821092189928 225.15087612845423C527.867723049303 162.74579088268618 474.35898484943306 64.49376273530632 425.5600448266467 14.779019439000905C376.76110480386023 -34.935723857304396 280.20983527261023 -72.614270762822 234.02745205320917 -73.13758364937799 "
                                transform="matrix(-0.9141716824785884,0.3327312814312597,-0.3327312814312597,-0.9141716824785884,627.160523415411,372.3445018250747)"
                                fill-opacity="0.29">
                            </path>
                            <defs>
                                <pattern id="ssshape-pattern2" width="76" height="76" viewBox="0 0 40 40"
                                    patternUnits="userSpaceOnUse">
                                    <rect width="100%" height="100%">
                                    </rect>
                                    <path class="home__blob-lines"
                                        d="M0 20v20l14-20L20 0l-20 20zM20 20v20l14-20L40 0l-20 20z" fill-opacity="0.5">
                                    </path>
                                    <path class="home__blob-lines"
                                        d="M0 40v-20l20-20l-10 20zM20 40v-20l20-20l-10 20zM20 20v20l-20 20l9-20zM20-20v20l-20 20l9-20zM40 20v20l-20 20l9-20zM40-20v20l-20 20l9-20z">
                                    </path>
                                </pattern>
                            </defs>
                            <mask id="mask0" mask-type="alpha">
                                <path
                                    d="M372.8963486528131 80.45407911572798C324.09740863002673 30.739335819422678 227.54613909877668 -6.939211086094929 181.36375587937562 -7.462523972650914C135.1813726599746 -7.9858368592068985 123.27598986781959 34.27169971102421 95.80204933640687 77.31420179639204C68.32810880499414 120.3567038817599 17.95922249314515 189.43402652376759 16.520112690899055 250.79248853955505C15.08100288865296 312.15095055534164 28.81798205531959 411.44962354931954 87.1673905229303 445.4649738911164C145.51679899054102 479.48032423291335 302.1182292477025 480.657763604658 366.6165634965631 454.8845905903351C431.11489774542383 429.1114175760122 473.11076515671937 353.2310210509471 474.15739601609437 290.8259358051789C475.20402687546937 228.42085055941197 421.6952886755995 130.16882241203328 372.8963486528131 80.45407911572798C324.09740863002673 30.739335819422678 227.54613909877668 -6.939211086094929 181.36375587937562 -7.462523972650914 "
                                    fill-opacity="1" fill="url(&quot;#ssshape-pattern2&quot;)" opacity="1"
                                    stroke-opacity="1" stroke-width="0" stroke="hsl(340, 45%, 30%)"
                                    transform="matrix(0.8291806643796716,0.3017970806632748,-0.3017970806632748,0.8291806643796716,181.80323066538816,25.555072447120665)">
                                </path>
                            </mask>
                            <g mask="url(#mask0)">
                                <path
                                    d="M372.8963486528131 80.45407911572798C324.09740863002673 30.739335819422678 227.54613909877668 -6.939211086094929 181.36375587937562 -7.462523972650914C135.1813726599746 -7.9858368592068985 123.27598986781959 34.27169971102421 95.80204933640687 77.31420179639204C68.32810880499414 120.3567038817599 17.95922249314515 189.43402652376759 16.520112690899055 250.79248853955505C15.08100288865296 312.15095055534164 28.81798205531959 411.44962354931954 87.1673905229303 445.4649738911164C145.51679899054102 479.48032423291335 302.1182292477025 480.657763604658 366.6165634965631 454.8845905903351C431.11489774542383 429.1114175760122 473.11076515671937 353.2310210509471 474.15739601609437 290.8259358051789C475.20402687546937 228.42085055941197 421.6952886755995 130.16882241203328 372.8963486528131 80.45407911572798C324.09740863002673 30.739335819422678 227.54613909877668 -6.939211086094929 181.36375587937562 -7.462523972650914 "
                                    fill-opacity="1" fill="url(&quot;#ssshape-pattern2&quot;)" opacity="1"
                                    stroke-opacity="1" stroke-width="0" stroke="hsl(340, 45%, 30%)"
                                    transform="matrix(0.8291806643796716,0.3017970806632748,-0.3017970806632748,0.8291806643796716,181.80323066538816,25.555072447120665)">
                                </path>
                                <image class="home__blob-img" x="130" y="70"
                                    href="assets/img/me/2-removebg-preview.png" />
                            </g>
                        </svg>
                    </div>


                    <div class="home__data">
                        <h1 class="home__title" id="home-title"></h1>
                        <h3 class="home__subtitle" id="home-subtitle"></h3>
                        <p class="home__description" id="home-text"></p>
                        <a href="#contact" class="button button--flex">
                            <div id="home-button"></div>
                            <i class="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </div>


                <div class="home__scroll">
                    <a href="#about" class="home__scroll-button button--flex">
                        <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span class="home__scroll-name" id="scroll-down"></span>
                        <i class="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </section>`);

  app.insertAdjacentHTML("beforeend", `
          <section class="home section" id="home">
            <div class="home__container container grid">
              <div class="home__content grid">
                <div class="home__social">
                  <a href="${content.home.linkedIn}" target="_blank" rel="noreferrer" class="home__social-icon" aria-label="LinkedIn">
                    <i class="uil uil-linkedin-alt"></i>
                  </a>
                  <a href="${content.home.github}" target="_blank" rel="noreferrer" class="home__social-icon" aria-label="GitHub">
                    <i class="uil uil-github-alt"></i>
                  </a>
                </div>

                <div class="home__img">
                  <svg class="home__blob" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" opacity="1">
                    <!-- 1) Farbiger Blob-Hintergrund -->
                    <path
                      d="M425.56 14.78C376.76 -34.94 280.21 -72.61 234.03 -73.14c-46.18 -0.52 -58.09 41.74 -85.56 84.78C120.99 54.68 70.62 123.76 69.18 185.12c-1.44 61.36 12.3 160.66 70.65 194.67c58.35 34.01 214.95 35.19 279.45 9.42c64.5 -25.77 106.5 -101.65 107.55 -164.06c1.05 -62.41 -52.46 -160.66 -101.24 -210.37z"
                      transform="matrix(-0.91417,0.33273,-0.33273,-0.91417,627.16,372.34)"
                      fill="hsl(var(--hue-color),69%,61%)"
                      fill-opacity="0.25">
                    </path>

                    <defs>
                      <!-- 2) Pattern -->
                      <pattern id="ssshape-pattern2" width="76" height="76" viewBox="0 0 40 40" patternUnits="userSpaceOnUse">
                        <path class="home__blob-lines"
                              d="M0 20v20l14-20L20 0l-20 20zM20 20v20l14-20L40 0l-20 20z"
                              fill-opacity="0.5"></path>
                        <path class="home__blob-lines"
                              d="M0 40v-20l20-20l-10 20zM20 40v-20l20-20l-10 20zM20 20v20l-20 20l9-20zM20-20v20l-20 20l9-20zM40 20v20l-20 20l9-20zM40-20v20l-20 20l9-20z"></path>
                      </pattern>

                      <!-- 3) Maske mit Pattern-Füllung -->
                      <mask id="mask0" mask-type="alpha">
                        <path
                          d="M372.9 80.45C324.1 30.74 227.55 -6.94 181.36 -7.46c-46.18 -0.52 -58.09 41.74 -85.56 84.78C68.33 120.36 17.96 189.43 16.52 250.79c-1.44 61.36 12.3 160.66 70.65 194.67c58.35 34.01 214.95 35.19 279.45 9.42c64.5 -25.77 106.5 -101.65 107.55 -164.06c1.05 -62.41 -52.46 -160.66 -101.24 -210.37z"
                          fill="url(#ssshape-pattern2)">
                        </path>
                      </mask>
                    </defs>

                    <!-- 4) Bild innerhalb der Maske -->
                    <g mask="url(#mask0)">
                      <image class="home__blob-img"
                             x="${(content.home.imgPosition?.x ?? 130)}"
                             y="${(content.home.imgPosition?.y ?? 70)}"
                             href="${content.home.avatarImg}" />
                    </g>
                  </svg>
                </div>

                <div class="home__data">
                  <h1 class="home__title" id="home-title"></h1>
                  <h3 class="home__subtitle" id="home-subtitle"></h3>
                  <p class="home__description" id="home-text"></p>
                  <a href="#contact" class="button button--flex"><div id="home-button"></div><i class="uil uil-message button__icon"></i></a>
                </div>
              </div>

              <div class="home__scroll">
                <a href="#about" class="home__scroll-button button--flex">
                  <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                  <span class="home__scroll-name" id="scroll-down"></span>
                  <i class="uil uil-arrow-down home__scroll-arrow"></i>
                </a>
              </div>
            </div>
          </section>
        `);
  app.insertAdjacentHTML("beforeend", `
      <section class="home section" id="home">
        <div class="home__container container grid">
          <div class="home__content grid">
            <div class="home__social">
              <a href="${content.home.linkedIn}" target="_blank" class="home__social-icon"><i class="uil uil-linkedin-alt"></i></a>
              <a href="${content.home.github} target="_blank" class="home__social-icon"><i class="uil uil-github-alt"></i></a>
            </div>
            <div class="home__img">
              <svg class="home__blob" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" opacity="1">
                <defs>
                  <pattern id="ssshape-pattern2" width="76" height="76" viewBox="0 0 40 40" patternUnits="userSpaceOnUse">
                    <path class="home__blob-lines" d="M0 20v20l14-20L20 0l-20 20zM20 20v20l14-20L40 0l-20 20z" fill-opacity="0.5"></path>
                    <path class="home__blob-lines" d="M0 40v-20l20-20l-10 20zM20 40v-20l20-20l-10 20zM20 20v20l-20 20l9-20zM20-20v20l-20 20l9-20zM40 20v20l-20 20l9-20zM40-20v20l-20 20l9-20z"></path>
                  </pattern>
                  <mask id="mask0" mask-type="alpha"><path d="M372.9 80.45C324.1 30.74 227.55 -6.94 181.36 -7.46c-46.18 -0.52 -58.09 41.74 -85.56 84.78C68.33 120.36 17.96 189.43 16.52 250.79c-1.44 61.36 12.3 160.66 70.65 194.67c58.35 34.01 214.95 35.19 279.45 9.42c64.5 -25.77 106.5 -101.65 107.55 -164.06c1.05 -62.41 -52.46 -160.66 -101.24 -210.37z" fill="url(#ssshape-pattern2)"></path></mask>
                </defs>
                <g mask="url(#mask0)"><image class="home__blob-img" x="${content.home.imgPosition.x}" y="${content.home.imgPosition.y}" href="${content.home.avatarImg}" /></g>
              </svg>
            </div>
            <div class="home__data">
              <h1 class="home__title" id="home-title"></h1>
              <h3 class="home__subtitle" id="home-subtitle"></h3>
              <p class="home__description" id="home-text"></p>
              <a href="#contact" class="button button--flex"><div id="home-button"></div><i class="uil uil-message button__icon"></i></a>
            </div>
          </div>
          <div class="home__scroll"><a href="#about" class="home__scroll-button button--flex"><i class="uil uil-mouse-alt home__scroll-mouse"></i><span class="home__scroll-name" id="scroll-down"></span><i class="uil uil-arrow-down home__scroll-arrow"></i></a></div>
        </div>
      </section>`);
}

function renderAbout() {
  const app = $("#app");
  app.insertAdjacentHTML("beforeend", `
    <section class="about section" id="about">
      <h2 class="section__title" id="about-title"></h2>
      <span class="section__subtitle" id="about-subtitle"></span>
      <div class="about__container container grid">
        <video class="about__img" autoplay loop muted><source src="${content.about.video}" type="video/mp4" /></video>
        <div class="about__data">
          <p class="about__description" id="about-text"></p>
          <div class="about__info">
            ${content.about.stats.map(s => `
              <div>
                <span class="about__info-title" id="${s.titleKey}"></span>
                <span class="about__info-name" id="${s.nameKey}"></span>
              </div>`).join("")}
          </div>
          <div class="about__buttons"><a download href="#" class="button button--flex" id="cv-download-btn"><div id="about-button"></div><i class="uil uil-download-alt button__icon"></i></a></div>
        </div>
      </div>
    </section>`);
}

function renderSkills() {
  const app = $("#app");
  const sections = content.skills.map((grp) => `
    <div class="skills__content ${grp.open ? "skills__open" : "skills__close"}">
      <div class="skills__header">
        <i class="${grp.icon} skills__icon"></i>
        <div><h1 class="skills__title" id="${grp.titleKey}"></h1><span class="skills__subtitle" id="${grp.subtitleKey}"></span></div>
        <i class="uil uil-angle-down skills__arrow"></i>
      </div>
      <div class="skills__list grid">
        ${grp.items.map((name) => `
          <div class="skills__data"><div class="skills__titles"><h3 class="skills__name">${name}</h3></div><div class="skills__bar"><span class="skills__percentage"></span></div></div>`).join("")}
      </div>
    </div>`).join("");

  app.insertAdjacentHTML("beforeend", `
    <section class="skills section" id="skills">
      <h2 class="section__title" id="skills-title"></h2>
      <span class="section__subtitle" id="skills-subtitle"></span>
      <div class="skills__container container grid">${sections}</div>
    </section>`);

  // Accordion
  document.querySelectorAll(".skills__header").forEach((h) => {
    h.addEventListener("click", function () {
      document.querySelectorAll(".skills__content").forEach((c) => (c.className = "skills__content skills__close"));
      const parent = this.parentNode;
      if (parent.classList.contains("skills__close")) parent.classList.replace("skills__close", "skills__open");
    });
  });
}

function renderQualification() {
  const app = $("#app");
  const timelineItems = content.experience.map((e) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-period" id="${e.periodKey}"></div>
        <h3 class="timeline-title" id="${e.titleKey}"></h3>
        <p class="timeline-description" id="${e.descKey}"></p>
        <div class="timeline-tags">
          <span class="timeline-tag tag-education"><i class="${e.tagLeft.icon} tag-icon"></i><div id="${e.tagLeft.key}"></div></span>
          <a href="${e.tagRight.href}" target="_blank" class="timeline-tag tag-employer link"><i class="${e.tagRight.icon} tag-icon"></i><div id="${e.tagRight.labelKey}"></div></a>
        </div>
      </div>
    </div>`).join("");

  app.insertAdjacentHTML("beforeend", `
    <section class="qualification__section">
      <h2 class="section__title" id="qualification-title"></h2>
      <span class="section__subtitle" id="qualification-subtitle"></span>
      <section class="timeline">${timelineItems}</section>
    </section>`);
}

function renderPortfolio() {
  const slides = content.portfolio.map((p) => `
    <div class="portfolio__content grid swiper-slide">
      <img src="${p.img}" alt="" class="portfolio__img" />
      <div class="portfolio__data">
        <h3 class="portfolio__title" id="${p.titleKey}"></h3>
        <p class="portfolio__description" id="${p.descKey}"></p>
        <a href="${p.href}" target="_blank" class="button button--flex button--small portfolio__button" id="${p.ctaKey}">
          <i class="uil uil-arrow-right button__icon"></i>
        </a>
      </div>
    </div>`).join("");

  const app = $("#app");
  app.insertAdjacentHTML("beforeend", `
    <section class="portfolio section" id="portfolio">
      <h2 class="section__title" id="portfolio-title"></h2>
      <span class="section__subtitle" id="portfolio-subtitle"></span>
      <div class="portfolio__container container swiper-container">
        <div class="swiper-wrapper">${slides}</div>
        <div class="swiper-button-next"><i class="uil uil-angle-right-b swiper-portfolio-icon"></i></div>
        <div class="swiper-button-prev"><i class="uil uil-angle-left-b swiper-portfolio-icon"></i></div>
        <div class="swiper-pagination"></div>
      </div>
    </section>`);
}

function renderProjectCTA() {
  const app = $("#app");
  app.insertAdjacentHTML("beforeend", `
    <section class="project section">
      <div class="project__bg">
        <div class="project__container container grid">
          <div class="project__data">
            <h2 class="project__title" id="project-contact-title"></h2>
            <p class="project__description" id="project-contact-description"></p>
            <a href="#contact" class="button button--flex button--white" id="project-contact-button"><i class="uil uil-message button__icon"></i></a>
          </div>
          <img src="assets/img/me/busniess3.png" alt="" class="project__img" />
        </div>
      </div>
    </section>`);
}

function renderTestimonials() {
  const slides = content.testimonials.map((tst) => `
    <div class="testimonial__content swiper-slide">
      <div class="testimonial__data">
        <div class="testimonial__header">
          <img src="${tst.logo}" alt="" class="testimonial__img" />
          <div>
            <h3 class="testimonial__name" id="${tst.titleKey}"></h3>
            <span class="testimonial__client" id="${tst.posKey}"></span>
          </div>
        </div>
        <div><i class="uil uil-bookmark testimonial__icon-star"></i></div>
      </div>
      <p class="testimonial__description" id="${tst.subKey}"></p>
    </div>`).join("");

  const app = $("#app");
  app.insertAdjacentHTML("beforeend", `
    <section class="testimonial section">
      <h2 class="section__title" id="job-ref"></h2>
      <span class="section__subtitle__ref" id="job-ref-subtitle"></span>
      <div class="testimonial__container container swiper-container">
        <div class="swiper-wrapper">${slides}</div>
        <div class="swiper-pagination swiper-pagination-testimonial"></div>
      </div>
    </section>`);
}

function renderContact() {
  const app = $("#app");
  app.insertAdjacentHTML("beforeend", `
    <section class="contact section" id="contact">
      <h2 class="section__title" id="contact-title"></h2>
      <span class="section__subtitle" id="contact-subtitle"></span>
      <div class="contact__container container grid">
        <div>
          <div class="contact__information">
            <i class="uil uil-envelope contact__icon"></i>
            <div><h3 class="contact__title" id="contact-email-title"></h3><span class="contact__subtitle">${content.profile.email}</span></div>
          </div>
          <div class="contact__information">
            <i class="uil uil-map-marker contact__icon"></i>
            <div><h3 class="contact__title" id="contact-location-title"></h3><span class="contact__subtitle" id="contact-location-subtitle"></span></div>
          </div>
        </div>
        <form id="form" class="contact__form grid">
          <div class="contact__inputs grid">
            <div class="contact__content"><label for="name" class="contact__label">Name</label><input id="name" name="name" type="text" class="contact__input" required /></div>
            <div class="contact__content"><label for="email" class="contact__label">Email</label><input id="email" name="email" type="email" class="contact__input" required /></div>
          </div>
          <div class="contact__content"><label for="title" class="contact__label" id="contact-label-title">Title</label><input type="text" name="title" class="contact__input" id="title" required /></div>
          <div class="contact__content"><label for="message" class="contact__label" id="contact-label-message">Message</label><textarea name="message" id="message" cols="0" rows="7" class="contact__input" required></textarea></div>
          <div><button type="submit" class="button button--flex btn-submit" id="contact-button-text"><i class="uil uil-message button__icon"></i></button></div>
        </form>
        <div id="status"></div>
      </div>
    </section>`);
}

function renderFooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML = `
    <div class="footer__bg">
      <div class="footer__container container grid">
        <div>
          <h1 class="footer__title" id="footer-title"></h1>
          <span class="footer__subtitle" id="footer-subtitle"></span>
        </div>
        <ul class="footer__links">
          <li><a href="#impressum" class="footer__link button--link services__button" id="impressum-footer-title"></a></li>
          <li><a href="#privacy" class="footer__link button--link services__button" id="privacy-footer-title"></a></li>
        </ul>
        <div class="footer__socials">
          <a href="https://www.linkedin.com/in/kiko97/" target="_blank" class="footer__social"><i class="uil uil-linkedin-alt"></i></a>
          <a href="https://github.com/42kiko" target="_blank" class="footer__social"><i class="uil uil-github-alt"></i></a>
        </div>
      </div>
      <p class="footer__copy" id="footer-copy"></p>
    </div>`;
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
