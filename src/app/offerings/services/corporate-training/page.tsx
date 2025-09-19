"use client";
import ServicesBanner from "@/components/services/banner";
import Summary from "@/components/services/summary";
import ServicesList from "@/components/services/services-list";
import Technology from "@/components/services/technology";
import {
  SERVICE_CORPORATE_TRAINING,
  SERVICE_CORPORATE_TRAINING_DETAILS,
  SERVICE_CORPORATE_TRAINING_FEATURES,
} from "@/lib/const";
import DetailsAccordion from "@/components/services/details-accordion";
import ServicesFeatures from "@/components/services/features";
import ServicesContact from "@/components/services/contact";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ServicesCorporateTraining() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Corporate Training Services - BharathaTechnoIT",
    url: "https://bharathatechno.de/offerings/services/corporate-training",
    headline:
      "Corporate IT Training - MERN/MEAN Stack, JavaScript & Digital Skills",
    description:
      "Empower your team with BharathaTechnoIT's comprehensive corporate IT training programs in MERN, MEAN, and JavaScript. Industry expert trainers deliver tailored, hands-on learning in full-stack development, modern JS, and IT best practices. Flexible on-site & virtual sessions help boost productivity, drive innovation, and upskill your business.",
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
        id="schema-webpage-corporate-training"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="pg_service">
        <ServicesBanner data="Unternehmensschulung in NIBM Rd, Pune, um Ihr Team mit modernsten technischen Fähigkeiten auszustatten" />
        <ServicesList />
        <Summary>
          <motion.h2
            ref={ref2}
            variants={pullupVariant}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            Unternehmensschulungen
          </motion.h2>

          <motion.p
            ref={ref3}
            variants={fadeVariant}
            initial="initial"
            animate={isInView3 ? "animate" : ""}
            className="text-center md:text-justify"
          >
            Bei BharathaTechno bieten wir umfassende Schulungsprogramme an, die
            darauf abzielen, Ihr Team mit den notwendigen Fähigkeiten
            auszustatten, um in der heutigen wettbewerbsintensiven
            Technologielandschaft erfolgreich zu sein. Unsere Schulungen
            konzentrieren sich auf moderne Technologien wie MERN (MongoDB,
            Express.js, React.js, Node.js), MEAN (MongoDB, Express.js,
            Angular.js, Node.js) und JavaScript, um sicherzustellen, dass Ihr
            Team in der Lage ist, komplexe Projekte zu bewältigen und
            Innovationen voranzutreiben.
          </motion.p>
        </Summary>
        <Technology
          title="Angebotene Schulungsprogramme"
          tech={SERVICE_CORPORATE_TRAINING}
        />
        <DetailsAccordion items={SERVICE_CORPORATE_TRAINING_DETAILS} />
        <ServicesFeatures data={SERVICE_CORPORATE_TRAINING_FEATURES} />
        <ServicesContact
          title="Bereit, Ihr Team zu stärken?"
          description="Lassen Sie uns besprechen, wie unsere Unternehmensschulungsprogramme dazu beitragen können,
die Fähigkeiten Ihres Teams zu steigern. Unsere Experten-Trainer sind bereit, ein speziell auf Ihre
Geschäftsbedürfnisse zugeschnittenes Programm zu entwerfen."
        />
      </article>
    </>
  );
}
