import {
  Cloud,
  CodeXml,
  Database,
  FileText,
  Megaphone,
  Monitor,
  PencilRuler,
  UsersRound,
} from "lucide-react";
import {
  OfficeLocationType,
  ProductCaseStudy,
  ServiceExcelType,
  ServiceFeaturesType,
  ServiceTechStackType,
  ServiceType,
  ServiceTypeDetailsType,
} from "./types";

export const SERVICES: ServiceType[] = [
  {
    id: 0,
    title: " Full Stack Entwicklung",
    description: "Web + Mobile App Entwicklung",
    icon: <CodeXml className="service_icon" />,
    link: "/offerings/services/full-stack-development",
  },
  {
    id: 1,
    title: "Maßgeschneiderte ERP Lösungen",
    description: "Individuelle ERP- und Ressourcenplanung",
    icon: <Database className="service_icon" />,
    link: "/offerings/services/custom-erp-solutions",
  },
  {
    id: 2,
    title: "UI/UX & Marken Design",
    description: "UX-, Interaktions- und Designgestaltung",
    icon: <PencilRuler className="service_icon" />,
    link: "/offerings/services/ui-ux-brand-design",
  },
  {
    id: 3,
    title: "Technische Dokumentation",
    description:
      " Dokumentation, die effizient, verständlich und praxisnah ist.",
    icon: <FileText className="service_icon" />,
    link: "/offerings/services/technical-documentation",
  },
  {
    id: 4,
    title: "Performance Marketing",
    description: "Strategisch geplante digitale Kampagnen",
    icon: <Megaphone className="service_icon" />,
    link: "/offerings/services/performance-marketing",
  },
  {
    id: 5,
    title: "Cloud Infrastruktur Management",
    description: "Skalierbare Cloud-Lösungen",
    icon: <Cloud className="service_icon" />,
    link: "/offerings/services/cloud-infrastructure-management",
  },
  {
    id: 6,
    title: "Personalldienstleistung",
    description: "IT-Experten / Buchhaltung",
    icon: <UsersRound className="service_icon" />,
    link: "/offerings/services/staff-augmentation",
  },
  {
    id: 7,
    title: "Personalschulung",
    description: "Umfassende IT-Schulungsprogramme",
    icon: <Monitor className="service_icon" />,
    link: "/offerings/services/corporate-training",
  },
  // {
  //   id: 8,
  //   title: "Outsourcing",
  //   description: " Routineaufgaben an externe Fachkräfte auslagern",
  //   icon: <Monitor className="service_icon" />,
  //   link: "/offerings/services/corporate-training",
  // },
];

export const PRODUCT: ServiceType[] = [
  {
    id: 0,
    title: "B-Fit",
    description: "",
    icon: <CodeXml className="service_icon" />,
    link: "/offerings/products/b-fit",
  },
  {
    id: 1,
    title: "B-Store",
    description: "",
    icon: <Database className="service_icon" />,
    link: "/offerings/products/b-fit",
  },
  {
    id: 2,
    title: "B-Chef",
    description: "",
    icon: <PencilRuler className="service_icon" />,
    link: "/offerings/products/b-fit",
  },
];

export const SERVICE_FULL_STACK: ServiceTechStackType[] = [
  {
    id: "fullstack-1",
    title: "Webentwicklung mit dem MERN-Stack",
    list: [
      "Webentwicklung mit dem MERN-Stack",
      "Express.js für robuste Backend-Lösungen",
      "React für interaktive und flexible User Interfaces",
      "Node.js für leistungsstarke und skalierbare Serverlösungen",
    ],
  },
  {
    id: "fullstack-2",
    title: "Webentwicklung mit dem MEAN-Stack",
    list: [
      "MongoDB für skalierbare und effektive Datenverwaltung",
      "Express.js für optimiertes Backend-Framework",
      "Angular für leistungsstarke Frontend-Anwendungen",
      "Node.js für effiziente und skalierbare Serverarchitekturen",
    ],
  },
];

export const SERVICE_FULL_STACK_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "full_stack_details_1",
    heading: "Warum MERN & MEAN? Entdecken Sie die Vorteile der Stacks",
    content: `<p>Sowohl MERN (MongoDB, Express.js, React, Node.js) als auch MEAN (MongoDB, Express.js, Angular, Node.js) gehören zu den führenden Technologiestacks für die moderne Webentwicklung:</p>
      <ul>
        <li><strong>Vollständige JavaScript-Umgebung:</strong> Eine einheitliche Sprache für den gesamten Stack, wodurch Entwicklung vereinfacht und Komplexität reduziert wird.</li>
        <li><strong>Skalierbarkeit:</strong> Entwickelt, um wachsende und sich weiterentwickelnde Anwendungen mühelos zu unterstützen.</li>
        <li><strong>Kosteneffizienz:</strong> Open-Source-Technologien reduzieren Lizenzkosten und bieten Zugang zu einem großen Ökosystem an Tools und Bibliotheken.</li>
        <li><strong>Flexibilität:</strong> Anpassbar an unterschiedliche Projektanforderungen und leicht zu individualisieren.</li>
        <li><strong>Hohe Performance:</strong> Optimiert für Geschwindigkeit und Effizienz – im Frontend wie im Backend.</li>
      <ul>
      `,
  },
  {
    id: "full_stack_details_2",
    heading: "Warum BharathaTechno für die Web-App-Entwicklung wählen?",
    content: `<p><strong>Expertise in modernen Technologien:</strong> Unser Team ist spezialisiert auf MERN (MongoDB, Express.js, React.js, Node.js) und MEAN (MongoDB, Express.js, Angular, Node.js) und setzt Ihre Webanwendung mit den neuesten und effizientesten Technologien um.</p>
      <ul>
        <li><strong>Full-Stack-JavaScript-Umgebung:</strong> Eine einheitliche Sprache über den gesamten Stack vereinfacht die Entwicklung und reduziert Komplexität.</li>
        <li><strong>Individuelle Lösungen:</strong> Jedes Projekt ist einzigartig. Wir arbeiten eng mit Ihnen zusammen, um Ihre Vision zu verstehen und maßgeschneiderte Lösungen zu liefern, die exakt auf Ihre Geschäftsziele abgestimmt sind.</li>
        <li><strong>Fokus auf Skalierbarkeit:</strong> Wir entwickeln Anwendungen, die mit Ihrem Unternehmen wachsen und steigenden Traffic sowie Datenmengen problemlos bewältigen.</li>
        <li><strong>Agiler Entwicklungsprozess:</strong> Unser iterativer Ansatz sorgt für Transparenz und Flexibilität, ermöglicht regelmäßiges Feedback und bindet Sie aktiv in den Entwicklungsprozess ein.</li>
      <ul>
      `,
  },
  {
    id: "full_stack_details_3",
    heading: "Warum BharathaTechno für die Mobile-App-Entwicklung wählen?",
    content: `<ul>
        <li><strong>Cross-Platform-Expertise:</strong> Wir entwickeln Apps sowohl für iOS als auch Android, sodass Ihr Unternehmen die größtmögliche Zielgruppe erreicht.</li>
        <li><strong>React Native-Kompetenz:</strong> Unser Team nutzt die Vorteile von React Native, um leistungsstarke, native-ähnliche Anwendungen aus einer einzigen Codebasis zu erstellen - das spart Entwicklungszeit und Kosten.</li>
        <li><strong>Full-Stack-Fähigkeiten:</strong> Mit unserer Expertise in MERN- und MEAN-Stacks bieten wir End-to-End-Lösungen - vom Backend bis zum Frontend-Design.</li>
        <li><strong>Nutzerzentriertes Design:</strong> Unsere UI/UX-Designer entwickeln intuitive und ansprechende Benutzeroberflächen, die das Engagement und die Zufriedenheit der Nutzer steigern.</li>
        <li><strong>Skalierbare Lösungen:</strong> Wir bauen Anwendungen, die mit Ihrem Unternehmen wachsen und problemlos steigende Nutzerzahlen und Datenmengen verarbeiten können.</li>
        <li><strong>Agiler Entwicklungsprozess:</strong> Unser iterativer Ansatz sorgt für Transparenz und Flexibilität, ermöglicht regelmäßiges Feedback und bindet Sie aktiv in den Entwicklungsprozess ein.</li>
      <ul>
      `,
  },
  {
    id: "full_stack_details_4",
    heading: "Unser Full-Stack-Entwicklungsprozess",
    content: `<ul>
        <li><strong>Discovery und Planung</strong>: Wir arbeiten eng mit Ihnen zusammen, um die Anforderungen Ihres Projekts, die Zielgruppe und Ihre Geschäftsziele genau zu verstehen.</li>
        <li><strong>UI/UX-Design</strong>: Unsere Designer erstellen Wireframes und Prototypen, um den Ablauf und die Funktionalität Ihres Produkts zu visualisieren.</li>
        <li><strong>Entwicklung</strong>: Wir setzen Ihre Lösung mit den neuesten Technologien um, z. B. React Native oder nativen Technologien, je nach Projektanforderungen.</li>
        <li><strong>Testing und Qualitätssicherung</strong>: Umfassende Tests auf verschiedenen Geräten und Betriebssystemen stellen sicher, dass Ihr Produkt den höchsten Qualitätsstandards entspricht.</li>
        <li><strong>Deployment</strong>: Wir übernehmen den Einreichungsprozess für Ihre gewählte Plattform oder App-Stores und sorgen für einen reibungslosen Rollout.</li>
        <li><strong>Wartung und Support</strong>: Kontinuierliche Unterstützung, damit Ihr Produkt stets aktuell bleibt und optimal funktioniert.</li>
      <ul>
      `,
  },
  {
    id: "full_stack_details_5",
    heading: "Webanwendungen, in denen wir Maßstäbe setzen",
    content: `<ul>
        <li><strong>Single Page Applications (SPAs)</strong>: Nutzen Sie die Kraft von React oder Angular, um flüssige, schnell ladende Single-Page-Anwendungen zu erstellen, die das Nutzererlebnis verbessern.</li>
        <li><strong>Progressive Web Apps (PWAs)</strong>: Entwickeln Sie Webanwendungen, die ein nativen App-ähnliches Erlebnis bieten, komplett mit Offline-Funktionalität und Push-Benachrichtigungen.</li>
        <li><strong>E-Commerce-Plattformen</strong>: Erstellen Sie funktionsreiche E-Commerce-Lösungen mit robustem Backend-Management und intuitiven Benutzeroberflächen.</li>
        <li><strong>Customer Relationship Management (CRM) Systeme</strong>: Entwickeln Sie maßgeschneiderte CRM-Plattformen zur Optimierung Ihrer Geschäftsprozesse und Verbesserung der Kundeninteraktionen.</li>
        <li><strong>Enterprise Resource Planning (ERP) Systeme</strong>: Bauen Sie maßgeschneiderte ERP-Lösungen, die verschiedene Geschäftsprozesse integrieren und die Gesamteffizienz steigern.</li>
        <li><strong>Datenanalyse-Tools</strong>: Erstellen Sie ausgeklügelte Datenvisualisierungs- und Analysetools, die Ihnen helfen, fundierte Geschäftsentscheidungen zu treffen.</li>
      <ul>
      `,
  },
  {
    id: "full_stack_details_6",
    heading: "Mobile Anwendungen, in denen wir Maßstäbe setzen",
    content: `<ul>
        <li><strong>E-Commerce-Apps</strong>: Schaffen Sie funktionsreiche Einkaufserlebnisse für Ihre Kunden.</li>
        <li><strong>Soziale Netzwerk-Apps</strong>: Bauen Sie ansprechende Plattformen für die Interaktion in der Community.</li>
        <li><strong>Fitness- und Gesundheits-Apps</strong>: Entwickeln Sie Apps, die Nutzern helfen, ihre Gesundheits- und Fitnessziele zu verfolgen.</li>
        <li><strong>Unternehmenslösungen</strong>: Erstellen Sie maßgeschneiderte Apps zur Optimierung Ihrer Geschäftsprozesse.</li>
        <li><strong>Bildungs-Apps</strong>: Entwickeln Sie interaktive Lernerfahrungen für Lernende jeden Alters.</li>
        <li><strong>Unterhaltungs- und Gaming-Apps</strong>: Erstellen Sie fesselnde und immersive mobile Spiele und Unterhaltungs-Apps.</li>
      <ul>
      `,
  },
];

export const SERVICE_FULL_STACK_FEATURES: ServiceFeaturesType = {
  title: "Unsere Zusatzservices",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      list: [
        {
          id: "feature_1",
          title: "Single Page Applications (SPAs)",
          description:
            "Nutzen Sie die Leistungsfähigkeit von React oder Angular, um flüssige, schnell ladende Single-Page-Anwendungen zu erstellen, die das Nutzererlebnis verbessern.",
        },
        {
          id: "feature_2",
          title: "RESTful API Development",
          description:
            "Erstellen Sie sichere und effiziente APIs, um Ihr Frontend nahtlos mit Backend-Diensten zu verbinden.",
        },
        {
          id: "feature_3",
          title: "Real-Time Application Development",
          description:
            "Nutzen Sie das volle Potenzial von Node.js, um Echtzeitanwendungen wie Chatsysteme oder Live-Updates zu erstellen.",
        },
        {
          id: "feature_4",
          title: "Custom Web App Development",
          description:
            "Wir entwickeln maßgeschneiderte Webanwendungen, die genau auf Ihre spezifischen Geschäftsanforderungen zugeschnitten sind und Skalierbarkeit sowie Leistung gewährleisten.",
        },
        {
          id: "feature_5",
          title: "E-commerce Solutions",
          description:
            "Entwickeln Sie funktionsreiche E-Commerce-Plattformen mit robuster Backend-Verwaltung und intuitiven Benutzeroberflächen.",
        },
        {
          id: "feature_6",
          title: "Enterprise Resource Planning (ERP) Systems",
          description:
            "Erstellen Sie maßgeschneiderte ERP-Lösungen, die Ihre Geschäftsprozesse optimieren und die Produktivität steigern.",
        },
        {
          id: "feature_7",
          title: "Migration and Upgrade Services",
          description:
            "Überführen Sie Ihre bestehenden Anwendungen auf den MERN- oder MEAN-Stack, um verbesserte Leistung und Skalierbarkeit zu erzielen.",
        },
      ],
    },
  ],
};

export const SERVICE_FULL_STACK_EXCEL: ServiceExcelType[] = [
  {
    id: "excel_1",
    title: "SPA",
    description: "React, Angular",
  },
  {
    id: "excel_2",
    title: "iOS",
    description: "React Native, Flutter",
  },
  {
    id: "excel_3",
    title: "Android",
    description: "React Native, Flutter",
  },
  {
    id: "excel_4",
    title: "Backend",
    description: "NodeJs, ExpressJs, Python",
  },
  {
    id: "excel_5",
    title: "Frontend",
    description: "ReactJs, NextJs, Angular, VueJs",
  },
  {
    id: "excel_6",
    title: "Datenbanken",
    description: "MongoDB, MySQL, PostgreSQL, Firebase",
  },
  {
    id: "excel_7",
    title: "Cloud-Dienste",
    description: "AWS, Azure, Google, Cloud, DigitalOcen",
  },
  {
    id: "excel_8",
    title: "Weitere Tools",
    description: "Redux, GraphQL",
  },
];

export const SERVICE_CUSTOM_ERP: ServiceTechStackType[] = [
  {
    id: "custom_erp_1",
    title: "",
    description:
      "Unsere erfahrenen Entwickler nutzen eine Reihe moderner Technologien, um robuste und effiziente ERP-Lösungen zu erstellen:",
    list: [
      "Frontend: React.js, Angular",
      "Backend: Node.js, Python",
      "Datenbanken: MongoDB, MySQL, PostgreSQL",
      "Cloud-Plattformen: AWS, Azure, Google Cloud, DigitalOcean",
    ],
  },
];

export const SERVICE_CUSTOM_ERP_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "custom_erp_details_1",
    heading: "Warum ein maßgeschneidertes ERP-System wählen?",
    content: `
      <ul>
        <li><strong>Individuelle Funktionalität:</strong> Unsere maßgeschneiderten ERP-Lösungen werden entwickelt, um Ihre spezifischen Geschäftsanforderungen zu erfüllen, sodass Sie genau die Funktionen erhalten, die Sie benötigen, ohne unnötige Komplexität.</li>
        <li><strong>Nahtlose Integration:</strong> Wir gestalten Ihr ERP-System so, dass es sich reibungslos in Ihr bestehendes Software-Ökosystem integriert, um den Datenfluss und die betriebliche Kohärenz zu verbessern.</li>
        <li><strong>Skalierbarkeit:</strong> Mit dem Wachstum Ihres Unternehmens wächst auch Ihr maßgeschneidertes ERP-System mit. Wir entwickeln skalierbare Lösungen, die sich an Ihre sich entwickelnden Bedürfnisse anpassen können.</li>
        <li><strong>Erhöhte Sicherheit:</strong> Wir implementieren robuste Sicherheitsmaßnahmen, die auf Ihre branchenspezifischen Standards und Compliance-Anforderungen zugeschnitten sind.</li>
        <li><strong>Langfristige Kosteneffizienz:</strong> Obwohl die anfängliche Investition höher sein kann, erweisen sich maßgeschneiderte ERP-Systeme aufgrund ihrer perfekten Anpassung an Ihre Betriebsabläufe langfristig oft als kosteneffizienter.</li>
      <ul>
      `,
  },
  {
    id: "custom_erp_details_2",
    heading:
      "Warum BharathaTechno für Ihre maßgeschneiderte ERP-Lösung wählen?",
    content: `
      <ul>
        <li><strong>Expertise:</strong> Unser Team verfügt über jahrelange Erfahrung in der Entwicklung maßgeschneiderter ERP-Lösungen in verschiedenen Branchen.</li>
        <li><strong>Kundenorientierter Ansatz:</strong> Wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass die Lösung Ihren genauen Bedürfnissen entspricht.</li>
        <li><strong>Modernste Technologie:</strong> Wir nutzen die neuesten Technologien, um zukunftssichere ERP-Systeme zu entwickeln.</li>
        <li><strong>Kontinuierliche Unterstützung:</strong> Unsere Partnerschaft endet nicht mit der Bereitstellung. Wir bieten kontinuierliche Unterstützung und Updates.</li>
        <li><strong>Kosten-Effizienz:</strong> Wir liefern hochwertige Lösungen, die eine hervorragende Kapitalrendite bieten.</li>
      <ul>
      `,
  },
  {
    id: "custom_erp_details_3",
    heading: "Unser Entwicklungsprozess für maßgeschneiderte ERP-Lösungen",
    content: `<ul>
        <li><strong>Geschäftsanalyse:</strong> Wir beginnen mit einer gründlichen Analyse Ihrer Geschäftsprozesse, Herausforderungen und Ziele.</li>
        <li><strong>Systemdesign:</strong> Unser Team erstellt ein umfassendes Systemdesign, das alle Module und Funktionen abbildet.</li>
        <li><strong>Entwicklung:</strong> Mit modernsten Technologien entwickeln wir Ihre maßgeschneiderte ERP-Lösung von Grund auf.</li>
        <li><strong>Testen:</strong> Umfassende Tests stellen sicher, dass Ihr ERP-System fehlerfrei ist und optimal funktioniert.</li>
        <li><strong>Implementierung:</strong> Wir führen Ihr neues ERP-System sorgfältig ein, um minimale Störungen in Ihrem Betrieb zu gewährleisten.</li>
        <li><strong>Schulung und Unterstützung:</strong> Wir bieten umfassende Schulungen für Ihr Team und kontinuierliche Unterstützung, um eine reibungslose Einführung sicherzustellen.</li>
      <ul>
      `,
  },
];

export const SERVICE_CUSTOM_ERP_FEATURES: ServiceFeaturesType = {
  title: "Essenzielle Features",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      list: [
        {
          id: "feature_1",
          title: "Finanzmanagement",
          description:
            "Optimierung von Buchhaltungsprozessen, Budgetierung und Finanzberichterstattung.",
        },
        {
          id: "feature_2",
          title: "Personalmanagement",
          description:
            "Effiziente Verwaltung von Mitarbeiterdaten, Gehaltsabrechnung und Leistungsbeurteilungen.",
        },
        {
          id: "feature_3",
          title: "Bestandsverwaltung",
          description:
            "Echtzeitverfolgung und Optimierung der Bestandsniveaus.",
        },
        {
          id: "feature_4",
          title: "Customer Relationship Management (CRM)",
          description:
            "Verbesserung der Kundeninteraktionen und Verkaufsprozesse.",
        },
        {
          id: "feature_5",
          title: "Lieferkettenmanagement",
          description:
            "Optimierung Ihrer Lieferkette für mehr Effizienz und Kosteneinsparungen.",
        },
        {
          id: "feature_6",
          title: "Business Intelligence",
          description:
            "Gewinnung umsetzbarer Einblicke durch fortschrittliche Reporting- und Analysetools.",
        },
        {
          id: "feature_7",
          title: "Mobile Zugänglichkeit",
          description:
            "Zugriff auf Ihr ERP-System unterwegs über mobile, benutzerfreundliche Schnittstellen.",
        },
      ],
    },
  ],
};

export const SERVICE_UI_UX_DESIGN: ServiceTechStackType[] = [
  {
    id: "uidesgin-1",
    title: "",
    list: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Canva",
      "Illustrator",
      "Photoshop",
      "Adobe Creative Suite",
    ],
  },
];

export const SERVICE_UI_UX_DESIGN_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "ui_design_details_1",
    heading: "Warum BharathaTechno für UI/UX- und Marken-Design wählen?",
    content: `
      <ul>
        <li><strong>Nutzerzentriertes Design:</strong> Wir stellen Ihre Nutzer in den Mittelpunkt. Jeder Pixel, jede Interaktion ist darauf ausgelegt, intuitiv, nahtlos und zufriedenstellend zu sein.</li>
        <li><strong>Markenkohärenz:</strong> Wir gestalten nicht nur Bildschirme, sondern prägen Markenerlebnisse. Ihre visuelle Identität, Tonalität und Werte fließen in jedes Element ein, um Konsistenz und emotionale Resonanz zu gewährleisten.</li>
        <li><strong>Strategisch und forschungsbasiert:</strong> Von Wettbewerbsanalysen bis hin zu Nutzer-Tests – unsere Designentscheidungen basieren auf Erkenntnissen, nicht auf Vermutungen. Das Ergebnis sind Lösungen, die tatsächlich für Ihre Nutzer funktionieren.</li>
        <li><strong>Plattformübergreifende Exzellenz:</strong> Ob auf Desktop, Mobilgerät oder Tablet – Ihre Nutzer erhalten ein konsistentes und erfreuliches Erlebnis auf allen Geräten.</li>
        <li><strong>Design, das die Entwicklung unterstützt:</strong> Durch nahtlose Zusammenarbeit zwischen unseren Design- und Entwicklungsteams (insbesondere bei MERN- und MEAN-Stack-Projekten) schaffen wir skalierbare Designs, die in leistungsstarke digitale Produkte umgesetzt werden.</li>
      <ul>
      `,
  },
  {
    id: "ui_design_details_2",
    heading: "Unser nutzerzentrierter Designprozess",
    content: `
      <ul>
        <li><strong>Entdeckung</strong> - Wir hören zu – Ihren Zielen, Nutzern, Wettbewerbern und Ihrer Vision.</li>
        <li><strong>Nutzerforschung</strong> - Empathie trifft auf Daten: Verständnis dafür, wie echte Nutzer denken und sich verhalten.</li>
        <li><strong>Informationsarchitektur</strong> - Strukturierung Ihres Produkts oder Ihrer Website für Klarheit und Benutzerfreundlichkeit.</li>
        <li><strong>Wireframes</strong> - Grundlagen mit durchdachten, niedrigauflösenden Designs legen.</li>
        <li><strong>Prototypen</strong> - Ideen mit interaktiven Mockups testen, bevor ein Code geschrieben wird.</li>
        <li><strong>Visuelles Design</strong> - Marke und UI mit Liebe zum Detail und emotionaler Wirkung zum Leben erwecken.</li>
        <li><strong>Nutzertests</strong> - Feedback sammeln und Verfeinerungen basierend auf realem Verhalten vornehmen.</li>
        <li><strong>Übergabe & Lieferung</strong> - Saubere Dateien, ordnungsgemäße Dokumentation und Unterstützung für Entwickler</li>
      <ul>
      `,
  },
];

export const SERVICE_UI_UX_DESIGN_FEATURES: ServiceFeaturesType = {
  title: "Unsere Zusatzservices",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      list: [
        {
          id: "feature_1",
          title: "UI/UX-Design",
          description:
            "Gestaltung digitaler Produkte, die visuell ansprechend, benutzerfreundlich und intuitiv sind.",
        },
        {
          id: "feature_2",
          title: "Web-Design",
          description:
            "Gestaltung und Entwicklung funktionaler, responsiver und visuell ansprechender Websites.",
        },
        {
          id: "feature_3",
          title: "Mobile App-Design",
          description:
            "Elegante, funktionale Benutzeroberflächen, die Ihre Apps einfach und angenehm zu nutzen machen.",
        },
        {
          id: "feature_4",
          title: "Dashboard & SaaS",
          description:
            "Komplexe Daten, einfach gemacht. Wir verwandeln Dashboards in Entscheidungshilfen.",
        },
        {
          id: "feature_5",
          title: "E-Commerce UI/UX",
          description:
            "Optimiert für Käufe, mit klarer Navigation und einem kaufreundlichen Erlebnis.",
        },
        {
          id: "feature_6",
          title: "Branding & Visuals",
          description:
            "Starke visuelle Identität für Ihre Marke wie Logos, Brand Book, Geschäftspapiere und Wiedererkennbarkeit.",
        },
        {
          id: "feature_7",
          title: "Decks & Präsentationen",
          description:
            "Saubere, gebrandete Designs, die Ihnen helfen, Ihre Geschäftsgeschichte klar und wirkungsvoll zu erzählen.",
        },
      ],
    },
  ],
};

export const SERVICE_UI_UX_DESIGN_EXCEL: ServiceExcelType[] = [
  {
    id: "excel_1",
    title: "First Impressions Count",
    description: "Users decide in seconds. We help you win them over.",
  },
  {
    id: "excel_2",
    title: "Trust & Consistency",
    description: "Cohesive design builds credibility.",
  },
  {
    id: "excel_3",
    title: "Better Experience",
    description: "Design directly impacts business outcomes.",
  },
  {
    id: "excel_4",
    title: "Brand Recall",
    description: "Memorable visuals = more return users.",
  },
  {
    id: "excel_5",
    title: "Accessibility",
    description: "Great design is for everyone & inclusive",
  },
];

export const SERVICE_DIGITAL_MARKETING: ServiceTechStackType[] = [
  {
    id: "digitalmarketing-1",
    title: "",
    description:
      "Our team utilizes industry-leading tools to ensure the highest quality in our digital marketing efforts:",
    list: [
      "Google Analytics",
      "Facebook Ads Manager",
      "Instagram Insights",
      "Various tools for social media scheduling",
      "Creative tools for graphic design",
    ],
  },
];

export const SERVICE_DIGITAL_MARKETING_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "digital_marketing_details_1",
    heading: "Why Choose BharathaTechno for Digital Marketing?",
    content: `
      <ul>
        <li>Holistic Approach: We integrate various digital marketing strategies to create a cohesive and effective online presence for your business.</li>
        <li>Data-Driven Strategies: Our marketing campaigns are informed by data and analytics, ensuring maximum ROI and continuous improvement.</li>
        <li>Creative Excellence: Our team combines creative design with strategic thinking to produce campaigns that captivate and convert.</li>
        <li>Experienced Team: Our digital marketing experts have extensive experience in managing successful campaigns across multiple platforms.</li>
        <li>Tailored Solutions: We understand that every business is unique, and we customize our strategies to meet your specific goals and needs.</li>
      <ul>
      `,
  },
  {
    id: "digital_marketing_details_2",
    heading: "Why Digital Marketing Matters for Your Business?",
    content: `
      <ul>
        <li>Increased Brand Awareness: Reach a wider audience through targeted digital marketing efforts.</li>
        <li>Improved Customer Engagement: Build relationships with your customers through interactive content and direct communication.</li>
        <li>Higher Conversion Rates: Optimize campaigns for better conversion rates, turning leads into loyal customers.</li>
        <li>Cost-Effective Advertising: Digital marketing offers a more affordable alternative compared to traditional advertising methods.</li>
        <li>Measurable Results: Track the effectiveness of your campaigns with detailed analytics and reporting.</li>
      <ul>
      `,
  },
  {
    id: "digital_marketing_details_3",
    heading: "Our Commitment to Your Success",
    content: `<p>At BharathaTechno, we are committed to delivering digital marketing solutions that not only meet but exceed your expectations. Our focus on innovation, coupled with our technical expertise, ensures that your brand stands out in the competitive digital landscape.</p>
      `,
  },
];

export const SERVICE_DIGITAL_MARKETING_FEATURES: ServiceFeaturesType = {
  title: "Unsere Zusatzservices",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      list: [
        {
          id: "feature_1",
          title: "ICP-Forschung & Datenanreicherung",
          description:
            "Bereichern und verifizieren Sie hochintensive Leads, indem Sie Ihre idealen Kunden mit Präzision ansprechen.",
        },
        {
          id: "feature_2",
          title: "Mehrstufiger personalisierter Outreach",
          description:
            "Führen Sie personalisierte, sequenzierte Kampagnen über E-Mail und LinkedIn durch, um echte, kontextreiche Gespräche zu initiieren - keine Spam-Nachrichten.",
        },
        {
          id: "feature_3",
          title: "Terminvereinbarung",
          description:
            "Wir übernehmen den gesamten Outreach-Prozess - von der Nachrichtenübermittlung und Nachverfolgung bis hin zur Terminplanung -, sodass Ihr Team nur an vorab erwärmten, verkaufsbereiten Meetings teilnimmt.",
        },
        {
          id: "feature_4",
          title: "Leistungsüberwachung & Optimierung",
          description:
            "Verfolgen Sie Zustellung, Engagement und Konversionen, um den Outreach kontinuierlich mit einem datengestützten Ansatz zu optimieren.",
        },
        {
          id: "feature_5",
          title: "Zusatzoption: Social Media Support",
          description:
            "Stärken Sie Ihre Marke mit zusätzlichem Social Media Management und Werbung - gebündelt mit unserem Outreach zur Unterstützung des Pipeline-Wachstums.",
        },
      ],
    },
  ],
};

export const SERVICE_CLOUD_INFRASTRCUTRE: ServiceTechStackType[] = [
  {
    id: "cloudinfrastructure-1",
    title: "",
    description:
      "Unser Team nutzt eine Reihe moderner Tools und Technologien, um erstklassige CloudInfrastrukturmanagement-Dienste zu liefern:",
    list: [
      "AWS (Amazon Web Services)",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Kubernetes für Container-Orchestrierung",
      "Terraform für Infrastructure als Code",
      "Ansible für Konfigurationsmanagement",
    ],
  },
];

export const SERVICE_CLOUD_INFRASTRCUTRE_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "cloud_infrastructure_details_1",
    heading: "Warum BharathaTechno für Cloud-Infrastrukturmanagement wählen?",
    content: `
      <ul>
        <li>Expertise in führenden Cloud-Plattformen: Wir verfügen über umfangreiche Erfahrung mit großen Cloud-Service-Anbietern wie AWS, Azure und Google Cloud, um maßgeschneiderte Lösungen für Ihre spezifischen Bedürfnisse zu entwickeln.</li>
        <li>Skalierbarkeit und Flexibilität: Unsere Cloud-Lösungen sind so konzipiert, dass sie nahtlos mit Ihrem Unternehmen skalieren, sodass Sie Ressourcen bei Bedarf ohne Unterbrechung anpassen können.</li>
        <li>Erhöhte Sicherheit: Wir implementieren branchenführende Sicherheitspraktiken, um Ihre Daten und Anwendungen vor Bedrohungen zu schützen und die Einhaltung relevanter Vorschriften zu gewährleisten.</li>
        <li>Kosteneffizienz: Durch die Optimierung der Ressourcenzuweisung und den Einsatz cloud-nativer Tools helfen wir Ihnen, Betriebskosten zu senken und gleichzeitig eine hohe Leistung aufrechtzuerhalten.</li>
        <li>24/7 Support und Überwachung: Unser Team bietet rund um die Uhr Überwachung und Unterstützung, um sicherzustellen, dass Ihre Cloud-Infrastruktur stets betriebsbereit und effizient bleibt.</li>
      <ul>
      `,
  },
  {
    id: "cloud_infrastructure_details_2",
    heading: "Warum ist Cloud-Infrastruktur für Ihr Unternehmen wichtig?",
    content: `
      <ul>
        <li>Erhöhte Agilität: Passen Sie sich schnell an sich ändernde Geschäftsanforderungen mit skalierbaren Cloud-Ressourcen an.</li>
        <li>Verbesserte Zusammenarbeit: Ermöglichen Sie Remote-Arbeitskräften sicheren Zugriff auf Anwendungen und Daten von überall.</li>
        <li>Kosteneinsparungen: Reduzieren Sie Investitionsausgaben, indem Sie zu einem Pay-as-you-go-Modell wechseln.</li>
        <li>Geschäftskontinuität: Stellen Sie unterbrechungsfreie Betriebsabläufe mit robusten Disaster-Recovery-Lösungen sicher.</li>
        <li>Förderung von Innovationen: Nutzen Sie fortschrittliche Technologien wie KI/ML-Dienste, die auf Cloud-Plattformen verfügbar sind.</li>
      <ul>
      `,
  },
];

export const SERVICE_CLOUD_INFRASTRCUTRE_FEATURES: ServiceFeaturesType = {
  title: "Unsere Cloud-Infrastrukturmanagement-Dienste",
  rows: [
    {
      id: "feature_row_1",
      title: "Cloud-Strategie und Beratung",
      list: [
        {
          id: "feature_1",
          title: "Bewertung und Planung",
          description:
            "Bewerten Sie Ihre aktuelle ITInfrastruktur und entwickeln Sie eine maßgeschneiderte CloudStrategie, die mit Ihren Geschäftszielen übereinstimmt.",
        },
        {
          id: "feature_2",
          title: "Migrationsplanung",
          description:
            "Sie einen nahtlosen Migrationspfad, um Ihre Anwendungen und Daten mit minimaler Ausfallzeit in die Cloud zu verlagern.",
        },
      ],
    },
    {
      id: "feature_row_2",
      title: "Cloud-Bereitstellung und Migration",
      list: [
        {
          id: "feature_1",
          title: "Infrastrukturaufbau",
          description:
            "Richten Sie virtuelle Netzwerke, Speicherlösungen uup Rechenressourcen entsprechend Ihren Bedürfnissen ein.",
        },
        {
          id: "feature_2",
          title: "Datenmigration",
          description:
            "Übertragen Sie Ihre Daten sicher in die Cloud und gewährleisten Sie Integrität und Sicherheit.",
        },
        {
          id: "feature_3",
          title: "Anwendungs-Migration",
          description:
            "Setzen Sie Anwendungen neu auf oder passen Sie sie an, um optimale Leistung in der CloudUmgebung zu erzielen.",
        },
      ],
    },
    {
      id: "feature_row_3",
      title: "Cloud-Optimierung",
      list: [
        {
          id: "feature_1",
          title: "Ressourcenmanagement",
          description:
            "Optimieren Sie die Ressourcenzuweisung, um die Effizienz zu verbessern und Kosten zu senken.",
        },
        {
          id: "feature_2",
          title: "Leistungsoptimierung",
          description:
            "Überwachen und passen Sie Konfigurationen kontinuierlich an, um die Anwendungsleistung zu steigern.",
        },
        {
          id: "feature_3",
          title: "Kostenmanagement",
          description:
            "Implementieren Sie Kostenkontrollmaßnahmen wie Auto-Scaling und reservierte Instanzen.",
        },
      ],
    },
    {
      id: "feature_row_4",
      title: "Sicherheit und Compliance",
      list: [
        {
          id: "feature_1",
          title: "Sicherheitsarchitektur-Design",
          description:
            "Entwickeln Sie ein robustes Sicherheitsframework, das auf Ihre branchenspezifischen Anforderungen zugeschnitten ist.",
        },
        {
          id: "feature_2",
          title: "Compliance-Management",
          description:
            "Stellen Sie die Einhaltung von Industriestandards wie GDPR, HIPAA oder PCI-DSS sicher.",
        },
        {
          id: "feature_3",
          title: "Bedrohungserkennung und - reaktion:",
          description:
            "Setzen Sie fortschrittliche Überwachungstools für die Echtzeit-Bedrohungserkennung und -reaktion ein.",
        },
      ],
    },
    {
      id: "feature_row_5",
      title: "Managed Services",
      list: [
        {
          id: "feature_1",
          title: "Überwachung und Reporting",
          description:
            "Wir bieten Sie kontinuierliche Überwachung von CloudRessourcen mit detaillierten Leistungsberichten.",
        },
        {
          id: "feature_2",
          title: "Backup und Datenwiederherstellung",
          description:
            "Implementieren Sie zuverlässige Backup-Lösungen und Disaster-Recovery-Pläne zum Schutz vor Datenverlust.",
        },
        {
          id: "feature_3",
          title: "Technischer Support",
          description:
            "Wir bieten 24/7 Unterstützung bei der Fehlerbehebung unp Optimierung von CloudOperationen.",
        },
      ],
    },
  ],
};

export const SERVICE_STAFF_AGUMENTATION: ServiceTechStackType[] = [
  {
    id: "staffaugmentation-1",
    title: "MERN Stack Entwicklung",
    list: [
      "MongoDB für flexible Datenspeicherung",
      "Express.js für effiziente Backend-Entwicklung",
      "React.js für dynamische Benutzeroberflächen",
      "Node.js für skalierbare serverseitige Anwendungen",
    ],
  },
  {
    id: "fullstack-2",
    title: "MEAN Stack Entwicklung",
    list: [
      "MongoDB für effizientes Datenbankmanagement",
      "Express.js für optimierte serverseitige Logik",
      "Angular.js für leistungsstarke Front-End-Anwendungen",
      "Node.js für leistungsstarke Backend-Prozesse",
    ],
  },
];

export const SERVICE_STAFF_AGUMENTATION_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "staff_augmentation_details_1",
    heading: "Warum BharathaTechno für Personalaufstockung wählen?",
    content: `
      <ul>
        <li>Zugang zu Top-Talenten: Wir bieten Zugang zu einem Pool hochqualifizierter Entwickler, die in MERN (MongoDB, Express.js, React.js, Node.js) und MEAN (MongoDB, Express.js, Angular.js, Node.js) Stacks versiert sind.</li>
        <li>Flexibilität und Skalierbarkeit: Unsere Personalaufstockungsdienste ermöglichen es Ihnen, Ihr Team basierend auf Projektanforderungen schnell zu vergrößern oder zu verkleinern, ohne die langfristige Verpflichtung, Vollzeitmitarbeiter einzustellen.</li>
        <li>Kosteneffektive Lösungen: Reduzieren Sie die mit Rekrutierung, Schulung und Leistungen verbundenen Gemeinkosten und erhalten Sie sofortigen Zugang zu erfahrenen Fachkräften.</li>
        <li>Nahtlose Integration: Unsere Entwickler integrieren sich reibungslos in Ihr bestehendes Team und arbeiten kollaborativ, um Projekterfolg sicherzustellen.</li>
        <li>Fokus auf das Kerngeschäft: Durch die Aufstockung Ihres Personals mit unseren Experten können Sie sich auf strategische Geschäftsinitiativen konzentrieren, während wir die technische Umsetzung übernehmen.</li>
      <ul>
      `,
  },
  {
    id: "staff_augmentation_details_2",
    heading: "Unser Personalaufstockungs-Prozess",
    content: `
      <ul>
        <li>Bedarfsanalyse: Wir arbeiten eng mit Ihnen zusammen, um Ihre spezifischen Projektanforderungen und Teamdynamiken zu verstehen.</li>
        <li>Talentabgleich: Wir identifizieren und stellen Entwickler bereit, deren Fähigkeiten und Erfahrungen perfekt mit Ihren Bedürfnissen übereinstimmen.</li>
        <li>Onboarding: Unsere Entwickler integrieren sich schnell in Ihr Team und machen sich mit Ihren Prozessen und Tools vertraut.</li>
        <li>Laufende Unterstützung: Wir bieten kontinuierliche Unterstützung, um eine nahtlose Zusammenarbeit sicherzustellen und auftretende Herausforderungen zu adressieren.</li>
        <li>Leistungsüberwachung: Regelmäßige Überprüfungen und Leistungsbewertungen gewährleisten, dass unsere Entwickler Ihre Erwartungen erfüllen und effektiv zu Ihren Projekten beitragen.</li>
      <ul>
      `,
  },
];

export const SERVICE_STAFF_AGUMENTATION_FEATURES: ServiceFeaturesType = {
  title: "Warum Personalaufstockung für Ihr Unternehmen wichtig ist",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      list: [
        {
          id: "feature_1",
          title: "Beschleunigte Projektzeitpläne",
          description:
            "Bringen Sie schnell zusätzliche Expertise ein, um enge Fristen einzuhalten.",
        },
        {
          id: "feature_2",
          title: "Erhöhte Flexibilität",
          description:
            "Passen Sie sich leicht an sich ändernde Projektumfänge oder Geschäftsbedürfnisse an.",
        },
        {
          id: "feature_3",
          title: "Risikominderung",
          description:
            "Reduzieren Sie die Risiken im Zusammenhang mit der Einstellung von Vollzeitmitarbeitern in unsicheren Zeiten.",
        },
        {
          id: "feature_4",
          title: "Zugang zu spezialisierten Fähigkeiten",
          description:
            "Erhalten Sie Fachwissen in spezifischen Technologien, ohne umfangreiche Schulungen durchführen zu müssen.",
        },
        {
          id: "feature_5",
          title: "Steigerung der Produktivität",
          description:
            "Erhöhen Sie die Produktivität Ihres Teams, indem Sie erfahrene Fachleute hinzufügen, die sofort einsatzbereit sind.",
        },
      ],
    },
  ],
};

export const SERVICE_CORPORATE_TRAINING: ServiceTechStackType[] = [
  {
    id: "corporatetraining1-1",
    title: "MERN Stack Entwicklung",
    list: [
      "Einführung in den MERN Stack: Überblick über MongoDB, Express.js, React.js und Node.js.",
      "Erstellung von RESTful APIs mit Node.js und Express: Lernen Sie, skalierbare Backend-Dienste zu erstellen.",
      "•Frontend-Entwicklung mit React: Beherrschen Sie den Aufbau dynamischer Benutzeroberflächen.",
      "•Datenbankmanagement mit MongoDB: Verstehen Sie Datenmodellierung und Abfragen in MongoDB.",
    ],
  },
  {
    id: "corporatetraining1-2",
    title: "MEAN Stack Entwicklung",
    list: [
      "•Einführung in den MEAN Stack: Überblick über MongoDB, Express.js, Angular.js und Node.js.",
      "•Entwicklung von Single Page Applications mit Angular: Erstellen Sie responsive und interaktive Webanwendungen. ",
      "Serverseitige Programmierung mit Node.js: Bauen Sie effiziente serverseitige Anwendungen.",
      "•Integration von Angular mit Express und MongoDB: Lernen Sie, Frontend und Backend nahtlos zu verbinden.",
    ],
  },
  {
    id: "corporatetraining1-3",
    title: "JavaScript-Master",
    list: [
      "JavaScript-Grundlagen: Abdeckung von Variablen, Funktionen, Objekten und mehr.",
      "Fortgeschrittene JavaScriptKonzepte: Eintauchen in Closures, Promises, async/await und ES6+ Funktionen. ",
      "•Überblick über Front-EndFrameworks: Einführung in beliebte Frameworks wie React und Angular.",
      "•Best Practices in der JavaScriptEntwicklung: Lernen von Codierungsstandards und Techniken zur Leistungsoptimierung.",
    ],
  },
];

export const SERVICE_CORPORATE_TRAINING_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "corporate_training_details_1",
    heading: "Warum BharathaTechno für Unternehmensschulungen wählen?",
    content: `
      <ul>
        <li>Experten-Trainer: Unsere Trainer sind Branchenexperten mit umfangreicher Erfahrung in der MERN- und MEANStack-Entwicklung. Sie bringen praxisnahe Einblicke und praktisches Wissen in die Schulungssitzungen ein.</li>
        <li>Angepasste Schulungsprogramme: Wir passen unsere Schulungsmodule an Ihre spezifischen Geschäftsbedürfnisseund Fähigkeitslücken an, um maximale Relevanz und Wirkung zu gewährleisten.</li>
        <li>Praktisches Lernen: Unsere Programme legen großen Wert auf praktisches, praxisorientiertes Lernen, das es den Teilnehmern ermöglicht, neue Fähigkeiten sofort in ihrer Arbeitsumgebung anzuwenden.</li>
        <li>Flexible Lieferoptionen: Wir bieten sowohl Vor-Ort- als auch virtuelle Schulungssitzungen an, um den Zeitplan und die Standortpräferenzen Ihres Teams zu berücksichtigen.</li>
        <li>Umfassender Lehrplan: Unsere Schulungen decken ein breites Themenspektrum ab, von den grundlegenden JavaScript-Grundlagen bis hin zu fortgeschrittenen Full-Stack-Entwicklungstechniken.</li>
      <ul>
      `,
  },
];

export const SERVICE_CORPORATE_TRAINING_FEATURES: ServiceFeaturesType = {
  title: "Vorteile von Unternehmensschulungen",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      list: [
        {
          id: "feature_1",
          title: "Steigerung der Teamproduktivität",
          description:
            "Statten Sie Ihr Team mit den neuesten Fähigkeiten aus, um Effizienz und Output zu verbessern.",
        },
        {
          id: "feature_2",
          title: "Erhöhte Mitarbeiterzufriedenheit",
          description:
            "Investitionen in die Mitarbeiterentwicklung führen zu höherer Arbeitszufriedenheit und Bindungsraten.",
        },
        {
          id: "feature_3",
          title: "Wettbewerbsvorteil",
          description:
            "Bleiben Sie durch die Befähigung Ihres Teams mit modernen Technologiefähigkeiten der Branche einen Schritt voraus.",
        },
        {
          id: "feature_4",
          title: "Verbesserte Projektergebnisse",
          description:
            "Besser ausgebildete Teams liefern qualitativ hochwertigere Projekte pünktlich und im Budgetrahmen.",
        },
        {
          id: "feature_5",
          title: "Förderung von Innovation",
          description:
            "Ermutigen Sie eine Kultur des kontinuierlichen Lernens und der Innovation innerhalb Ihrer Organisation.",
        },
      ],
    },
  ],
};

export const MERN_STACK_BLOG_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "mern_stack_details_1",
    heading: "Is a MERN Stack developer in demand?",
    content: `<p>Yes, MERN stack developers are in high demand in India. Companies, from startups to large enterprises, actively seek skilled professionals for dynamic web applications.
</p>
      `,
  },
  {
    id: "mern_stack_details_2",
    heading: "What is the entry-level salary of the MERN stack?",
    content: `<p>Entry-level MERN stack developer salaries in India typically vary by location, company, and individual skill set.</p>
      `,
  },
  {
    id: "mern_stack_details_3",
    heading: "Will AI replace MERN stack developers?",
    content: `<p>
       AI will likely augment MERN stack developers, automating routine tasks and enhancing capabilities like content generation. It's more about collaboration than replacement.
      </p>
      `,
  },
  {
    id: "mern_stack_details_4",
    heading: "Which is best, MERN or Django?",
    content: `<p>
        Neither MERN nor Django is universally "best." MERN is flexible for SPAs and real-time apps. Django is robust and great for rapid development and data-driven projects.
      </p>
      `,
  },
  {
    id: "full_stack_details_5",
    heading: "Is a full-stack developer future-proof?",
    content: `<p>
        Yes, their versatility across front-end and back-end, adaptability to new technologies, and problem-solving skills ensure continued relevance.
      </p>
      `,
  },
  {
    id: "full_stack_details_6",
    heading: "Which is the best web development company near me?",
    content: `<p>
        BharathaTechno IT Private Limited is a MERN stack web development company located at Kondhwa, Deutschland, Maharashtra. They specialize in MERN and MEAN full-stack development.
      </p>
      `,
  },
  {
    id: "full_stack_details_7",
    heading: "How to be a MERN stack developer?",
    content: `<p>
        Master JavaScript, HTML, and CSS. Learn React (frontend), Node.js/Express.js (backend), and MongoDB (database). Build projects showcasing and keep evolving.
      </p>
      `,
  },
];

export const NEXTJS_BLOG_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "mern_stack_details_1",
    heading: "Can you make a website with Next.js? ",
    content: `<p>Yes, Next.js is ideal for building fast, SEO-friendly websites and web applications</p>
      `,
  },
  {
    id: "mern_stack_details_2",
    heading: "How do I run a Next.js website? ",
    content: `<p>You typically run a Next.js website locally using npm run dev or yarn dev from your project directory.</p>
      `,
  },
  {
    id: "mern_stack_details_3",
    heading: "Is Next.js a backend or frontend? ",
    content: `<p>
       Next.js is primarily a frontend React framework but provides full-stack capabilities with API Routes for backend logic.
      </p>
      `,
  },
  {
    id: "mern_stack_details_4",
    heading: "Is Next.js better than WordPress?",
    content: `<p>
        They serve different purposes. Next.js offers superior performance, scalability, and customizability, while WordPress is simpler for content sites without deep technical needs.
      </p>
      `,
  },
  {
    id: "full_stack_details_5",
    heading: "Is Next.js faster than React.js?",
    content: `<p>
        Next.js often provides faster initial page loads and better performance than plain React due to built-in optimizations like SSR and SSG.
      </p>
      `,
  },
  {
    id: "full_stack_details_6",
    heading: "How much traffic can Next.js handle? ",
    content: `<p>
        Next.js can handle massive traffic, especially with SSG or efficient serverless deployments, scaling to millions of users for web applications.
      </p>
      `,
  },
  {
    id: "full_stack_details_7",
    heading: "Next.js vs. NestJS: What's the Difference for Your Project?",
    content: `<p>
        Next.js is a React framework for building fast, SEO-friendly web applications (frontend) and optimizing performance and user experience. NestJS is a backend framework for Node.js, designed for scalable APIs and server-side software solutions. They serve different, often complementary, roles in web development.
      </p>
      `,
  },
];

export const REACT_NATIVE_BLOG_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "mern_stack_details_1",
    heading:
      "Is React Native suitable for both startups and large enterprises?",
    content: `<p>Yes. It's ideal for startups needing fast, cost-effective products as well as for enterprises requiring scalable, high-performance applications.
</p>
      `,
  },
  {
    id: "mern_stack_details_2",
    heading: "What is React Native, and why should my business consider it?",
    content: `<p>React Native builds native iOS and Android apps from a single JavaScript codebase. Businesses consider it for cost savings, faster development, and strong performance, enabling efficient cross-platform mobile solutions.</p>
      `,
  },
  {
    id: "mern_stack_details_3",
    heading: "What are the new features of React Native?",
    content: `<p>
       Recent features that have been added to the Architecture for better performance include React 19 integration, improved styling, and enhanced tooling for Android, leading to smoother apps.
      </p>
      `,
  },
  {
    id: "mern_stack_details_4",
    heading: "Is React Native a frontend or backend?",
    content: `<p>
        They serve different purposes. Next.js offers superior performance, scalability, and customizability, while WordPress is simpler for content sites without deep technical needs.
      </p>
      `,
  },
  {
    id: "full_stack_details_5",
    heading: "Is Next.js faster than React.js?",
    content: `<p>
        React Native is strictly a frontend framework. It's used to build the user interface and logic for mobile applications on iOS and Android.
      </p>
      `,
  },
  {
    id: "full_stack_details_6",
    heading: "How efficient is React Native?",
    content: `<p>
        React Native is highly efficient due to its code reusability and native component rendering. Recent advancements like the new Architecture and Hermes engine deliver near-native performance, suitable for complex mobile applications.
      </p>
      `,
  },
  {
    id: "full_stack_details_7",
    heading: "How much does React Native app development cost?",
    content: `<p>
        Costs vary based on complexity, features, and team location, but it is generally considered to be more cost-effective than building separate native apps.
      </p>
      `,
  },
  {
    id: "full_stack_details_8",
    heading:
      "What is the typical timeline for a React Native app development project?",
    content: `<p>
        Timelines are generally shorter than native development. Launch can take around 2-4 months due to code reusability and efficient tools like Hot Reloading.
      </p>
      `,
  },
  {
    id: "full_stack_details_9",
    heading:
      "Why choose an offshore React Native development company like BharathaTechno IT Pvt Ltd? ",
    content: `<p>
        Offshore partners like us (BharathaTechno IT Pvt Ltd in India) offer competitive costs, access to a vast talent pool, potentially faster development due to time zone advantages, and end-to-end service.
      </p>
      `,
  },
  {
    id: "full_stack_details_10",
    heading: "What kind of post-launch support and maintenance do you offer? ",
    content: `<p>
        We provide a comprehensive set of post-launch support, including bug fixes, security updates, feature enhancements, and continuous performance monitoring.
      </p>
      `,
  },
];

export const PRODUCT_BFIT: ServiceFeaturesType = {
  title: "Tech Stack",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      description:
        "Dieser Technologie-Stack ermöglicht es der Plattform, schnell zu laden, flexibel mit steigender Nachfrage zu skalieren und sichere Benutzerdaten geräteübergreifend zu verwalten.",
      list: [
        {
          id: "fullstack-1",
          title: "Frontend",
          description: "Next.js + TypeScript OR React.Js",
        },
        {
          id: "fullstack-2",
          title: "Backend",
          description: "Node.Js, Express.Js",
        },
        {
          id: "fullstack-3",
          title: "Database",
          description: "Mongo DB",
        },
        {
          id: "fullstack-4",
          title: "Validation",
          description: "Zod (Form validation)",
        },
        {
          id: "fullstack-5",
          title: "Payments & Logistics",
          description: "India: Razorpay, Global: Stripe, etc.",
        },
      ],
    },
  ],
};

export const PRODUCT_BFIT_EXCEL: ServiceExcelType[] = [
  {
    id: "excel_1",
    title: "Mehr Registrierungen von Kund:innen",
    description: "",
  },
  {
    id: "excel_2",
    title: "Gesteigerter Umsatz",
    description: "",
  },
  {
    id: "excel_3",
    title: "Zeiteinsparung",
    description: "",
  },
  {
    id: "excel_4",
    title: "Optimierte User Experience",
    description: "",
  },
  {
    id: "excel_5",
    title: "Skalierbares Geschäftsmodell",
    description: "",
  },
  {
    id: "excel_6",
    title: "Gesteigerte Kundenzufriedenheit",
    description: "",
  },
];

export const BFIT_CASE_STUDY: ProductCaseStudy = {
  title: "Shred-n-Shape",
  client: "Shred-n-Shape",
  industry: "Fitness & Wellness",
  use: " Verkauf von Trainings- und Ernährungsprogrammen über eine gebrandete Online-Plattform, unterstützt durch eine auf die Bedürfnisse der Trainer:innen zugeschnittene Fitness-Software.",
  before:
    "Das Team von Shred-n-Shape verwaltete Kundendaten zunächst mit Spreadsheets, was zu Unübersichtlichkeit und Ineffizienz führte. Die Personalisierung von Trainingsplänen und die Fortschrittsverfolgung waren zeitaufwendig und inkonsistent. Kommunikation und Berichtserstellung erfolgten vollständig manuell. Mit steigender Kundenzahl stieß Excel an seine Kapazitätsgrenzen, wodurch das Skalieren von Shred-n-Shape und die effiziente Bereitstellung von Remote-Personal-Training stark eingeschränkt wurden.",
  after:
    "Mit B-Fit läuft alles zentral und effizient. Kundendaten sind gebündelt und leicht zu verwalten, Fortschritte und Reports werden automatisch erstellt. Trainingspläne lassen sich einfach personalisieren und aktualisieren, während die Kommunikation reibungslos funktioniert. Die Plattform ermöglicht Wachstum, optimiert Abläufe und sorgt für einbesseres Kundenerlebnis - mit klaren Zielen, schnellen Updates undsmarter Einbindung über unsere integrierte Personal-Training-Software.",
};

export const PRODUCT_BCHEF: ServiceFeaturesType = {
  title: "Tech Stack",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      description:
        "Dieser Tech-Stack ermöglicht es der Plattform, schnell zu laden, sich flexibel an steigende Bestellvolumen anzupassen und sowohl Administratoren als auch Kund:innen ein reibungsloses Nutzungserlebnis zu bieten.",
      list: [
        {
          id: "fullstack-1",
          title: "Frontend",
          description: "Next.js + TypeScript OR React.Js",
        },
        {
          id: "fullstack-2",
          title: "Backend",
          description: "Node.Js, Express.Js",
        },
        {
          id: "fullstack-3",
          title: "Database",
          description: "Mongo DB",
        },
        {
          id: "fullstack-4",
          title: "Validation",
          description: "Zod (Form validation)",
        },
        {
          id: "fullstack-5",
          title: "Payments & Logistics",
          description: "India: Razorpay, Global: Stripe, etc.",
        },
      ],
    },
  ],
};

export const BCHEF_CASE_STUDY: ProductCaseStudy = {
  title: "Nikita's Curry Corner",
  client: "Nikita's Curry Corner",
  industry: "Food & Beverage",
  use: " Home-Chef-Liefersystem für Mahlzeiten",
  before:
    "Nikita's Curry Corner stand für köstliche, hausgemachte Sindhi-Gerichte, die von treuen Kunden geschätzt wurden. Das Food-Business war jedoch stark von Drittanbieter-Apps wie cookie.com abhängig - Plattformen, die nicht nur hohe Provisionen verlangten, sondern auch die Kontrolle über Branding und das Kundenerlebnis einschränkten. Die Betreiber hatten Schwierigkeiten, ihre Menüs individuell anzupassen, direkt mit Kunden in Kontakt zu treten und Inhalte nach eigenen Vorstellungen zu verwalten. Außerdem nahm die Verwaltung externer Listings viel Zeit in Anspruch, die sie lieber in die Zubereitung ihrer Speisen investiert hätten. Diese Einschränkungen erschwerten ein effektives Wachstum und führten zu zusätzlichem finanziellen Druck, besonders in der stark umkämpften Cloud-Kitchen-Start-up-Szene.",
  after:
    "Wir haben eine vollständig gebrandete FoodOrdering-Website mit unserer maßgeschneiderten Food-Delivery-Software implementiert. Täglich konnte das Menü im Admin-Panel aktualisiert werden. Kunden hatten die Möglichkeit, die Verfügbarkeit zu prüfen, Bestellungen aufzugeben und eine Lieferzeit auszuwählen. Das Admin-Dashboard erfasste alle wichtigen Daten: Bestellungen, Zahlungen und Kundendaten. Das Team konnte entweder lokale Lieferungen durchführen oder eine Abholoption anbieten. Promo-Codes erwiesen sich als hervorragendes Mittel, um Wiederholungsgeschäfte zu fördern und treue Kunden zu belohnen.",
};

export const PRODUCT_BCHEF_EXCEL: ServiceExcelType[] = [
  {
    id: "excel_1",
    title: "",
    description:
      "ezieltes Online-Marketing steigerte die direkten Food-Bestellungen und lenkte gezielt Besucher auf die Website",
  },
  {
    id: "excel_2",
    title: "",
    description:
      "Provisionen entfallen - maximale Profitabilität bei voller Kontrolle über die Preise",
  },
  {
    id: "excel_3",
    title: "",
    description:
      "Erhöhte Kundenzufriedenheit durch einfache Navigation, flexible Lieferoptionen und sicheren Checkout",
  },
  {
    id: "excel_4",
    title: "",
    description:
      "Langfristige Kundentreue durch reibungslose Abläufe und persönliche Betreuung gefördert",
  },
];

export const BSTORE_CASE_STUDY: ProductCaseStudy = {
  title: "Trendy Threads By Riya",
  client: "Trendy Threads By Riya",
  industry: "Fashion & Lifestyle",
  use: "Eine gebrandete E-Commerce-Plattform, die ein breites Sortiment an Damenbekleidung und Accessoires bietet, darunter Ethno-, Fusion- und moderne Styles.",
  before:
    "Vor dem Launch einer unabhängigen Plattform sah sich das Unternehmen wachsenden Herausforderungen auf Drittanbieter-Marktplätzen gegenüber. Verluste durch beschädigte oder retournierte Ware, manuelle Bestellabwicklung und nicht nachverfolgbare Lieferungen führten zu erheblichen Ineffizienzen. Ohne eigene Website fehlten eine konsistente Markenidentität und der direkte Draht zu den Kund:innen. Der Verkauf über fremde Plattformen schränkte zudem Vertrauen und Kontrolle ein - und erschwerte den Aufbau einer zuverlässigen, langfristigen Präsenz im Fashion-E-Commerce-Markt.",
  after:
    "Nach dem Launch gewann das Unternehmen die volle Kontrolle über Abläufe, Marke und Kundenerlebnis. Bestellungen sind nun vollständig nachverfolgbar, Retouren effizient verwaltbarund manuelle Prozesse wurden durch ein effizientes System ersetzt. Eine dedizierte Fashion-E-Commerce-Web-App schafft Vertrauen, präsentiert die Marke konsistent und ermöglicht den direkten Dialog mit Kund:innen. Mit vollständiger Kontrolle über Produkte, Preise und Promotions ist das Unternehmen optimal für nachhaltiges Wachstum und Unabhängigkeit durch eine leistungsstarke E-Commerce-Plattform aufgestellt.",
};

export const PRODUCT_BSTORE: ServiceFeaturesType = {
  title: "Tech Stack",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      description:
        "Dieser Tech-Stack ermöglicht es der Plattform, schnell zu laden, sich flexibel an steigendes Bestellvolumen anzupassen und sowohl für Administratoren als auch für Endkunden ein reibungsloses Nutzungserlebnis zu bieten.",
      list: [
        {
          id: "fullstack-1",
          title: "Frontend",
          description: "Next.js + TypeScript OR React.Js",
        },
        {
          id: "fullstack-2",
          title: "Backend",
          description: "Node.Js, Express.Js",
        },
        {
          id: "fullstack-3",
          title: "Database",
          description: "Mongo DB",
        },
        {
          id: "fullstack-4",
          title: "Validation",
          description: "Zod (Form validation)",
        },
        {
          id: "fullstack-5",
          title: "Payments & Logistics",
          description: "India: Razorpay, Global: Stripe, etc.",
        },
      ],
    },
  ],
};

export const PRODUCT_BSTORE_EXCEL: ServiceExcelType[] = [
  {
    id: "excel_1",
    title: "",
    description: "Weniger Verluste durch Retouren & optimierte Prozesse",
  },
  {
    id: "excel_2",
    title: "",
    description: "Steigerung von Kundenzufriedenheit und -bindung",
  },
  {
    id: "excel_3",
    title: "",
    description: "Gefestigte Markenidentität mit voller Kontrolle",
  },
  {
    id: "excel_4",
    title: "",
    description:
      "Effiziente, wachstumsfähige Abläufe laufen nun komplett über die Plattforml",
  },
];

export const SERVICE_TECHNICAL_DOCUMENTATION_DETAILS: ServiceTypeDetailsType[] =
  [
    {
      id: "ui_design_details_1",
      heading: "Warum BharathaTechno für technische Dokumentation wählen?",
      content: `<p>Wir dokumentieren nicht nur - wir verstehen, was gebaut wird.</p>
    <p>Unser Team arbeitet eng mit Entwicklern, Projektleitern und Stakeholdern zusammen, um sicherzustellen, dass dieDokumentation reale Anwendungsfälle und tatsächliche technische Tiefe widerspiegelt. Wir haben mit
Unternehmen zusammengearbeitet, die Softwaredienstleistungen und Lösungen, Full-Stack-Entwicklungsdienste
und ERP-Softwarelösungen anbieten, sodass wir wissen, wie man Komplexität in Klarheit übersetzt - ohne zu
vereinfachen.
</p>
    <p><strong>Was Sie erwarten können:</strong></p>  
    <ul>
        <li>Klare, gut organisierte Dokumente ohne unnötigen Ballast.</li>
        <li>Konsistenter Ton, abgestimmt auf Ihr Produkt und Ihre Marke.</li>
        <li>Schnelle, zuverlässige Lieferung mit minimalem Hin und Her.</li>
        <li>Fähigkeit, Dokumente für alles zu erstellen – von codeintensiven Plattformen bis hin zu benutzerorientierten Tools.</li>
      <ul>
      `,
    },
    {
      id: "ui_design_details_2",
      heading: "Unsere Leistungen",
      content: `
      <ul>
        <li>Technisches Schreiben - Von Benutzerhandbüchern bis zu API-Referenzen</li>
        <li>Informationsarchitektur - Saubere Layouts, die für echte Nutzer Sinn machen</li>
        <li>SEO-freundliche Dokumentation - Für Online-Hilfecenter und Webanleitungen</li>
        <li>Plattformübergreifende Unterstützung - Abdeckung von Frontend- und Backend-Entwicklung, mobilen Apps und mehr</li>
      <ul>
      <p>Wir sind auch in der Lage, stack-spezifische Teams zu unterstützen - einschließlich MERN-StackEntwicklungsunternehmen oder mobilen Produktteams, die mobile App-Entwicklungsdienste anbieten</p>
      `,
    },
  ];

export const SERVICE_TECHNICAL_DOCUMENTATION_FEATURES: ServiceExcelType[] = [
  {
    id: "feature_1",
    title: "Produktbeschreibungen und Funktionsübersichten",
    description: "",
  },
  {
    id: "feature_2",
    title: "Benutzerhandbücher und Administratorhandbücher",
    description: "",
  },
  {
    id: "feature_3",
    title: "Business- und Produktanforderungsdokumente (BRDs & PRDs)",
    description: "",
  },
  {
    id: "feature_4",
    title: "SOPs und interne Arbeitsabläufe",
    description: "",
  },
  {
    id: "feature_5",
    title:
      "Technische Übersichten für Kunden, Anbieter oder interne Schulungen",
    description: "",
  },
];

export const OFFICE_LOCATION: OfficeLocationType[] = [
  {
    country: "India",
    flag: "🇮🇳",
    address:
      "Sunshree Woods, Office number, F28 to 32, NIBM Rd, Kondhwa, Deutschland, Maharashtra 411048",
    email: "info@bharathatechno.com",
    phone: "+91-932-563-6885",
    mapPosition: "left",
    city: "Deutschland",
    embedMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.6486359819146!2d73.91437727592636!3d18.454255771195115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eba952eb29fd%3A0x1fd1cfdcdf9f0974!2sBharathaTechno%20IT%20Private%20Limited!5e0!3m2!1sen!2sin!4v1740480008318!5m2!1sen!2sin",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    address: "Bruckwiesenweg 2, 70734 Fellbach, Germany",
    email: "kourosh.bagherian@bharathatechno.de",
    phone: "+91-932-563-6885",
    mapPosition: "right",
    city: "Germany",
    embedMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.3681314023916!2d9.276763576753924!3d48.81303710389667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c5e941bef899%3A0xf3c8bbb2ac3c21b8!2sBruckwiesenweg%202%2C%2070734%20Fellbach%2C%20Germany!5e0!3m2!1sen!2sin!4v1758112154768!5m2!1sen!2sin",
  },
];
