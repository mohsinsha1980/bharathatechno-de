import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function R3constructorContent() {
  return (
    <>
      <Link href="/work/r3constructor">
        <h2>R3 Constructor</h2>
      </Link>

      <p>
        To provide a digital presence for R3 Constructor that showcases the
        company&apos;s services, completed and ongoing projects, and background,
        while allowing potential clients to submit inquiries or reach out for
        construction work.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>Fast Loading Time</li>
        <li>SEO optimization</li>
        <li>Responsive Desgin</li>
      </ul>
      <div className="link">
        <Link href="https://r3constructor.in/" target="_blank">
          <span>Visit R3 Constructor</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
