"use client";
import useScreenSize from "@/hooks/useScreenSize";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { easeOut } from "popmotion";
import { useEffect, useRef, useState } from "react";

const fadeInVariant = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.5,
    },
  },
};

export default function LookingAhead() {
  const screen = useScreenSize();
  const [ready, setReady] = useState(false);
  const [inViewAmount, setInViewAmount] = useState(0.3);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    if (screen.width > 0) {
      setInViewAmount(screen.width > 1024 ? 0.5 : 0.1);
      setReady(true);
    }
  }, [screen.width]);

  const isInView1 = useInView(ref1, {
    once: true,
    amount: inViewAmount,
  });

  const isInView2 = useInView(ref2, {
    once: true,
    amount: inViewAmount,
  });

  const isInView3 = useInView(ref3, { once: true, amount: inViewAmount });

  const imageVariant = {
    hidden: { opacity: 0, x: screen.width > 1024 ? -100 : -1 },
    show: {
      opacity: 1,
      x: 0,
      transition: { delay: 0, duration: 0.5, ease: easeOut },
    },
  };

  const contentVariant = {
    hidden: { opacity: 0, x: screen.width > 1024 ? 200 : 1 },
    show: {
      opacity: 1,
      x: 0,
      transition: { delay: 0, duration: 0.5, ease: easeOut },
    },
  };

  if (!ready) return null;

  return (
    <section className="bl_looking_ahead my-36">
      <div className="container container-small">
        <motion.div
          ref={ref3}
          variants={fadeInVariant}
          initial="initial"
          animate={isInView3 ? "animate" : ""}
        >
          <h2
            className="text-center mb-4"
            style={{ color: `var(--text-blue)` }}
          >
            Mit Blick nach vorn
          </h2>
        </motion.div>

        <div className="flex gap-[60px] flex-col lg:flex-row">
          <motion.div
            className="flex-1"
            ref={ref1}
            initial="hidden"
            animate={isInView1 ? "show" : ""}
            variants={imageVariant}
          >
            <p className="mb-6 text-justify">
              Während wir weiter wachsen, bleibt unser Fokus auf Innovation und
              Kundenerfolg unverändert. Wir gestalten transformative digitale
              Lösungen für Unternehmen in unterschiedlichsten Branchen und
              erweitern kontinuierlich die Grenzen des Möglichen in der
              Technologie.
            </p>
            <p>
              Bei BharathaTechno entwickeln wir nicht nur Software - wir formen
              die digitale Zukunft.
            </p>
          </motion.div>

          <motion.div
            className="flex-2 flex justify-center items-center"
            ref={ref2}
            initial="hidden"
            animate={isInView2 ? "show" : ""}
            variants={contentVariant}
          >
            <Image
              src="/images/about/team.webp"
              alt="BharathaTechno Team"
              width={600}
              height={264}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
