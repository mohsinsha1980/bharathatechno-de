"use client";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { ServiceTypeDetailsType } from "../../lib/types";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import useScreenSize from "@/hooks/useScreenSize";

export default function DetailsAccordion({
  items,
}: {
  items: ServiceTypeDetailsType[];
}) {
  const screen = useScreenSize();

  const fadeVariant = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        // delay: 1,
        duration: 1,
      },
    },
  };

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, {
    once: true,
    amount: screen.width > 1024 ? 0.8 : 0.1,
  });

  return (
    <section className="bl_service_details mt-[100px] mb-[100px]">
      <div className="container container-medium">
        <Accordion allowZeroExpanded>
          {items.map((item) => (
            <motion.div
              ref={ref3}
              variants={fadeVariant}
              initial="initial"
              animate={isInView3 ? "animate" : ""}
              className="text-left"
              key={item.id}
            >
              <AccordionItem key={item.id}>
                <AccordionItemHeading>
                  <AccordionItemButton>{item.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                </AccordionItemPanel>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
