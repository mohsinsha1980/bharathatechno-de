"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInVariant = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

export default function OurJourney() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, amount: 0.1 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.1 });

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
    <section className="bl_journey">
      <div className="my-20">
        <motion.div
          className="my-2 lg:my-10"
          ref={ref1}
          variants={fadeInVariant}
          initial="initial"
          animate={isInView1 ? "animate" : ""}
        >
          <h2
            className="mb-10 text-center"
            style={{ color: `var(--text-orange)` }}
          >
            Our Journey
          </h2>
        </motion.div>

        {/* <div className="bl_route">
          <div className="absolute left-0 top-[30px]">
            <Image
              src="/images/about/mark-1.png"
              alt=""
              width={158}
              height={207}
            />
          </div>
          <RouteSvg />
        </div> */}
        <div className="container">
          <motion.div
            className="bl_journey_steps"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              <motion.span variants={items} key={`journey-1`}>
                <div className="bl_journey_step blue">
                  <label>November 2023</label>
                  <p>
                    BharathaTechno IT Private Limited was founded as one of the
                    emerging IT companies in Pune, marking the beginning of our
                    exciting and thriving journey in the tech industry.
                  </p>
                </div>
              </motion.span>
              <motion.span variants={items} key={`journey-2`}>
                <div className="bl_journey_step blue">
                  <label>December 2023</label>
                  <p>
                    We proudly launched Shred-n-Shape, our first major project,
                    a fitness-focused responsive web app. This milestone
                    solidified our place among promising digital web solutions
                    providers.
                  </p>
                </div>
              </motion.span>
              <motion.span variants={items} key={`journey-3`}>
                <div className="bl_journey_step blue">
                  <label>January 2024</label>
                  <p>
                    Achieved recognition under the Startup India initiative
                    (DIPP154250), validating our innovative approach and growth
                    mindset within Pune&apos;s emerging IT startup ecosystem.
                  </p>
                </div>
              </motion.span>
              <motion.span variants={items} key={`journey-4`}>
                <div className="bl_journey_step blue">
                  <label>August 2024</label>
                  <p>
                    Successfully launched the Nikita&apos;s Curry Corner web
                    app, marking our strategic entry into the food-tech domain
                    and reinforcing our expertise in delivering niche,
                    industry-specific web IT solutions.
                  </p>
                </div>
              </motion.span>
              <motion.span variants={items} key={`journey-5`}>
                <div className="bl_journey_step blue">
                  <label>September 2024</label>
                  <p>
                    Since then, we marked a significant milestone, built a
                    strong, talented team, and expanded our services by
                    integrating advanced SEO strategies to boost digital
                    visibility for clients across domains.
                  </p>
                </div>
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>
        <motion.div
          className="my-2 lg:my-10"
          ref={ref2}
          variants={fadeInVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
        >
          <div className="container container-small text-center">
            <p>
              September 2024 marked a significant milestone in
              BharathaTechno&apos;s journey as we expanded our portfolio with a
              diverse range of projects. Our team delved into advanced Search
              Engine Optimization (SEO) strategies, enhancing online visibility
              for multiple clients across various industries. We also launched
              several cutting-edge websites and web applications, each tailored
              to meet unique business needs and user expectations. Additionally,
              our product development initiatives gained momentum, with
              innovative solutions in the pipeline set to revolutionize market
              segments. These projects not only showcased our technical prowess
              in MERN and MEAN stack development but also highlighted our
              ability to deliver comprehensive digital solutions that drive
              business growth and user engagement
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
