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
      <ProductBanner data="Empower Your Food Business with a Cloud Kitchen Website for Seamless Delivery and Customer Engagement" />
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
          <p>#Online Ordering Platform for Home Chefs and Cloud Kitchens</p>
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
          B-CHEF is a website solution for chefs, cafés, and food entrepreneurs
          to grow their digital presence. From cloud kitchens to personal
          brands, it helps you connect directly with customers, reduce reliance
          on third-party apps, and scale your business. With a clean,
          user-friendly design and powerful food delivery software, B-CHEF makes
          your culinary journey more visible, professional, and impactful.
        </p>
      </motion.div>
      <Features data={PRODUCT_BCHEF} />
      <ProductUSP description="B-CHEF provides a user-friendly ordering website that allows food businesses to showcase their menus, gather orders, process payments, and manage availability—all without depending on third-party apps or delivery services." />

      <ProductFeatures />
      <CaseStudy data={BCHEF_CASE_STUDY} />
      <WeExcel title="Results" list={PRODUCT_BCHEF_EXCEL} />
    </article>
  );
}
