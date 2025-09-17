"use client";
import { useInView, motion } from "framer-motion";
import { Globe, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

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
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
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
          className="text-center mb-10"
        >
          Benötigen Sie Unterstützung? Senden Sie uns eine Nachricht über die
          angegebenen Kontaktdaten oder das Formular, <br /> und wir werden uns
          umgehend bei Ihnen melden!
        </motion.p>

        <motion.div
          ref={ref3}
          variants={fadeVariant}
          initial="initial"
          animate={isInView3 ? "animate" : ""}
        >
          <div className="flex gap-[20px] text-center contact_methods mb-10">
            <div className="flex-1">
              <Link href="mailto:tbd@bharathatechno.de">
                <span>
                  <Mail />
                </span>
                tbd@bharathatechno.de
              </Link>
            </div>
            <div className="flex-1">
              <Link href="tel:+919420655627">
                <span>
                  <Phone />
                </span>
                +91 942 065 5627
              </Link>
            </div>
            <div className="flex-1">
              <Link
                href="https://https://www.bharathatechno.de/"
                target="_blank"
              >
                <span>
                  <Globe />
                </span>
                https://www.bharathatechno.de/
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref4}
          variants={fadeVariant}
          initial="initial"
          animate={isInView4 ? "animate" : ""}
        >
          <div className="rounded-[20px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.6486359819146!2d73.91437727592636!3d18.454255771195115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eba952eb29fd%3A0x1fd1cfdcdf9f0974!2sBharathaTechno%20IT%20Private%20Limited!5e0!3m2!1sen!2sin!4v1740480008318!5m2!1sen!2sin"
              width="450"
              height="500"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
