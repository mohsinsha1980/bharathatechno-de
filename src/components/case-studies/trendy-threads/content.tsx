import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TrendyThreadsContent() {
  return (
    <>
      <Link href="/work/trendy-threads">
        <h2>Trendy Threads</h2>
      </Link>

      <p>
        Trendy Threads is a full-featured fashion e-commerce platform, tailored for boutique
        sellers looking to take control of their online presence. It offers
        complete management of branding, product listings, and customer
        interactions. Built with a focus on flexibility and user experience, the
        platform provides a smooth and responsive shopping journey across all
        devices.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>Advanced Admin Dashboard</li>
        <li>Seamless Shopping Experience</li>
        <li>Integrated Payments & Logistics</li>
      </ul>
      <div className="link">
        <Link href="https://trendythreads.co.in/" target="_blank">
          <span>Visit Trendy Threads</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
