"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BannerContent() {
  const text1 = "Why Choose React Native App Development Company for Your Business?";

  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.05 + 1, duration: 1 },
    }),
  };


  const letters = text1.split("");
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  return (
    <div className="content">
      <h1 className="mb-4 lg:mb-16 text-center lg:text-left">
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
      </h1>
    </div>
  );
}
