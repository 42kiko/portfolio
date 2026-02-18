# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## How to run and work with this project

This is a **static, config‑driven portfolio site**: there is no build tool, no package manager and no test runner. All behavior is plain HTML/CSS/JS.

### Local development
- Open `index.html` directly in a browser, **or** serve the folder with a simple static server to avoid caching issues.
- Common options the author already suggests:
  - VS Code Live Server extension
  - Any static server, e.g. `npx serve .` (from this repo root)

### Deployment
- Designed to be deployed as a static site (e.g. GitHub Pages project site) without a build step.
- All asset paths are relative (`assets/...`), so the site works when served from a sub‑path such as `https://<user>.github.io/<repo>/`.

### External dependencies (loaded via `<script>` / CDN)
- Swiper.js (sliders for testimonials and portfolio)
- Unicons (icon font)
- EmailJS (contact form submission)
- html2pdf.js (CV Lab PDF export)

These are not installed via npm; they must be present as `<script>` tags in `index.html`.

## High‑level architecture

The project is intentionally split into **config**, **rendering core**, and **static assets**.

### 1. Configuration layer (`src/config`)
- `src/config/content.config.js`
  - Language‑neutral content and structure:
    - `profile`, `home`, `about`, `skills`, `experience` timeline, `portfolio` projects, `testimonials`.
  - Portfolio cards, timeline items, and testimonial slides are declared here and referenced by translation keys.
- `src/config/translations.js`
  - Central key‑value store for **German/English** text.
  - Keys are looked up by `id` or `data-i18n` attributes in the DOM.
  - Also holds full **Impressum** and **Privacy Policy** copy, footer text, and status messages.
- `src/config/site.config.js`
  - Global site options:
    - `defaultLang`, `hueIndex` (initial accent color index).
    - `cv` mode and `baseName` for mapping CV download links to PDF files under `assets/cv/<lang>/...`.
    - `emailJS` credentials used by the contact form logic.
    - `socials` (GitHub / LinkedIn) for header/footer links.

> When adding new content or changing wording, prefer to update `content.config.js` and `translations.js` instead of hard‑coding text in section renderers.

### 2. Application entrypoint and rendering flow (`src/main.js` + `src/core`)

#### Boot sequence (`src/main.js`)
- On `DOMContentLoaded`:
  1. Sets `<html lang="...">` from `site.defaultLang`.
  2. Initializes navigation shell (`initNavigation`).
  3. Initializes theme toggles (`initTheme`, `initColorTheme`).
  4. Calls `renderAll()` to render all sections into the `#app` container.
  5. Applies translations for the current language.
  6. Sets up scroll behavior and timeline intersection animations.
  7. Initializes the EmailJS contact form handler.
- Language toggle (`#lang-toggle-btn`):
  - Uses `LanguageStore` to flip between `de` and `en`.
  - Clears `#app`, calls `renderAll()` again, dispatches a `kiko-sync-cv` custom event, and re‑initializes the timeline animations.

#### Core rendering orchestration (`src/core/renderer.js`)
- `renderAll()` is the **single composition point** for the page:
  - Calls each section renderer in order:
    - `renderHome`, `renderAbout`, `renderSkills`, `renderQualification`, `renderPortfolio`, `renderProjectCTA`, `renderTestimonials`, `renderContact`, `renderCvLab`, `renderFooter`.
  - Re‑applies translations after all markup is injected.
  - Initializes Swiper instances for testimonials and portfolio sliders (destroying old instances if present on re‑render).
  - Initializes Impressum/Privacy popups by wiring footer links to overlay dialogs.
  - Dispatches `kiko-sync-cv` so the CV download link can recompute its PDF `href` based on language and color.

#### Navigation and scroll behavior (`src/core/navigation.js`)
- `initNavigation()`:
  - Renders the entire header/nav bar into `#header` (logo, nav links, language toggle, dark‑mode toggle, color theme toggle, burger menu button).
  - Wires up:
    - Mobile nav open/close.
    - Closing nav when any `.nav__link` is clicked.
- `initScrollHandlers()`:
  - Adds a single scroll listener that:
    - Toggles `scroll-header` class on the header once scrolled past 80px.
    - Shows or hides the scroll‑to‑top button once scrolled past 200px.

#### Language system (`src/core/language.js`)
- `LanguageStore`:
  - Keeps current language in memory and synchronized with the `<html lang>` attribute.
  - Allows subscriptions (e.g. theme logic and CV Lab use this to react to language changes).
- `applyTranslations(root?)`:
  - For each key in `translations`, finds elements by `id="<key>"` and `[data-i18n="<key>"]` within `root`.
  - Updates `innerHTML` with the text for `LanguageStore.get()`.
  - This is called after a full render (`renderAll`) and again whenever the language changes.

#### Theme and color system (`src/core/theme.js`)
- `initTheme()`:
  - Toggles dark/light mode via `body.dark-theme` and updates the icon class.
  - Persists selected theme and icon in `localStorage`.
- `initColorTheme()`:
  - Controls the accent hue through `--hue-color` and an index stored in `localStorage`.
  - Cycles through 7 predefined hue values and synchronized **hue characters** (`v, t, b, p, y, g, o`).
  - Uses the hue character to:
    - Update favicon URLs by replacing `favicon-[btpvogy]` in the `href` attributes.
    - Update the CV download link (`#cv-download-btn`) `href` to point to the correct PDF, based on:
      - Current language (from `LanguageStore`),
      - `site.cv.mode` (`single` vs `perColor`),
      - `site.cv.baseName`.
  - Subscribes to language changes and custom `kiko-sync-cv` events to ensure the CV `href` stays in sync even after full re‑renders.

#### Timeline animations (`src/core/timeline.js`)
- Uses `IntersectionObserver` on `.timeline-item` elements to fade in and translate them when they enter the viewport.
- Called after `renderAll()` and again after language toggles (since markup is recreated).

#### Contact form and EmailJS (`src/core/contact.js`)
- Handles:
  - Form submission prevention and field validation.
  - Calling EmailJS using values from `site.emailJS`.
  - Updating status messages in the DOM using translation keys like `status-success-*` / `status-error-*`.
- If you change the form fields or IDs in `renderContact`, ensure the contact core logic is updated accordingly.

> If you add new behaviors that depend on section DOM, consider wiring them from within the relevant section renderer or after `renderAll()`; remember that a language change fully re‑creates `#app`.

### 3. Section renderers (`src/core/sections`)
Each section is responsible for injecting its own HTML into `#app`, using configuration + translation keys rather than hard‑coded copy.

- `home.js`
  - Renders the hero section, social icons, and scroll‑down link.
  - Uses `content.home` for avatar image, position and social links.
  - All human‑readable strings (title, subtitle, description, button, scroll label) are translation keys.

- `about.js`
  - Renders the about section with a looping video and three statistic cards.
  - Statistics use keys from `content.about.stats` (`years-*`, `projects-*`, `companies-*`).
  - Contains the **CV download button** (`#cv-download-btn`) whose `href` is controlled by the theme logic.

- `skills.js`
  - Builds an accordion‑style skills list from `content.skills`.
  - Section titles and subtitles are translation keys; individual skills are literal strings.
  - Click handlers ensure only one skill group is open at a time.

- `qualification.js`
  - Renders a vertical timeline from `content.experience` with:
    - Period, title, description, left/right tags (education/work labels + external employer links).
  - All human‑readable text is referenced via translation keys.

- `portfolio.js`
  - Generates Swiper slides from `content.portfolio`.
  - Uses translation keys for the slide title, description, and CTA label; project links (GitHub, websites) are taken from config.

- `testimonials.js`
  - Renders employer feedback carousel from `content.testimonials`.
  - Uses logo images from `assets/img/companys/*` and translation keys for titles, positions and testimonial copy.

- `contact.js`
  - Renders the contact section including the EmailJS form.
  - Injects email address from `content.profile.email` and location via translations.
  - Form labels and button text are translation keys; logic for submission is handled in `core/contact.js`.

- `footer.js`
  - Renders footer with:
    - Translated name/subtitle (`footer-title`, `footer-subtitle`).
    - Legal links (Impressum, Privacy) that are wired as popups by `renderer.js`.
    - Social links from `site.socials` and `footer-copy` text from translations.

- `project-cta.js`
  - Renders the "let's work together" call‑to‑action section using translation keys like `project-contact-*`.

- `cv-lab.js`
  - Adds an internal **CV Lab** section below the main portfolio for previewing and exporting a new, card‑based CV.
  - Uses `LanguageStore` and `renderCvHtmlInto` to:
    - Render a modern CV preview (`Preview modern CV` button) that stays in sync with the current language.
    - Generate a PDF via `html2pdf` (`Download PDF` button), temporarily adjusting layout styles to fit an A4 page and then restoring them.
  - Subscribes to language changes so an already‑rendered preview is re‑generated when the language changes.

### 4. CV generation module (`src/cv/cvGenerator.js`)
- Defines `cvContent` with **structured CV data** in both `en` and `de`:
  - Profile, skills (technical & soft), experience, education, certifications, languages, and projects.
- Exposes two rendering modes:
  - **SVG mode** (`getCvSvgString`, `renderCvInto`, `createCvDownloadUrl`): builds a single SVG page with two‑column layout, used as a legacy or alternative export format.
  - **HTML mode** (`buildCvHtml`, `renderCvHtmlInto`): builds semantic HTML for the CV card layout that is used by the CV Lab and then passed to html2pdf.
- Reuses avatar image & positioning from `content.home` so the CV visual identity matches the portfolio hero.

### 5. Utilities (`src/utils`)
- `src/utils/dom.js`
  - Provides thin wrappers like `$` / `$$` around `querySelector`/`querySelectorAll`.
- `src/utils/storage.js`
  - Small helpers for working with `localStorage` (used by theme and language features if present).

## Working with translations and content

- To **add or change sections**, follow this pattern:
  1. Define structure and media paths in `src/config/content.config.js`.
  2. Add translation keys for all visible text in `src/config/translations.js`.
  3. Reference these keys from the relevant section renderer using `id` or `data-i18n`.
- When introducing new UI elements at runtime, make sure to call `applyTranslations()` after the DOM has been updated so texts reflect the current language.

## Things for future Warp agents to watch out for

- **Re‑renders on language change**: the `#app` container is fully cleared and all sections are re‑inserted. Any code that keeps references to DOM nodes inside `#app` must be robust to this (re‑query after `renderAll()`, or hook into the language toggle flow).
- **CV links and files**:
  - CV download URLs depend on both `site.cv.mode` and the current hue index.
  - Ensure corresponding PDF files exist in `assets/cv/<lang>/` with names matching the configured pattern, otherwise the link will 404.
- **External scripts**:
  - Swiper, EmailJS and html2pdf are assumed to be available on `window`. If you reorganize `index.html`, keep their inclusion order and global names intact.
- **Legal texts**:
  - Impressum and Privacy texts are long and live entirely in `translations.js`. If you move them, keep keys consistent with footer links and popup IDs, otherwise the renderer’s popup wiring will break.
