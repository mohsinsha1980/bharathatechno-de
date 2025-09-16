import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ShredNShapeContent() {
  return (
    <>
      <Link href="/work/train-2-gain">
        <h2>Train2Gain</h2>
      </Link>

      <p>
        Train2Gain&apos;s a WordPress-based platform, built to support offline
        skill-building programs. This project focuses on lead generation,
        content control, and seamless enrollment through a structured
        subscription form.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>Responsive Design</li>
        <li>SEO-friendly structure</li>
      </ul>
      <div className="link">
        <Link href=" https://train2gain.in/" target="_blank">
          <span>Visit Train2Gain</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
