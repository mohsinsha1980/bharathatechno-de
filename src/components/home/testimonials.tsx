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
            Kundenstimmen
          </h2>
          <p className="text-big text-center">
            Bei Bharatha Techno sind die Erfolgsgeschichten unserer Kunden der
            beste Beweis für unser Engagement für höchste Qualität. Wir liefern
            Lösungen, die Erwartungen übertreffen und nachhaltige Wirkung
            erzielen. Lesen Sie, was einige unserer geschätzten Kunden über die
            Zusammenarbeit mit uns sagen:
          </p>
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
}
