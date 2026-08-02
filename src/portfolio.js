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
  eyebrow: "Stéphane Simon — Webmaster & développeur web",
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
  schools: [
    {
      schoolName: "Formation continue",
      logo: require("./assets/images/etudiant.webp"),
      subHeader: "Eternel étudiant",
      duration: "janvier 2011 - Jusqu'à maintenant...",
      desc: "Développement web et webmarketing...",
      descBullets: [
        "Veille technologique, passages de certifications... ",
        "Déjà plus de 100 certifications ! Voir LinkedIn."
      ]
    },
    {
      schoolName: "Openclassroom",
      logo: require("./assets/images/openclassroom.png"),
      subHeader: "Intégrateur web Bac+2",
      duration: "janvier 2023 - Décembre 2023",
      desc: "Intégrateur web à dominante front-end",
      descBullets: [
        "Formation complète aux nouvelles technologies du développement web",
        "Html, CSS, SASS, REACT"
      ]
    },
    {
      schoolName: "Formation 3B",
      logo: require("./assets/images/formation3b.jpg"),
      subHeader: "DESES",
      duration: "Juillet 2016 - Juillet 2017",
      desc: "Titre de dirigeant de société de sécurité privée humaine et de moyens électroniques DESES Bac+4 ",
      descBullets: [
        "Tous les aspects de la création d’entreprise, du marketing à la gestion du personnel",
        "Domaine de la sécurité humaine ou des moyens électroniques."
      ]
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
    "Un parcours construit autour de l’entrepreneuriat, du développement web et de la création de solutions numériques adaptées aux réalités du terrain.",
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fondateur",
      company: "KV2",
      companylogo: require("./assets/images/kv2_logo.jpg"),
      date: "2011 – aujourd’hui",
      dateTime: "2011",
      desc: "Accompagnement d’entreprises, d’artisans et de porteurs de projets dans leur développement numérique.",
      descBullets: [
        "Plus de 400 projets web réalisés.",
        "Création, refonte, maintenance et évolution de sites.",
        "Développement de plugins, intégrations API et outils métier.",
        "Conseil en hébergement, sécurité, SEO et acquisition."
      ]
    },
    {
      role: "Fondateur",
      company: "Bersek",
      companylogo: require("./assets/images/bersek.jpg"),
      date: "2017 – 2021",
      dateTime: "2017",
      desc: "Conception de solutions numériques appliquées aux métiers de la sécurité privée.",
      descBullets: [
        "Prototypage de systèmes de communication radio.",
        "Création d’une main courante électronique.",
        "Développement de dispositifs et scénarios NFC.",
        "Expérimentation de solutions connectées pour les agents de terrain."
      ]
    },
    {
      role: "Créateur et apprenant permanent",
      company: "Projets personnels & veille technologique",
      companylogo: require("./assets/images/inside.jpg"),
      date: "Depuis plus de 20 ans",
      dateTime: "2006",
      desc: "Exploration continue des technologies numériques à travers des projets personnels, des prototypes et une formation permanente.",
      descBullets: [
        "Plus de 100 certifications.",
        "Veille technique et expérimentation régulière.",
        "Approche pluridisciplinaire du web et du numérique.",
        "Culture de l’apprentissage par la pratique."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "+ plus 400 projets web réalisés depuis 2011 !",
  subtitle:
    "QUELQUES STARTUPS ET ENTREPRISES QUE J'AI AIDÉES À CRÉER LEUR TECH 👍",

  projects: [
    {
      image: require("./assets/images/nerdtek.png"),
      projectName: "Site web - Média",
      projectDesc:
        "Nerdtek.fr est un projet web dédié à la cybersécurité, l'OSINT et la tech. Nous avons accompagné sa création en apportant expertise technique et optimisation SEO pour offrir une plateforme riche en contenus spécialisés et accessibles aux passionnés du domaine.",
      technologies: [
        "WordPress custom",
        "Google Analytics GA4",
        "API Graph",
        "Vue.js",
        "PHP"
      ],
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://nerdtek.fr"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sitewebpourcoach.jpg"),
      projectName: "Site Web - Location saisonnière",
      projectDesc:
        "Un site de location saisonnière avec création d’un plugin WordPress sur mesure pour gérer les réservations et synchroniser les disponibilités entre plusieurs plateformes.",
      technologies: [
        "WordPress custom",
        "Création de plugin",
        "API Booking",
        "API Airbnb",
        "Réservation en ligne"
      ],
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://villa-nieves-alicante.com"
        }
      ]
    },
    {
      image: require("./assets/images/nerdshop.jpg"),
      projectName: "Site Web - E-commerce",
      projectDesc:
        "Un site e-commerce permet la vente en ligne de produits ou services. Optimisé pour le SEO et l’expérience utilisateur, il vise à convertir les visiteurs en clients grâce à une navigation fluide et des fiches produits attractives. ",
      technologies: [
        "WooCommerce custom",
        "WAF",
        "Google Analytics GA4",
        "API Google",
        "Pixel"
      ],
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://letviva.fr"
        }
      ]
    },
    {
      image: require("./assets/images/creationsitewebentreprisebatiment.jpg"),
      projectName: "Site Web - Artisan",
      projectDesc:
        "Un site vitrine conçu pour présenter un savoir-faire artisanal, valoriser les réalisations et générer des demandes de devis auprès d’une clientèle locale.",
      technologies: [
        "WordPress custom",
        "SEO local",
        "Google Analytics GA4",
        "Formulaire de devis",
        "WhatsApp"
      ],
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://tapissier-laurot.fr"
        }
      ]
    },
    {
      image: require("./assets/images/annuaire.jpg"),
      projectName: "Site Web - Annuaire",
      projectDesc:
        "Un site vitrine présente une entreprise, ses services et ses valeurs. Il sert à établir une présence en ligne crédible et à générer des contacts qualifiés via un design professionnel et une optimisation SEO locale. ",
      technologies: [
        "WordPress Headless",
        "LLMs",
        "Google Analytics GA4",
        "API",
        "Clarity"
      ],
      footerLink: [
        {
          name: "Voir un exemple",
          url: "https://yvelines-services.fr"
        }
      ]
    },
    {
      image: require("./assets/images/bank.jpg"),
      projectName: "Site Web - Intranet",
      projectDesc:
        "Un site intranet est une plateforme interne destinée aux employés d’une entreprise. Il centralise les documents, outils et communications pour améliorer la collaboration et l’efficacité au sein de l’organisation. ",
      technologies: [
        "React.js",
        "Node.js",
        "Joomla",
        "Nextcloud",
        "Geo Fencing"
      ],
      footerLink: [
        {
          name: "Voir un exemple",
          url: "https://kv2.org/hub"
        }
      ]
    },
    {
      image: require("./assets/images/sitewebpourcoach.jpg"),
      projectName: "Mais aussi...",
      projectDesc:
        "Les sites communautaires connectent des passionnés, les sites éducatifs forment en ligne, les sites SaaS offrent des outils web, les sites de streaming diffusent du contenu, et les sites comparateurs aident à choisir les meilleurs services. ",
      technologies: ["WordPress", "Google Analytics GA4", "Vue.js", "PHP"],
      footerLink: [
        {
          name: "Obtenir une étude mon projet",
          url: "https://kv2.fr/contact-devis-conseils-webmaster/"
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
    "CERTIFICATIONS, LETTRES DE RÉCOMPENSE ET QUELQUES TRUCS SYMPAS QUE J'AI RÉALISÉS ! ",
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
  title: "Découverte de projet",
  subtitle: emoji(
    "Fiabilité, coût, conseils... La recette idéale pour dynamiser votre projet! 💪🚀"
  ),

  talks: [
    {
      title: "Consultation gratuite",
      subtitle: "Réservez un créneau",
      slides_url: "https://kv2.fr/contact-devis-conseils-webmaster/",
      event_url: "https://wa.me/message/UPIY4EFXXNFQB1"
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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
