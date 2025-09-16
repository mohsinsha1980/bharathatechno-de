"use client";
import { useInView } from "react-intersection-observer";

import "./animated-icon.css";
import { useEffect, useState } from "react";

const BharathaIconAnimatedXs = ({
  width = 100,
  height = 150,
  stroke = 18,
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
      viewBox={`0 0 ${width} ${height}`}
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
        d="M9.486,38.737v51.663l0,0
	c0,19.667,15.944,35.608,35.609,35.608c19.666,0,35.609-15.941,35.609-35.608c0-19.667-15.943-35.609-35.609-35.609"
        className={start ? "logo_path_xs" : ""}
      />
      <line
        fill="none"
        stroke="#F49F0A"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="44.327"
        y1="38.229"
        x2="44.327"
        y2="92.488"
        className={start ? "logo_path_xs" : ""}
      />
      <line
        fill="none"
        stroke="#0A52EB"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="9"
        y1="9"
        x2="9"
        y2="9"
        className={start ? "logo_dot_xs" : ""}
      />
      <line
        fill="none"
        stroke="#F49F0A"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="44.327"
        y1="9"
        x2="44.327"
        y2="9"
        className={start ? "logo_dot_xs" : ""}
      />
    </svg>
  );
};

export default BharathaIconAnimatedXs;
