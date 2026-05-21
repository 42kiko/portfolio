# Portfolio – Kiko

![HTML/CSS/JS](https://img.shields.io/badge/Stack-HTML%2C_CSS%2C_JS-blue)
![No Build Step](https://img.shields.io/badge/Build-keiner-orange)
![Tests](https://img.shields.io/badge/Tests-Playwright-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

Persönliche Portfolio-Seite – eine **statische, config-getriebene
Single-Page-Anwendung** aus reinem HTML, CSS und JavaScript. Alle Inhalte
werden aus Konfigurationsdateien gerendert, das HTML selbst enthält nur
leere Container.

## Vorschau

![Portfolio-Vorschau](assets/img/portfolio-preview.gif)

## Tech-Stack

- **HTML5, CSS3, JavaScript** (ES Modules) – kein Framework, kein Build-Step
- **Custom CSS** mit Dark-/Light-Mode und 7 Akzentfarben
- **Mehrsprachig** – Deutsch und Englisch
- **Vendor-Libs**: Swiper.js (Slider), Unicons (Icons), EmailJS
  (Kontaktformular), html2pdf.js (CV-Export)
- **Tests**: Playwright (Chromium, Firefox, Mobile)

## Lokale Entwicklung

```bash
npm install          # nur Dev-/Test-Tooling
npm run serve        # statischer Server auf http://localhost:3000
```

`index.html` lässt sich auch direkt im Browser öffnen, ein lokaler Server
vermeidet aber Caching-Probleme.

## Tests

```bash
npm test             # Playwright E2E-Suite
npm run test:ui      # interaktiver Test-Runner
```

Der Dev-Server wird von Playwright automatisch gestartet. Die Specs liegen
in `tests/`.

## Projektstruktur

```
index.html                 leere Container, lädt src/main.js
styles/main.css             gesamtes Styling
assets/                     Bilder, Favicons, Vendor-Libs
src/
  main.js                   Einstiegspunkt, Boot-Sequenz
  config/                   Inhalte und Texte
    content.config.js         sprachneutrale Inhalte + CV-Daten
    translations.js           DE/EN-Texte, Impressum, Datenschutz
    site.config.js            globale Optionen, EmailJS, Socials
  core/                     Rendering & Verhalten
    renderer.js               Kompositionspunkt (renderAll)
    sections/                 ein Renderer pro Sektion
    navigation.js, theme.js, language.js, timeline.js, contact.js
  cv/cvGenerator.js         CV-Lab: generiert den Lebenslauf zur Laufzeit
  utils/                    DOM- und Storage-Helfer
tests/                      Playwright-Specs
```

Inhalte und Texte werden in `src/config/` gepflegt, nicht in den
Section-Renderern hartkodiert.

## Deployment

Statische Seite ohne Build-Step – deploybar auf jedem Static-Host. Alle
Asset-Pfade sind relativ (`assets/...`).

## Lizenz

[MIT](./LICENSE)

## Credits

- Icons: [Unicons](https://iconscout.com/unicons)
- Slider: [Swiper](https://swiperjs.com/)
- E-Mail: [EmailJS](https://www.emailjs.com/)
