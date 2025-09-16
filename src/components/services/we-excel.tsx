"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import HashCard from "./hash-card";
import { ServiceExcelType } from "@/lib/types";
import { useRef } from "react";

export default function WeExcel({
  title,
  list,
}: {
  title: string;
  list: ServiceExcelType[];
}) {
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
    <section className="bl_excel">
      <div className="container container-medium">
        <motion.h3
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          {title}
        </motion.h3>
        <div className="">
          <motion.div
            className="bl_excel_list"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {list.map((item) => (
                <motion.div variants={items} className="relative" key={item.id}>
                  <HashCard key={item.id} {...item} />
                </motion.div>
              ))}
            </AnimatePresence>{" "}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
