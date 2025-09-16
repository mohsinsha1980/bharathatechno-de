import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NikitasContent() {
  return (
    <>
      <Link href="/work/nikitas-curry-corner">
        <h2>Nikita&apos;s Curry Corner</h2>
      </Link>
      <p>
        Nikita&apos;s Curry Corner is a cloud kitchen offering authentic
        Indian cuisine, we developed a dynamic web application that allows users
        to place orders online, manage menus, and track deliveries in real-time.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>Online ordering system</li>
        <li>Menu management</li>
        <li>Real-time delivery tracking</li>
      </ul>
      <div className="link">
        <Link href="https://nikitascurrycorner.ca/" target="_blank">
          <span>Visit Nikita&apos;s Curry Corner</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
