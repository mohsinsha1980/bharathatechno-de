"use client";
import ServicesBanner from "@/components/services/banner";
import Summary from "@/components/services/summary";
import ServicesList from "@/components/services/services-list";
import { SERVICE_DIGITAL_MARKETING_FEATURES } from "@/lib/const";
import ServicesFeatures from "@/components/services/features";
import ServicesContact from "@/components/services/contact";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ServicesDigitalMarketing() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Performance Marketing Services - BharathaTechnoIT",
    url: "https://bharathatechno.com/offerings/services/performance-marketing",
    headline:
      "Performance Marketing - Strategic Campaigns & B2B Lead Generation",
    description:
      "BharathaTechnoIT's Performance Marketing services deliver predictable B2B lead generation with human-led, channel-optimized outreach. Services include ICP research, multi-touch personalized campaigns, appointment setting, and data-driven optimization. Add-on options include social media management and ads, all focused on maximizing conversions and supporting your sales pipeline.",
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
        id="schema-webpage-performance-marketing"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="pg_service">
        <ServicesBanner data="Performance Marketing Services in NIBM Road, Pune to Drive Targeted B2B Lead Generation and Conversions"/>
        <ServicesList />
        <Summary>
          <motion.h2
            ref={ref2}
            variants={pullupVariant}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            Performance Marketing
          </motion.h2>

          <motion.p
            ref={ref3}
            variants={fadeVariant}
            initial="initial"
            animate={isInView3 ? "animate" : ""}
            className="text-center md:text-justify"
          >
            At BharathaTechno, we help you consistently land meetings with
            decision-makers using human-led, channel-optimized outbound systems.
            Designed for B2B companies with high-ticket services, our outreach
            is fully personalized and built for conversion.
          </motion.p>
        </Summary>
        <ServicesFeatures data={SERVICE_DIGITAL_MARKETING_FEATURES} />
        <ServicesContact
          title=""
          description="A Predictable Lead Engine for B2B Brands"
        />
      </article>
    </>
  );
}
