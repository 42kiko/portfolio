// src/core/animations.js

function animateCounter(el, raw, delay = 0, duration = 950) {
  const numMatch = raw.match(/\d+/);
  if (!numMatch) return;
  const target = parseInt(numMatch[0]);
  const padLen = numMatch[0].length;
  const format = (n) => raw.replace(/\d+/, String(n).padStart(padLen, "0"));

  setTimeout(() => {
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutQuad – sanft und natürlich
      const eased = 1 - Math.pow(1 - progress, 2);
      el.textContent = format(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = raw;
        el.classList.remove("counter-flash");
        void el.offsetWidth; // reflow damit Animation neu startet
        el.classList.add("counter-flash");
      }
    };
    requestAnimationFrame(tick);
  }, delay);
}

export function initCounterAnimations() {
  const ids = ["years-title", "projects-title", "companies-title"];
  const about = document.getElementById("about");
  if (!about) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) animateCounter(el, el.textContent.trim(), i * 130);
      });
    });
  }, { threshold: 0.25 });

  observer.observe(about);
}

// Stubs – nicht mehr aktiv
export function initSectionTitleAnimations() {}
export function initTextScramble() {}
