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

The color theme and language are linked to specific CV files.

- Folder pattern: `assets/cv/<lang>/`
- Expected file name pattern:
  `<cvFileBaseName>-<lang>-<color>.pdf`
  - Example with the default config: `Kiko-DS-de-v.pdf`

You can configure the static prefix via `src/config/site.config.js`:

```js path=null start=null
export const site = {
  // ...
  cvFileBaseName: "Kiko-DS", // change this to your own base, e.g. "AlexDev-CV"
  // ...
};
```

To reuse the template without touching JavaScript, just keep the pattern
and replace the PDFs with your own CVs using your chosen base name.

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

## 🎛 Optional Customization

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
