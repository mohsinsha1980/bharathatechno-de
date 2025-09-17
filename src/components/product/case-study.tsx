import useScreenSize from "@/hooks/useScreenSize";
import { ProductCaseStudy } from "@/lib/types";
import { useInView, motion } from "framer-motion";
import { easeOut } from "popmotion";
import { useEffect, useRef, useState } from "react";

export default function CaseStudy({ data }: { data: ProductCaseStudy }) {
  const screen = useScreenSize();
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

  const [ready, setReady] = useState(false);
  const [inViewAmount, setInViewAmount] = useState(0.3);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

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

  const isInView3 = useInView(ref3, {
    once: true,
    amount: inViewAmount,
  });

  const isInView4 = useInView(ref4, {
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
    <article className="bl_product_case_study container">
      <motion.h1
        ref={ref3}
        variants={pullupVariant}
        initial="initial"
        animate={isInView3 ? "animate" : ""}
      >
        Praxisbeispiel: <span>{data.title}</span>
      </motion.h1>

      <motion.div
        ref={ref4}
        variants={fadeVariant}
        initial="initial"
        animate={isInView4 ? "animate" : ""}
        className="bl_details container container-medium"
      >
        <p>
          <strong>Kunde:</strong> {data.client}
        </p>
        <p>
          <strong>Branche:</strong> {data.industry}
        </p>
        <p>
          <strong>Praxisanwendung:</strong> {data.use}
        </p>
      </motion.div>

      <div className="bl_platform">
        <motion.div
          className="bl_before"
          ref={ref1}
          initial="hidden"
          animate={isInView1 ? "show" : ""}
          variants={imageVariant}
        >
          <h3>Vor der Plattform:</h3>
          <p>{data.before}</p>
        </motion.div>
        <motion.div
          className="bl_after"
          ref={ref2}
          initial="hidden"
          animate={isInView2 ? "show" : ""}
          variants={contentVariant}
        >
          <h3>Nach dem Launch:</h3>
          <p>{data.after}</p>
        </motion.div>
      </div>
    </article>
  );
}
