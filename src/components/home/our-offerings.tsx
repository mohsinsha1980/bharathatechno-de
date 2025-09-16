"use client";
import OfferingItem from "./offering-item";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { SERVICES } from "@/lib/const";
import { useRef } from "react";

export default function OurOffering() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2, delayChildren: 1 },
    },
  };

  const items = {
    hidden: { opacity: 0, top: 20 },
    show: { opacity: 1, top: 0 },
  };

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
    <section className="bl_offerings">
      <div className="container container-small">
        <motion.div
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          <h2
            className="mb-10 text-center"
            style={{ color: `var(--text-blue)` }}
          >
            Our Offerings
          </h2>
        </motion.div>

        <motion.div
          className="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 gap-[30px] gap-[10px] lg:gap-[60px] bl_offering_list"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {SERVICES.map((service) => (
              <motion.div
                variants={items}
                className="relative"
                key={service.id}
              >
                <OfferingItem
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
