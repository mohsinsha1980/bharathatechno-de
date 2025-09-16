"use client";
import { useInView, motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function ServicesContact({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
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

  const fadeVariant = {
    initial: { y: 10, opacity: 0 },
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
  const isInView3 = useInView(ref3, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <section className="bl_contact">
      <div className="container container-smallest">
        <motion.h3
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          {title}
        </motion.h3>

        <motion.div
          ref={ref3}
          variants={fadeVariant}
          initial="initial"
          animate={isInView3 ? "animate" : ""}
          className="text-center md:text-left"
        >
          <p>{description}</p>

          <div className="text-center">
            <Link href="/contact" className="link-btn">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
