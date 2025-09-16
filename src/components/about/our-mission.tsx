"use client";

import { motion, useInView } from "framer-motion";
import OurMissionIcon from "./our-mission-icon";
import { useRef } from "react";

const fadeInVariant = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 1,
    },
  },
};

export default function OurMission() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <section className="bl_our_mission">
      <div className="container">
        <div className="flex items-center gap-0 lg:gap-40 flex-col lg:flex-row">
          <motion.div
            className="my-2 lg:my-10"
            ref={ref1}
            variants={fadeInVariant}
            initial="initial"
            animate={isInView1 ? "animate" : ""}
          >
            <OurMissionIcon />
            <h2 className="whitespace-nowrap">Our Mission</h2>
          </motion.div>

          <motion.div
            className="my-10"
            ref={ref2}
            variants={fadeInVariant}
            initial="initial"
            animate={isInView2 ? "animate" : ""}
          >
            <h3 className="text-[24px]">
              At BharathaTechno, we are on a mission to empower businesses
              through cutting-edge technology. Whether you&apos;re a startup or an
              established brand, we deliver end-to-end IT solutions that align
              with your vision. From UI/UX design to deployment, our team
              ensures every project is built to scale, perform, and inspire.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
