"use client";
import { useRef } from "react";
import TestimonialSlider from "./testimonial-slider";
import { useInView, motion } from "framer-motion";

export default function Testimonials() {
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

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  return (
    <section className="bl_testimonials">
      <div className="container container-small">
        <motion.div
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          <h2
            className="mb-4 md:mb-10 text-center"
            style={{ color: `var(--text-blue)` }}
          >
            Testimonials
          </h2>
          <p className="text-big text-center">
            At BharathaTechno, our clients&apos; success stories are the true
            testament to our commitment to excellence. We take pride in
            delivering solutions that exceed expectations and create lasting
            impacts. Here&apos;s what some of our valued clients have to say
            about their experience working with us:
          </p>
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
}
