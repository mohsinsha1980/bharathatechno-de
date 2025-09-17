"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactBannerContent() {
  const text1 = "Lassen Sie uns";

  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.05 + 1, duration: 1 },
    }),
  };

  const pullupVariant = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2,
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
        delay: 2.5,
        duration: 1,
      },
    },
  };

  const letters = text1.split("");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <div className="content col-span-1 lg:col-span-2">
      <p className="mb-4 lg:mb-16 text-center lg:text-left">
        <motion.span
          className="mb-4"
          ref={ref1}
          initial="hidden"
          animate={isInView1 ? "show" : ""}
          variants={variants}
        >
          {letters.map((word, i) => (
            <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
              {word}
            </motion.span>
          ))}
        </motion.span>
        <span className="highlight">
          <motion.span
            ref={ref2}
            variants={pullupVariant}
            initial="initial"
            // animate="animate"
            animate={isInView2 ? "animate" : ""}
            className="inline-block"
          >
            gemeinsam Großartiges erschaffen
          </motion.span>
        </span>
      </p>
      <motion.h1
        ref={ref3}
        variants={fadeVariant}
        initial="initial"
        animate={isInView3 ? "animate" : ""}
        className="text-center lg:text-left"
      >
        Egal, ob Sie ein Projekt von Grund auf neu aufbauen oder ein bestehendes
        Konzept verfeinern möchten - unsere Expertise in Softwareentwicklung und
        Beratung hilft Ihnen dabei, Ihre Vision zu gestalten. Lassen Sie uns in
        Kontakt treten, gemeinsam Strategien entwickeln und Ihre Ideen mit
        Zielstrebigkeit und Präzision zum Leben erwecken - wir sind stets für
        Sie erreichbar.
      </motion.h1>
    </div>
  );
}
