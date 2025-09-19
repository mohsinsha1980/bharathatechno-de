"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutBannerContent() {
  const text1 = "Wir sind";
  // const text2 = `it resonates clearly.”`;

  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.05 + 1, duration: 1 },
    }),
  };

  const pullupVariant = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2,
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
        delay: 2.5,
        duration: 1,
      },
    },
  };

  const letters = text1.split("");
  // const splittedText = text2.split("");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  // const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <div className="content col-span-1 lg:col-span-2 heading">
      <p className="mb-4 lg:mb-10 text-center lg:text-left">
        <motion.span
          className="mb-4"
          ref={ref1}
          initial="hidden"
          animate={isInView1 ? "show" : ""}
          variants={variants}
          viewport={{ once: true }}
        >
          {letters.map((word, i) => (
            <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
              {word}
            </motion.span>
          ))}
        </motion.span>
        {/* <span className="highlight">it resonated clearly.&#8221;</span> */}
        <span className="highlight">
          <motion.span
            ref={ref2}
            variants={pullupVariant}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            BharathaTechno
          </motion.span>
        </span>
      </p>
      <motion.h1
        ref={ref3}
        variants={fadeVariant}
        initial="initial"
        animate={isInView3 ? "animate" : ""}
        className="text-center lg:text-left md:text-justify"
      >
        BharathaTechno, gegründet im November 2023 von Mohsin Shaikh und Rajesh
        Sivapalan, ist ein aufstrebendes IT-Unternehmen, das sich auf sichere
        und skalierbare Weblösungen sowie flexible Outsourcing-Lösungen
        spezialisiert hat. <br />
        Unter der Leitung von Kourosh Bagherian expandieren wir 2025 mit einer
        eigenständigen deutschen Gesellschaft nach Europa, um Ideen in
        leistungsstarke digitale Produkte zu verwandeln und unsere Kunden
        optimal zu unterstützen.
      </motion.h1>
    </div>
  );
}

// function BannerContentWords() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
//     }, 1 * 1000); // Convert duration to milliseconds
//     return () => clearInterval(interval);
//   }, []);

//   const WORDS = [
//     "resonates",
//     "delivers",
//     "communicates",
//     "performs",
//     "connects",
//     "responds",
//     "translates",
//     "acts",
//   ];

//   return (
//     <AnimatePresence>
//       {WORDS.map((text, index) => (
//         <motion.span
//           key={index}
//           className="inline-block"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {text}
//         </motion.span>
//       ))}
//     </AnimatePresence>
//   );
// }
