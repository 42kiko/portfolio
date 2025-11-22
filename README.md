# kiko-portfolio-kit

Ein dynamisches, **Vanilla-JS**-basiertes Portfolio-Template. Alle Inhalte werden **aus Konfigurationsdateien** gerendert – kein manuelles Editieren von HTML nötig.

## 🚀 Quickstart
1) Repo klonen oder als Zip laden
2) Deinen Ordner **/assets** ins Projektwurzelverzeichnis kopieren
3) Öffne `index.html` im Browser (oder nutze einen lokalen Server)

> Optional: Mit `npx serve` oder VS Code Live Server entwickeln.

## 🔧 Personalisieren
- **`/src/config/content.config.js`** → Profil, Skills, Experience, Projekte, Testimonials
- **`/src/config/translations.js`** → Texte in DE/EN (bereitgestellt)
- **`/src/config/site.config.js`** → EmailJS Keys, Socials, Standard-Sprache, Footer-Text

## 🌐 Deploy: GitHub Pages (Root‑Deploy)
Mit Root‑Deploy liegen **alle Dateien im Repo‑Root**. GitHub Pages serviert direkt den `main`‑Branch – kein `/docs`‑Ordner und kein Build‑Step nötig.

**Schritte**
1. Neues Repo auf GitHub erstellen (z. B. `kiko-portfolio-kit`).
2. Alle Dateien (inkl. **/assets**) ins Repo root pushen.
3. **Settings → Pages**:
   - *Source:* **Deploy from a branch**
   - *Branch:* **main**
   - *Directory:* **/** (root)
   - **Save**

4. Live unter: `https://<dein-username>.github.io/<repo-name>/`.

**Hinweise**
- Dieses Template nutzt **relative Pfade** (`assets/...`), damit es auf GitHub Pages (Projekt‑Pages) korrekt lädt.
- Für ein **User‑Root** (`<username>.github.io`) oder **Custom Domain** kannst du auch absolute Pfade verwenden.
- Nach Updates ggf. **Hard Reload** (Shift+Reload).

## 📄 Lizenz
Dieses Projekt ist unter der **MIT-Lizenz** lizenziert. Siehe [LICENSE](./LICENSE).

> Im Footer wird der **Name aus `content.profile.name`** angezeigt – also der Nutzer, der das Template befüllt.

## 🙌 Credits
Original entwickelt von **Kiko**. Icons von Unicons. Slider via Swiper.
