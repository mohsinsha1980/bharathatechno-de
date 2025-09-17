import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ShredNShapeContent() {
  return (
    <>
      <Link href="/work/shred-n-shape">
        <h2>Shred-n-Shape</h2>
      </Link>

      <p>
        Shred-n-Shape ist eine leistungsstarke Fitness-Web-App, die Nutzer:innen
        dabei unterstützt, ihre Gesundheitsziele durch personalisierte
        Trainingspläne, Ernährungs-Tracking und Fortschrittskontrolle zu
        erreichen. Dank modernster Full-Stack-Entwicklung auf Basis des
        MERN-Stacks bietet die Anwendung ein nahtloses, responsives
        Nutzungserlebnis - auf jedem Endgerät.
      </p>
      <h3>Zentrale Funktionen</h3>
      <ul>
        <li>Personalisierte Trainings- und Ernährungspläne</li>
        <li>Fortschrittsverfolgung mit Datenvisualisierung</li>
        <li>Benutzerfreundliche Oberfläche für einfache Navigation</li>
      </ul>
      <div className="link">
        <Link href="https://shrednshape.co.uk/" target="_blank">
          <span>Jetzt Shred-n-Shape besuchen</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
