"use client";
import Summary from "@/components/services/summary";
import {
  BCHEF_CASE_STUDY,
  PRODUCT_BCHEF,
  PRODUCT_BCHEF_EXCEL,
} from "@/lib/const";
import Features from "@/components/services/features";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import ProductBanner from "@/components/product/banner";
import ProductUSP from "@/components/product/usp";
import ProductFeatures from "@/components/product/b-chef/product-features";
import WeExcel from "@/components/product/we-excel";
import CaseStudy from "@/components/product/case-study";

export default function ProductBFit() {
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
  const ref4 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });

  return (
    <article className="pg_product">
      <ProductBanner data="Stärken Sie Ihr Lebensmittelgeschäft mit einer Cloud-Kitchen-Website für reibungslose Lieferung und Kundenbindung" />
      <Summary>
        <motion.h2
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          B-Chef
        </motion.h2>

        <motion.div
          ref={ref3}
          variants={fadeVariant}
          initial="initial"
          animate={isInView3 ? "animate" : ""}
          className="text-center"
        >
          <p>#Digitale Ordering-Lösung für Gastronomie und Ghost Kitchens</p>
        </motion.div>
      </Summary>
      <motion.div
        ref={ref4}
        variants={fadeVariant}
        initial="initial"
        animate={isInView4 ? "animate" : ""}
        className="container container-small"
      >
        <h4>Produktübersicht</h4>
        <p>
          B-Chef ist eine Website-Lösung für Köche, Cafés und
          Food-Unternehmer:innen, die ihre digitale Präsenz ausbauen möchten.
          Von der Cloud Kitchen bis zur persönlichen Marke unterstützt B-Chef
          dabei, Kund:innen direkt zu erreichen, die Abhängigkeit von
          Drittanbieter-Apps zu reduzieren und das Geschäft zu skalieren. <br />{" "}
          Mit einem klaren, benutzerfreundlichen Design und leistungsstarker
          Food-Delivery-Software macht B-Chef die kulinarische Marke sichtbarer,
          professioneller und wirkungsvoller.
        </p>
      </motion.div>
      <Features data={PRODUCT_BCHEF} />
      <ProductUSP description="B-Chef bietet eine benutzerfreundliche Bestell-Website, mit der Food-Unternehmen ihre Menüs präsentieren,
Bestellungen entgegennehmen, Zahlungen abwickeln und die Verfügbarkeit verwalten können - alles ohne
Abhängigkeit von Drittanbieter-Apps oder Lieferdiensten." />

      <ProductFeatures />
      <CaseStudy data={BCHEF_CASE_STUDY} />
      <WeExcel title="Results" list={PRODUCT_BCHEF_EXCEL} />
    </article>
  );
}
