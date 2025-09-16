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
    title: "Full Stack Development",
    description: "Web + Mobile App Development",
    icon: <CodeXml className="service_icon" />,
    link: "/offerings/services/full-stack-development",
  },
  {
    id: 1,
    title: "Custom ERP Solutions",
    description: "Tailored Enterprise Resource Planning",
    icon: <Database className="service_icon" />,
    link: "/offerings/services/custom-erp-solutions",
  },
  {
    id: 2,
    title: "UI/UX & Brand Design",
    description: "User Experience, Interaction & Design",
    icon: <PencilRuler className="service_icon" />,
    link: "/offerings/services/ui-ux-brand-design",
  },
  {
    id: 3,
    title: "Technical Documentation",
    description: "Clear and Concise Documentation",
    icon: <FileText className="service_icon" />,
    link: "/offerings/services/technical-documentation",
  },
  {
    id: 4,
    title: "Performance Marketing",
    description: "Strategic Digital Campaigns",
    icon: <Megaphone className="service_icon" />,
    link: "/offerings/services/performance-marketing",
  },
  {
    id: 5,
    title: "Cloud Infrastructure Management",
    description: "Scalable Cloud Solutions",
    icon: <Cloud className="service_icon" />,
    link: "/offerings/services/cloud-infrastructure-management",
  },
  {
    id: 6,
    title: "Staff Augmentation",
    description: "Expert IT Professionals",
    icon: <UsersRound className="service_icon" />,
    link: "/offerings/services/staff-augmentation",
  },
  {
    id: 7,
    title: "Corporate Training",
    description: "Comprehensive IT Training Programs",
    icon: <Monitor className="service_icon" />,
    link: "/offerings/services/corporate-training",
  },
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
    title: "MERN Stack Development",
    list: [
      "MongoDB for flexible, JSON-like data storage",
      "ExpressJs for robust backend framework",
      "React for dynamic and responsive user interfaces",
      "NodeJs for scalable server-side operations",
    ],
  },
  {
    id: "fullstack-2",
    title: "MEAN Stack Development",
    list: [
      "MongoDB for efficient database management",
      "ExpressJs for streamlined backend development",
      "Angular for powerful front-end applications",
      "NodeJs for high-performance server environments",
    ],
  },
];

export const SERVICE_FULL_STACK_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "full_stack_details_1",
    heading: "Why choose MERN & MEAN Stack?",
    content: `<p>Both MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js) are industry-leading stacks built for modern web application development:</p>
      <ul>
        <li>Full JavaScript Environment: Utilize a single language across the entire stack, streamlining development and reducing complexity.</li>
        <li>Scalability: Built to handle growing and evolving applications with ease.</li>
        <li>Cost-Effective: Open-source technologies reduce licensing costs and provide access to a vast ecosystem of tools and libraries.</li>
        <li>Flexibility: Adaptable to various project requirements and easily customizable.</li>
        <li>High Performance: Optimized for speed and efficiency in both front-end and back-end operations.</li>
      <ul>
      `,
  },
  {
    id: "full_stack_details_2",
    heading: "Why choose BharathaTechno for Web App Development?",
    content: `<p>Expertise in Modern Technologies: Our team excels in MERN (MongoDB, ExpressJs, ReactJs, NodeJs) and MEAN (MongoDB, ExpressJs, Angular, NodeJs) stack development, ensuring your web application is built using the latest and most efficient technologies.</p>
      <ul>
        <li>Full-Stack JavaScript Environment: We utilize a single language across the entire stack, streamlining development and reducing complexity.</li>
        <li>Customized Solutions: We understand that every project is unique. Our team works closely with you to grasp your vision and turn it into reality, delivering tailored solutions that align precisely with your business objectives.</li>
        <li>Scalability Focus: We build applications that can grow with your business, handling increased traffic and data with ease.</li>
        <li>Agile Development Process: Our iterative approach ensures transparency and allows for flexibility throughout the project, enabling you to provide feedback and stay involved in the development process.</li>
      <ul>
      `,
  },
  {
    id: "full_stack_details_3",
    heading: "Why choose BharathaTechno for Mobile App Development?",
    content: `<ul>
        <li>Cross-Platform Expertise: We excel in developing apps for both iOS and Android platforms, ensuring your business reaches the widest possible audience.</li>
        <li>React Native Proficiency: Our team leverages the power of React Native to build high-performance, native-like applications with a single codebase, reducing development time and costs.</li>
        <li>Full-Stack Capabilities: With our MERN and MEAN stack expertise, we provide end-to-end solutions from backend development to front-end design.</li>
        <li>User-Centric Design: Our UI/UX designers create intuitive and visually appealing interfaces that enhance user engagement and satisfaction.</li>
        <li>Scalable Solutions: We build applications that can grow with your business, handling increased user loads and data with ease.</li>
        <li>Agile Development Process: Our iterative approach ensures transparency and allows for flexibility throughout the project, enabling you to provide feedback and stay involved in the development process.</li>
      <ul>
      `,
  },
  {
    id: "full_stack_details_4",
    heading: "Our Full-stack development process",
    content: `<ul>
        <li><strong>Discovery and Planning</strong>: We work closely with you to understand your project needs, target audience, and business goals.</li>
        <li><strong>UI/UX Design</strong>: Our designers create wireframes and prototypes to visualize the product's flow and functionality.</li>
        <li><strong>Development</strong>: We implement your solution using latest stack technologies such as React Native or native technologies, based on project requirements.</li>
        <li><strong>Testing and Quality Assurance</strong>: Rigorous testing across multiple devices and operating systems ensures your product meets the highest quality standards.</li>
        <li><strong>Deployment</strong>: We handle the submission process to your chosen platforms or app stores and ensure smooth deployment.</li>
        <li><strong>Maintenance and Support</strong>: Ongoing support to keep your product up-to-date and performing optimally.</li>
      <ul>
      `,
  },
  {
    id: "full_stack_details_5",
    heading: "Types of Web-application we excel in",
    content: `<ul>
        <li><strong>Single Page Applications (SPAs)</strong>: Leverage the power of React or Angular to create smooth, fast-loading single-page applications that enhance user experience.</li>
        <li><strong>Progressive Web Apps (PWAs)</strong>: Develop web applications that offer a native app-like experience, complete with offline functionality and push notifications.</li>
        <li><strong>E-commerce Platforms</strong>: Create feature-rich e-commerce solutions with robust backend management and intuitive user interfaces.</li>
        <li><strong>Customer Relationship Management (CRM) Systems</strong>: Develop custom CRM platforms to streamline your business processes and enhance customer interactions.</li>
        <li><strong>Enterprise Resource Planning (ERP) Systems</strong>: Build tailored ERP solutions that integrate various business processes and boost overall efficiency.</li>
        <li><strong>Data Analytics Tools</strong>: Craft sophisticated data visualization and analysis tools to help you make informed business decisions.</li>
      <ul>
      `,
  },
  {
    id: "full_stack_details_6",
    heading: "Types of  mobile application we excel in",
    content: `<ul>
        <li><strong>E-commerce Apps</strong>: Create feature-rich shopping experiences for your customers.</li>
        <li><strong>Social Networking Apps</strong>: Build engaging platforms for community interaction.</li>
        <li><strong>Fitness and Health Apps</strong>: Develop apps that help users track their health and fitness goals.</li>
        <li><strong>Enterprise Mobile Solutions</strong>: Create custom apps to streamline your business processes.</li>
        <li><strong>Educational Apps</strong>: Develop interactive learning experiences for students of all ages.</li>
        <li><strong>Entertainment and Gaming Apps</strong>: Create engaging and immersive mobile games and entertainment apps.</li>
      <ul>
      `,
  },
];

export const SERVICE_FULL_STACK_FEATURES: ServiceFeaturesType = {
  title: "Our sub-services",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      list: [
        {
          id: "feature_1",
          title: "Single Page Applications (SPAs)",
          description:
            "Leverage the power of React or Angular to create smooth, fast-loading single-page applications that enhance user experience.",
        },
        {
          id: "feature_2",
          title: "RESTful API Development",
          description:
            "Build secure and efficient APIs to connect your front-end with backend services seamlessly.",
        },
        {
          id: "feature_3",
          title: "Real-Time Application Development",
          description:
            "Utilize the full potential of Node.js to create real-time applications like chat systems or live updates.",
        },
        {
          id: "feature_4",
          title: "Custom Web App Development",
          description:
            "We craft bespoke web applications tailored to your specific business requirements, ensuring scalability and performance.",
        },
        {
          id: "feature_5",
          title: "E-commerce Solutions",
          description:
            "Develop feature-rich e-commerce platforms with robust backend management and intuitive user interfaces.",
        },
        {
          id: "feature_6",
          title: "Enterprise Resource Planning (ERP) Systems",
          description:
            "Create custom ERP solutions that streamline your business processes and boost productivity.",
        },
        {
          id: "feature_7",
          title: "Migration and Upgrade Services",
          description:
            "Transition your existing applications to MERN or MEAN stack, unlocking improved performance and scalability.",
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
    title: "Database",
    description: "MongoDB, MySQL, PostgreSQL, Firebase",
  },
  {
    id: "excel_7",
    title: "Cloud Services",
    description: "AWS, Azure, Google, Cloud, DigitalOcen",
  },
  {
    id: "excel_8",
    title: "Additional Tools",
    description: "Redux, GraphQL",
  },
];

export const SERVICE_CUSTOM_ERP: ServiceTechStackType[] = [
  {
    id: "custom_erp_1",
    title: "",
    description:
      "Our expert developers leverage a range of modern technologies to build robust and efficient ERP solutions:",
    list: [
      "Frontend: React.js, Angular",
      "Backend: Node.js, Python",
      "Databases: MongoDB, MySQL, PostgreSQL",
      "Cloud Platforms: AWS, Azure, Google Cloud, DigitalOcean",
    ],
  },
];

export const SERVICE_CUSTOM_ERP_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "custom_erp_details_1",
    heading: "Why Choose Custom ERP?",
    content: `
      <ul>
        <li>Tailored Functionality: Our custom ERP solutions are built to address your specific business requirements, ensuring you have exactly the features you need without unnecessary complexity.</li>
        <li>Seamless Integration: We design your ERP system to integrate smoothly with your existing software ecosystem, enhancing data flow and operational coherence.</li>
        <li>Scalability: As your business grows, your custom ERP grows with you. We build scalable solutions that can adapt to your evolving needs.</li>
        <li>Enhanced Security: We implement robust security measures tailored to your industry standards and compliance requirements.</li>
        <li>Cost-Effective in the Long Run: While initial investment may be higher, custom ERPs often prove more cost-effective over time due to their perfect fit with your operations.</li>
      <ul>
      `,
  },
  {
    id: "custom_erp_details_2",
    heading: "Why choose BharathaTechno for Your Custom ERP Solution?",
    content: `
      <ul>
        <li>Expertise: Our team has years of experience in developing custom ERP solutions across various industries.</li>
        <li>Client-Centric Approach: We work closely with you at every stage to ensure the solution meets your exact needs.</li>
        <li>Cutting-Edge Technology: We utilize the latest technologies to build future-proof ERP systems.</li>
        <li>Ongoing Support: Our relationship doesn't end at deployment. We provide continuous support and updates.</li>
        <li>Cost-Effective: We deliver high-quality solutions that provide excellent return on investment.</li>
      <ul>
      `,
  },
  {
    id: "custom_erp_details_3",
    heading: "Our Custom ERP Development Process",
    content: `<ul>
        <li>Business Analysis: We start by thoroughly understanding your business processes, challenges, and goals.</li>
        <li>System Design: Our team creates a comprehensive system design that maps out all modules and functionalities.</li>
        <li>Development: Using cutting-edge technologies, we build your custom ERP solution from the ground up.</li>
        <li>Testing: Rigorous testing ensures your ERP system is bug-free and performs optimally.</li>
        <li>Implementation: We carefully roll out your new ERP system, ensuring minimal disruption to your operations.</li>
        <li>Training and Support: We provide comprehensive training to your team and offer ongoing support to ensure smooth adoption.</li>
      <ul>
      `,
  },
];

export const SERVICE_CUSTOM_ERP_FEATURES: ServiceFeaturesType = {
  title: "Key Features",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      list: [
        {
          id: "feature_1",
          title: "Financial Management",
          description:
            "Streamline accounting processes, budgeting, and financial reporting.",
        },
        {
          id: "feature_2",
          title: "Human Resources Management",
          description:
            "Efficiently manage employee data, payroll, and performance evaluations.",
        },
        {
          id: "feature_3",
          title: "Inventory Management",
          description:
            "Real-time tracking and optimization of inventory levels.",
        },
        {
          id: "feature_4",
          title: "Customer Relationship Management",
          description: "Enhance customer interactions and sales processes.",
        },
        {
          id: "feature_5",
          title: "Supply Chain Management",
          description:
            "Optimize your supply chain for improved efficiency and cost savings.",
        },
        {
          id: "feature_6",
          title: "Business Intelligence",
          description:
            "Gain actionable insights with advanced reporting and analytics tools.",
        },
        {
          id: "feature_7",
          title: "Mobile Accessibility",
          description:
            "Access your ERP system on-the-go with mobile-friendly interfaces.",
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
    heading: "Why choose BharathaTechno for UI/UX & Brand Design?",
    content: `
      <ul>
        <li>People-First Design: We keep your users front and center. Every pixel, every interaction is designed to be intuitive, seamless, and satisfying.</li>
        <li>Aligned with Your Brand: We don't just design screens, we shape brand experiences. Your visual identity, tone, and values are woven into every element to ensure consistency and emotional resonance.</li>
        <li>Strategic and Research-Backed-From competitor research to user testing, our design choices are guided by insight, not guesswork — resulting in solutions that actually work for your users.</li>
        <li>Cross-Platform Excellence-Whether on desktop, mobile, or tablet, your users get a consistent and delightful experience across all devices.</li>
        <li>Design that Supports Development-With seamless collaboration between our design and development teams (especially on MERN and MEAN stack projects), we create scalable designs that translate into high-performance digital products.</li>
      <ul>
      `,
  },
  {
    id: "ui_design_details_2",
    heading: "Our Human-Centered Design Process",
    content: `
      <ul>
        <li>Discovery - We listen. To your goals, users, competitors, and vision.</li>
        <li>User Research - Empathy meets data: understanding how real users think and behave.</li>
        <li>Information Architecture - Structuring your product or site for clarity and ease of use.</li>
        <li>Wireframes - Laying out the foundation with thoughtful, low-fidelity designs.</li>
        <li>Prototypes - Testing ideas with interactive mockups before writing a line of code.</li>
        <li>Visual Design - Bringing the brand and UI to life with attention to detail and emotional impact.</li>
        <li>User Testing - Gathering feedback and making refinements based on real behavior.</li>
        <li>Delivery & Handoff - Clean files, proper documentation, and support for developers</li>
      <ul>
      `,
  },
];

export const SERVICE_UI_UX_DESIGN_FEATURES: ServiceFeaturesType = {
  title: "Our sub-services",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      list: [
        {
          id: "feature_1",
          title: "UI/UX Design",
          description:
            "Designing digital products that are visually appealing, user-friendly & intuitive.",
        },
        {
          id: "feature_2",
          title: "Web Design",
          description:
            "Designing & building, functional, responsive, &  visually appealing website.",
        },
        {
          id: "feature_3",
          title: "Mobile App Design",
          description:
            "Sleek, functional interfaces that make your apps easy and enjoyable to use.",
        },
        {
          id: "feature_4",
          title: "Dashboard & SaaS",
          description:
            "Complex data, made simple. We turn dashboards into decision-making tools.",
        },
        {
          id: "feature_5",
          title: "E-commerce UI/UX",
          description:
            "Optimized for purchases, with clear navigation and a shopper-friendly experience.",
        },
        {
          id: "feature_6",
          title: "Branding & Visuals",
          description:
            "Strong visual identity for your brand like logos, brand book, stationeries, & recognizability.",
        },
        {
          id: "feature_7",
          title: "Decks & Presentations",
          description:
            "Clean, branded designs that help you tell your business story with clarity and impact.",
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
  title: "Core Deliverables",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      list: [
        {
          id: "feature_1",
          title: " ICP Research & Data Enrichment",
          description:
            "Enrich and verify high-intent leads by targeting your ideal customers with precision.",
        },
        {
          id: "feature_2",
          title: "Multi-Touch Personalized Outreach",
          description:
            "Run personalized, sequenced campaigns across email and LinkedIn to spark real, context-rich conversations—not spam.",
        },
        {
          id: "feature_3",
          title: "Appointment Setting",
          description:
            "Handle end-to-end outreach—from messaging and follow-ups to scheduling—so your team only joins pre-warmed, sales-ready meetings.",
        },
        {
          id: "feature_4",
          title: "Performance Tracking & Optimization",
          description:
            "Track delivery, engagement, and conversions to continuously optimize outreach with a data-driven approach.",
        },
        {
          id: "feature_",
          title: "Add-On: Social Media Support",
          description:
            "Reinforce your brand with add-on social media management and ads—bundled with our outreach to support pipeline growth.",
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
      "Our team utilizes a range of modern tools and technologies to deliver top-notch cloud infrastructure management services:",
    list: [
      "AWS (Amazon Web Services)",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Kubernetes for container orchestration",
      "Terraform for infrastructure as code",
      "Ansible for configuration management",
    ],
  },
];

export const SERVICE_CLOUD_INFRASTRCUTRE_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "cloud_infrastructure_details_1",
    heading: "Why choose BharathaTechno for Cloud Infrastructure Management?",
    content: `
      <ul>
        <li>Expertise in Leading Cloud Platforms: We have extensive experience with major cloud service providers such as AWS, Azure, and Google Cloud, DigitalOcean ensuring that we can tailor solutions to meet your specific needs.</li>
        <li>Scalability and Flexibility: Our cloud solutions are designed to scale seamlessly with your business, allowing you to adjust resources as needed without disruption.</li>
        <li>Enhanced Security: We implement industry-leading security practices to protect your data and applications from threats, ensuring compliance with relevant regulations.</li>
        <li>Cost Efficiency: By optimizing resource allocation and leveraging cloud-native tools, we help you reduce operational costs while maintaining high performance.</li>
        <li>24/7 Support and Monitoring: Our team provides round-the-clock monitoring and support to ensure your cloud infrastructure always remains operational and efficient.</li>
      <ul>
      `,
  },
  {
    id: "cloud_infrastructure_details_2",
    heading: "Why cloud Infrastructure Matters for Your Business",
    content: `
      <ul>
        <li>Increased Agility: Quickly adapt to changing business needs with scalable cloud resources.</li>
        <li>Enhanced Collaboration: Enable remote workforces with secure access to applications and data from anywhere.</li>
        <li>Cost Savings: Reduce capital expenditure by shifting to a pay-as-you-go model.</li>
        <li>Business Continuity: Ensure uninterrupted operations with robust disaster recovery solutions.</li>
        <li>Innovation Enablement: Leverage cutting-edge technologies like AI/ML services available on cloud platforms.</li>
      <ul>
      `,
  },
];

export const SERVICE_CLOUD_INFRASTRCUTRE_FEATURES: ServiceFeaturesType = {
  title: "Our Cloud Infrastructure Management Services",
  rows: [
    {
      id: "feature_row_1",
      title: "Cloud Strategy and Consulting",
      list: [
        {
          id: "feature_1",
          title: "Assessment and Planning",
          description:
            "Evaluate your current IT infrastructure and develop a tailored cloud strategy that aligns with your business goals.",
        },
        {
          id: "feature_2",
          title: "Migration Planning",
          description:
            "Design a seamless migration path to move your applications and data to the cloud with minimal downtime.",
        },
      ],
    },
    {
      id: "feature_row_2",
      title: "Cloud Deployment and Migration",
      list: [
        {
          id: "feature_1",
          title: "Infrastructure Setup",
          description:
            "Set up virtual networks, storage solutions, and compute resources tailored to your needs.",
        },
        {
          id: "feature_2",
          title: "Data Migration",
          description:
            "Safely transfer your data to the cloud while ensuring integrity and security.",
        },
        {
          id: "feature_3",
          title: "Application Migration",
          description:
            "Re-host or refactor applications for optimal performance in the cloud environment.",
        },
      ],
    },
    {
      id: "feature_row_3",
      title: "Cloud Optimization",
      list: [
        {
          id: "feature_1",
          title: "Resource Management",
          description:
            "Optimize resource allocation to improve efficiency and reduce costs.",
        },
        {
          id: "feature_2",
          title: "Performance Tuning",
          description:
            "Continuously monitor & adjust configurations to enhance application performance.",
        },
        {
          id: "feature_3",
          title: "Cost Management",
          description:
            "Implement cost-control measures such as auto-scaling and reserved instances.",
        },
      ],
    },
    {
      id: "feature_row_4",
      title: "Security and Compliance",
      list: [
        {
          id: "feature_1",
          title: "Security Architecture Design",
          description:
            "Develop a robust security framework tailored to your industry requirements.",
        },
        {
          id: "feature_2",
          title: "Compliance Management",
          description:
            "Ensure adherence to industry standards such as GDPR, HIPAA, or PCI-DSS.",
        },
        {
          id: "feature_3",
          title: "Threat Detection and Response",
          description:
            "Implement advanced monitoring tools for real-time threat detection and response.",
        },
      ],
    },
    {
      id: "feature_row_5",
      title: "Managed Services",
      list: [
        {
          id: "feature_1",
          title: "Monitoring and Reporting",
          description:
            "Provide continuous monitoring of cloud resources with detailed performance reports.",
        },
        {
          id: "feature_2",
          title: "Backup & Data Recovery",
          description:
            "Implement reliable backup solutions & disaster recovery plans to protect against data loss.",
        },
        {
          id: "feature_3",
          title: "Technical Support",
          description:
            "Offer 24/7 support for troubleshooting issues and optimizing cloud operations.",
        },
      ],
    },
  ],
};

export const SERVICE_STAFF_AGUMENTATION: ServiceTechStackType[] = [
  {
    id: "staffaugmentation-1",
    title: "MERN Stack Development",
    list: [
      "MongoDB for flexible data storage",
      "Express.js for efficient backend development",
      "React.js for dynamic user interfaces",
      "Node.js for scalable server-side applications",
    ],
  },
  {
    id: "fullstack-2",
    title: "MEAN Stack Development",
    list: [
      "MongoDB for efficient database management",
      "Express.js for streamlined server-side logic",
      "Angular.js for powerful front-end applications",
      "Node.js for high-performance backend processes",
    ],
  },
];

export const SERVICE_STAFF_AGUMENTATION_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "staff_augmentation_details_1",
    heading: "Why choose BharathaTechno for Staff Augmentation?",
    content: `
      <ul>
        <li>Access to Top Talent: We provide access to a pool of highly skilled developers proficient in MERN (MongoDB, Express.js, React.js, Node.js) and MEAN (MongoDB, Express.js, Angular.js, Node.js) stacks.</li>
        <li>Flexibility and Scalability: Our staff augmentation services allow you to quickly scale your team up or down based on project demands without the long-term commitment of hiring full-time employees.</li>
        <li>Cost-Effective Solutions: Reduce overhead costs associated with recruitment, training, and benefits while gaining immediate access to experienced professionals.</li>
        <li>Seamless Integration: Our developers integrate smoothly with your existing team, working collaboratively to ensure project success.</li>
        <li>Focus on Core Business: By augmenting your staff with our experts, you can focus on strategic business initiatives while we handle technical execution.</li>
      <ul>
      `,
  },
  {
    id: "staff_augmentation_details_2",
    heading: "Our Staff Augmentation Process",
    content: `
      <ul>
        <li>Needs Assessment: We work closely with you to understand your specific project requirements and team dynamics.</li>
        <li>Talent Matching: We identify and provide developers whose skills and experience align perfectly with your needs.</li>
        <li>Onboarding: Our developers quickly integrated into your team, familiarizing themselves with your processes and tools.</li>
        <li>Ongoing Support: We provide continuous support to ensure seamless collaboration and address any challenges that arise.</li>
        <li>Performance Monitoring: Regular check-ins and performance reviews ensure that our developers meet your expectations and contribute effectively to your projects.</li>
      <ul>
      `,
  },
];

export const SERVICE_STAFF_AGUMENTATION_FEATURES: ServiceFeaturesType = {
  title: "Why Staff Augmentation Matters for Your Business",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      list: [
        {
          id: "feature_1",
          title: "Accelerated Project Timelines",
          description:
            "Quickly bring additional expertise to meet tight deadlines.",
        },
        {
          id: "feature_2",
          title: "Enhanced Flexibility",
          description:
            "Adapt easily to changing project scopes or business needs.",
        },
        {
          id: "feature_3",
          title: "Risk Mitigation",
          description:
            "Reduce the risks associated with hiring full-time employees during uncertain times.",
        },
        {
          id: "feature_4",
          title: "Access to Specialized Skills",
          description:
            "Gain expertise in specific technologies without the need for extensive training.",
        },
        {
          id: "feature_5",
          title: "Increased Productivity",
          description:
            "Boost your team's productivity by adding experienced professionals who can hit the ground running.",
        },
      ],
    },
  ],
};

export const SERVICE_CORPORATE_TRAINING: ServiceTechStackType[] = [
  {
    id: "corporatetraining1-1",
    title: "MERN Stack Development",
    list: [
      "Introduction to MERN Stack: Overview of MongoDB, Express.js, React.js, and Node.js.",
      "Building RESTful APIs with Node.js and Express: Learn how to create scalable backend services.",
      "Frontend Development with React: Master the art of building dynamic user interfaces.",
      "Database Management with MongoDB: Understand data modeling and querying in MongoDB.",
    ],
  },
  {
    id: "corporatetraining1-2",
    title: "MEAN Stack Development",
    list: [
      "Introduction to MEAN Stack: Overview of MongoDB, Express.js, Angular.js, and Node.js.",
      "Developing Single Page Applications with Angular: Create responsive and interactive web applications.",
      "Server-Side Programming with Node.js: Build efficient server-side applications.",
      "Integrating Angular with Express and MongoDB: Learn how to connect frontend and backend seamlessly.",
    ],
  },
  {
    id: "corporatetraining1-3",
    title: "JavaScript Mastery",
    list: [
      "JavaScript Essentials: Covering variables, functions, objects, and more.",
      "Advanced JavaScript Concepts: Dive into closures, promises, async/await, and ES6+ features.",
      "Front-End Frameworks Overview: Introduction to popular frameworks like React and Angular.",
      "Best Practices in JavaScript Development: Learn coding standards and performance optimization techniques.",
    ],
  },
];

export const SERVICE_CORPORATE_TRAINING_DETAILS: ServiceTypeDetailsType[] = [
  {
    id: "corporate_training_details_1",
    heading: "Why choose BharathaTechno for Corporate Training?",
    content: `
      <ul>
        <li>Expert Trainers: Our trainers are industry experts with extensive experience in MERN and MEAN stack development. They bring real-world insights and practical knowledge to the training sessions.</li>
        <li>Customized Training Programs: We tailor our training modules to meet your specific business needs and skill gaps, ensuring maximum relevance and impact.</li>
        <li>Hands-On Learning: Our programs emphasize practical, hands-on learning experiences that enable participants to apply new skills immediately in their work environment.</li>
        <li>Flexible Delivery Options: We offer both on-site and virtual training sessions to accommodate your team's schedule and location preferences.</li>
        <li>Comprehensive Curriculum: Our training covers a wide range of topics from basic JavaScript fundamentals to advanced full-stack development techniques.</li>
      <ul>
      `,
  },
];

export const SERVICE_CORPORATE_TRAINING_FEATURES: ServiceFeaturesType = {
  title: "Benefits of Corporate Training",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      list: [
        {
          id: "feature_1",
          title: "Enhanced Team Productivity",
          description:
            "Equip your team with the latest skills to improve efficiency and output.",
        },
        {
          id: "feature_2",
          title: "Increased Employee Satisfaction",
          description:
            "Investing in employee development leads to higher job satisfaction and retention rates.",
        },
        {
          id: "feature_3",
          title: "Competitive Advantage",
          description:
            "Stay ahead of industry trends by empowering your team with cutting-edge technology skills.",
        },
        {
          id: "feature_4",
          title: "Improved Project Outcomes",
          description:
            "Better-trained teams deliver higher quality projects on time and within budget.",
        },
        {
          id: "feature_5",
          title: "Fostering Innovation",
          description:
            "Encourage a culture of continuous learning and innovation within your organization.",
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
        BharathaTechno IT Private Limited is a MERN stack web development company located at Kondhwa, Pune, Maharashtra. They specialize in MERN and MEAN full-stack development.
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
        "This stack allows the platform to load fast, scale with demand, and handle secure user data across devices.",
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
    title: "Increased Client Sign-ups",
    description: "",
  },
  {
    id: "excel_2",
    title: "Improved Revenue",
    description: "",
  },
  {
    id: "excel_3",
    title: "Time Optimization",
    description: "",
  },
  {
    id: "excel_4",
    title: "Enhanced User Experience",
    description: "",
  },
  {
    id: "excel_5",
    title: "Scalable Business",
    description: "",
  },
  {
    id: "excel_6",
    title: "Happy Clients",
    description: "",
  },
];

export const BFIT_CASE_STUDY: ProductCaseStudy = {
  title: "Shred-n-Shape",
  client: "Shred-n-Shape",
  industry: "Fitness & Wellness",
  use: "Selling workout programs and diet plans through a branded online platform using fitness software tailored to their needs.",
  before:
    "Shred-n-Shape's team used spreadsheets to manage client data, which led to disorganization and inefficiency. Personalizing plans and tracking progress was time-consuming and inconsistent. Communication lacked structure, and report generation was entirely manual. As client numbers increased, Excel's limitations became a barrier to scaling Shred n Shape and offering remote personal trainer services efficiently.",
  after:
    "With the launch of platform, all client data is now centralized and easy to manage. Progress tracking and report generation are automated, allowing for more efficient workflows. Personalized plans can be created and updated seamlessly, and communication is streamlined. The platform supports business scalability, improves operational efficiency, and enhances the client experience with clearer goal tracking, timely updates, and better engagement using integrated fitness personal trainer software.",
};

export const PRODUCT_BCHEF: ServiceFeaturesType = {
  title: "Tech Stack",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      description:
        "This stack allows the platform to load quickly, scale with order volume, and provide a smooth experience for both admin and end customers.",
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
  use: "Tiffin service and home-chef meal delivery system.",
  before:
    "Nikita's Curry Corner was all about serving up delicious, home-cooked Sindhi meals to its loyal customers. However, the food business found itself heavily dependent on third-party apps like cookin.com, which not only charged steep commissions but also limited their control over branding and the overall customer experience. They faced challenges in customizing menus, connecting directly with customers, and managing their content due to the platform's restrictions. Plus, juggling external listings took their attention away from what they loved most—cooking. These hurdles made it tough to grow effectively and added financial strain as they tried to expand within the competitive cloud kitchen startup scene.",
  after:
    "We launched a fully branded food ordering website with our custom food delivery software. Each day, the menu was updated in the admin panel. Customers could visit the site to check availability, place their orders, and choose their delivery times. The admin dashboard tracked all the essentials: orders, payments, and customer data. Their team either delivers to local addresses or sets up a pick-up option. Promo codes were a fantastic way to encourage repeat business and reward our loyal customers.",
};

export const PRODUCT_BCHEF_EXCEL: ServiceExcelType[] = [
  {
    id: "excel_1",
    title: "",
    description:
      "Increased direct food orders with targeted digital marketing driving traffic to their website.",
  },
  {
    id: "excel_2",
    title: "",
    description:
      "Removed commission fees, ensuring full profit retention and pricing control.",
  },
  {
    id: "excel_3",
    title: "",
    description:
      "Eliminate commission cuts, maximizing profits with complete pricing control.",
  },
  {
    id: "excel_4",
    title: "",
    description:
      "Enhanced customer satisfaction with easy browsing, flexible delivery, and secure checkout.",
  },
  {
    id: "excel_5",
    title: "",
    description:
      "Built customer loyalty by streamlining operations and offering personalized service.",
  },
];

export const BSTORE_CASE_STUDY: ProductCaseStudy = {
  title: "Trendy Threads By Riya",
  client: "Trendy Threads By Riya",
  industry: "Fashion & Lifestyle",
  use: "Branded eCommerce platform offering a wide range of clothing and accessories for women, including ethnic, fusion, and contemporary styles.",
  before:
    "Before launching an independent platform, the business faced growing challenges on third-party marketplaces. Losses from damaged or used returns, manual order handling, and untrackable shipments led to operational inefficiencies. Without a dedicated website for selling products, there was no consistent brand identity or direct customer connection. Selling through platforms also limited trust and control, making it difficult to build a reliable, long-term presence in the fashion ecommerce market.",
  after:
    "After launching, the business gained full control over its operations, brand, and customer experience. Orders are now trackable, returns are manageable, and manual processes have been replaced with a streamlined system. A dedicated fashion ecommerce webapp builds trust, showcases the brand consistently, and allows direct engagement with customers. With complete ownership over products, pricing, and promotions, the business is now positioned for sustainable growth and independence through effective e-commerce webapp platform.",
};

export const PRODUCT_BSTORE: ServiceFeaturesType = {
  title: "Tech Stack",
  rows: [
    {
      id: "feature_row_1",
      title: "",
      description:
        "This stack allows the platform to load quickly, scale with order volume, and provide a smooth experience for both admin and end customers.",
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
    description: "Reduced return losses and manual inefficiencies.",
  },
  {
    id: "excel_2",
    title: "",
    description: "Boost in customer satisfaction and retention.",
  },
  {
    id: "excel_3",
    title: "",
    description: "Strong, independent brand identity.",
  },
  {
    id: "excel_4",
    title: "",
    description: "Strong, independent brand identity.",
  },
  {
    id: "excel_5",
    title: "",
    description:
      "Scalable digital operations now run entirely through the platform.",
  },
];

export const SERVICE_TECHNICAL_DOCUMENTATION_DETAILS: ServiceTypeDetailsType[] =
  [
    {
      id: "ui_design_details_1",
      heading: "Why Choose BharathaTechno for Technical Documentation",
      content: `<p>We don't just write — we understand what's being built.</p>
    <p>Our team works closely with developers, project leads, and stakeholders to ensure documentation reflects real use cases and actual technical depth. We've worked with companies offering software services and solutions, full stack development services, and ERP software solutions, so we know how to translate complexity into clarity — without oversimplifying.</p>
    <p><strong>Here's what you can expect:</strong></p>  
    <ul>
        <li>Clear, well-organized documents with zero unnecessary fluff.</li>
        <li>Consistent tone, aligned with your product and brand.</li>
        <li>Fast, dependable delivery with minimal back-and-forth.</li>
        <li>Ability to handle docs for everything from code-heavy platforms to client-facing tools.</li>
      <ul>
      `,
    },
    {
      id: "ui_design_details_2",
      heading: "What We Offer",
      content: `
      <ul>
        <li>Technical Writing — From user manuals to API references</li>
        <li>Information Architecture — Clean layouts that make sense to real users</li>
        <li>SEO-Friendly Documentation — For online help centers and web guides</li>
        <li>Cross-Platform Support — Covering frontend and backend development, mobile apps, and more</li>
      <ul>
      <p>We're also equipped to support stack-specific teams — including MERN stack development companies or mobile-first product teams delivering mobile app development services.</p>
      `,
    },
  ];

export const SERVICE_TECHNICAL_DOCUMENTATION_FEATURES: ServiceExcelType[] = [
  {
    id: "feature_1",
    title: "Product briefs and feature overviews",
    description: "",
  },
  {
    id: "feature_2",
    title: "End-user guides and admin manuals",
    description: "",
  },
  {
    id: "feature_3",
    title: "Business and Product requirement documents (BRDs & PRDs)",
    description: "",
  },
  {
    id: "feature_4",
    title: "SOPs and internal workflow docs",
    description: "",
  },
  {
    id: "feature_5",
    title: "Technical overviews for clients, vendors, or internal training",
    description: "",
  },
];
