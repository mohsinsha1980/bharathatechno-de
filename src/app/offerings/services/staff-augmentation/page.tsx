"use client";
import ServicesBanner from "@/components/services/banner";
import Summary from "@/components/services/summary";
import ServicesList from "@/components/services/services-list";
import Technology from "@/components/services/technology";
import {
  SERVICE_STAFF_AGUMENTATION,
  SERVICE_STAFF_AGUMENTATION_DETAILS,
  SERVICE_STAFF_AGUMENTATION_FEATURES,
} from "@/lib/const";
import DetailsAccordion from "@/components/services/details-accordion";
import ServicesFeatures from "@/components/services/features";
import ServicesContact from "@/components/services/contact";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ServicesStaffAugmentation() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Staff Augmentation Services - BharathaTechnoIT",
    url: "https://bharathatechno.com/offerings/services/staff-augmentation",
    headline: "Staff Augmentation - MERN & MEAN Stack Developers On-Demand",
    description:
      "Scale your technology team quickly with BharathaTechnoIT's Staff Augmentation services. Access skilled MERN and MEAN stack developers, flexible team scaling, seamless integration, and cost-effective staffing solutions. Accelerate digital transformation and deliver projects faster with expert IT professionals for your unique project needs.",
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
        id="schema-webpage-staff-augmentation"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="pg_service">
        <ServicesBanner data="Staff Augmentation Services with Expert MERN and MEAN Stack Professionals"/>
        <ServicesList />
        <Summary>
          <motion.h2
            ref={ref2}
            variants={pullupVariant}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            Staff Augmentation Services
          </motion.h2>

          <motion.p
            ref={ref3}
            variants={fadeVariant}
            initial="initial"
            animate={isInView3 ? "animate" : ""}
            className="text-center md:text-justify"
          >
            At BharathaTechno, we offer specialized staff augmentation services
            to help you scale your development team with top-tier MERN and MEAN
            stack experts. Our flexible staffing solutions enable businesses to
            enhance their technical capabilities, meet project deadlines, and
            achieve their digital transformation goals.
          </motion.p>
        </Summary>
        <Technology
          title="Expertise in MERN & MEAN Stack"
          description="Our augmented staff brings deep expertise in both MERN and MEAN stacks, enabling them to deliver high-quality web applications that are robust, scalable, and feature-rich:"
          tech={SERVICE_STAFF_AGUMENTATION}
        />
        <DetailsAccordion items={SERVICE_STAFF_AGUMENTATION_DETAILS} />
        <ServicesFeatures data={SERVICE_STAFF_AGUMENTATION_FEATURES} />
        <ServicesContact
          title="Ready to Enhance Your Team?"
          description="Let's discuss how our staff augmentation services can help you achieve your business goals. Our team of expert developers is ready to join forces with yours and drive success through strategic collaboration."
        />
      </article>
    </>
  );
}
