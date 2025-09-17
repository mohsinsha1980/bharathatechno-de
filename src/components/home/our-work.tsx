"use client";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import OurWorkItem from "./our-work-item";
import { useRef } from "react";

export default function OurWork() {
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

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  return (
    <section className="bl_works">
      <div className="container">
        <motion.div
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          <h2
            className="mb-10 text-center"
            style={{ color: `var(--text-orange)` }}
          >
            Unsere Projekte
          </h2>
        </motion.div>

        <motion.div
          className="grid bl_work grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[30px] mb-[30px] md:mb-[60px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            <motion.div variants={items} className="relative" key="work_1">
              <OurWorkItem
                imageSrc="/images/home/trendy-threads-case-study.webp"
                label="#Fallstudie"
                title="Aufbau einer digitalen Lösung für eine Modemarke"
                list={["UI/UX-Design", "Entwicklung", "E-Commerce"]}
                link="/work"
              />
            </motion.div>

            <motion.div variants={items} className="relative" key="work_2">
              <OurWorkItem
                imageSrc="/images/home/shrednshape-case-study.webp"
                label="#Fallstudie"
                title="Entwerfen und entwickeln Sie eine Fitness-First-Plattform"
                list={["UI/UX-Design", "Entwicklung", "Web-App"]}
                link="/work"
              />
            </motion.div>
            <motion.div variants={items} className="relative" key="work_3">
              <OurWorkItem
                imageSrc="/images/home/urban-axis-study.webp"
                label="#Fallstudie"
                title="Entwicklung einer Website für urbane Ästhetik"
                list={["UI/UX-Design", "Entwicklung", "Responsive Design"]}
                link="/work"
              />
            </motion.div>

            <motion.div variants={items} className="relative" key="work_4">
              <OurWorkItem
                imageSrc="/images/home/nikitas-curry-corner-case-study.webp"
                label="#Fallstudie"
                title="Entwicklung einer Cloud-Kitchen-Plattform"
                list={["UI/UX-Design", "Entwicklung", "Web-App"]}
                link="/work"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="text-center">
          <Link href="/work" className="link-btn">
            Weitere Projekte
          </Link>
        </div>
      </div>
    </section>
  );
}
