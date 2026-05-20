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
  },
  about: {
    video: "assets/img/me/about-video.mp4",
    stats: [
      { titleKey: "years-title", nameKey: "years-name" },
      { titleKey: "projects-title", nameKey: "projects-name" },
      { titleKey: "companies-title", nameKey: "companies-name" },
    ],
  },
  // level (0-100): Schwerpunkt-Gewichtung, steuert die Radar-Flaeche
  skills: [
    {
      icon: "uil uil-brackets-curly",
      titleKey: "frontend-title",
      subtitleKey: "frontend-subtitle",
      level: 85,
      items: ["HTML / CSS", "JavaScript", "TypeScript", "React", "Next.js", "Angular"],
    },
    {
      icon: "uil uil-server-network",
      titleKey: "backend-title",
      subtitleKey: "backend-subtitle",
      level: 80,
      items: ["Python", "Node.js", "Java", "C#", "SQL", "Supabase", "REST APIs"],
    },
    {
      icon: "uil uil-swatchbook",
      titleKey: "design-title",
      subtitleKey: "design-subtitle",
      level: 60,
      items: ["UI/UX-Design", "Branding & Logo", "Figma", "Photoshop"],
    },
    {
      icon: "uil uil-flask",
      titleKey: "ds-title",
      subtitleKey: "ds-subtitle",
      level: 90,
      items: ["Machine Learning", "Deep Learning", "Computer Vision (CNN)", "NLP & LLMs", "Generative AI", "Hugging Face", "TensorFlow / PyTorch", "scikit-learn"],
    },
  ],
  experience: [
    {
      periodKey: "work-6-calendar",
      titleKey: "work-6-title",
      descKey: "work-6-description",
      tagLeft: { icon: "uil uil-briefcase-alt", key: "work-title-6" },
      tagRight: { icon: "uil uil-building", labelKey: "work-6-subtitle" },
      tags: ["KI-Strategie", "Datenanalyse", "Prozessoptimierung", "Datenschutz"],
    },
    {
      periodKey: "work-5-calendar",
      titleKey: "work-5-title",
      descKey: "work-5-description",
      tagLeft: { icon: "uil uil-briefcase-alt", key: "work-title-5" },
      tagRight: { icon: "uil uil-building", labelKey: "work-5-subtitle", href: "https://pawsitive.fund/" },
      docs: [
        { de: "assets/docs/pawpro-zeugnis-de.pdf", en: "assets/docs/pawpro-zeugnis-en.pdf", labelKey: "doc-pawpro-zeugnis" },
        { de: "assets/docs/pawpro-empfehlung-en.pdf", en: "assets/docs/pawpro-empfehlung-en.pdf", labelKey: "doc-pawpro-empfehlung" },
      ],
      tags: ["Roadmap", "Business Case", "React", "CI/CD", "Team-Leitung"],
    },
    {
      periodKey: "edu-2-period",
      titleKey: "edu-2-title",
      descKey: "edu-2-desc",
      tagLeft: { icon: "uil uil-graduation-cap", key: "education-title-2" },
      tagRight: { icon: "uil uil-university", labelKey: "edu-2-subtitle", href: "https://masterschool.com/" },
      docs: [
        { de: "assets/docs/masterschool-zeugnis-de.pdf", en: "assets/docs/masterschool-zeugnis-en.pdf", labelKey: "doc-masterschool-zeugnis" },
      ],
      tags: ["Machine Learning", "Computer Vision", "NLP & LLMs", "Python", "Generative AI"],
    },
    {
      periodKey: "work-4-calendar",
      titleKey: "work-4-title",
      descKey: "work-4-description",
      tagLeft: { icon: "uil uil-briefcase-alt", key: "work-title-4" },
      tagRight: { icon: "uil uil-building", labelKey: "work-4-subtitle", href: "https://www.hannover.de/" },
      tags: ["Anwendungsbetreuung", "Fachbereich-Schnittstelle", "Optimierung"],
    },
    {
      periodKey: "work-3-calendar",
      titleKey: "work-3-title",
      descKey: "work-3-description",
      tagLeft: { icon: "uil uil-briefcase-alt", key: "work-title-3" },
      tagRight: { icon: "uil uil-building", labelKey: "work-3-subtitle", href: "https://www.ottogroup.com" },
      tags: ["Fullstack", "React", "Angular", "C#", "Hexagonale Architektur"],
    },
    {
      periodKey: "work-2-calendar",
      titleKey: "work-2-title",
      descKey: "work-2-description",
      tagLeft: { icon: "uil uil-briefcase-alt", key: "work-title-2" },
      tagRight: { icon: "uil uil-building", labelKey: "work-2-subtitle", href: "https://www.nt.ag/" },
      tags: ["Kreditbearbeitung", "Softwareentwicklung", "FinProcess"],
    },
    {
      periodKey: "work-1-calendar",
      titleKey: "work-1-title",
      descKey: "work-1-description",
      tagLeft: { icon: "uil uil-briefcase-alt", key: "work-title-1" },
      tagRight: { icon: "uil uil-building", labelKey: "work-1-subtitle", href: "https://www.frobese.de/" },
      tags: ["Web-Entwicklung", "JavaScript", "React", "EESSI"],
    },
    {
      periodKey: "edu-1-period",
      titleKey: "edu-1-title",
      descKey: "edu-1-desc",
      tagLeft: { icon: "uil uil-graduation-cap", key: "education-title-1" },
      tagRight: { icon: "uil uil-university", labelKey: "edu-1-subtitle", href: "https://www.tecracer.com/" },
      tags: ["Software Engineering", "Clean Code", "Ausbildung"],
    },
  ],
  portfolio: [
    {
      img: "assets/img/pawsitive-fund.jpeg",
      titleKey: "portfolio4-title",
      descKey: "portfolio4-description",
      ctaKey: "website4-text",
      href: "https://pawsitive.fund/",
      tags: ["React", "Vite", "Stripe", "CI/CD-Deployment", "Admin-Dashboard"],
    },
    {
      img: "assets/img/pawcare-fund.jpeg",
      titleKey: "portfolio5-title",
      descKey: "portfolio5-description",
      ctaKey: "website5-text",
      href: "https://pawcare.fund/",
      tags: ["Next.js", "TypeScript", "Supabase", "Claude API", "Stripe"],
    },
    {
      img: "assets/img/cnn-cifar10.jpeg",
      titleKey: "portfolio6-title",
      descKey: "portfolio6-description",
      ctaKey: "website6-text",
      href: "https://42kiko.github.io/Computer-Vision-CIFAR10/",
      tags: ["Computer Vision", "CNN", "TensorFlow", "CIFAR-10", "Plotly"],
    },
    {
      img: "assets/img/Klimaschutz-Roadmap-2.0-1080x608.png",
      titleKey: "portfolio2-title",
      descKey: "portfolio2-description",
      ctaKey: "website2-text",
      href: "https://www.parentsforfuture.de/de/buendnis/employees-for-future",
      tags: ["Nachhaltigkeit", "Roadmap", "Tool"],
    },
    {
      img: "assets/img/frorum-logo.svg",
      titleKey: "portfolio3-title",
      descKey: "portfolio3-description",
      ctaKey: "website3-text",
      href: "https://www.frobese.de/frorum/articles/201908_mit-okr-ziele-fokussiert-erreichen/",
      tags: ["OKR", "Wissensmanagement", "Fachartikel"],
    },
  ],
  testimonials: [
    { logo: "assets/img/companys/pawsitive-care.png", titleKey: "pcf-title", posKey: "pcf-pos", subKey: "pcf-sub" },
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
        nameKey: "cv-project-vehicle-name",
        dateKey: "cv-project-vehicle-date",
        stackKey: "cv-project-vehicle-stack",
        bulletKeys: ["cv-project-vehicle-bullet-1", "cv-project-vehicle-bullet-2"],
      },
      {
        nameKey: "cv-project-climate-name",
        dateKey: "cv-project-climate-date",
        stackKey: "cv-project-climate-stack",
        bulletKeys: ["cv-project-climate-bullet-1", "cv-project-climate-bullet-2"],
      },
      {
        nameKey: "cv-project-knowledge-name",
        dateKey: "cv-project-knowledge-date",
        stackKey: "cv-project-knowledge-stack",
        bulletKeys: ["cv-project-knowledge-bullet-1", "cv-project-knowledge-bullet-2"],
      },
    ],
  },
};
