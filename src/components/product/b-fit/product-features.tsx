"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ProductFeatures() {
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
  const ref3 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, {
    once: true,
    amount: 0.3,
  });
  return (
    <section className="bl_product_features mt-[100px] mb-[100px]">
      <div className="container container-medium">
        <motion.h3
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          Key Features
        </motion.h3>

        <div>
          <motion.h4
            ref={ref3}
            variants={pullupVariant}
            initial="initial"
            animate={isInView3 ? "animate" : ""}
          >
            For Admins
          </motion.h4>
          <motion.div
            className="bl_cards"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              <motion.div variants={items} className="bl_card" key={`feat-1`}>
                <Image
                  src="/images/product/real-time-dashboard.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Real-time dashboard for orders & revenue</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-2`}>
                <Image
                  src="/images/product/product.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Product & category management</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-3`}>
                <Image
                  src="/images/product/testimonial.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Testimonials, blog, & content control</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-4`}>
                <Image
                  src="/images/product/inventory-management.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Inventory tracking & availability toggles</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-5`}>
                <Image
                  src="/images/product/coupons-promotions.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Coupon & promotion management</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-6`}>
                <Image
                  src="/images/product/customer-data.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Customer data, enquiries, and transaction logs</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-7`}>
                <Image
                  src="/images/product/admin-panel.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Homepage banner, content, & CTA editor</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <div>
          <motion.h4
            ref={ref3}
            variants={pullupVariant}
            initial="initial"
            animate={isInView3 ? "animate" : ""}
          >
            For Users
          </motion.h4>
          <motion.div
            className="bl_cards"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              <motion.div variants={items} className="bl_card" key={`feat-1`}>
                <Image
                  src="/images/product/home-page.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Homepage with program/product previews & CTA banners</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-2`}>
                <Image
                  src="/images/product/filter.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Filterable product browsing (goal, type, duration)</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-3`}>
                <Image
                  src="/images/product/detailed-product.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Detailed product view with media and description</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-4`}>
                <Image
                  src="/images/product/add-to-cart.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Add to cart with delivery or digital access flow</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-5`}>
                <Image
                  src="/images/product/address-input.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Cart with address input, breakdown, & secure checkout</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-6`}>
                <Image
                  src="/images/product/wishlist.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Wishlist, saved addresses, & user-responsive layout</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-7`}>
                <Image
                  src="/images/product/testimonials-blogs.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Testimonials, transformations, & blog for authority.</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
