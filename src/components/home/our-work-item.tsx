import React from "react";
import Link from "next/link";
import OurWorkBanner from "./our-work-banner";
import Image from "next/image";

export interface Component {
  id?: number;
  imageSrc: string;
  label: string;
  title: string;
  list: string[];
  link: string;
}

export default function OurWorkItem({
  imageSrc,
  label,
  title,
  list,
  link
}: Component) {
  return (
    <Link href={link}>
      <OurWorkBanner>
        <Image src={imageSrc} alt="Custom Web Application Development" width={640} height={460} />
        <label>{label}</label>
      </OurWorkBanner>
      <div className="bl_content">
        <h3>{title}</h3>
        <ul>
          {list.map((item, index) => (
            <li key={`${item}_${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
