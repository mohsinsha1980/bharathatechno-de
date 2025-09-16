"use client";
import { useInView } from "react-intersection-observer";

import "./animated-icon.css";
import { useEffect, useState } from "react";

const BharathaIconAnimatedSm = ({
  width = 200,
  height = 300,
  stroke = 36,
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
        d="M18.977,79.105v103.771l0,0
	c0,39.503,32.023,71.524,71.525,71.524s71.524-32.021,71.524-71.524c0-39.502-32.022-71.524-71.524-71.524"
        className={start ? "logo_path_sm" : ""}
      />
      <line
        fill="none"
        stroke="#F49F0A"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="88.958"
        y1="78.084"
        x2="88.958"
        y2="187.073"
        className={start ? "logo_path_sm" : ""}
      />
      <line
        fill="none"
        stroke="#0A52EB"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="18"
        y1="18"
        x2="18"
        y2="20"
        className={start ? "logo_dot_sm" : ""}
      />
      <line
        fill="none"
        stroke="#F49F0A"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="88"
        y1="18"
        x2="88"
        y2="20"
        className={start ? "logo_dot_sm" : ""}
      />
    </svg>
  );
};

export default BharathaIconAnimatedSm;
