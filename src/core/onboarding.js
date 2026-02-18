// src/core/onboarding.js
// Onboarding tutorial that highlights key features on first visit

import { translations } from "../config/translations.js";
import { LanguageStore } from "./language.js";

const ONBOARDING_KEY = "portfolio-onboarding-completed";

/**
 * Check if user has completed onboarding
 */
function hasCompletedOnboarding() {
  return localStorage.getItem(ONBOARDING_KEY) === "true";
}

/**
 * Mark onboarding as completed
 */
function markOnboardingCompleted() {
  localStorage.setItem(ONBOARDING_KEY, "true");
}

/**
 * Get translated text
 */
function t(key) {
  const lang = LanguageStore.get();
  const entry = translations[key];
  return entry?.[lang] || entry?.de || key;
}

/**
 * Create overlay and spotlight elements
 */
function createOverlay() {
  const overlay = document.createElement("div");
  overlay.id = "onboarding-overlay";
  overlay.innerHTML = `
    <div class="onboarding-backdrop"></div>
    <div class="onboarding-spotlight"></div>
    <div class="onboarding-tooltip">
      <div class="onboarding-tooltip__content">
        <div class="onboarding-tooltip__icon">
          <i class="onboarding-tooltip__icon-element"></i>
        </div>
        <h3 class="onboarding-tooltip__title"></h3>
        <p class="onboarding-tooltip__text"></p>
        <div class="onboarding-tooltip__footer">
          <span class="onboarding-tooltip__counter"></span>
          <button class="onboarding-tooltip__btn" type="button">
            <span class="onboarding-tooltip__btn-text"></span>
            <i class="uil uil-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  return overlay;
}

/**
 * Position spotlight on target element
 */
function positionSpotlight(target, spotlight, tooltip) {
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const padding = 12;

  // Position spotlight
  spotlight.style.left = `${rect.left - padding}px`;
  spotlight.style.top = `${rect.top - padding}px`;
  spotlight.style.width = `${rect.width + padding * 2}px`;
  spotlight.style.height = `${rect.height + padding * 2}px`;

  // Position tooltip
  const tooltipRect = tooltip.getBoundingClientRect();
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    // Mobile: center tooltip at bottom
    tooltip.style.left = "50%";
    tooltip.style.transform = "translateX(-50%)";
    tooltip.style.top = "auto";
    tooltip.style.bottom = "2rem";
  } else {
    // Desktop: position below or above target
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    if (spaceBelow > tooltipRect.height + 40) {
      // Position below
      tooltip.style.top = `${rect.bottom + 20}px`;
      tooltip.style.bottom = "auto";
    } else if (spaceAbove > tooltipRect.height + 40) {
      // Position above
      tooltip.style.bottom = `${window.innerHeight - rect.top + 20}px`;
      tooltip.style.top = "auto";
    } else {
      // Fallback: center on screen
      tooltip.style.top = "50%";
      tooltip.style.transform = "translateY(-50%)";
    }

    // Horizontal positioning
    const leftPos = Math.max(20, Math.min(rect.left, window.innerWidth - tooltipRect.width - 20));
    tooltip.style.left = `${leftPos}px`;
  }
}

/**
 * Show onboarding step
 */
function showStep(overlay, step, currentIndex, totalSteps) {
  const spotlight = overlay.querySelector(".onboarding-spotlight");
  const tooltip = overlay.querySelector(".onboarding-tooltip");
  const icon = overlay.querySelector(".onboarding-tooltip__icon-element");
  const title = overlay.querySelector(".onboarding-tooltip__title");
  const text = overlay.querySelector(".onboarding-tooltip__text");
  const counter = overlay.querySelector(".onboarding-tooltip__counter");
  const btnText = overlay.querySelector(".onboarding-tooltip__btn-text");

  // Wait for element to be available
  const target = document.querySelector(step.selector);
  if (!target) {
    console.warn(`[onboarding] Target not found: ${step.selector}`);
    return false;
  }

  // Update content
  icon.className = `onboarding-tooltip__icon-element ${step.iconClass}`;
  title.textContent = t(step.titleKey);
  text.textContent = t(step.textKey);
  counter.textContent = `${currentIndex + 1} / ${totalSteps}`;
  
  const isLastStep = currentIndex === totalSteps - 1;
  btnText.textContent = isLastStep ? t("onboarding-finish") : t("onboarding-next");

  // Position elements
  positionSpotlight(target, spotlight, tooltip);

  // Show with animation
  setTimeout(() => {
    spotlight.classList.add("active");
    tooltip.classList.add("active");
  }, 100);

  return true;
}

/**
 * Initialize and start onboarding
 */
export function initOnboarding() {
  // Skip if already completed
  if (hasCompletedOnboarding()) {
    return;
  }

  // Wait for page to be fully rendered
  setTimeout(() => {
    startOnboarding();
  }, 1000);
}

function startOnboarding() {
  const steps = [
    {
      selector: "#lang-toggle-btn",
      titleKey: "onboarding-lang-title",
      textKey: "onboarding-lang-text",
      iconClass: "uil uil-globe",
    },
    {
      selector: "#theme-button",
      titleKey: "onboarding-theme-title",
      textKey: "onboarding-theme-text",
      iconClass: "uil uil-moon",
    },
    {
      selector: "#theme-toggle-btn",
      titleKey: "onboarding-color-title",
      textKey: "onboarding-color-text",
      iconClass: "uil uil-palette",
    },
  ];

  const overlay = createOverlay();
  let currentStep = 0;

  const nextStep = () => {
    const spotlight = overlay.querySelector(".onboarding-spotlight");
    const tooltip = overlay.querySelector(".onboarding-tooltip");

    // Hide current step
    spotlight.classList.remove("active");
    tooltip.classList.remove("active");

    setTimeout(() => {
      currentStep++;

      if (currentStep >= steps.length) {
        // Finish onboarding
        finishOnboarding(overlay);
      } else {
        // Show next step
        const success = showStep(overlay, steps[currentStep], currentStep, steps.length);
        if (!success) {
          // Skip to next if target not found
          nextStep();
        }
      }
    }, 300);
  };

  const finishOnboarding = (overlay) => {
    overlay.classList.add("fade-out");
    setTimeout(() => {
      overlay.remove();
      markOnboardingCompleted();
    }, 400);
  };

  // Wire up next button
  const btn = overlay.querySelector(".onboarding-tooltip__btn");
  btn.addEventListener("click", nextStep);

  // Allow clicking backdrop to skip
  const backdrop = overlay.querySelector(".onboarding-backdrop");
  backdrop.addEventListener("click", () => finishOnboarding(overlay));

  // Show first step
  const success = showStep(overlay, steps[0], 0, steps.length);
  if (!success) {
    // If first step fails, skip onboarding
    finishOnboarding(overlay);
  }

  // Reposition on window resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (currentStep < steps.length) {
        const target = document.querySelector(steps[currentStep].selector);
        const spotlight = overlay.querySelector(".onboarding-spotlight");
        const tooltip = overlay.querySelector(".onboarding-tooltip");
        if (target) {
          positionSpotlight(target, spotlight, tooltip);
        }
      }
    }, 100);
  });
}

/**
 * Reset onboarding (for testing)
 */
export function resetOnboarding() {
  localStorage.removeItem(ONBOARDING_KEY);
  console.log("[onboarding] Reset complete. Reload page to see tutorial again.");
}

// Expose reset function globally for easy testing
window.resetOnboarding = resetOnboarding;
