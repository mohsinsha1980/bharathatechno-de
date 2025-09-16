"use client";
import Summary from "@/components/services/summary";
import { BFIT_CASE_STUDY, PRODUCT_BFIT, PRODUCT_BFIT_EXCEL } from "@/lib/const";
import Features from "@/components/services/features";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import ProductBanner from "@/components/product/banner";
import ProductUSP from "@/components/product/usp";
import ProductFeatures from "@/components/product/b-fit/product-features";
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
      <ProductBanner data="Complete Fitness Personal Trainer Software for Coaches to Sell Programs, Workouts, and Nutrition Plans Online"/>
      <Summary>
        <motion.h2
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          B-Fit
        </motion.h2>

        <motion.div
          ref={ref3}
          variants={fadeVariant}
          initial="initial"
          animate={isInView3 ? "animate" : ""}
          className="text-center"
        >
          <p>#Web Platform for Selling Fitness Transformation Plans.</p>
        </motion.div>
      </Summary>
      <motion.div
        ref={ref4}
        variants={fadeVariant}
        initial="initial"
        animate={isInView4 ? "animate" : ""}
        className="container container-small"
      >
        <h4>Product Overview </h4>
        <p>
          B-FIT is a complete fitness personal trainer software that helps
          coaches and trainers sell programs, workout guides, and nutrition
          plans online. It automates the client journey with secure access,
          e-commerce, and content delivery, enabling fitness professionals to
          grow their business independently.
        </p>
      </motion.div>
      <Features data={PRODUCT_BFIT} />
      <ProductUSP description="B-FIT gives fitness and wellness entrepreneurs a system to sell digital plans and manage customers through one central platform, branded to their business, commission-free, and independent from external marketplaces." />

      <ProductFeatures />
      <CaseStudy data={BFIT_CASE_STUDY} />
      <WeExcel title="Results" list={PRODUCT_BFIT_EXCEL} />
    </article>
  );
}
