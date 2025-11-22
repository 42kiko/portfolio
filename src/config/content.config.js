// Inhaltliche Daten (sprachneutral oder mit Kurztexten).
// Längere Texte/Lables kommen aus translations.js
export const content = {
  profile: {
    name: "Kiko",
    titleKey: "home-subtitle", // aus translations
    locationKey: "contact-location-subtitle",
    email: "kiko97@tuta.io",
  },
  home: {
    linkedIn: "https://www.linkedin.com/in/kiko97/",
    github: "https://github.com/42kiko",
    avatarImg: "assets/img/me/2-removebg-preview.png",
    imgPosition: {
      x: "130",
      y: "70",
    },
  },
  about: {
    video: "assets/img/me/video6.mp4",
    cv: {
      // Dateien müssen in assets/cv/<lang>/Kiko-DS-<lang>-<suffix>.pdf liegen (wie bei dir)
      colorSuffixes: ["v", "t", "b", "p", "y", "g", "o"],
    },
    stats: [
      { titleKey: "years-title", nameKey: "years-name" },
      { titleKey: "projects-title", nameKey: "projects-name" },
      { titleKey: "companies-title", nameKey: "companies-name" },
    ],
  },
  skills: [
    {
      icon: "uil uil-brackets-curly",
      titleKey: "frontend-title",
      subtitleKey: "frontend-subtitle",
      open: true,
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular"],
    },
    {
      icon: "uil uil-server-network",
      titleKey: "backend-title",
      subtitleKey: "backend-subtitle",
      items: ["Java", "Python", "C#", "Node.js", "Kotlin"],
    },
    {
      icon: "uil uil-swatchbook",
      titleKey: "design-title",
      subtitleKey: "design-subtitle",
      items: ["Canva", "Photoshop", "Figma"],
    },
    {
      icon: "uil uil-flask",
      titleKey: "ds-title",
      subtitleKey: "ds-subtitle",
      items: ["Pandas, NumPy", "SQL", "Scikit-learn", "TensorFlow, PyTorch", "Matplotlib, Seaborn"],
    },
  ],
  experience: [
    {
      periodKey: "edu-2-period",
      titleKey: "edu-2-title",
      descKey: "edu-2-desc",
      tagLeft: { icon: "uil uil-graduation-cap", key: "education-title-2" },
      tagRight: { icon: "uil uil-university", labelKey: "edu-2-subtitle", href: "https://masterschool.com/" },
    },
    {
      periodKey: "work-4-calendar",
      titleKey: "work-4-title",
      descKey: "work-4-description",
      tagLeft: { icon: "uil uil-briefcase-alt", key: "work-title-4" },
      tagRight: { icon: "uil uil-building", labelKey: "work-4-subtitle", href: "https://www.hannover.de/" },
    },
    {
      periodKey: "work-3-calendar",
      titleKey: "work-3-title",
      descKey: "work-3-description",
      tagLeft: { icon: "uil uil-briefcase-alt", key: "work-title-3" },
      tagRight: { icon: "uil uil-building", labelKey: "work-3-subtitle", href: "https://www.ottogroup.com" },
    },
    {
      periodKey: "work-2-calendar",
      titleKey: "work-2-title",
      descKey: "work-2-description",
      tagLeft: { icon: "uil uil-briefcase-alt", key: "work-title-2" },
      tagRight: { icon: "uil uil-building", labelKey: "work-2-subtitle", href: "https://www.nt.ag/" },
    },
    {
      periodKey: "work-1-calendar",
      titleKey: "work-1-title",
      descKey: "work-1-description",
      tagLeft: { icon: "uil uil-briefcase-alt", key: "work-title-1" },
      tagRight: { icon: "uil uil-building", labelKey: "work-1-subtitle", href: "https://www.frobese.de/" },
    },
    {
      periodKey: "edu-1-period",
      titleKey: "edu-1-title",
      descKey: "edu-1-desc",
      tagLeft: { icon: "uil uil-graduation-cap", key: "education-title-1" },
      tagRight: { icon: "uil uil-university", labelKey: "edu-1-subtitle", href: "https://www.tecracer.com/" },
    },
  ],
  portfolio: [
    {
      img: "assets/img/car3.webp",
      titleKey: "portfolio1-title",
      descKey: "portfolio1-description",
      ctaKey: "github1-text",
      href: "https://github.com/42kiko/Fahrzeugdatenanalyse/blob/main/Fahrzeugdatenanalyse.ipynb",
    },
    {
      img: "assets/img/Klimaschutz-Roadmap-2.0-1080x608.png",
      titleKey: "portfolio2-title",
      descKey: "portfolio2-description",
      ctaKey: "website2-text",
      href: "https://www.parentsforfuture.de/de/buendnis/employees-for-future",
    },
    {
      img: "assets/img/frorum-logo.svg",
      titleKey: "portfolio3-title",
      descKey: "portfolio3-description",
      ctaKey: "website3-text",
      href: "https://www.frobese.de/frorum/articles/201908_mit-okr-ziele-fokussiert-erreichen/",
    },
  ],
  testimonials: [
    { logo: "assets/img/companys/otto_group.png", titleKey: "eos-title", posKey: "eos-pos", subKey: "eos-sub" },
    { logo: "assets/img/companys/ntag.png", titleKey: "ntag-title", posKey: "ntag-pos", subKey: "ntag-sub" },
    { logo: "assets/img/companys/frobese_favicon_256.png", titleKey: "frobese-title", posKey: "frobese-pos", subKey: "frobese-sub" },
    { logo: "assets/img/companys/tecRacer-fav.png", titleKey: "tecRacer-title", posKey: "tecRacer-pos", subKey: "tecRacer-sub" },
  ],
};
