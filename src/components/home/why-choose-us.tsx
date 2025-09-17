"use client";
import Link from "next/link";
import BharathaIconAnimatedSm from "../common/animated-icons/bharatha-icon-sm";
import BharathaIconAnimatedXs from "../common/animated-icons/bharatha-icon-xs";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function WhyChooseUs() {
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
        delay: 1.5,
        duration: 1,
      },
    },
  };

  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <section className="bl_home_choose">
      <div className="container">
        <div className="flex w-full gap-[50px] lg:gap-[200px] items-center flex-col lg:flex-row">
          <div className="flex-1">
            <motion.h2
              ref={ref2}
              variants={pullupVariant}
              initial="initial"
              animate={isInView2 ? "animate" : ""}
            >
              So unterstüzuen wir Ihren Erfolg
            </motion.h2>

            <motion.div
              ref={ref3}
              variants={fadeVariant}
              initial="initial"
              animate={isInView3 ? "animate" : ""}
            >
              <h3>
                Bharatha Techno wurde aus der gemeinsamen Vision gegründet,
                Technologie gezielt für den Unternehmenserfolg unserer Klienten
                einzusetzen. Als international tätiger Anbieter
                maßgeschneiderter Webanwendungen und Unternehmenssoftware sowie
                individueller Personaldienstleistungen und Outsourcing-Lösungen
                unterstützen wir Unternehmen verschiedener Branchen dabei,
                Prozesse zu optimieren und Effizienz nachhaltig zu steigern. <br/>
                Unser Ansatz ist agil, erfüllt höchste Sicherheitsstandards und
                wird individuell auf die Anforderungen unserer Kunden
                zugeschnitten.
              </h3>
              <div className="action">
                <Link href="/about" className="link-btn">
                  Über uns
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="banner_logo xl:hidden lg:hidden">
            <BharathaIconAnimatedXs />
          </div>
          <div className="banner_logo hidden xl:block lg:block">
            <BharathaIconAnimatedSm />
          </div>
        </div>
      </div>
    </section>
  );
}
