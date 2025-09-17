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
            Unsere Philosophy
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
            Bei BharathaTechno sind wir überzeugt, dass großartige Führung mehr
            ist als technisches
            <br />
            Know-how oder unternehmerisches Geschick. Es geht vielmehr darum:
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
                  Wir treiben die Grenzen der Web- und MobileApp-Entwicklung
                  stetig voran und setzen neue Maßstäbe für Innovation und
                  Performance.
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
                <h3>Kundenorientierter Ansatz</h3>
                <p>
                  Wir stellen die Bedürfnisse unserer Kunden in den Mittelpunkt
                  unseres Handelns
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
                <h3>Zusammenarbeit</h3>
                <p>
                  Wir fördern ein Teamumfeld, in dem Kreativität und Expertise
                  zusammenkommen, um außergewöhnliche Ergebnisse zu erzielen.
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
                <h3>Kontinuierliches lernen</h3>
                <p>
                  Bei uns entstehen innovative Lösungen durch kontinuierliches
                  Lernen und die stetige Weiterentwicklung unseres Wissens und
                  unserer Fähigkeiten.
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
            “Unter der Führung von Mohsin, Rajesh und Kourosh schafft
            <br />
            BharathaTechno nicht einfach Software, sondern gestaltet digitale
            <br />
            Zukunftslösungen und baut langfristige Partnerschaften <br /> mit
            unseren Kunden auf.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
