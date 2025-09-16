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
      <ProductBanner data="B-STORE - A Versatile E-Commerce Platform to Manage and Grow Your Online Business"/>
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
          <p>Full Stack E-Commerce Platform for Fashion - Beauty Brands</p>
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
          B-STORE is a scalable e-commerce platform for fashion, beauty, and
          home décor. It empowers brands with full control to design, manage,
          and grow their online stores. As a modern fashion e-commerce website
          solution, it drives customer loyalty and sustainable growth.
        </p>
      </motion.div>
      <Features data={PRODUCT_BSTORE} />
      <ProductUSP description="B-STORE allows boutique fashion and beauty related sellers to operate an independent online store with complete admin control, without platform commissions, and with all the tools needed for managing inventory, payments, returns, and customer satisfaction. It serves as a comprehensive website for selling products, tailored especially for fashion ecommerce websites." />

      <ProductFeatures />
      <CaseStudy data={BSTORE_CASE_STUDY} />
      <WeExcel title="Results" list={PRODUCT_BSTORE_EXCEL} />
    </article>
  );
}
