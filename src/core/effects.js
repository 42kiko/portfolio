/**
 * effects.js — Global UI micro-interactions
 *
 * Exported:
 *  • initEffects()  → call once after initial render
 */

/**
 * Ripple effect on every .button click (except .button--link).
 * Works for dynamically rendered buttons because it uses event delegation
 * on the document.
 */
export function initEffects() {
  document.addEventListener("click", (e) => {
    const button = e.target.closest(".button");
    if (!button || button.classList.contains("button--link")) return;

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.cssText = `
      width:  ${size}px;
      height: ${size}px;
      left:   ${e.clientX - rect.left - size / 2}px;
      top:    ${e.clientY - rect.top  - size / 2}px;
    `;

    button.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  });
}
