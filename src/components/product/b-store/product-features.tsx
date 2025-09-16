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
                <p>Central dashboard for orders, revenue, and reports.</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-4`}>
                <Image
                  src="/images/product/inventory-management.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Product & category management </p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-7`}>
                <Image
                  src="/images/product/admin-panel.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Homepage editor for banners, offers, and highlights</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-5`}>
                <Image
                  src="/images/product/inventory.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>
                  Inventory, coupon, review, gallery, enquiry & support tools.
                </p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-8`}>
                <Image
                  src="/images/product/transactions.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Custom settings: tax, sizes, colors, materials, & more</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-6`}>
                <Image
                  src="/images/product/admin-user.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>
                  Transaction tracking, email subscriptions, and admin-level
                  addresses.
                </p>
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
                  src="/images/product/filter.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>
                  User-responsive browsing with filters, search, and wishlist
                </p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-2`}>
                <Image
                  src="/images/product/security.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Secure checkout (Razorpay, Stripe, or etc)</p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-3`}>
                <Image
                  src="/images/product/track-order.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>
                  Account management, track orders, and initiate transactions
                </p>
              </motion.div>

              <motion.div variants={items} className="bl_card" key={`feat-4`}>
                <Image
                  src="/images/product/detailed-product.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <p>Detailed product view with media and description</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
