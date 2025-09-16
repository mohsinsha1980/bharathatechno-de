"use client";
import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { linear, wrap } from "popmotion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

// const IMAGES = [
//   { id: 0, imageSrc: "/images/home/trendy-threads-case-study.webp" },
//   { id: 1, imageSrc: "/images/home/shrednshape-case-study.webp" },
//   { id: 2, imageSrc: "/images/home/trendy-threads-case-study.webp" },
//   // { id: 3, imageSrc: "/images/home/shrednshape-case-study.webp" },
// ];

const DATA = [
  {
    id: 0,
    logo: "/images/home/logos/nikitas-curry-corner.svg",
    content:
      "“Working with Bharatha Techno has been a game-changer for our business. Their expertise in both design and development exceeded our expectations, delivering a product that truly stands out. The web and mobile application they created for our cloud kitchen has streamlined our operations and significantly improved our customer engagement. Their attention to detail and understanding of our unique needs in the food industry was impressive.”",
    client: "Nikita's Curry Corner",
    name: "Mr. Raj Bulland",
    title: "Cloud Kitchen Chef",
    link: "https://nikitascurrycorner.ca",
  },
  {
    id: 1,
    logo: "/images/home/logos/trendy-threads.svg",
    content:
      "“Working with the team has been a fantastic experience. The final website exceeded my expectations — both in design and functionality. It runs incredibly fast, feels smooth throughout, and truly reflects the vision I had in mind. I genuinely appreciate the effort and attention to detail put into this project. Excellent work!”",
    client: "Trendy Threads by Riya",
    name: "Ms. Riya",
    title: "Fashion",
    link: "https://trendythreads.co.in/",
  },
  {
    id: 2,
    logo: "/images/home/logos/intignus-biotech.svg",
    content:
      "“On behalf of Intignus, I would like to express our deepest gratitude for your incredible effort and dedication in designing, developing, and launching our new company website. Your ability to understand our requirements and translate them into such an outstanding final product is truly commendable. We look forward to continuing this wonderful collaboration on future projects.”",
    client: "Intignus Biotech",
    name: "Ms. Disha Honwad",
    title: "Microbiologist and Educator",
    link: "https://intignusbiotech.com",
  },
  // {
  //   id: 3,
  //   logo: "/images/home/logos/nikitas-curry-corner.svg",
  //   content:
  //     "“Working with Bharatha Techno has been a game-changer for our business. Their expertise in both design and development exceeded our expectations, delivering a product that truly stands out. The web and mobile application they created for our cloud kitchen has streamlined our operations and significantly improved our customer engagement. Their attention to detail and understanding of our unique needs in the food industry was impressive.”",
  //   client: "Nikita's Curry Corner",
  //   name: "Mr. Raj Bulland",
  //   title: "Cloud Kitchen Chef",
  //   link: "https://nikitascurrycorner.ca",
  // },
];

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 0.5,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1.5,
  ease: linear,
};

export default function TestimonialSlider() {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, DATA.length, imageCount);

  const swipeToImage = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  // const skipToImage = (imageId: number) => {
  //   let changeDirection: number = 0;
  //   if (imageId > activeImageIndex) {
  //     changeDirection = 1;
  //   } else if (imageId < activeImageIndex) {
  //     changeDirection = -1;
  //   }
  //   setImageCount([imageId, changeDirection]);
  // };

  return (
    <div className="slider-container">
      <div className="slider">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={imageCount}
            custom={direction}
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
            <div className="slide_content">
              <div
                className="logo"
              >
                <Image
                  src={DATA[activeImageIndex].logo}
                  alt={DATA[activeImageIndex].client}
                  width={151}
                  height={68}
                />
              </div>
              {DATA[activeImageIndex].content ? (
                <p>{DATA[activeImageIndex].content}</p>
              ) : null}

              {DATA[activeImageIndex].name ? (
                <h3>{DATA[activeImageIndex].name}</h3>
              ) : null}
              <div className="flex flec-row gap-4">
                {DATA[activeImageIndex].title ? (
                  <p className="title">{DATA[activeImageIndex].title}</p>
                ) : null}
                {DATA[activeImageIndex].title ? (
                  <p className="title underline hover:!text-(--text-orange) "><Link href={DATA[activeImageIndex].link}>Visit Website</Link></p>
                ) : null}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="buttons">
        <button onClick={() => swipeToImage(-1)}>
          <ArrowLeft size={30} />
        </button>
        <button onClick={() => swipeToImage(1)}>
          <ArrowRight size={30} />
        </button>
      </div>
    </div>
  );
}
