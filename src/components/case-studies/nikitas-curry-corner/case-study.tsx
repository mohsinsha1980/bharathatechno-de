"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import NikitasImage from "./image";
import NikitasContent from "./content";
import useScreenSize from "@/hooks/useScreenSize";
import { easeOut } from "popmotion";

export default function NikitasCurryCorner() {
  const screen = useScreenSize();
  const [ready, setReady] = useState(false);
  const [inViewAmount, setInViewAmount] = useState(0.3);

  const ref1 = useRef(null);
  const ref2 = useRef(null);

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
    <>
      <motion.div
        className="bl_image"
        ref={ref1}
        initial="hidden"
        animate={isInView1 ? "show" : ""}
        variants={imageVariant}
      >
        <NikitasImage />
      </motion.div>
      <motion.div
        className="bl_content"
        ref={ref2}
        initial="hidden"
        animate={isInView2 ? "show" : ""}
        variants={contentVariant}
      >
        <NikitasContent />
      </motion.div>
    </>
  );
}
