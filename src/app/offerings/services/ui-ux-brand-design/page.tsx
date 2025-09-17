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
        <ServicesBanner data="Pixelgenaue UI/UX- und Markendesign-Services in Pune für makellose digitale Erlebnisse" />
        <ServicesList />
        <Summary>
          <motion.h2
            ref={ref2}
            variants={pullupVariant}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            UI/UX- und Marken-Design
          </motion.h2>

          <motion.p
            ref={ref3}
            variants={fadeVariant}
            initial="initial"
            animate={isInView3 ? "animate" : ""}
            className="text-center md:text-justify"
          >
            Bei BharathaTechno verstehen wir Design als mehr als nur Ästhetik -
            es geht darum, wie sich etwas anfühlt, funktioniert und wie gut es
            mit den Nutzern kommuniziert. Deshalb haben wir unser Designangebot
            zu einer ganzheitlichen Lösung weiterentwickelt: UI/UX- und
            Marken-Design. Diese Kombination aus schönen, intuitiven digitalen
            Oberflächen uup durchdachtem Markenerzählen sorgt dafür, dass jede
            Interaktion mit Ihrem Produkt einen bleibenden Eindruck hinterlässt.
          </motion.p>
        </Summary>
        <Technology
          title="Unsere Design-Tools
Wir beherrschen eine Vielzahl moderner Design-Tools, darunter:"
          tech={SERVICE_UI_UX_DESIGN}
        />
        <DetailsAccordion items={SERVICE_UI_UX_DESIGN_DETAILS} />
        <ServicesFeatures data={SERVICE_UI_UX_DESIGN_FEATURES} />
        <ServicesContact
          title="Design mit Ziel, Leidenschaft & Präzision"
          description="Bei BharathaTechno geht es darum, Ihre Marke unvergesslich zu machen und echte Probleme für Ihre
Nutzer zu lösen. Egal, ob Sie ein neues Produkt auf den Markt bringen, Ihre Website neu gestalten
oder die visuelle Identität Ihrer Marke definieren möchten - wir helfen Ihnen, dies mit Wirkung zu
tun"
        />
      </article>
    </>
  );
}
