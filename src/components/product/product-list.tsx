"use client";
import { PRODUCT } from "@/lib/const";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./product-card";

export default function ProductList() {
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
    <section id="services-list" className="bl_services_list">
      <div className="container container-small">
          <motion.div
            className="grid xl:grid-cols-4 grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {PRODUCT.map((service) => (
                <motion.div
                  variants={items}
                  className="relative"
                  key={service.id}
                >
                  <ProductCard key={service.id} data={service} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
      </div>
    </section>
  );
}
