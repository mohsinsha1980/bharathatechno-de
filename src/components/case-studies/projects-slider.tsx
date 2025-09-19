"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence, PanInfo, useInView } from "framer-motion";
import { linear, wrap } from "popmotion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Component } from "../home/our-work-item";

const DATA: Component[] = [
  {
    id: 0,
    imageSrc: "/images/home/shrednshape-case-study.webp",
    label: "#Fallstudie",
    title: "Entwerfen und entwickeln Sie eine Fitness-First-Plattform",
    list: ["UI/UX-Design", "Entwicklung", "Web-App"],
    link: "/work/shred-n-shape",
  },
  {
    id: 1,
    imageSrc: "/images/home/urban-axis-study.webp",
    label: "#Fallstudie",
    title: "Entwicklung einer Website für urbane Ästhetik",
    list: ["UI/UX-Design", "Entwicklung", "Responsive Design"],
    link: "/work/urban-axis",
  },
  {
    id: 3,
    imageSrc: "/images/home/nikitas-curry-corner-case-study.webp",
    label: "#Fallstudie",
    title: "Entwicklung einer Cloud-Kitchen-Plattform",
    list: ["UI/UX-Design", "Entwicklung", "Web-App"],
    link: "/work/nikitas-curry-corner",
  },
  {
    id: 4,
    imageSrc: "/images/home/sachniti-case-study.webp",
    label: "#Fallstudie",
    title: "Entwicklung einer CM-Website",
    list: ["UI/UX-Design", "Entwicklung", "Web-App"],
    link: "/work/sachniti",
  },
  {
    id: 5,
    imageSrc: "/images/home/everwinpt-case-study.webp",
    label: "#Fallstudie",
    title: "Entwicklung einer statischen Website",
    list: ["UI/UX-Design", "Entwicklung", "Web-App"],
    link: "/work/everwinpt",
  },
  {
    id: 6,
    imageSrc: "/images/home/trendy-threads-case-study.webp",
    label: "#Fallstudie",
    title: "Aufbau einer digitalen Lösung für eine Modemarke",
    list:["UI/UX-Design", "Entwicklung", "E-Commerce"],
    link: "/work/trendy-threads",
  },
];

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "0" : "0",
    scale: 1,
    opacity: 1,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-50%" : "50%",
    scale: 0.5,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1.5,
  ease: linear,
};

export default function ProjectSlider() {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  const [index, setIndex] = useState(0);

  const slideCount = DATA.length;
  const currentSlides = [
    DATA[wrap(0, slideCount, index)],
    DATA[wrap(0, slideCount, index + 1)],
    DATA[wrap(0, slideCount, index + 2)],
  ];

  const swipeToImage = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 20;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const pullupVariant = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        // delay: 1,
        duration: 1,
      },
    },
  };

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  return (
    <div className="slider-container">
      <div className="slider">
        <motion.h2
          ref={ref2}
          variants={pullupVariant}
          initial="initial"
          animate={isInView2 ? "animate" : ""}
          className="text-center text-blue-600 mb-10"
        >
          Schauen Sie sich unsere anderen Projekte an
        </motion.h2>
        <motion.div
          variants={sliderVariants}
          initial="incoming"
          animate="active"
          exit="exit"
          transition={sliderTransition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
          className="slide"
        >
          <AnimatePresence initial={false} custom={direction}>
            <div className="flex gap-6 mx-3 overflow-hidden">
              {currentSlides.map((item) => (
                <div className="slide_content" key={item.id}>
                  <Link href={item.link}>
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      width={451}
                      height={343}
                      className="bg-white rounded-lg p-4 object-cover w-[400px] h-[300px]"
                    />
                  </Link>
                  <p className="my-4">{item.title}</p>
                  <ul className="flex gap-8 list-disc text-sm">
                    {item.list.map((entry, idx) => (
                      <li key={idx}>{entry}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="buttons">
        <button onClick={() => setIndex((prev) => prev - 1)}>
          <ArrowLeft size={30} />
        </button>
        <button onClick={() => setIndex((prev) => prev + 1)}>
          <ArrowRight size={30} />
        </button>
      </div>
    </div>
  );
}
