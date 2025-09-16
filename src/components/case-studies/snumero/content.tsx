import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SnumeroContent() {
  return (
    <>
      <Link href="/work/snumero">
        <h2>Snumero</h2>
      </Link>

      <p>
        A custom-built static website, designed to clearly present their numerology services in an
        accessible and user-friendly format. The site allows visitors to submit
        inquiries, book appointments, access contact details, read informative
        blog posts, and explore verified client reviews—offering a seamless
        blend of trust, functionality, and informative content.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>SEO Optimization</li>
        <li>Linked Google reviews</li>
        <li>User-friendly interface for easy navigation</li>
      </ul>
      <div className="link">
        <Link href="https://www.snumero.com/" target="_blank">
          <span>Visit Snumero</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
