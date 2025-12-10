// Global site/integration configuration
export const site = {
  defaultLang: "de",
  hueIndex: 0, // initial color variant

  // Base name used for CV files, pattern:
  // assets/cv/<lang>/<cvFileBaseName>-<lang>-<color>.pdf
  // Example: "Kiko-DS" → Kiko-DS-de-v.pdf
  cvFileBaseName: "Kiko-DS",

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
