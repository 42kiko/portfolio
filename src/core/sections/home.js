import { content } from "../../config/content.config.js";
import { $ } from "../../utils/dom.js";
import { LanguageStore } from "../language.js";

// Schreibmaschinen-Effekt: tippt jeden Titel, haelt kurz, loescht, naechster.
// Bricht von selbst ab, sobald das Element nach einem Re-Render abgehaengt ist.
function runTypewriter(el, phrases) {
  if (!phrases || !phrases.length) return;
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  const tick = () => {
    if (!el.isConnected) return;
    const phrase = phrases[phraseIdx];
    charIdx += deleting ? -1 : 1;
    el.textContent = phrase.slice(0, charIdx);

    let delay = deleting ? 45 : 75;
    if (!deleting && charIdx === phrase.length) {
      deleting = true;
      delay = 1700;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      delay = 450;
    }
    setTimeout(tick, delay);
  };
  tick();
}

export function renderHome() {
  const app = $("#app");

  app.insertAdjacentHTML("beforeend", `
              <section class="home section" id="home">
            <div class="home__container container grid">
                <div class="home__content grid">
                    <div class="home__social">
                        <a href="${content.home.linkedIn}" target="_blank" class="home__social-icon">
                            <i class="uil uil-linkedin-alt"></i>
                        </a>

                        <a href="${content.home.github}" target="_blank" class="home__social-icon">
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
                                <image class="home__blob-img" x="${(content.home.imgPosition?.x ?? 130)}" y="${(content.home.imgPosition?.y ?? 70)}"
                                    href="${content.home.avatarImg}" />
                            </g>
                        </svg>
                    </div>


                    <div class="home__data">
                        <h1 class="home__title" id="home-title"></h1>
                        <h3 class="home__subtitle"><span class="typewriter"></span><span class="typewriter__cursor" aria-hidden="true">|</span></h3>
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

  // Rotierende Titel im Hero
  const tw = document.querySelector("#home .typewriter");
  if (tw) {
    const lang = LanguageStore.get();
    const titlesData = content.home.titles || [];
    const phrases = Array.isArray(titlesData) ? titlesData : (titlesData[lang] || titlesData.en || []);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      tw.textContent = phrases[0] || "";
    } else {
      runTypewriter(tw, phrases);
    }
  }
}
