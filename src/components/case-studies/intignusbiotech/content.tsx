import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntignusBiotechContent() {
  return (
    <>
      <Link href="/work/intignus-biotech"><h2>IntignusBiotech</h2></Link>
      <p>
        IntignusBiotech.com is a WordPress-powered website designed to showcase
        Intignus Biotech&apos;s innovative solutions in the biotech industry. The
        site features detailed product information and company news.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>Detailed product information</li>
        <li>Responsive design</li>
        <li>SEO-friendly structure</li>
      </ul>
      <div className="link">
        <Link href="https://intignusbiotech.com/" target="_blank">
          <span>Visit IntignusBiotech</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
