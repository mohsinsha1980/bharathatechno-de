"use client";
import ServicesBanner from "@/components/services/banner";
import Summary from "@/components/services/summary";
import ServicesList from "@/components/services/services-list";
import Technology from "@/components/services/technology";
import {
  SERVICE_CLOUD_INFRASTRCUTRE,
  SERVICE_CLOUD_INFRASTRCUTRE_DETAILS,
  SERVICE_CLOUD_INFRASTRCUTRE_FEATURES,
} from "@/lib/const";
import DetailsAccordion from "@/components/services/details-accordion";
import ServicesFeatures from "@/components/services/features";
import ServicesContact from "@/components/services/contact";
import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import Script from "next/script";

export default function ServicesCloudInfrastructure() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cloud Infrastructure Management Services - BharathaTechnoIT",
    url: "https://bharathatechno.com/offerings/services/cloud-infrastructure-management",
    headline:
      "Cloud Infrastructure Management - Scalable, Secure, and Cost-Efficient Cloud Solutions",
    description:
      "BharathaTechnoIT delivers end-to-end cloud infrastructure management, including cloud strategy, deployment, migration, optimization, security, and managed services. Our experts work with AWS, Azure, Google Cloud, Kubernetes, and more to help businesses scale, reduce costs, boost security, and enable innovation through cloud computing.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bharathatechno.com/search?q={search_term_string}",
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
        id="schema-webpage-cloud-infrastructure-management"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="pg_service">
        <ServicesBanner data="Umfassendes Cloud-Infrastrukturmanagement und Softwarelösungen für Effizienz, Sicherheit und Skalierbarkeit" />
        <ServicesList />
        <Summary>
          <motion.h2
            ref={ref2}
            variants={pullupVariant}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            Cloud-Infrastrukturmanagement
          </motion.h2>

          <motion.p
            ref={ref3}
            variants={fadeVariant}
            initial="initial"
            animate={isInView3 ? "animate" : ""}
            className="text-center md:text-justify"
          >
            Bei BharathaTechno bieten wir umfassende
            Cloud-Infrastrukturmanagement-Dienste an, die darauf ausgelegt sind,
            Ihre IT-Ressourcen zu optimieren, die Skalierbarkeit zu verbessern
            und eine robuste Sicherheit zu gewährleisten. Unsere Expertise in
            Cloud-Technologien ermöglicht es Unternehmen, das volle Potenzial
            des Cloud-Computings auszuschöpfen und so Effizienz und Innovation
            voranzutreiben.
          </motion.p>
        </Summary>
        <Technology
          title="Technologien, die wir einsetzen"
          tech={SERVICE_CLOUD_INFRASTRCUTRE}
        />
        <DetailsAccordion items={SERVICE_CLOUD_INFRASTRCUTRE_DETAILS} />
        <ServicesFeatures data={SERVICE_CLOUD_INFRASTRCUTRE_FEATURES} />
        <ServicesContact
          title="Bereit, Ihre Cloud-Infrastruktur zu transformieren?"
          description="Nutzen Sie die Expertise von BharathaTechno, um Ihre Cloud-Umgebung zu optimieren, die Effizienz
zu steigern und Ihr Unternehmen auf das nächste Level zu bringen. Kontaktieren Sie uns noch heute,
um Ihre maßgeschneiderte Cloud-Lösung zu starten."
        />
      </article>
    </>
  );
}
