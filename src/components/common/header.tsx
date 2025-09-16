"use client";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import HeaderLogo from "./header-logo";
import HeaderNav from "./header-nav";
import LetsConnectBtn from "./lets-connect-btn";

export default function Header() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  const ref = useRef(null);

  const variants: Variants = {
    hidden: { y: 50, opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.5, delay: isLandingPage ? 5 : 0 },
    },
  };

  return (
    <motion.header
      className="main_header"
      ref={ref}
      initial="hidden"
      animate="show"
      variants={variants}
      viewport={{ once: true }}
    >
      <div className="container">
        <Link href="/" className="logo_link">
          <HeaderLogo />
        </Link>
        <HeaderNav />
        <LetsConnectBtn />
      </div>
    </motion.header>
  );
}
