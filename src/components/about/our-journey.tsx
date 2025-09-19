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
            Unsere Erfolgsgeschichte
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
                    BharathaTechno IT Private Limited wurde als eines der
                    aufstrebenden IT-Unternehmen in Pune gegründet und markiert
                    den Beginn unserer spannenden und erfolgreichen Reise in der
                    Technologiebranche.
                  </p>
                </div>
              </motion.span>
              <motion.span variants={items} key={`journey-2`}>
                <div className="bl_journey_step blue">
                  <label>December 2023</label>
                  <p>
                    Mit Stolz präsentieren wir ,Shred-n-Shape - unser erstes
                    größeres Projekt, eine responsive Web-App rund um Fitness.
                    Dieser Meilenstein unterstreicht unsere Expertise und
                    festigt unsere Position als aufstrebender Anbieter
                    innovativer digitaler Weblösungen.
                  </p>
                </div>
              </motion.span>
              <motion.span variants={items} key={`journey-3`}>
                <div className="bl_journey_step blue">
                  <label>January 2024</label>
                  <p>
                    Wir erhielten Anerkennung im Rahmen der Start-up India
                    Initiative (DIPP154250), was unseren innovativen Ansatz und
                    unsere Wachstumsorientierung im aufstrebenden
                    ITStartup-Ökosystem von Pune bestätigt
                  </p>
                </div>
              </motion.span>
              <motion.span variants={items} key={`journey-4`}>
                <div className="bl_journey_step blue">
                  <label>August 2024</label>
                  <p>
                    Wir erhielten Anerkennung im Rahmen der Start-up India
                    Initiative (DIPP154250), was unseren innovativen Ansatz und
                    unsere Wachstumsorientierung im aufstrebenden
                    ITStartup-Ökosystem von Pune bestätigt
                  </p>
                </div>
              </motion.span>
              <motion.span variants={items} key={`journey-5`}>
                <div className="bl_journey_step blue">
                  <label>September 2024</label>
                  <p>
                    Wir haben bedeutende Meilensteine erreicht, ein starkes Team
                    aufgebaut und unser Leistungsspektrum erweitert, indem wir
                    fortschrittliche SEO-Strategien zur Steigerung der digitalen
                    Sichtbarkeit unserer Kunden integrieren.
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
              Im September 2024 erreichte BharathaTechno einen wichtigen
              Meilenstein: Wir erweiterten unser Portfolio um zahlreiche
              spannende Projekte. Unser Team setzte fortschrittliche
              SEO-Strategien ein, um die digitale Sichtbarkeit unserer Kunden
              aus unterschiedlichsten Branchen zu maximieren. Gleichzeitig
              lancierten wir mehrere hochmoderne Websites und Webanwendungen,
              die passgenau auf die individuellen Geschäftsanforderungen und
              Nutzererwartungen zugeschnitten sind. Unsere Produktentwicklungen
              gewannen an Fahrt: Mit innovativen Lösungen in der Pipeline setzen
              wir neue Impulse für verschiedene Marktsegmente. Diese Projekte
              zeigen nicht nur unsere technische Expertise in MERN- und
              MEAN-Stack-Entwicklung, sondern auch unsere Fähigkeit, umfassende
              digitale Lösungen zu liefern, die Geschäftswachstum fördern und
              Nutzer nachhaltig begeistern.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
