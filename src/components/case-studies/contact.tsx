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
            These projects show our commitment to tailored digital solutions. At
            BharathaTechno, we push technology&apos;s limits to deliver impactful
            client experiences.
          </p>
          <div className="mb-[60px]">
            <Link href="/contact" className="link-btn">
              Contact Us
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
            Explore how our expertise can transform your business. Reach out
            today to discuss your project ideas with us!
          </q>
        </motion.div>
      </div>
    </section>
  );
}
