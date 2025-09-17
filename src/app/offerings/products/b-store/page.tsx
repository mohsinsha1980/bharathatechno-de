"use client";
import Summary from "@/components/services/summary";
import {
  BSTORE_CASE_STUDY,
  PRODUCT_BSTORE,
  PRODUCT_BSTORE_EXCEL,
} from "@/lib/const";
import Features from "@/components/services/features";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import ProductBanner from "@/components/product/banner";
import ProductUSP from "@/components/product/usp";
import ProductFeatures from "@/components/product/b-store/product-features";
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
      <ProductBanner data="B-STORE – Eine vielseitige E-Commerce-Plattform zur Verwaltung und zum Ausbau Ihres Online-Geschäfts" />
      <Summary>
        <motion.h2
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          B-Store
        </motion.h2>

        <motion.div
          ref={ref3}
          variants={fadeVariant}
          initial="initial"
          animate={isInView3 ? "animate" : ""}
          className="text-center"
        >
          <p>#Ganzheitliche E-Commerce-Lösung für den Onlinehandel</p>
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
          B-Store ist eine skalierbare Plattform für Onlinehändler aller
          Branchen. Sie gibt Marken die volle Kontrolle, um ihre Onlineshops zu
          gestalten, zu verwalten und nachhaltig auszubauen. Als moderne
          E-Commerce-Lösung stärkt sie die Kundenbindung und fördert
          langfristiges Wachstum.
        </p>
      </motion.div>
      <Features data={PRODUCT_BSTORE} />
      <ProductUSP
        description={`B-Store ermöglicht Onlinehändlern den Betrieb eines unabhängigen Shops - mit voller
Administrationskontrolle, ohne Plattformgebühren und ausgestattet mit allen Tools für
Lagerverwaltung, Zahlungen, Retouren und Kundenzufriedenheit. <br/>
Die Plattform dient als umfassende Lösung zum Verkauf von Produkten und ist besonders auf
typische E-Commerce-Bereiche wie Mode, Beauty, Lifestyle und Alltagswaren zugeschnitten.`}
      />

      <ProductFeatures />
      <CaseStudy data={BSTORE_CASE_STUDY} />
      <WeExcel title="Results" list={PRODUCT_BSTORE_EXCEL} />
    </article>
  );
}
