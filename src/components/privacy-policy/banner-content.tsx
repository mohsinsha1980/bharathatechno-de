"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PrivacyBannerContent() {
  const text1 = "Datenschutzerklärung";

  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.05 + 1, duration: 1 },
    }),
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
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <div className="content col-span-1 lg:col-span-2">
      <p className="mb-4 lg:mb-16 text-center lg:text-left">
        <motion.span
          className="mb-4 highlight"
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
      </p>
      <motion.h1
        ref={ref3}
        variants={fadeVariant}
        initial="initial"
        animate={isInView3 ? "animate" : ""}
        className="text-center lg:text-left"
      >
        BharathaTechno IT EU verpflichtet sich, die Privatsphäre seiner Nutzer
        zu schützen. Diese Datenschutzerklärung erläutert, wie wir Ihre
        personenbezogenen Daten erheben, verwenden und weitergeben.
      </motion.h1>
    </div>
  );
}
