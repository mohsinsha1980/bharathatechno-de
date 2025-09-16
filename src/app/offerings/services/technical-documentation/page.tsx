"use client";
import ServicesBanner from "@/components/services/banner";
import Summary from "@/components/services/summary";
import ServicesList from "@/components/services/services-list";
import {
  SERVICE_TECHNICAL_DOCUMENTATION_DETAILS,
  SERVICE_TECHNICAL_DOCUMENTATION_FEATURES,
} from "@/lib/const";
import DetailsAccordion from "@/components/services/details-accordion";
import ServicesContact from "@/components/services/contact";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import WeExcel from "@/components/services/we-excel";
import Script from "next/script";

export default function ServicesTechnicalDocumentation() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Technical Documentation Services - BharathaTechnoIT",
    url: "https://bharathatechno.com/offerings/services/technical-documentation",
    headline:
      "Technical Documentation - Clear, Structured Docs for Software & Systems",
    description:
      "BharathaTechnoIT offers expert technical documentation services for businesses and software teams. From user guides and API docs to process manuals, we deliver clear, organized documentation that accelerates development, ensures accuracy, and supports scalable software and IT operations.",
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
        id="schema-webpage-technical-documentation"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="pg_service">
        <ServicesBanner data="Comprehensive Technical Documentation Services for Software and ERP Solutions"/>
        <ServicesList />
        <Summary>
          <motion.h2
            ref={ref2}
            variants={pullupVariant}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            Technical Documentation
          </motion.h2>

          <motion.div
            ref={ref3}
            variants={fadeVariant}
            initial="initial"
            animate={isInView3 ? "animate" : ""}
            className="text-center md:text-justify"
          >
            <p>
              At BharathaTechno, we provide technical documentation that&apos;s
              built to support your software, systems, and internal workflows.
              Our goal is simple — help businesses communicate complex
              information clearly and efficiently, without slowing down
              development or operations.
            </p>
            <p>
              If you&apos;re rolling out a new product, managing a growing
              platform, or documenting internal processes, we deliver
              structured, accurate, and easy-to-navigate content that aligns
              with your team, your users, and your goals.
            </p>
          </motion.div>
        </Summary>
        <DetailsAccordion items={SERVICE_TECHNICAL_DOCUMENTATION_DETAILS} />
        <WeExcel
          title="Documents We Create"
          list={SERVICE_TECHNICAL_DOCUMENTATION_FEATURES}
        />

        <ServicesContact
          title=""
          description="You focus on building — we'll make sure your documentation keeps up."
        />
      </article>
    </>
  );
}
