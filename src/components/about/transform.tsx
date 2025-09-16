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
      delay: 0,
      duration: 1,
    },
  },
};

export default function Transform() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, amount: 0.1 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.1 });
  const isInView3 = useInView(ref3, { once: true, amount: 0.1 });
  return (
    <section className="bl_transform mb-40">
      <div className="container container-small">
        <motion.div
          className="my-2 lg:my-10"
          ref={ref1}
          variants={fadeInVariant}
          initial="initial"
          animate={isInView1 ? "animate" : ""}
        >
          <h2
            className="text-center mb-4 small"
            style={{ color: `var(--text-orange)` }}
          >
            Ready to transform your digital presence
          </h2>
        </motion.div>

        <motion.div
          className="my-2 lg:my-10"
          ref={ref2}
          variants={fadeInVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          <p className="text-center mb-6">
            Connect with our management team to discuss
            <br />
            how we can bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          className="my-2 lg:my-10"
          ref={ref3}
          variants={fadeInVariant}
          initial="initial"
          animate={isInView3 ? "animate" : ""}
        >
          <div className="text-center">
            <Link href="/contact" className="link-btn">
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
