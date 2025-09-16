import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Component {
  title: string;
  description: string;
  link: string;
  icon: React.ReactElement;
}

export default function OfferingItem({
  title,
  description,
  icon,
  link,
}: Component) {
  return (
    <Link href={link}>
      <div className="arrow">
        <ArrowUpRight size={20} />
      </div>
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}
