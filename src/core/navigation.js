import { $, $$ } from "../utils/dom.js";

export function initNavigation() {
  const header = "#header";
  const el = document.querySelector(header);
  el.innerHTML = `
    <nav class="nav container">
      <a href="#home" class="nav__logo" id="header-name"></a>
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list grid">
          <li class="nav__item"><a href="#home" class="nav__link active-link"><i class="uil uil-estate nav__icon"></i><div id="tab-home"></div></a></li>
          <li class="nav__item"><a href="#about" class="nav__link"><i class="uil uil-user nav__icon"></i><div id="tab-about"></div></a></li>
          <li class="nav__item"><a href="#skills" class="nav__link"><i class="uil uil-file-alt nav__icon"></i><div id="tab-skills"></div></a></li>
          <li class="nav__item"><a href="#portfolio" class="nav__link"><i class="uil uil-scenery nav__icon"></i><div id="tab-portfolio"></div></a></li>
          <li class="nav__item"><a href="#contact" class="nav__link"><i class="uil uil-message nav__icon"></i><div id="tab-contactme"></div></a></li>
        </ul>
        <i class="uil uil-times nav__close" id="nav-close"></i>
      </div>
      <div class="nav__btns">
        <i class="uil uil-language color-theme" id="lang-toggle-btn" aria-label="toggle language" role="button" tabindex="0"></i>
        <i class="uil uil-moon change-theme" id="theme-button" aria-label="toggle dark mode" role="button" tabindex="0"></i>
        <div class="nav__toggle" id="nav-toggle"><i class="uil uil-apps"></i></div>
        <i class="uil uil-palette color-theme" id="theme-toggle-btn" aria-label="cycle theme color" role="button" tabindex="0"></i>
      </div>
      <h1 id="name"></h1>
      <h2 id="title"></h2>
    </nav>`;

  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  navToggle?.addEventListener("click", () => navMenu.classList.add("show-menu"));
  navClose?.addEventListener("click", () => navMenu.classList.remove("show-menu"));
  $$(".nav__link").forEach((link) => link.addEventListener("click", () => navMenu.classList.remove("show-menu")));
}

export function initScrollHandlers() {
  const header = document.getElementById("header");
  const scrollTopBtn = document.getElementById("scroll-top");

  const scrollHeader = () => (window.scrollY >= 80 ? header.classList.add("scroll-header") : header.classList.remove("scroll-header"));
  const scrollUp = () => (window.scrollY >= 200 ? scrollTopBtn.classList.add("show-scroll") : scrollTopBtn.classList.remove("show-scroll"));

  window.addEventListener("scroll", () => { scrollHeader(); scrollUp(); });
}
