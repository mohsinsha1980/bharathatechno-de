"use client";
import { useInView, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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

export default function OurPhilosophy() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, amount: 0.1 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.1 });
  const isInView3 = useInView(ref3, { once: true, amount: 0.1 });

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

  return (
    <section className="bl_philosophy my-20">
      <div className="container">
        <motion.div
          className="my-2 lg:my-10"
          ref={ref1}
          variants={fadeInVariant}
          initial="initial"
          animate={isInView1 ? "animate" : ""}
        >
          <h2
            className="text-center mb-4"
            style={{ color: `var(--text-orange)` }}
          >
            BharathaTechno&apos;s Philosophy
          </h2>
        </motion.div>

        <motion.div
          className="my-2 lg:my-10"
          ref={ref2}
          variants={fadeInVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          <p className="text-center">
            At BharathaTechno, we believe that great leadership is about more
            than
            <br />
            just technical know-how or business acumen. It&apos;s about:
          </p>
        </motion.div>

        <motion.div
          className="bl_philosophy_items grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-[30px] gap-[100px] my-30"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            <motion.span variants={items} key={`philosophy-1`}>
              <div className="bl_philosophy_item flex flex-col items-center text-center gap-4">
                <Image
                  src="/images/about/innovation.webp"
                  alt="Innovation"
                  width={160}
                  height={160}
                />
                <h3>Innovation</h3>
                <p>
                  Constantly pushing the boundaries of what&apos;s possible in
                  web &amp; mobile app development
                </p>
              </div>
            </motion.span>
            <motion.span variants={items} key={`philosophy-2`}>
              <div className="bl_philosophy_item flex flex-col items-center text-center gap-4">
                <Image
                  src="/images/about/client-centric-approach.webp"
                  alt="Client-Centric Approach"
                  width={160}
                  height={160}
                />
                <h3>Client-Centric Approach</h3>
                <p>
                  Putting our clients&apos; needs at the forefront of everything
                  we do
                </p>
              </div>
            </motion.span>
            <motion.span variants={items} key={`philosophy-3`}>
              <div className="bl_philosophy_item flex flex-col items-center text-center gap-4">
                <Image
                  src="/images/about/collaboration.webp"
                  alt="Collaboration"
                  width={160}
                  height={160}
                />
                <h3>Collaboration</h3>
                <p>
                  Fostering a team environment where creativity and expertise
                  combine to produce exceptional results
                </p>
              </div>
            </motion.span>
            <motion.span variants={items} key={`philosophy-4`}>
              <div className="bl_philosophy_item flex flex-col items-center text-center gap-4">
                <Image
                  src="/images/about/continuous-learning.webp"
                  alt="Continuous Learning"
                  width={160}
                  height={160}
                />
                <h3>Continuous Learning</h3>
                <p>
                  Staying ahead of the curve in the rapidly evolving tech
                  landscape
                </p>
              </div>
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="my-2 lg:my-10"
          ref={ref3}
          variants={fadeInVariant}
          initial="initial"
          animate={isInView3 ? "animate" : ""}
        >
          <p className="text-center highlight">
            “Under the guidance of Mohsin and Rajesh, BharathaTechno is not just
            <br />
            building software, we&apos;re crafting digital futures and
            cultivating lasting
            <br />
            partnerships with our clients.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
