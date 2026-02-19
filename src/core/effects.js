/**
 * effects.js — Global UI micro-interactions
 *
 * initEffects()    → call ONCE on page load (event-delegated, survives re-renders)
 * initDomEffects() → call after every renderAll() (DOM-specific)
 */
import { content } from "../config/content.config.js";
import { LanguageStore } from "./language.js";

// ── Module-level cleanup handles ────────────────────────────────────────────
let _typewriterTimer  = null;
let _counterObserver  = null;
let _revealObserver   = null;

// ============================================================================
// PUBLIC API
// ============================================================================

/**
 * Called ONCE on page load.
 * Uses event delegation → safe across full re-renders.
 */
export function initEffects() {
  _initRipple();
  _initTilt();
}

/**
 * Called after every renderAll() + applyTranslations().
 * Re-wires all effects that depend on specific DOM nodes.
 */
export function initDomEffects() {
  _initTypewriter();
  _initCounters();
  _initScrollReveal();
}

// ============================================================================
// ── Ripple on .button clicks ─────────────────────────────────────────────────
// ============================================================================
function _initRipple() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".button");
    if (!btn || btn.classList.contains("button--link")) return;

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      width:  ${size}px;
      height: ${size}px;
      left:   ${e.clientX - rect.left - size / 2}px;
      top:    ${e.clientY - rect.top  - size / 2}px;
    `;
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  });
}

// ============================================================================
// ── 3-D card tilt on portfolio slides ────────────────────────────────────────
// ============================================================================
function _initTilt() {
  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".portfolio__content");
    if (!card) return;
    const r  = card.getBoundingClientRect();
    const rx = -((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * 7;
    const ry =  ((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) * 9;
    card.style.transition = "transform 0.08s ease, box-shadow 0.08s ease";
    card.style.transform  = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.03,1.03,1.03)`;
    card.style.boxShadow  = `${-ry * 2}px ${rx * 2}px 32px hsla(var(--hue-color),69%,61%,0.22)`;
  });
  document.addEventListener("mouseout", (e) => {
    const card = e.target.closest(".portfolio__content");
    if (!card || card.contains(e.relatedTarget)) return;
    card.style.transition = "transform 0.45s ease, box-shadow 0.45s ease";
    card.style.transform  = "";
    card.style.boxShadow  = "";
  });
}


// ============================================================================
// ── Typewriter on #home-subtitle ─────────────────────────────────────────────
// ============================================================================
function _initTypewriter() {
  if (_typewriterTimer) { clearTimeout(_typewriterTimer); _typewriterTimer = null; }

  const el = document.querySelector("#home-subtitle");
  if (!el) return;

  const lang  = LanguageStore.get();
  const roles = content.home.typedRoles?.[lang];
  if (!roles?.length) return;

  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const role = roles[ri];
    if (deleting) { ci--; } else { ci++; }
    el.textContent = role.slice(0, ci);

    let delay = deleting ? 42 : 72;
    if (!deleting && ci === role.length)   { delay = 2400; deleting = true; }
    else if (deleting && ci === 0)         { deleting = false; ri = (ri + 1) % roles.length; delay = 480; }

    _typewriterTimer = setTimeout(tick, delay);
  }

  // Add blinking cursor via class while typewriter is active
  el.classList.add("typing-cursor");
  el.textContent = "";
  _typewriterTimer = setTimeout(tick, 700);
}

// ============================================================================
// ── Count-up animation on [data-count] elements ──────────────────────────────
// ============================================================================
function _initCounters() {
  if (_counterObserver) { _counterObserver.disconnect(); _counterObserver = null; }

  const elements = document.querySelectorAll("[data-count]");
  if (!elements.length) return;

  _counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (el.dataset.counted) return;          // already ran
      el.dataset.counted = "true";
      _counterObserver.unobserve(el);

      const startDelay = parseInt(el.dataset.counterIdx || "0", 10) * 350;

      setTimeout(() => {
        const target = parseInt(el.dataset.count, 10);
        const steps  = 44;
        const delay  = 1400 / steps;
        let   n      = 0;

        const timer = setInterval(() => {
          n = Math.min(n + 1, target);
          el.textContent = (n < 10 ? "0" : "") + n + "+";
          if (n >= target) clearInterval(timer);
        }, delay);
      }, startDelay);
    });
  }, { threshold: 0.4 });

  elements.forEach((el, i) => {
    el.dataset.counterIdx = i;     // stagger index
    delete el.dataset.counted;     // reset on re-render
    _counterObserver.observe(el);
  });
}

// ============================================================================
// ── Scroll-reveal for section titles, subtitles and about cards ───────────────
// ============================================================================
function _initScrollReveal() {
  if (_revealObserver) { _revealObserver.disconnect(); _revealObserver = null; }

  const targets = [
    ...document.querySelectorAll(".section__title, .section__subtitle"),
    ...document.querySelectorAll(".about__info > div"),
    ...document.querySelectorAll(".contact__information"),
  ];
  if (!targets.length) return;

  // Stagger the about info cards
  document.querySelectorAll(".about__info > div").forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.13}s`;
  });
  // Stagger contact info items
  document.querySelectorAll(".contact__information").forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
  });

  targets.forEach((el) => el.classList.add("reveal-hidden"));

  _revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("reveal-hidden");
      entry.target.classList.add("reveal-visible");
      _revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  targets.forEach((el) => _revealObserver.observe(el));
}
