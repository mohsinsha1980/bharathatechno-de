"use client";
import { useInView, motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const fadeInVariant = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

export default function CaseStudiesContact() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, amount: 0.1 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.1 });

  return (
    <section className="bl_contact mb-[150px]">
      <div className="container container-smallest text-center">
        <motion.div
          ref={ref1}
          variants={fadeInVariant}
          initial="initial"
          animate={isInView1 ? "animate" : ""}
        >
          <p className="mb-[20px]">
            Diese Projekte spiegeln unser Engagement für maßgeschneiderte
            digitale Lösungen wider. Bei BharathaTechno erweitern wir konsequent
            die Grenzen der Technologie, für unsere Kunden überzeugende und
            nachhaltige digitale Erlebnisse zu schaffen.
          </p>
          <div className="mb-[60px]">
            <Link href="/contact" className="link-btn">
              Jetzt kontaktieren
            </Link>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          variants={fadeInVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          <q>
            Entdecken Sie, wie unsere Expertise Ihr Unternehmen transformieren
            kann. Kontaktieren Sie uns noch heute, um Ihr Projekt mit uns zu
            besprechen!
          </q>
        </motion.div>
      </div>
    </section>
  );
}
