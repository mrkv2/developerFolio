/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import "./index.css"; // S'assurer que le fichier est bien importé
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Stéphane SIMON",
  eyebrow: "Stéphane Simon — Développeur Intégrateur web",
  title: "Des solutions web utiles, performantes et durables.",
  subTitle: emoji(
    "Depuis 2011, j’accompagne entreprises, artisans et porteurs de projets dans la création, la refonte et l’évolution de leurs sites et outils numériques — du conseil à la mise en ligne."
  ),
  highlights: [
    "+ de 400 projets web",
    "+ de 100 certifications",
    "Un interlocuteur unique"
  ],
  resumeLink: "#projects", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mrkv2",
  linkedin: "https://www.linkedin.com/in/stephane-simon-kv2/",
  gmail: "kv2webmaster@gmail.com",
  //gitlab: "",
  //facebook: "https://www.facebook.com/stephane.simon.756412/?locale=fr_FR",
  //medium: "",
  //stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Une expertise web complète, de l’idée à la mise en ligne",
  subTitle:
    "Je conçois, développe et fais évoluer des solutions web adaptées aux objectifs de chaque projet : visibilité, acquisition, vente en ligne, automatisation ou outils métier.",
  services: [
    {
      title: "Création et refonte web",
      description:
        "Sites vitrines, interfaces sur mesure, responsive design, accessibilité et performance."
    },
    {
      title: "CMS et e-commerce",
      description:
        "WordPress, WooCommerce, PrestaShop, Magento et développements de plugins personnalisés."
    },
    {
      title: "Applications et intégrations",
      description:
        "React, Next.js, Node.js, PHP, API tierces, synchronisation de données et outils métier."
    },
    {
      title: "Webmastering et croissance",
      description:
        "Maintenance, sécurité, SEO, analytics, hébergement et accompagnement continu."
    }
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript / TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React / Next.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "PHP / Symfony / Laravel",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "WordPress / WooCommerce",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "PrestaShop / Magento",
      fontAwesomeClassname: "fas fa-shopping-cart"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL / Bases de données",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS / Cloud",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "n8n / Automatisation",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Git / GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  eyebrow: "Parcours & formation",
  title: "Diplômes",
  subtitle:
    "Les diplômes posent les bases. La pratique, la veille et plus de 100 certifications permettent de garder des compétences utiles face aux évolutions du numérique.",
  schools: [
    {
      schoolName: "Formation continue",
      logo: require("./assets/images/etudiant.webp"),
      badge: "100+ certifications",
      subHeader: "Formation continue",
      duration: "Depuis janvier 2011",
      desc: "Un apprentissage permanent nourri par les projets réels et les évolutions du numérique.",
      descBullets: [
        "Veille technologique et expérimentation régulière",
        "Plus de 100 certifications techniques et marketing"
      ],
      link: {
        text: "Voir les certifications",
        url: "https://www.linkedin.com/in/stephane-simon-kv2/details/certifications/"
      }
    },
    {
      schoolName: "OpenClassrooms",
      logo: require("./assets/images/openclassroom.png"),
      badge: "Bac+2",
      subHeader: "Intégrateur web Bac+2",
      duration: "Janvier — décembre 2023",
      desc: "Formation professionnalisante d’intégrateur web à dominante front-end.",
      descBullets: [
        "Conception d’interfaces responsives et accessibles",
        "HTML, CSS, Sass, JavaScript et React"
      ],
      link: {
        text: "Voir le diplôme",
        url: "https://www.linkedin.com/in/stephane-simon-kv2/details/education/"
      }
    },
    {
      schoolName: "Formation 3B",
      logo: require("./assets/images/formation3b.jpg"),
      badge: "Bac+4",
      subHeader: "DESES",
      duration: "Juillet 2016 — juillet 2017",
      desc: "Titre DESES de dirigeant de société de sécurité privée, humaine et électronique — Bac+4.",
      descBullets: [
        "Création d’entreprise, stratégie, marketing et gestion du personnel",
        "Sécurité humaine, électronique et pilotage opérationnel"
      ],
      link: {
        text: "Voir le diplôme",
        url: "https://www.linkedin.com/in/stephane-simon-kv2/details/education/"
      }
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  title: "Un accompagnement de bout en bout",
  subtitle:
    "Une méthode claire pour transformer un besoin en solution fiable, mesurable et durable.",
  steps: [
    {
      title: "Audit et cadrage",
      description:
        "Comprendre les objectifs, les utilisateurs, les contraintes et les priorités du projet."
    },
    {
      title: "Conception de la solution",
      description:
        "Définir l’architecture, les fonctionnalités, l’expérience utilisateur et les choix techniques."
    },
    {
      title: "Développement et intégration",
      description:
        "Construire une solution performante, responsive, accessible et adaptée aux outils existants."
    },
    {
      title: "Mise en ligne et suivi",
      description:
        "Déployer, sécuriser, mesurer les performances et faire évoluer le projet dans le temps."
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  title: "Plus de 15 ans d’expérience numérique",
  subtitle:
    "Un écosystème où chaque projet enrichit les suivants — et où chaque entreprise profite de l’expérience collective.",
  highlights: [
    {value: "15+", label: "ans d’expérience"},
    {value: "400+", label: "projets web"},
    {value: "100+", label: "certifications"}
  ],
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "La force du collectif",
      company: "KV2",
      companylogo: require("./assets/images/kv2_logo.jpg"),
      date: "2011 – aujourd’hui",
      dateTime: "2011",
      desc: "KV2 permet aux PME de profiter de compétences, d’outils et de retours d’expérience mutualisés entre plusieurs entreprises.",
      descBullets: [
        "Ressources partagées",
        "Coûts mieux maîtrisés",
        "Expérience multisectorielle"
      ]
    },
    {
      role: "Le laboratoire de l’écosystème",
      company: "The Inside Project",
      companylogo: require("./assets/images/inside.jpg"),
      date: "Depuis plus de 20 ans",
      dateTime: "2006",
      desc: "The Inside Project explore, teste et prototype. Les idées éprouvées viennent ensuite nourrir les solutions proposées aux clients.",
      descBullets: [
        "Veille appliquée",
        "Prototypes & concepts",
        "Innovation réutilisable"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  eyebrow: "Code & expérimentations",
  title: "Projets & expérimentations GitHub",
  subtitle:
    "Une sélection de projets qui montre différentes facettes du travail : automatiser, optimiser et construire des interfaces connectées à des API.",
  featuredRepositories: [
    {
      name: "Serpapi-scrap",
      category: "Automatisation & data",
      summary:
        "Un prototype Python pour collecter et structurer des données locales via API, avec une logique réutilisable pour la veille et l’analyse.",
      status: "Prototype fonctionnel",
      technologies: ["Python", "API", "Data"],
      url: "https://github.com/mrkv2/Serpapi-scrap"
    },
    {
      name: "ninacarducci.github.io",
      category: "Performance & SEO",
      summary:
        "Optimisation complète d’un portfolio : performances, référencement, accessibilité et données structurées pour gagner en visibilité.",
      status: "Projet finalisé",
      technologies: ["HTML", "SEO", "Accessibilité"],
      url: "https://github.com/mrkv2/ninacarducci.github.io"
    },
    {
      name: "ArgentBank-website",
      category: "Application React & API",
      summary:
        "Une interface bancaire développée avec React, gestion d’état et échanges API pour illustrer une architecture front-end applicative.",
      status: "Projet finalisé",
      technologies: ["React", "Redux", "API REST"],
      url: "https://github.com/mrkv2/ArgentBank-website"
    }
  ],
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const digitalAudit = {
  display: true,
  eyebrow: "Audit & accompagnement",
  title: "Un vrai audit de vos actifs numériques",
  subtitle:
    "Pour une PME ou une TPE, le numérique forme un tout : site, e-commerce, identité, contenus, sécurité, SEO, SEA, réseaux sociaux, données, hébergement et outils métier doivent être analysés ensemble.",
  steps: [
    "Actifs numériques",
    "Consultation gratuite",
    "Audit complet",
    "Feuille de route",
    "Décision au cas par cas"
  ],
  findings: [
    "Les risques techniques et les dépendances",
    "Les pertes de performance, de visibilité ou d’acquisition",
    "Les outils devenus coûteux, fragiles ou inutiles",
    "Les écarts de sécurité, d’accessibilité ou de conformité",
    "Les priorités réellement utiles à court et moyen terme"
  ],
  benefits: [
    "Une vision 360°, au-delà du simple site web",
    "Plus de 15 ans de retours d’expérience mutualisés",
    "Des ressources adaptées au besoin réel",
    "Une feuille de route hiérarchisée selon l’impact et le budget",
    "Un suivi capable de construire, maintenir et faire évoluer l’ensemble"
  ],
  conclusion:
    "La consultation initiale est gratuite. Si la situation nécessite une analyse approfondie, un audit complet et payant est proposé sur devis. Un suivi par KV2 n’est jamais automatique : il est étudié au cas par cas, selon les besoins et la pertinence de l’accompagnement."
};

// Some big projects you have worked on

const bigProjects = {
  title: "+ plus 400 projets web réalisés depuis 2011 !",
  subtitle:
    "QUELQUES STARTUPS ET ENTREPRISES QUE J'AI AIDÉES À CRÉER LEUR TECH 👍",

  projects: [
    {
      image: require("./assets/images/nerdshop.jpg"),
      projectName: "Site Web - E-commerce",
      projectDesc:
        "Conception, réalisation et évolution de solutions e-commerce : maintenance et TMA, optimisation des conversions, parcours O2O, contenus UGC, réseaux sociaux, acquisition et connexions aux outils métier.",
      technologies: [
        "E-commerce",
        "TMA",
        "O2O & UGC",
        "Analytics",
        "Réseaux sociaux"
      ],
      footerLink: [
        {
          name: "Voir un exemple",
          url: "https://letviva.fr"
        }
      ]
    },
    {
      image: require("./assets/images/creationsitewebentreprisebatiment.jpg"),
      projectName: "Site Web - Entreprise",
      projectDesc:
        "Un accompagnement web complet, de l’infrastructure bare metal ou VPS jusqu’au site : architecture serveur, automatisation, intégration de l’IA et développement sur tous CMS, frameworks et langages adaptés au projet.",
      technologies: [
        "Bare metal & VPS",
        "Automatisation",
        "Intégration IA",
        "Tous CMS",
        "Développement web"
      ],
      footerLink: [
        {
          name: "Voir un exemple",
          url: "https://tapissier-laurot.fr"
        }
      ]
    },
    {
      image: require("./assets/images/bank.jpg"),
      projectName: "Site Web - Intranet",
      projectDesc:
        "Conception d’écosystèmes internes sur mesure : serveurs, intranets web, logiciels métier et applications desktop ou mobiles pour centraliser les données, automatiser les processus et faciliter le travail des équipes.",
      technologies: [
        "Serveurs",
        "Intranet web",
        "Logiciels métier",
        "Applications desktop",
        "Applications mobiles"
      ],
      footerLink: [
        {
          name: "Voir un exemple",
          url: "https://kv2.org/hub"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "+ DE 100 CERTIFICATIONS EN DÉVELOPPEMENT, INFRASTRUCTURE, MARKETING DIGITAL, DATA, CYBERSÉCURITÉ ET CONFORMITÉ.",
  link: {
    url: "https://www.linkedin.com/in/stephane-simon-kv2/",
    text: "Tout voir sur Linkedin"
  },

  achievementsCards: [
    {
      title: "Certification Google",
      subtitle:
        "Certification Google actualisée autour des outils et bonnes pratiques indispensables pour mesurer les performances, développer la visibilité et optimiser une stratégie digitale.",
      image: require("./assets/images/google-certification.svg").default,
      imageAlt: "Certification Google",
      technologies: [
        "Google Analytics GA4",
        "Google Ads",
        "SEO",
        "Webmarketing"
      ],
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.linkedin.com/in/stephane-simon-kv2/details/certifications/"
        }
      ]
    },
    {
      title: "Certification Pinterest",
      subtitle:
        "Certification consacrée aux bonnes pratiques Pinterest pour créer des contenus performants, développer une audience et piloter des campagnes publicitaires grâce aux données.",
      technologies: [
        "Pinterest Ads",
        "Content Strategy",
        "Analytics",
        "Social Media"
      ],
      image: require("./assets/images/pinterest-certification.svg").default,
      imageAlt: "Certification Pinterest",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.linkedin.com/in/stephane-simon-kv2/details/certifications/"
        }
      ]
    },
    {
      title: "Certification CNIL",
      subtitle:
        "Certification actualisée sur la protection des données personnelles, les principes du RGPD et les bonnes pratiques à appliquer dans les projets numériques.",
      technologies: [
        "RGPD",
        "Protection des données",
        "Conformité",
        "Privacy by Design"
      ],
      image: require("./assets/images/cnil-certification.svg").default,
      imageAlt: "Certification CNIL",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.linkedin.com/in/stephane-simon-kv2/details/certifications/"
        }
      ]
    },
    {
      title: "Certification Meta",
      subtitle:
        "Certification consacrée aux outils Meta, à la création de campagnes publicitaires et à l’analyse des performances sur les réseaux sociaux.",
      technologies: ["Meta Ads", "Facebook", "Instagram", "Social Media"],
      image: require("./assets/images/meta-certification.svg").default,
      imageAlt: "Certification Meta",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.linkedin.com/in/stephane-simon-kv2/details/certifications/"
        }
      ]
    },
    {
      title: "Projet Openclassroom : Sophie Bluel",
      subtitle:
        "Aidez votre équipe à finaliser le nouveau site internet d'une architecte d'intérieur. Vous utiliserez Javascript pour que les éléments du site se créent de manière dynamique en communiquant avec une API. Mise en oeuvre, Javascript, API, Figma.",
      image: require("./assets/images/sophie.jpg"),
      imageAlt: "Projet Sophie Bluel",
      technologies: ["JavaScript", "HTML", "SASS", "Local Storage"],
      footerLink: [
        {
          name: "Certifications",
          url: "https://www.linkedin.com/in/stephane-simon-kv2/details/certifications/"
        },
        {
          name: "Github",
          url: "https://github.com/mrkv2/Portfolio-architecte-sophie-bluel"
        }
      ]
    },
    {
      title: "Projet Openclassroom : Kasa",
      subtitle:
        "Implémentez le front end de Kasa, une application de location de logements. Vous mettrez en place des composants avec React et les routes avec React Router. Mise en oeuvre, React, SCSS, Animation CSS.",
      technologies: ["React.js", "React Router", "Animation CSS", "Sass"],
      image: require("./assets/images/kasa.jpg"),
      imageAlt: "Projet Kasa",
      footerLink: [
        {
          name: "Certifications",
          url: "https://www.linkedin.com/in/stephane-simon-kv2/details/certifications/"
        },
        {
          name: "Github",
          url: "https://github.com/mrkv2/projet-8"
        }
      ]
    },
    {
      title: "Projet Openclassroom : Argent Bank",
      subtitle:
        "Implémentez le front-end d'une application bancaire avec React. Vous venez d’intégrer Argent Bank comme développeur front-end. Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire. Mise en oeuvre, React Toolkit, JSX, Swagger/API.",
      technologies: ["React.js", "Redux Toolkit", "API Rest", "SCSS", "JSX"],
      image: require("./assets/images/bank.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certifications",
          url: "https://www.linkedin.com/in/stephane-simon-kv2/details/certifications/"
        },
        {
          name: "Github",
          url: "https://github.com/mrkv2/ArgentBank-website"
        }
      ]
    },

    {
      title: "Projet Openclassroom : Oh my food",
      subtitle:
        "Créer l’interface visuelle d’un site de restauration et la rendre dynamique avec du CSS moderne. Mise en œuvre : développement mobile-first, animations CSS, Git/GitHub, Sass et HTML.",
      technologies: ["JavaScript", "Animation CSS", "Mobile First", "SCSS"],
      image: require("./assets/images/creationsitewebpourrestaurateur.jpg"),
      imageAlt: "certification openclassroom",
      footerLink: [
        {
          name: "Certifications",
          url: "https://www.linkedin.com/in/stephane-simon-kv2/details/certifications/"
        },
        {
          name: "Github",
          url: "https://github.com/mrkv2/ohmyfood"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: true, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  eyebrow: "Étape suivante",
  title: "Commençons par une consultation gratuite",
  subtitle:
    "Un premier échange pour comprendre votre situation et déterminer si un audit professionnel est utile. L’audit complet est payant et tout suivi KV2 est ensuite étudié au cas par cas.",

  talks: [
    {
      title: "Un premier avis, sans engagement",
      subtitle:
        "Présentez votre contexte. Nous vous indiquerons clairement si un audit approfondi est pertinent, sans présumer de la suite.",
      reassurance: [
        "Consultation gratuite",
        "Audit complet sur devis",
        "Suivi étudié au cas par cas"
      ],
      slides_url: "https://kv2.fr/contact-devis-conseils-webmaster/",
      event_url: "https://wa.me/message/UPIY4EFXXNFQB1",
      website_url: "https://kv2.fr"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact ☎️",
  subtitle: "Vous avez un projet ? Naissant ou à faire évoluer ?"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  digitalAudit,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
