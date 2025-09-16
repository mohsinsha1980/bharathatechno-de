"use client";
import { ServiceFeaturesType } from "@/lib/types";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ServicesFeatures({
  data,
}: {
  data: ServiceFeaturesType;
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
  const ref3 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, {
    once: true,
    amount: 0.1,
  });
  return (
    <section className="bl_services_features mt-[100px] mb-[100px]">
      <div className="container container-medium">
        <motion.h3
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          {data.title}
        </motion.h3>

        {data.rows.map((row) => (
          <div key={row.id}>
            {row.title ? (
              <motion.h4
                ref={ref3}
                variants={pullupVariant}
                initial="initial"
                animate={isInView3 ? "animate" : ""}
                key={row.id}
              >
                {row.title}
              </motion.h4>
            ) : null}
            <motion.div
              className="bl_cards"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <AnimatePresence>
                {row.list.map((tile) => (
                  <motion.div
                    variants={items}
                    className="bl_card"
                    key={tile.id}
                  >
                    <h5>{tile.title}</h5>
                    <p>{tile.description}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            {row.description ? <p className="text-center">{row.description}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
