import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ShredNShapeContent() {
  return (
    <>
      <Link href="/work/train-2-gain">
        <h2>Train2Gain</h2>
      </Link>

      <p>
        Train2Gain ist eine WordPress-basierte Plattform, die
        Offline-Weiterbildungsprogramme unterstützt. Der Schwerpunkt des
        Projekts liegt auf Lead-Generierung, Content-Verwaltung und einer
        nahtlosen Anmeldung über ein strukturiertes Abonnementformular.
      </p>
      <h3>Zentrale Funktionen</h3>
      <ul>
        <li>Responsives Design</li>
        <li>SEO-freundliche Struktur</li>
      </ul>
      <div className="link">
        <Link href=" https://train2gain.in/" target="_blank">
          <span>Jetzt Train2Gain besuchen </span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
