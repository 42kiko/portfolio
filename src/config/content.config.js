// Content data (language-neutral or with short texts).
// Longer texts/labels come from translations.js
export const content = {
  profile: {
    name: "Kiko",
    titleKey: "home-subtitle", // from translations
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
    // Roles for the typewriter effect on the home subtitle
    typedRoles: {
      de: ["Data-Driven Software Engineer", "Full-Stack Developer", "Data Scientist", "Problem Solver"],
      en: ["Data-Driven Software Engineer", "Full-Stack Developer", "Data Scientist", "Problem Solver"],
    },
  },
  about: {
    video: "assets/img/me/video6.mp4",
    cv: {
      // Files must be placed in assets/cv/<lang>/Kiko-DS-<lang>-<suffix>.pdf
      colorSuffixes: ["v", "t", "b", "p", "y", "g", "o"],
    },
    stats: [
      { titleKey: "years-title",    nameKey: "years-name",    count: 7 },
      { titleKey: "projects-title", nameKey: "projects-name", count: 8 },
      { titleKey: "companies-title",nameKey: "companies-name",count: 6 },
    ],
  },
  skills: [
    {
      icon: "uil uil-brackets-curly",
      titleKey: "frontend-title",
      subtitleKey: "frontend-subtitle",
      open: true,
      items: [
        { name: "HTML",       level: 95 },
        { name: "CSS",        level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 78 },
        { name: "React",      level: 72 },
        { name: "Angular",    level: 82 },
      ],
    },
    {
      icon: "uil uil-server-network",
      titleKey: "backend-title",
      subtitleKey: "backend-subtitle",
      items: [
        { name: "Java",    level: 88 },
        { name: "Python",  level: 85 },
        { name: "C#",      level: 72 },
        { name: "Node.js", level: 65 },
        { name: "Kotlin",  level: 55 },
      ],
    },
    {
      icon: "uil uil-swatchbook",
      titleKey: "design-title",
      subtitleKey: "design-subtitle",
      items: [
        { name: "Canva",      level: 80 },
        { name: "Photoshop",  level: 52 },
        { name: "Figma",      level: 68 },
      ],
    },
    {
      icon: "uil uil-flask",
      titleKey: "ds-title",
      subtitleKey: "ds-subtitle",
      items: [
        { name: "Pandas, NumPy",         level: 82 },
        { name: "SQL",                   level: 95 },
        { name: "Scikit-learn",          level: 72 },
        { name: "TensorFlow, PyTorch",   level: 45 },
        { name: "Matplotlib, Seaborn",   level: 80 },
      ],
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
    {
      img: "assets/img/traveltide.png",  // TODO: Vorschaubild hinzufügen
      titleKey: "portfolio4-title",
      descKey: "portfolio4-description",
      ctaKey: "github4-text",
      href: "https://github.com/42kiko/traveltide",
    },
    {
      img: "assets/img/cifar10.png",     // TODO: Vorschaubild hinzufügen
      titleKey: "portfolio5-title",
      descKey: "portfolio5-description",
      ctaKey: "github5-text",
      href: "https://42kiko.github.io/Computer-Vision-CIFAR10/",
    },
  ],
  testimonials: [
    { logo: "assets/img/companys/otto_group.png", titleKey: "eos-title", posKey: "eos-pos", subKey: "eos-sub" },
    { logo: "assets/img/companys/ntag.png", titleKey: "ntag-title", posKey: "ntag-pos", subKey: "ntag-sub" },
    { logo: "assets/img/companys/frobese_favicon_256.png", titleKey: "frobese-title", posKey: "frobese-pos", subKey: "frobese-sub" },
    { logo: "assets/img/companys/tecRacer-fav.png", titleKey: "tecRacer-title", posKey: "tecRacer-pos", subKey: "tecRacer-sub" },
  ],

  // ============ CV-SPECIFIC CONFIGURATION ============
  cv: {
    // Profile info - references to translations
    profile: {
      nameKey: "cv-full-name",
      titleKey: "cv-title",
      locationKey: "cv-location",
      phoneKey: "cv-phone",
      emailKey: "cv-email",
      summaryKey: "cv-profile-summary",
      linkedIn: "https://www.linkedin.com/in/kiko97/",
      github: "https://github.com/42kiko",
      website: "https://42kiko.github.io/portfolio/",
    },

    // Sidebar sections (left column) - generic, can be extended
    sidebarSections: [
      {
        titleKey: "cv-section-languages",
        items: [
          { nameKey: "cv-lang-german", levelKey: "cv-lang-german-level" },
          { nameKey: "cv-lang-english", levelKey: "cv-lang-english-level" },
          { nameKey: "cv-lang-spanish", levelKey: "cv-lang-spanish-level" },
        ],
      },
      {
        titleKey: "cv-section-certifications",
        items: [
          { nameKey: "cv-cert-scrum-name", issuerKey: "cv-cert-scrum-issuer", dateKey: "cv-cert-scrum-date" },
          { nameKey: "cv-cert-sapui5-name", issuerKey: "cv-cert-sapui5-issuer", dateKey: "cv-cert-sapui5-date" },
          { nameKey: "cv-cert-aws-name", issuerKey: "cv-cert-aws-issuer", dateKey: "cv-cert-aws-date" },
        ],
      },
      {
        titleKey: "cv-skill-cat-data-analytics",
        chips: ["Exploratory Data Analysis", "Probability Visualization", "Pandas", "Seaborn"],
      },
      {
        titleKey: "cv-skill-cat-programming",
        chips: ["Python", "Java", "JavaScript", "C#", "TypeScript", "SQL"],
      },
      {
        titleKey: "cv-skill-cat-tools",
        chips: ["Git/GitHub", "Jenkins", "VS Code", "IntelliJ", "Excel (Pivot)", "Confluence", "Trello"],
      },
      {
        titleKey: "cv-skill-cat-methodologies",
        chips: ["Scrum", "Kanban", "Agile", "OKR"],
      },
      {
        titleKey: "cv-skill-cat-web-dev",
        chips: ["Angular", "React", "Node.js", "RESTful APIs"],
      },
      {
        titleKey: "cv-skill-cat-cloud",
        chips: ["Docker", "CI/CD"],
      },
      {
        titleKey: "cv-section-soft-skills",
        chips: [
          { textKey: "cv-soft-analytical" },
          { textKey: "cv-soft-problem-solving" },
          { textKey: "cv-soft-collaboration" },
          { textKey: "cv-soft-adaptability" },
          { textKey: "cv-soft-learning" },
        ],
      },
    ],

    // Main content sections (right column)
    experience: [
      {
        company: "Landeshauptstadt Hannover (LHH)",
        roleKey: "work-4-title",
        location: "Hannover",
        fromKey: "work-4-calendar", // Will extract "from" part
        toKey: "work-4-calendar",   // Will extract "to" part  
        bulletKeys: ["cv-exp-lhh-bullet-1", "cv-exp-lhh-bullet-2", "cv-exp-lhh-bullet-3"],
      },
      {
        company: "Otto Group",
        roleKey: "work-3-title",
        location: "Hamburg",
        fromKey: "work-3-calendar",
        toKey: "work-3-calendar",
        bulletKeys: ["cv-exp-otto-bullet-1", "cv-exp-otto-bullet-2", "cv-exp-otto-bullet-3"],
      },
      {
        company: "NT Neue Technologie AG",
        roleKey: "work-2-title",
        location: "Erfurt",
        fromKey: "work-2-calendar",
        toKey: "work-2-calendar",
        bulletKeys: ["cv-exp-nt-bullet-1", "cv-exp-nt-bullet-2", "cv-exp-nt-bullet-3"],
      },
      {
        company: "frobese GmbH",
        roleKey: "work-1-title",
        location: "Hannover",
        fromKey: "work-1-calendar",
        toKey: "work-1-calendar",
        bulletKeys: ["cv-exp-frobese-bullet-1", "cv-exp-frobese-bullet-2", "cv-exp-frobese-bullet-3"],
      },
    ],

    education: [
      {
        institutionKey: "edu-2-subtitle", // Masterschool
        programKey: "edu-2-title",
        location: "",
        fromKey: "edu-2-period",
        toKey: "edu-2-period",
        bulletKeys: ["cv-edu-masterschool-bullet-1", "cv-edu-masterschool-bullet-2", "cv-edu-masterschool-bullet-3"],
      },
      {
        institutionKey: "edu-1-subtitle", // tecRacer
        programKey: "edu-1-title",
        location: "",
        fromKey: "edu-1-period",
        toKey: "edu-1-period",
        bulletKeys: ["cv-edu-tecracer-bullet-1", "cv-edu-tecracer-bullet-2"],
      },
    ],

    projects: [
      {
        nameKey: "cv-project-traveltide-name",
        dateKey: "cv-project-traveltide-date",
        stackKey: "cv-project-traveltide-stack",
        url: "https://github.com/42kiko/traveltide",
        bulletKeys: ["cv-project-traveltide-bullet-1", "cv-project-traveltide-bullet-2"],
      },
      {
        nameKey: "cv-project-cifar10-name",
        dateKey: "cv-project-cifar10-date",
        stackKey: "cv-project-cifar10-stack",
        url: "https://42kiko.github.io/Computer-Vision-CIFAR10/",
        bulletKeys: ["cv-project-cifar10-bullet-1", "cv-project-cifar10-bullet-2"],
      },
      {
        nameKey: "cv-project-vehicle-name",
        dateKey: "cv-project-vehicle-date",
        stackKey: "cv-project-vehicle-stack",
        url: "https://github.com/42kiko/Fahrzeugdatenanalyse",
        bulletKeys: ["cv-project-vehicle-bullet-1", "cv-project-vehicle-bullet-2"],
      },
      {
        nameKey: "cv-project-climate-name",
        dateKey: "cv-project-climate-date",
        stackKey: "cv-project-climate-stack",
        url: "https://www.parentsforfuture.de/de/buendnis/employees-for-future",
        bulletKeys: ["cv-project-climate-bullet-1", "cv-project-climate-bullet-2"],
      },
      {
        nameKey: "cv-project-knowledge-name",
        dateKey: "cv-project-knowledge-date",
        stackKey: "cv-project-knowledge-stack",
        url: "https://www.frobese.de/frorum/articles/201908_mit-okr-ziele-fokussiert-erreichen/",
        bulletKeys: ["cv-project-knowledge-bullet-1", "cv-project-knowledge-bullet-2"],
      },
    ],
  },
};
