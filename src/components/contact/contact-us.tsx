"use client";
import { OFFICE_LOCATION } from "@/lib/const";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import OfficeInfo from "./address-info";
import EmbeddedMap from "./map";

export default function ContactUs() {
  const pullupVariant = {
    initial: { y: 5, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  const fadeVariant = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1,
      },
    },
  };

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  // const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  // const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  return (
    <section className="bl_contact_us mb-[150px]">
      <div className="container container-small">
        <motion.h3
          ref={ref1}
          variants={pullupVariant}
          initial="initial"
          animate={isInView1 ? "animate" : ""}
          className="text-center mb-4"
        >
          Kontaktieren Sie uns
        </motion.h3>
        <motion.p
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
          className="text-center mb-15"
        >
          Benötigen Sie Unterstützung? Senden Sie uns eine Nachricht über die
          angegebenen Kontaktdaten oder das Formular, <br /> und wir werden uns
          umgehend bei Ihnen melden!
        </motion.p>

        <motion.div
          ref={ref4}
          variants={fadeVariant}
          initial="initial"
          animate={isInView4 ? "animate" : ""}
        >
          <div className="space-y-12">
            {OFFICE_LOCATION.map((office, index) => (
              <div
                key={office.country}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={office.mapPosition === "right" ? "md:order-2" : ""}
                >
                  <OfficeInfo office={office} />
                </div>

                <div
                  className={office.mapPosition === "right" ? "md:order-1" : ""}
                >
                  <EmbeddedMap
                    embedMapUrl={office.embedMapUrl}
                    city={office.city}
                    position={office.mapPosition}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
