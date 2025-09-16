"use client";
import ServicesBanner from "@/components/services/banner";
import Summary from "@/components/services/summary";
import ServicesList from "@/components/services/services-list";
import Technology from "@/components/services/technology";
import {
  SERVICE_UI_UX_DESIGN,
  SERVICE_UI_UX_DESIGN_DETAILS,
  SERVICE_UI_UX_DESIGN_FEATURES,
} from "@/lib/const";
import DetailsAccordion from "@/components/services/details-accordion";
import ServicesFeatures from "@/components/services/features";
import ServicesContact from "@/components/services/contact";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ServicesUXBrandDesign() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "UI/UX & Brand Design Services - BharathaTechnoIT",
    url: "https://bharathatechno.com/offerings/services/ui-ux-brand-design",
    headline:
      "UI/UX & Brand Design - Intuitive Digital Experiences & Brand Identity",
    description:
      "Transform your business with BharathaTechnoIT's UI/UX & Brand Design services. We craft people-first digital products with expert user research, wireframes, prototypes, and visual design using Figma, XD, and more. Elevate your brand’s impact across web, mobile, and e-commerce through seamless, research-backed, and cross-platform experiences.",
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
        id="schema-webpage-ui-ux-brand-design"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="pg_service">
        <ServicesBanner data="Pixel-Perfect UI/UX & Brand Design Services in Pune for Flawless Digital Experiences"/>
        <ServicesList />
        <Summary>
          <motion.h2
            ref={ref2}
            variants={pullupVariant}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            UI/UX & Brand Design
          </motion.h2>

          <motion.p
            ref={ref3}
            variants={fadeVariant}
            initial="initial"
            animate={isInView3 ? "animate" : ""}
            className="text-center md:text-justify"
          >
            At BharathaTechno, we believe that design is more than just how
            something looks it&apos;s how it feels, how it functions, and how
            well it connects with people. That&apos;s why we&apos;ve evolved our
            design offering into a more holistic solution: UI/UX & Brand Design.
            This combines beautiful, intuitive digital interfaces with
            thoughtful brand storytelling so that every interaction with your
            product leaves a lasting impression.
          </motion.p>
        </Summary>
        <Technology
          title="Tools we have mastered in"
          tech={SERVICE_UI_UX_DESIGN}
        />
        <DetailsAccordion items={SERVICE_UI_UX_DESIGN_DETAILS} />
        <ServicesFeatures data={SERVICE_UI_UX_DESIGN_FEATURES} />
        <ServicesContact
          title="Design with Purpose, Passion & Precision"
          description="At BharathaTechno, it's about making your brand unforgettable & solving real problems for your users. Whether you're looking to launch a new product, revamp your website, or define your brand's visual identity  we're here to help you do it with impact."
        />
      </article>
    </>
  );
}
