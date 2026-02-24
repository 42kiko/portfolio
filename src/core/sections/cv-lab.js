import { $ } from "../../utils/dom.js";
import { LanguageStore } from "../language.js";
import { renderCvHtmlInto } from "../../cv/cvGenerator.js";
import { content } from "../../config/content.config.js";

/**
 * Trigger a PDF download of the modern CV
 * Can be called from anywhere (e.g., About section)
 */
export function downloadModernCvPdf() {
  const lang = LanguageStore.get();

  // Get profile name from config for filename
  const profileName = content.profile?.name?.toLowerCase().replace(/\s+/g, "-") || "cv";

  // Create temporary container for rendering
  const tempContainer = document.createElement("div");
  tempContainer.style.position = "absolute";
  tempContainer.style.left = "-9999px";
  tempContainer.style.top = "0";
  document.body.appendChild(tempContainer);

  // Render CV into temp container
  renderCvHtmlInto({ container: tempContainer, lang });

  const cvCard = tempContainer.querySelector(".cv-card");
  if (!cvCard) {
    console.error("[downloadModernCvPdf] Failed to render CV");
    document.body.removeChild(tempContainer);
    return;
  }

  // Check if html2pdf is available
  const h2p = window.html2pdf;
  if (typeof h2p !== "function") {
    console.error("html2pdf is not available");
    alert("PDF export not available. html2pdf.js could not be loaded.");
    document.body.removeChild(tempContainer);
    return;
  }

  // Prepare for PDF export
  cvCard.classList.add("cv-card--pdf");
  cvCard.style.width = "750px";
  cvCard.style.maxWidth = "750px";
  cvCard.style.margin = "0 auto";

  // Get current color and theme for filename
  const hueIndex = Number(localStorage.getItem("hue-index")) || 0;
  const COLOR_NAMES = ["violet", "turquoise", "blue", "pink", "yellow", "green", "orange"];
  const colorName = COLOR_NAMES[hueIndex];
  const isDark = document.body.classList.contains("dark-theme");
  const themeSuffix = isDark ? "dark" : "light";

  const opt = {
    margin: [5, 5, 5, 5],
    filename: `${profileName}-cv-${lang}-${colorName}-${themeSuffix}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      backgroundColor: "#ffffff",
    },
    jsPDF: {
      unit: "pt",
      format: "a4",
      orientation: "portrait",
    },
    pagebreak: {
      mode: ["css", "legacy"],
      avoid: [
        ".cv-card__section-anchor",     // title + first item, always together
        ".cv-card__side .cv-card__block", // sidebar blocks (small, keep whole)
        ".cv-card__chip",
        ".cv-card__meta-item",
        ".cv-card__timeline-item",
        ".cv-card__timeline-header",
        ".cv-card__timeline-bullet",
      ],
    },
  };

  try {
    h2p()
      .set(opt)
      .from(cvCard)
      .save()
      .finally(() => {
        // Cleanup
        document.body.removeChild(tempContainer);
      });
  } catch (err) {
    console.error("PDF export error:", err);
    alert("PDF export failed. Check console for details.");
    document.body.removeChild(tempContainer);
  }
}

export function renderCvLab() {
  const app = $("#app");
  if (!app) return;

  // --- Lab-UI anhängen ---
  app.insertAdjacentHTML(
      "beforeend",
      `
    <section class="section" id="cv-lab" style="padding-top: 0;">
      <div class="container" style="max-width: 1240px; margin-top: 3rem;">
        <div class="cv-lab__inner" style="border-radius: 1.5rem; padding: 1.5rem; background: rgba(15,23,42,0.03);">
          <h2 class="section__title" style="font-size: 1.25rem; margin-bottom: 0.5rem;">
            CV Lab (Preview)
          </h2>
          <span class="section__subtitle" style="font-size: 0.85rem; opacity: 0.7;">
            Interner Bereich nur für dich – hier wird der neue Lebenslauf generiert.
          </span>

          <div class="cv-lab__controls" style="display:flex; flex-wrap:wrap; gap:0.75rem; margin-top:1rem;">
            <button id="cv-lab-preview-btn" class="button button--flex" type="button">
              <span id="cv-lab-preview-label">Preview modern CV</span>
              <i class="uil uil-eye button__icon"></i>
            </button>

            <button id="cv-lab-download-btn" class="button button--flex" type="button">
              <span id="cv-lab-download-label">Download PDF</span>
              <i class="uil uil-import button__icon"></i>
            </button>
          </div>

          <div
            id="cv-lab-preview"
            class="cv-lab__preview"
            style="
              margin-top:1.75rem;
              overflow:auto;
              max-height:80vh;
              background:#ffffff;
              border-radius:1rem;
              border:1px dashed rgba(148,163,184,0.6);
              padding:1.5rem;
            "
          >
            <div style="text-align:center; font-size:0.85rem; opacity:0.7;">
              Klicke auf „Preview modern CV“, um die aktuelle Sprachversion zu sehen.
            </div>
          </div>
        </div>
      </div>
    </section>
  `
  );

  const previewContainer = $("#cv-lab-preview");
  const previewBtn = $("#cv-lab-preview-btn");
  const downloadBtn = $("#cv-lab-download-btn");

  if (!previewContainer || !previewBtn || !downloadBtn) {
    console.error("[cv-lab] required elements missing");
    return;
  }

  // --- Preview rendern ---
  const renderPreview = () => {
    const lang = LanguageStore.get();
    renderCvHtmlInto({ container: previewContainer, lang });
  };

  previewBtn.addEventListener("click", (e) => {
    e.preventDefault();
    renderPreview();
    previewContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // --- PDF-Download mit html2pdf (optimiert für A4, mit Foto) ---
  const handleDownloadPdf = (e) => {
    e.preventDefault();

    const lang = LanguageStore.get();

    // Falls noch nichts gerendert wurde → jetzt
    if (!previewContainer.querySelector(".cv-card")) {
      renderPreview();
    }

    const cvCard = previewContainer.querySelector(".cv-card");
    if (!cvCard) {
      console.error("[cv-lab] keine .cv-card im Preview gefunden");
      return;
    }

    // html2pdf aus globalem window holen
    const h2p = window.html2pdf;
    if (typeof h2p !== "function") {
      console.error("window.html2pdf ist nicht verfügbar");
      alert("PDF-Export nicht verfügbar. html2pdf.js konnte nicht geladen werden.");
      return;
    }

    // Wrapper-Styles merken
    const prevMaxHeight = previewContainer.style.maxHeight;
    const prevBorder = previewContainer.style.border;

    // Karten-Styles merken
    const prevCardWidth = cvCard.style.width;
    const prevCardMaxWidth = cvCard.style.maxWidth;
    const prevCardMargin = cvCard.style.margin;

    // Wrapper optisch neutral machen (kein Rand, volle Höhe)
    previewContainer.style.maxHeight = "none";
    previewContainer.style.border = "none";

    // Karte für A4-Export: etwas schmaler als A4, damit nichts abgeschnitten wird
    // und spezielle Klasse setzen, um Foto als <img> statt SVG-Maske zu rendern.
    cvCard.classList.add("cv-card--pdf");
    cvCard.style.width = "750px";
    cvCard.style.maxWidth = "750px";
    cvCard.style.margin = "0 auto";

    const opt = {
      // kleiner Rand in pt, damit sicher nichts gekappt wird
      margin: [5, 5, 5, 5],
      filename: `Kiko-DS-${lang}-modern.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        backgroundColor: "#ffffff",
      },
      jsPDF: {
        unit: "pt",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: {
        mode: ["css", "legacy"],
        avoid: [
          ".cv-card__section-anchor",       // title + first item, always together
          ".cv-card__side .cv-card__block",  // sidebar blocks (small, keep whole)
          ".cv-card__chip",
          ".cv-card__meta-item",
          ".cv-card__timeline-item",
          ".cv-card__timeline-header",
          ".cv-card__timeline-bullet",
        ],
      },
    };

    try {
      h2p()
        .set(opt)
        .from(cvCard)
        .save()
        .finally(() => {
          // Styles wieder zurücksetzen
          previewContainer.style.maxHeight = prevMaxHeight;
          previewContainer.style.border = prevBorder;

          cvCard.classList.remove("cv-card--pdf");
          cvCard.style.width = prevCardWidth;
          cvCard.style.maxWidth = prevCardMaxWidth;
          cvCard.style.margin = prevCardMargin;
        });
    } catch (err) {
      console.error("Fehler beim PDF-Export:", err);
      alert("PDF-Export fehlgeschlagen. Details in der Konsole.");

      // Falls es direkt crasht → Styles trotzdem zurücksetzen
      previewContainer.style.maxHeight = prevMaxHeight;
      previewContainer.style.border = prevBorder;

      cvCard.classList.remove("cv-card--pdf");
      cvCard.style.width = prevCardWidth;
      cvCard.style.maxWidth = prevCardMaxWidth;
      cvCard.style.margin = prevCardMargin;
    }
  };

  downloadBtn.addEventListener("click", handleDownloadPdf);

  // --- Sprache geändert → Preview aktualisieren, falls bereits gerendert ---
  LanguageStore.subscribe(() => {
    if (previewContainer.querySelector(".cv-card")) {
      renderPreview();
    }
  });
}
