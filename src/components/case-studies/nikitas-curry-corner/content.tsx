import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NikitasContent() {
  return (
    <>
      <Link href="/work/nikitas-curry-corner">
        <h2>Nikita&apos;s Curry Corner</h2>
      </Link>
      <p>
        Nikita&apos;s Curry Corner ist eine Cloud-Kitchen für authentische
        indische Küche. Wir haben dafür eine dynamische Web-Anwendung
        entwickelt, die es Kund:innen ermöglicht, Bestellungen online
        aufzugeben, Speisekarten zu verwalten und Lieferungen in Echtzeit zu
        verfolgen.
      </p>
      <h3>Zentrale Funktionen</h3>
      <ul>
        <li>Online-Bestellsystem</li>
        <li>Menüverwaltung</li>
        <li>Sendungsverfolgung in Echtzeit</li>
      </ul>
      <div className="link">
        <Link href="https://nikitascurrycorner.ca/" target="_blank">
          <span>Jetzt Nikita&apos;s Curry Corner besuchen</span>{" "}
          <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
