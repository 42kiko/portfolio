import { site } from "../../config/site.config.js";

export function renderFooter() {
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
          <a href="${site.socials.linkedin}" target="_blank" rel="noreferrer" class="footer__social"><i class="uil uil-linkedin-alt"></i></a>
          <a href="${site.socials.github}" target="_blank" rel="noreferrer" class="footer__social"><i class="uil uil-github-alt"></i></a>
        </div>
      </div>
      <p class="footer__copy" id="footer-copy"></p>
    </div>`;
}
