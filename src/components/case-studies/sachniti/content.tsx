import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SachnitiContent() {
  return (
    <>
      <Link href="/work/sachniti">
        <h2>Sachniti</h2>
      </Link>

      <p>
        For Sachniti.com, we developed a WordPress-based website that offers
        engaging user experience with easy content management capabilities. The
        site includes service descriptions, and contact forms.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>Easy content management with WordPress</li>
        <li>SEO-friendly Structure</li>
        <li>Customizable contact forms</li>
      </ul>
      <div className="link">
        <Link href="https://www.sachniti.com/" target="_blank">
          <span>Visit Sachniti</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
