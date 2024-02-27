/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Stéphane SIMON",
  title: "Salutations, je suis Stéphane",
  subTitle: emoji(
    "Autodidacte passioné 🚀 Webmaster et intégrateur web JavaScript / Reactjs / Nodejs / React Native et plein d'autres libraries, framworks et techno très cool  🤙 ."
  ),
  resumeLink:
    "https://kv2.fr", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mrkv2",
  linkedin: "https://www.linkedin.com/in/stephane-simon-kv2/",
  //gmail: "kv2webmaster@gmail.com",
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
  title: "Ce que je fais...",
  subTitle: "Webmaster intégrateur web j'utilise :",
  skills: [
    emoji(
      "⚡ Développez des interfaces front-end/utilisateur hautement interactives pour vos applications Web"
    ),
    emoji("⚡ Un service complet de webmastering orienté croissance des PME"),
    emoji(
      "⚡ Intégration de services tiers tels que Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    
    {
      schoolName: "Formation en continue",
      logo: require("./assets/images/openclassroom.jpg"),
      subHeader: "Eternel étudiant",
      duration: "janvier 2011 - Jusqu'à maintenant...",
      desc: "Développent Web, Webmarketing...",
      descBullets: [
        "Veille technologique, passages de certifications... ",
        "Déja plus plus de 60 certifications ! Cf linkedin"
      ]
    },
    {
      schoolName: "Openclassroom",
      logo: require("./assets/images/openclassroom.jpg"),
      subHeader: "Intégrateur web Bac+2",
      duration: "janvier 2023 - Décembre 2023",
      desc: "Intégrateur web dominante front-end",
      descBullets: [
        "Formation complete aux nouvelles technologie de developement web",
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
        "Tout les aspects du créateur d'entreprise, du marketing à la gestion du personnel",
        "Domaine de la sécurité humaine ou des moyens électroniques.",
        
      ]
    }
          
   
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Webmastering", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Web Marketing",
      progressPercentage: "70%"
    },
    {
      Stack: "Hébergement web sécurisé",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false// Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fondateur",
      company: "Bersek",
      companylogo: require("./assets/images/bersek.jpg"),
      date: "June 2017 – 2021",
      desc: "Une entreprise de sécurité novatrice, visant à l'augmentation des agents de sécurité via le numérique",
      descBullets: [
        "Création et mise en place de radio logicielle GSM/4G/UHF/DMR/DPMR.",
        "Création de main courante électronique.",
        "Création et mise en place de capteur NFC à instructions.",
        "..."
      ]
    },
    {
      role: "Fondateur",
      company: "Kv2.fr",
      companylogo: require("./assets/images/kv2_logo.jpg"),
      date: "Juin 2011 – j'usqu'a maintenant",
      desc: "Création de service de communication digitale, englobant l'ensemble du webmastering et l'écosysmteme de communication digitale.",
      descBullets: [
        "12 ans de recule sur l'accompagnement au numérique.",
        "Des centaines de création diverses.",
        "Création d'un modèle de soutien au numérique efficient.",
        "..."
      ]
    },
    {
      role: "Créateur",
      company: "Inside project",
      companylogo: require("./assets/images/inside.jpg"),
      date: "Mars 1981 – Toujours présent",
      desc: "En plus de 20 ans de création numérique j'ai pu abordé de nonbreuxes thematiques.",
      descBullets: [
        "Aguerrissement en mode méthode essaie erreur full 100% :)",
        "Des centaines de création diverses.",
        "Et toujours pas perdu l'envie d'avoir envie, c'est meme mon moteur de vie !!!",
        "..."
      ]
      
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Des projets réalisés !",
  subtitle: "QUELQUES STARTUPS ET ENTREPRISES QUE J'AI AIDÉES À CRÉER LEUR TECH 👍",
    
  projects: [
    {
      image: require("./assets/images/creationsitewebentreprisebatiment.jpg"),
      projectName: "Site et communication dans le Batiment",
      projectDesc: "Construire une présence numérique nécessite du temps, mais aussi de la constance.",
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://parquet-renovation.fr"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sitewebpourcoach.jpg"),
      projectName: "Site et communication dans le coaching capillaire",
      projectDesc: "Un site web est un porte avion, piece maitresse d'une escadre qu'il structure...  ",
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://sweetycrepus.fr/"
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
      title: "Projet Openclassroom : Sophie Bluel",
      subtitle:
        "Aidez votre équipe à finaliser le nouveau site internet d'une architecte d'intérieur. Vous utiliserez Javascript pour que les éléments du site se créent de manière dynamique en communiquant avec une API. Mise en oeuvre, Javascript, API, Figma.",
      image: require("./assets/images/sophie.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {name: "Certifications", url: "https://www.linkedin.com/in/stephane-simon-kv2/details/certifications/"},
        {
          name: "Github",
          url: "https://github.com/mrkv2/Portfolio-architecte-sophie-bluel"
        }
      ]
    },
    {
      title: "Projet Openclassroom : Kasa ",
      subtitle:
        "Implémentez le front end de Kasa, une application de locaton de logements. Vous mettrez en place des composants avec React, et les routes avec react router. Mise en oeuvre, React, Sacss, Animation CSS.",
      image: require("./assets/images/kasa.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {name: "Certifications", url: "https://www.linkedin.com/in/stephane-simon-kv2/details/certifications/"},
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
      image: require("./assets/images/bank.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {name: "Certifications", url: "https://www.linkedin.com/in/stephane-simon-kv2/details/certifications/"},
        {
          name: "Github",
          url: "https://github.com/mrkv2/ArgentBank-website"
        }
      ]
    },
    
    {
      title: "Projet Openclassroom : Oh my food",
      subtitle: "Gérer l'inteface visuel d'un site de restauration et le rendre dynamique avec du CSS moderne. Mise en oeuvre, Developpent Mobile-Fisrt, Animation CSS, Git/ Github, Sass, Html.",
      image: require("./assets/images/creationsitewebpourrestaurateur.jpg"),
      imageAlt: "certification openclassroom",
      footerLink: [
        {name: "Certifications", url: "https://www.linkedin.com/in/stephane-simon-kv2/details/certifications/"},
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  subtitle: "Vous avez un projet ? Naissant ou à faire évoluer ?",
   email_address: "contact@kv2.fr"
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
