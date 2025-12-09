"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import useScreenSize from "@/hooks/useScreenSize";
import { ServiceTypeDetailsType } from "../../lib/types";

export default function DetailsAccordion({
  items,
}: {
  items: ServiceTypeDetailsType[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const screen = useScreenSize();

  const fadeVariant = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, {
    once: true,
    amount: screen.width > 1024 ? 0.8 : 0.1,
  });

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bl_service_details mt-[100px] mb-[100px]">
      <div className="container container-medium">
        <div className="accordion">
          {items.map((item) => (
            <motion.div
              key={item.id}
              ref={ref3}
              variants={fadeVariant}
              initial="initial"
              animate={isInView3 ? "animate" : ""}
              className="accordion__item"
            >
              <div className="accordion__heading">
                <button
                  className="accordion__button"
                  aria-expanded={openId === item.id}
                  onClick={() => toggle(item.id)}
                >
                  {item.heading}
                </button>
              </div>

              {openId === item.id && (
                <div className="accordion__panel">
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
