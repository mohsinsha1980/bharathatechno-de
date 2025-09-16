import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EverwinptContent() {
  return (
    <>
      <Link href="/work/everwinpt">
        <h2>Everwinpt</h2>
      </Link>
      <p>
        Everwinpt.com is a static website designed to provide visitors with
        comprehensive information about Everwin&apos;s products and services.
        The site features a clean layout and intuitive navigation.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>Informative product pages</li>
        <li>Clean and intuitive design</li>
        <li>Mobile-friendly interface</li>
      </ul>
      <div className="link">
        <Link href="https://everwinpt.com/" target="_blank">
          <span>Visit Everwinpt</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
