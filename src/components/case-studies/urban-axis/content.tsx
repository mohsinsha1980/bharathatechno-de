import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function UrbanAxisContent() {
  return (
    <>
      <Link href="/work/urban-axis">
        <h2>Urban Axis</h2>
      </Link>
      <p>
        Für UrbanAxis haben wir eine statische Website mit Next.js entwickelt,
        die durch schnelle Ladezeiten und optimale Performance überzeugt. Die
        Seite präsentiert die Services und das Portfolio von UrbanAxis in einem
        modernen Design und profitiert von einer gezielten SEO-Implementierung
        für eine bessere Sichtbarkeit in den Suchmaschinen.
      </p>
      <h3>Zentrale Funktionen</h3>
      <ul>
        <li>Schnelle Ladezeiten</li>
        <li>SEO-Optimierung</li>
        <li>Responsives design</li>
      </ul>
      <div className="link">
        <Link href="https://urbanaxis.co.in/" target="_blank">
          <span>Jetzt Urban Axis besuchen</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
