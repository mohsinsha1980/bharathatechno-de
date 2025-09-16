"use client";
import ServicesBanner from "@/components/services/banner";
import Summary from "@/components/services/summary";
import ServicesList from "@/components/services/services-list";
import Technology from "@/components/services/technology";
import {
  SERVICE_FULL_STACK,
  SERVICE_FULL_STACK_DETAILS,
  SERVICE_FULL_STACK_EXCEL,
  SERVICE_FULL_STACK_FEATURES,
} from "@/lib/const";
import DetailsAccordion from "@/components/services/details-accordion";
import ServicesFeatures from "@/components/services/features";
import WeExcel from "@/components/services/we-excel";
import ServicesContact from "@/components/services/contact";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ServicesFullStackDevelopment() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Full Stack Development - MERN & MEAN Experts | BharathaTechnoIT",
    url: "https://bharathatechno.com/offerings/services/full-stack-development",
    headline:
      "Full Stack Web & Mobile App Development Using MERN & MEAN | Custom ERP Solutions",
    description:
      "BharathaTechnoIT delivers robust, scalable full stack development using MERN & MEAN. We build custom web apps, mobile apps, SPAs, PWAs, e-commerce platforms, and enterprise ERP systems. Expertise in React, Angular, NodeJs, Express, MongoDB, cloud infrastructure, and user-focused UI/UX. Partner with us to turn your vision into reality.",
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
  const isInView2 = useInView(ref2, { once: true });
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
        id="schema-webpage-full-stack-development"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="pg_service">
        <ServicesBanner data="Expert Full Stack Development in Pune for High-Performance Web Applications"/>
        <ServicesList />
        <Summary>
          <motion.h2
            ref={ref2}
            variants={pullupVariant}
            initial="initial"
            animate={isInView2 ? "animate" : ""}
          >
            Full-Stack Development Services
          </motion.h2>

          <motion.div
            ref={ref3}
            variants={fadeVariant}
            initial="initial"
            animate={isInView3 ? "animate" : ""}
            className="text-center md:text-justify"
          >
            <p>
              At BharathaTechno, we develop robust, scalable, and
              high-performing web applications using the MERN and MEAN
              technology stacks. These full stack development services are
              designed for businesses that need flexible, modern, and long-term
              digital solutions.
            </p>
            <p>
              Our platforms are tailored to meet specific business needs—whether
              you&apos;re launching a new product, optimizing operations, or
              replacing outdated systems.
            </p>
          </motion.div>
        </Summary>
        <Technology title="Our Expertise" tech={SERVICE_FULL_STACK} />
        <DetailsAccordion items={SERVICE_FULL_STACK_DETAILS} />
        <ServicesFeatures data={SERVICE_FULL_STACK_FEATURES} />
        <WeExcel
          title="Technologies We Excel In"
          list={SERVICE_FULL_STACK_EXCEL}
        />
        <ServicesContact
          title="Our Commitment to Quality"
          description="For us, code is craft. Whether it's a small application or a large-scale enterprise application, our commitment to pristine, efficient, and scalable code is unwavering."
        />
      </article>
    </>
  );
}
