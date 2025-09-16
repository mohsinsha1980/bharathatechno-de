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
    url: "https://bharathatechno.com/offerings/services/corporate-training",
    headline:
      "Corporate IT Training - MERN/MEAN Stack, JavaScript & Digital Skills",
    description:
      "Empower your team with BharathaTechnoIT's comprehensive corporate IT training programs in MERN, MEAN, and JavaScript. Industry expert trainers deliver tailored, hands-on learning in full-stack development, modern JS, and IT best practices. Flexible on-site & virtual sessions help boost productivity, drive innovation, and upskill your business.",
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
        id="schema-webpage-corporate-training"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    <article className="pg_service">
      <ServicesBanner data="Corporate Training in NIBM Rd, Pune to Equip Your Team with Cutting-Edge Tech Skills"/>
      <ServicesList />
      <Summary>
        <motion.h2
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          className="inline-block"
        >
          Corporate Training Services
        </motion.h2>

        <motion.p
          ref={ref3}
          variants={fadeVariant}
          initial="initial"
          animate={isInView3 ? "animate" : ""}
          className="text-center md:text-justify"
        >
          At BharathaTechno, we offer comprehensive corporate training programs
          designed to equip your team with the skills needed to excel in
          today&apos;s competitive tech landscape. Our training focuses on
          cutting-edge technologies like MERN (MongoDB, Express.js, React.js,
          Node.js), MEAN (MongoDB, Express.js, Angular.js, Node.js), and
          JavaScript, ensuring your team is prepared to tackle complex projects
          and drive innovation.
        </motion.p>
      </Summary>
      <Technology
        title="Training Programs Offered"
        tech={SERVICE_CORPORATE_TRAINING}
      />
      <DetailsAccordion items={SERVICE_CORPORATE_TRAINING_DETAILS} />
      <ServicesFeatures data={SERVICE_CORPORATE_TRAINING_FEATURES} />
      <ServicesContact
        title="Ready to Enhance Your Team?"
        description="Let’s discuss how our corporate training programs can help elevate your team's capabilities. Our expert trainers are ready to design a program tailored specifically for your business needs."
      />
    </article>
    </>
  );
}
