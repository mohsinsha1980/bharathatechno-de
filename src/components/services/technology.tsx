"use client";
import { ServiceTechnologiesType } from "@/lib/types";
import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

export default function Technology({
  title,
  description,
  tech,
}: ServiceTechnologiesType) {
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

  return (
    <section className="bl_technologies mt-[100px] mb-[100px]">
      <div className="container container-medium">
        <motion.div
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          <h3 className="mb-[20px]">{title}</h3>
          {description ? (
            <p className="text-center pb-4">{description}</p>
          ) : null}
        </motion.div>

        <div className="">
          <motion.div
            className="flex gap-[48px] justify-center items-center lg:items-stretch flex-col lg:flex-row"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {tech.map((tech_stack) => (
                <motion.div
                  variants={items}
                  className="bl_tech_stack"
                  key={tech_stack.id}
                >
                  <h4>{tech_stack.title}</h4>
                  {tech_stack.description ? (
                    <p className="pb-2">{tech_stack.description}</p>
                  ) : null}
                  <ul>
                    {tech_stack.list.map((item, index) => (
                      <li key={`${item}_${index}`}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
