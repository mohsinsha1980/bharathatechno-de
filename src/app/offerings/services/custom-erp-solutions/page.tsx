"use client";
import ServicesBanner from "@/components/services/banner";
import Summary from "@/components/services/summary";
import ServicesList from "@/components/services/services-list";
import Technology from "@/components/services/technology";
import {
  SERVICE_CUSTOM_ERP,
  SERVICE_CUSTOM_ERP_DETAILS,
  SERVICE_CUSTOM_ERP_FEATURES,
} from "@/lib/const";
import DetailsAccordion from "@/components/services/details-accordion";
import ServicesFeatures from "@/components/services/features";
import ServicesContact from "@/components/services/contact";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ServicesCustomErpSolutions() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom ERP Solutions | Tailored Enterprise Software by BharathaTechnoIT",
    url: "https://bharathatechno.de/offerings/services/custom-erp-solutions",
    headline:
      "Custom ERP Solutions - Streamline, Automate, and Scale Your Business",
    description:
      "BharathaTechnoIT specializes in custom ERP solutions for end-to-end business process management. Our tailored ERP software integrates finance, HR, inventory, CRM, and analytics, built with React.js, Angular, Node.js, Python, and major cloud platforms. Unlock operational efficiency, seamless integration, mobile access, and ongoing support with a solution engineered for your unique business needs.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bharathatechno.de/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  const pullupVariant = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  const fadeVariant = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1,
      },
    },
  };

  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

  useEffect(() => {
    const scroll = document.getElementById("services-list");
    if (scroll) {
      setTimeout(() => {
        scroll.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    }
  }, []);
  return (
    <>
      <Script
        id="schema-webpage-custom-erp"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="pg_service">
        <ServicesBanner data="BharathaTechno - Expertenanbieter für kundenspezifische ERP-Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind" />
        <ServicesList />
        <Summary>
          <motion.h2
            ref={ref2}
            variants={pullupVariant}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            Maßgeschneiderte ERP-Lösungen
          </motion.h2>

          <motion.p
            ref={ref3}
            variants={fadeVariant}
            initial="initial"
            animate={isInView3 ? "animate" : ""}
            className="text-center md:text-justify"
          >
            Bei BharathaTechno entwickeln wir individuell zugeschnittene
            Enterprise Resource Planning (ERP)- Lösungen, die perfekt auf Ihre
            einzigartigen Geschäftsprozesse und Ziele abgestimmt sind. Unsere
            maßgeschneiderten ERP-Entwicklungsdienste sind darauf ausgelegt,
            Ihre operative Effizienz zu steigern, Arbeitsabläufe zu optimieren
            und Wachstum zu fördern.
          </motion.p>
        </Summary>
        <Technology
          title="Eingesetzte Technologien"
          tech={SERVICE_CUSTOM_ERP}
        />
        <DetailsAccordion items={SERVICE_CUSTOM_ERP_DETAILS} />
        <ServicesFeatures data={SERVICE_CUSTOM_ERP_FEATURES} />
        <ServicesContact
          title="Unser Qualitätsversprechen"
          description="Transformieren Sie Ihre Geschäftsabläufe mit einer maßgeschneiderten ERP-Lösung von
BharathaTechno. Kontaktieren Sie uns noch heute, um Ihre Reise zu mehr Effizienz, Transparenz und
Wachstum zu starten."
        />
      </article>
    </>
  );
}
