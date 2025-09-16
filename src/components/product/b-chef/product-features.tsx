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
                  src="/images/product/dish-management.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Dish, beverage, & category management</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-3`}>
                <Image
                  src="/images/product/promotions.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Coupons, promotions, and blog control</p>
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
                  src="/images/product/transactions.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Transactions, tax, & delivery settings</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-6`}>
                <Image
                  src="/images/product/customer-data.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>User management & enquiry handling</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-7`}>
                <Image
                  src="/images/product/admin-panel.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Homepage banner & content editor</p>
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
                <p>Menu browsing with filters, tags, slots & category</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-3`}>
                <Image
                  src="/images/product/detailed-product.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Product page with  details, description, and media</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-4`}>
                <Image
                  src="/images/product/add-to-cart.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Add to cart with pickup/delivery time selection</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-5`}>
                <Image
                  src="/images/product/address-input.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Cart with address, cost breakdown, and edit options</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-6`}>
                <Image
                  src="/images/product/dish-management.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Secure checkout with payment (Stripe, Razorpay)</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-7`}>
                <Image
                  src="/images/product/testimonials-blogs.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Wishlist, saved addresses, and responsive design</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
