# 🌟 Portfolio Starter Kit

![Static Badge](https://img.shields.io/badge/Made_with-HTML%2C_CSS%2C_JS-blue)
![Static Badge](https://img.shields.io/badge/Config_via-Vanilla_JS-orange)
![Static Badge](https://img.shields.io/badge/Deployed_on-GitHub_Pages-brightgreen)
![Static Badge](https://img.shields.io/badge/Status-Template_ready-success)
![Static Badge](https://img.shields.io/badge/License-MIT-yellow)

A **config‑driven portfolio template** built with plain HTML, CSS and JavaScript.
All content is rendered from **configuration files** – no manual editing of HTML
sections required.

---

## 🔗 Live Demo (example)

👉 Demo based on the original author’s data:

- **Live site:** `https://<your-username>.github.io/portfolio/`
- Example: `https://42kiko.github.io/portfolio/`

You can use this repository as a starting point and fully replace the
content with your own profile.

## 📚 Table of Contents

- [📸 Preview](#-preview)
- [💡 What You Get](#-what-you-get)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [⚡ Quick Start](#-quick-start-as-your-own-portfolio)
- [🧩 How the Template Is Structured](#-how-the-template-is-structured)
- [✅ Required Changes for a New User](#-required-changes-for-a-new-user)
- [📝 CV Lab – Dynamic Resume Generator](#-cv-lab--dynamic-resume-generator)
- [📱 Optional Customization](#-optional-customization)
- [🌐 Deploy to GitHub Pages](#-deploy-to-github-pages)
- [📦 Development Tips](#-development-tips)
- [📝 License](#-license)
- [🙌 Credits](#-credits)

---

## 📸 Preview

Example preview of the portfolio layout:

![Portfolio Preview](assets/img/portfolio-preview.gif)

---

## 💡 What You Get

- 🎨 **Modern single‑page portfolio** with sections for About, Skills,
  Experience, Projects, Testimonials & Contact
- 🌍 **Multi‑language ready** (German & English included)
- ⚙️ **Config‑driven content** via simple JavaScript objects
- 📬 **Contact form** hooked up to [EmailJS]
- 📄 **Legal popups** (Impressum & Privacy) for German‑speaking users
- 🚀 **Easy GitHub Pages deployment** – no build step, no framework

---

## 🛠️ Tech Stack

- 🌐 **HTML5, CSS3, JavaScript (ES Modules)**
- 🎨 **Custom CSS** (no framework) with theme & color switcher
- 🧩 **Config files** in `src/config/*.js`
- 📦 **Vendor libs**: Swiper.js, Unicons, EmailJS
- 🌍 **GitHub Pages** for static hosting

---

## ⚡ Quick Start (as your own portfolio)

1. **Clone or use as template**
   ```bash path=null start=null
   git clone https://github.com/<your-username>/portfolio.git
   cd portfolio
   ```

2. **Open the site locally**
   - Option A: Double‑click `index.html` in your browser
   - Option B (recommended): Run a small local server, e.g. via VS Code Live Server

3. **Verify it works**
   - You should see the example portfolio (with the original author’s data)
   - Language toggle, theme toggle and contact form should be visible

Next step: replace all data with your own 👇

---

## 🧩 How the Template Is Structured

The site is driven by three main config files:

- `src/config/content.config.js` – profile, skills, timeline
  (experience/education), projects, testimonials, media paths (images, video, CV)
- `src/config/translations.js` – all texts in **DE/EN** (headlines, labels,
  descriptions, legal text, status messages)
- `src/config/site.config.js` – global options: default language, color preset,
  EmailJS keys, social links

The HTML (`index.html`) only provides **empty containers**; JavaScript fills them
based on the config.

---

## ✅ Required Changes for a New User

If you want this to become **your** portfolio, at a minimum you should change:

### 1. Basic profile & contact

File: `src/config/content.config.js`

- `profile.name` – your full name
- `profile.email` – your contact email
- `home.linkedIn` – your LinkedIn URL (or remove if unused)
- `home.github` – your GitHub URL

File: `src/config/translations.js`

- `header-name` – your name for the top navigation
- `home-title` / `home-subtitle` / `home-text` – short intro
- `contact-location-subtitle` – city / region
- `contact-*` keys if you want to adapt wording

> The **footer name** is derived from `content.profile.name` and
> `translations.footer-title`.

---

### 2. Legal information (Impressum & Privacy)

If you operate in a jurisdiction that requires legal information (e.g. Germany),
you **must** replace the placeholder data.

File: `src/config/translations.js`

Update all keys starting with:

- `impressum-*` – address, responsible person, contact, legal text
- `privacy-*` – privacy policy titles and body text

> These texts are only examples and **not legal advice**. Replace them with
> content that matches your situation or remove the legal sections entirely if
> not needed in your country.

---

### 3. Projects / Portfolio

File: `src/config/content.config.js`

Section: `portfolio` (array)

For each project:

- `img` – path to your project thumbnail image in `assets/img/...`
- `titleKey` / `descKey` – keys that point into `translations.js`
- `ctaKey` – call‑to‑action label key (e.g. "View Project")
- `href` – external link (GitHub repo, live demo, article, etc.)

File: `src/config/translations.js`

Update the texts for:

- `portfolio-title`, `portfolio-subtitle`
- `portfolioX-title`, `portfolioX-description`, `githubX-text` / `websiteX-text`
  (or similar) for each project.

---

### 4. Experience, education & testimonials

File: `src/config/content.config.js`

- `experience` – items for your education and work timeline
- `testimonials` – company logos and translation keys for feedback

File: `src/config/translations.js`

Update the corresponding keys for:

- `edu-*` (education)
- `work-*` (work experience)
- testimonial entries like `eos-*`, `ntag-*`, `frobese-*`, `tecRacer-*`

You can also **remove** items from the arrays if you have fewer entries.

---

### 5. EmailJS (contact form)

File: `src/config/site.config.js`

```js path=null start=null
export const site = {
  defaultLang: "de",
  hueIndex: 0,
  emailJS: {
    publicKey: "YOUR_PUBLIC_KEY",
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
  },
  socials: {
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-profile/",
  },
};
```

Replace the `emailJS` values with your own EmailJS credentials. If `serviceId`
or `templateId` are missing, the form will show an error popup when submitting.

If you **don’t want a contact form at all** you can:

- Remove the EmailJS `<script>` from `index.html`, and/or
- Hide the contact section in the renderer (advanced use – requires editing
  JS).

---

### 6. CV files & file names

The color theme and language are linked to CV files in `assets/cv/<lang>/`,
but you can choose between **one CV for all colors** or **one CV per color**.

#### Mode A: one CV per language (independent of color)

Use this if you just want a single CV file per language.

- Folder pattern: `assets/cv/<lang>/`
- File name pattern: `<baseName>-<lang>.pdf`
  - Example: `Kiko-DS-de.pdf`, `Kiko-DS-en.pdf`

Config in `src/config/site.config.js`:

```js path=null start=null
export const site = {
  // ...
  cv: {
    mode: "single", // one CV per language
    baseName: "Kiko-DS", // change this to your own base, e.g. "AlexDev-CV"
  },
  // ...
};
```

#### Mode B (default): one CV per color & language

Use this if you want different CVs for each color variant.

- Folder pattern: `assets/cv/<lang>/`
- File name pattern: `<baseName>-<lang>-<color>.pdf`
  - Example: `Kiko-DS-de-v.pdf`, `Kiko-DS-de-t.pdf`, ...

Config:

```js path=null start=null
export const site = {
  // ...
  cv: {
    mode: "perColor", // default
    baseName: "Kiko-DS",
  },
  // ...
};
```

In both modes, you only need to drop the correctly named PDF files into the
corresponding `assets/cv/<lang>/` folders – no JavaScript changes required.

---

### 7. Branding: avatar, video, colors & favicons

File: `src/config/content.config.js`

- `home.avatarImg` – your profile image (PNG/JPG/WebP) in `assets/img/me/`
- `home.imgPosition` – fine‑tunes how the avatar is positioned
- `about.video` – short looping video clip (optional)

File: `src/config/site.config.js`

- `hueIndex` – initial color variant (0–6) for the accent color

File: `index.html`

- Favicon paths (inside `<head>`) – point them to your own favicon set, or keep
the existing structure and replace the images in
`assets/img/favicon/...`.

---

## 📝 CV Lab – Dynamic Resume Generator

This portfolio includes a **CV Lab** feature that generates a modern, styled resume (CV) from your configuration files. The CV is available in both **preview mode** (on-page) and **PDF export** (via html2pdf.js).

### 🎯 Key Features

- ✅ **Config-driven**: All CV content lives in `translations.js` + `content.config.js`
- ✅ **Single source of truth**: No duplicate content between portfolio and CV
- ✅ **Generic & extensible**: Add new sidebar sections without touching rendering code
- ✅ **Multi-language**: Automatically switches between German/English
- ✅ **Theme-aware**: Uses your selected color theme in both light and dark mode
- ✅ **PDF export**: One-click download to PDF with html2pdf.js

### 🏛️ Architecture Overview

The CV system is split into three layers:

1. **Content structure** (`src/config/content.config.js`)
   - Defines the CV layout: sidebar sections, experience, education, projects
   - References translation keys instead of hardcoded text

2. **Translations** (`src/config/translations.js`)
   - All CV-specific text in both languages
   - Section titles, skills, certifications, job bullets, etc.

3. **Renderer** (`src/cv/cvGenerator.js`)
   - Reads config + translations
   - Builds HTML dynamically
   - Supports generic rendering for extensibility

### 🛠️ How to Customize Your CV

#### 1. Update Profile Information

File: `src/config/translations.js`

```js path=null start=null
// CV Profile
"cv-full-name": { de: "Max Mustermann", en: "Max Mustermann" },
"cv-title": { de: "Software Engineer", en: "Software Engineer" },
"cv-location": { de: "Berlin, Deutschland", en: "Berlin, Germany" },
"cv-phone": { de: "+49 123 456789", en: "+49 123 456789" },
"cv-email": { de: "max@example.com", en: "max@example.com" },
"cv-profile-summary": {
  de: "Ihre Zusammenfassung hier...",
  en: "Your summary here..."
},
```

File: `src/config/content.config.js`

```js path=null start=null
cv: {
  profile: {
    nameKey: "cv-full-name",
    // ... other keys
    linkedIn: "https://www.linkedin.com/in/your-profile/",
    github: "https://github.com/your-username",
  },
  // ...
}
```

#### 2. Add/Edit Experience

**Step A:** Add translation keys for job details

File: `src/config/translations.js`

```js path=null start=null
// CV Experience Bullets - Your Company
"cv-exp-yourcompany-bullet-1": {
  de: "Entwickelte ein System mit React und Node.js...",
  en: "Developed a system using React and Node.js..."
},
"cv-exp-yourcompany-bullet-2": {
  de: "Verbesserte die Performance um 40%...",
  en: "Improved performance by 40%..."
},
```

**Step B:** Reference the keys in your CV config

File: `src/config/content.config.js`

```js path=null start=null
cv: {
  experience: [
    {
      company: "Your Company Name",
      roleKey: "work-1-title", // reuses existing translation
      location: "City",
      fromKey: "work-1-calendar", // e.g. "January 2023 - December 2023"
      toKey: "work-1-calendar",
      bulletKeys: [
        "cv-exp-yourcompany-bullet-1",
        "cv-exp-yourcompany-bullet-2",
      ],
    },
    // ... more jobs
  ],
}
```

> **Note:** The `fromKey` and `toKey` point to a period string like "Juli 2024 - Dezember 2024". The CV generator automatically splits this into "from" and "to" parts.

#### 3. Add New Sidebar Sections (Generic!)

The sidebar is **fully generic**. You can add any type of section without modifying rendering code.

**Example: Adding a "Hobbies" section**

File: `src/config/translations.js`

```js path=null start=null
"cv-section-hobbies": { de: "Hobbys", en: "Hobbies" },
"cv-hobby-photography": { de: "Fotografie", en: "Photography" },
"cv-hobby-hiking": { de: "Wandern", en: "Hiking" },
```

File: `src/config/content.config.js`

```js path=null start=null
cv: {
  sidebarSections: [
    // ... existing sections (languages, certifications, skills)
    {
      titleKey: "cv-section-hobbies",
      chips: [
        { textKey: "cv-hobby-photography" },
        { textKey: "cv-hobby-hiking" },
        "Cooking", // plain string (no translation)
      ],
    },
  ],
}
```

That's it! The new section will automatically appear in your CV.

#### 4. Update Skills

Skills are organized by category in the sidebar:

File: `src/config/content.config.js`

```js path=null start=null
cv: {
  sidebarSections: [
    {
      titleKey: "cv-skill-cat-programming", // "Programming Languages"
      chips: ["Python", "JavaScript", "Go", "Rust"],
    },
    {
      titleKey: "cv-skill-cat-tools",
      chips: ["Docker", "Kubernetes", "GitHub Actions"],
    },
    // ... add more categories
  ],
}
```

You can add new skill category titles in `translations.js`:

```js path=null start=null
"cv-skill-cat-your-category": { de: "Ihre Kategorie", en: "Your Category" },
```

#### 5. Manage Sidebar Section Types

The sidebar supports two types of sections:

##### A) **Items** (structured data)

Use `items` for sections with name + metadata (e.g., Languages, Certifications):

```js path=null start=null
{
  titleKey: "cv-section-languages",
  items: [
    { nameKey: "cv-lang-german", levelKey: "cv-lang-german-level" },
    { nameKey: "cv-lang-english", levelKey: "cv-lang-english-level" },
  ],
}
```

For certifications:

```js path=null start=null
{
  titleKey: "cv-section-certifications",
  items: [
    {
      nameKey: "cv-cert-aws-name",
      issuerKey: "cv-cert-aws-issuer",
      dateKey: "cv-cert-aws-date"
    },
  ],
}
```

##### B) **Chips** (tags/badges)

Use `chips` for simple lists (e.g., Skills, Soft Skills):

```js path=null start=null
{
  titleKey: "cv-section-soft-skills",
  chips: [
    { textKey: "cv-soft-analytical" },
    { textKey: "cv-soft-problem-solving" },
    "Creativity", // plain string
  ],
}
```

> **Pro tip:** You can mix plain strings and `{ textKey: "..." }` objects in the same `chips` array!

### 📦 How the CV Generator Works

```js path=null start=null
// src/cv/cvGenerator.js

// 1. Helper function to resolve translation keys
function t(key, lang) {
  const entry = translations[key];
  return entry[lang] || entry.de || key;
}

// 2. Build CV data from config
function buildCvData(lang) {
  const cvConfig = content.cv;
  
  // Resolve all translation keys to actual text
  const profile = {
    name: t(cvConfig.profile.nameKey, lang),
    title: t(cvConfig.profile.titleKey, lang),
    // ...
  };
  
  // Build experience with translated bullets
  const experience = cvConfig.experience.map(exp => ({
    company: exp.company,
    role: t(exp.roleKey, lang),
    bullets: exp.bulletKeys.map(key => t(key, lang)),
  }));
  
  // Build sidebar sections (generic!)
  const sidebarSections = cvConfig.sidebarSections.map(section => {
    const result = { title: t(section.titleKey, lang) };
    
    if (section.items) {
      result.items = section.items.map(item => {
        // Resolve all keys ending with "Key"
        const obj = {};
        Object.keys(item).forEach(key => {
          const cleanKey = key.replace(/Key$/, "");
          obj[cleanKey] = t(item[key], lang);
        });
        return obj;
      });
    }
    
    if (section.chips) {
      result.chips = section.chips.map(chip => {
        if (typeof chip === "string") return chip;
        if (chip.textKey) return t(chip.textKey, lang);
        return chip;
      });
    }
    
    return result;
  });
  
  return { profile, experience, education, projects, sidebarSections };
}

// 3. Generate HTML from data
export function buildCvHtml({ lang = "de" }) {
  const data = buildCvData(lang);
  // ... render HTML
}
```

### 🎨 Styling & Theme Integration

The CV automatically uses your selected color theme:

- **Light mode:** Clean, professional layout with theme-colored accents
- **Dark mode:** Dark gradient with theme-colored highlights
- **Colors:** All CSS uses `var(--hue-color)` to match your portfolio theme

Styles are located in `styles/main.css` under the `/*==================== CV LAB / MODERN CV ====================*/` section.

### 💾 PDF Export

The PDF export uses **html2pdf.js** to convert the CV HTML to PDF:

1. User clicks "Download PDF" in the CV Lab
2. The CV is temporarily rendered with PDF-optimized styles
3. html2pdf captures the content and generates a PDF
4. Styles are restored to normal after export

PDF-specific adjustments:
- Compact typography for better fit on A4
- Adjusted spacing and margins
- Page break hints to avoid splitting sections awkwardly

### ✨ Benefits of This Architecture

✅ **No duplication**: Portfolio timeline and CV experience share the same data  
✅ **Easy maintenance**: Update once in translations.js, reflects everywhere  
✅ **Extensible**: Add new sections without touching renderer code  
✅ **Type-safe**: Clear structure with keys, easy to validate  
✅ **Multi-language**: Automatic switching between DE/EN  
✅ **Theme-aware**: CV colors match your portfolio theme automatically

---

## 📱 Optional Customization

None of the following is strictly required, but recommended for a clean
personalized result:

- **Texts & tone** – adjust all section titles and descriptions in
  `translations.js` (About, Skills, Contact, status messages, etc.)
- **Skills** – edit the `skills` array in `content.config.js` to match your
  stack
- **Language support** – keep both `de` and `en`, or simplify to just one
  language by removing unused translations
- **Footer copy** – update `footer-copy` in `translations.js`

---

## 🌐 Deploy to GitHub Pages

This project is designed for a simple **root deploy**: all files live in the
repository root, no build step needed.

1. Create a new GitHub repository (e.g. `my-portfolio`).
2. Push all files of this project (including the `assets` folder) to the
   `main` branch.
3. In your repo on GitHub, go to **Settings → Pages**:
   - **Source:** "Deploy from a branch"
   - **Branch:** `main`
   - **Directory:** `/` (root)
4. Wait a minute, then open:
   `https://<your-username>.github.io/<repo-name>/`

> All asset paths are relative (`assets/...`), so the site works out of the box
> on GitHub Pages for project sites.

---

## 📦 Development Tips

- Use a local dev server (VS Code Live Server or `npx serve`) to avoid
  caching issues.
- When changing images, favicons or CVs, perform a **hard reload**
  (Ctrl/Cmd + Shift + R).
- Keep `src/config/*` files under version control so you can track content
  changes over time.

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](./LICENSE).

---

## 🙌 Credits

Original template created by **Kiko**.

- Icons: [Unicons]
- Slider: [Swiper]
- Email service: [EmailJS]
