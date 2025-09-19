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
            className="my-5 lg:my-10"
            ref={ref2}
            variants={fadeInVariant}
            initial="initial"
            animate={isInView2 ? "animate" : ""}
          >
            <h3 className="text-[16px] lg:text-[24px]">
              Bei BharathaTechno treiben wir Unternehmen mit modernster
              Technologie voran. Ob Start-up oder etabliertes Unternehmen - wir
              liefern maßgeschneiderte End-to-End-IT-Lösungen, die Ihre Vision
              Wirklichkeit werden lassen. Von UI/UX-Design bis zur Umsetzung
              sorgt unser Team dafür, dass jedes Projekt zukunftssicher,
              leistungsstark und überzeugend ist.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
