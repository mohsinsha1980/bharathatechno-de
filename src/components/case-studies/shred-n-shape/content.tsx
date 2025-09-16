import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ShredNShapeContent() {
  return (
    <>
      <Link href="/work/shred-n-shape">
        <h2>Shred-n-Shape</h2>
      </Link>

      <p>
        Shred-n-Shape is a robust fitness web-app designed to help users achieve
        their health goals through personalized workout plans, nutrition
        tracking, and progress monitoring. Built with full stack development
        using the MERN stack, this responsive web application ensures seamless
        user experience across all devices.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>Personalized workout and nutrition plans</li>
        <li>Progress tracking with data visualization</li>
        <li>User-friendly interface for easy navigation</li>
      </ul>
      <div className="link">
        <Link href="https://shrednshape.co.uk/" target="_blank">
          <span>Visit Shred-n-Shape</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
