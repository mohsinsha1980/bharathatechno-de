import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function UrbanAxisContent() {
  return (
    <>
      <Link href="/work/urban-axis">
        <h2>Urban Axis</h2>
      </Link>
      <p>
        We created a static website for UrbanAxis using Next.js to ensure fast
        loading times and optimal performance. The site showcases UrbanAxis&apos;s
        services and portfolio with a modern design, complemented by effective
        SEO implementation for better search visibility.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>Fast loading times</li>
        <li>SEO optimization</li>
        <li>Responsive design</li>
      </ul>
      <div className="link">
        <Link href="https://urbanaxis.co.in/" target="_blank">
          <span>Visit Urban Axis</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
