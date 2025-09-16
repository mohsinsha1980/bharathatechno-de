"use client";
import { useInView } from "react-intersection-observer";

import "./animated-icon.css";
import { useEffect, useState } from "react";

const BharathaIconAnimatedMd = ({
  width = 300,
  height = 450,
  stroke = 50,
}: {
  width?: number;
  height?: number;
  stroke?: number;
}) => {
  const [start, setStart] = useState<boolean>(false);
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setStart(true);
    } else {
      setStart(false);
    }
  }, [inView]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width={width}
      height={height}
      viewBox={`-20 -20 ${width} ${height}`}
      ref={ref}
      style={{ opacity: start ? 1 : 0 }}
      className="svg_icon"
    >
      <path
        fill="none"
        stroke="#0A52EB"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M25.191,119.678v159.316
	l0,0c0,60.646,49.162,109.809,109.809,109.809s109.809-49.162,109.809-109.809S195.646,169.186,135,169.186"
        className={start ? "logo_path_md" : ""}
      />
      <line
        fill="none"
        stroke="#F49F0A"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="132.629"
        y1="118.11"
        x2="132.629"
        y2="285.438"
        className={start ? "logo_path_md" : ""}
      />
      <line
        fill="none"
        stroke="#0A52EB"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="25"
        y1="25"
        x2="25"
        y2="28"
        className={start ? "logo_dot_md" : ""}
      />
      <line
        fill="none"
        stroke="#F49F0A"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="132"
        y1="25"
        x2="132"
        y2="28"
        className={start ? "logo_dot_md" : ""}
      />
    </svg>
  );
};

export default BharathaIconAnimatedMd;
