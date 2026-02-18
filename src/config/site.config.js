// Global site/integration configuration
export const site = {
  defaultLang: "de",
  hueIndex: 6, // initial color variant

  // CV configuration:
  // - mode: "perColor" → one CV per color & language (default)
  // - mode: "single"   → one CV per language, independent of color
  cv: {
    mode: "perColor",
    // Base name used for CV files.
    // Pattern (perColor): assets/cv/<lang>/<baseName>-<lang>-<color>.pdf
    // Pattern (single):   assets/cv/<lang>/<baseName>-<lang>.pdf
    // Example: "Kiko-DS" → Kiko-DS-de-v.pdf (perColor) or Kiko-DS-de.pdf (single)
    baseName: "Kiko-DS",
  },

  emailJS: {
    publicKey: "RtGyWiRyTmv5ZM3Op", // from your EmailJS project
    serviceId: "default_service",
    templateId: "template_2klottr",
  },
  socials: {
    github: "https://github.com/42kiko",
    linkedin: "https://www.linkedin.com/in/kiko97/",
  },
};
