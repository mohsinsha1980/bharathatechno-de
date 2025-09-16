"use client";
import { motion } from "framer-motion";
import { easeOut } from "popmotion";

export default function BannerTags() {
  const container = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        staggerDirection: 1,
        ease: easeOut,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      className="tags"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.span variants={listItem}>#Experience</motion.span>
      <motion.span variants={listItem}>#Innovation</motion.span>
      <motion.span variants={listItem}>#Creativity</motion.span>
      <motion.span variants={listItem}>#Leadership</motion.span>
    </motion.div>
  );
}
