"use client";
import { useInView } from "react-intersection-observer";

import "./animated-icon.css";
import { useEffect, useState } from "react";

const BharathaIconAnimatedLg = ({
  width = 400,
  height = 600,
  stroke = 70,
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
      viewBox={`-15 0 ${width} ${height}`}
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
        d="M34.949,154.052V371.4l0,0
	c0,82.738,67.071,149.809,149.809,149.809c82.737,0,149.81-67.07,149.81-149.809s-67.072-149.809-149.81-149.809"
        className={start ? "logo_path_lg" : ""}
      />
      <line
        fill="none"
        stroke="#F49F0A"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="181.522"
        y1="151.912"
        x2="181.522"
        y2="380.191"
        className={start ? "logo_path_lg" : ""}
      />
      <line
        fill="none"
        stroke="#0A52EB"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="35"
        y1="35"
        x2="35"
        y2="38"
        className={start ? "logo_dot_lg" : ""}
      />
      <line
        fill="none"
        stroke="#F49F0A"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="180"
        y1="35"
        x2="180"
        y2="38"
        className={start ? "logo_dot_lg" : ""}
      />
    </svg>
  );
};

export default BharathaIconAnimatedLg;
