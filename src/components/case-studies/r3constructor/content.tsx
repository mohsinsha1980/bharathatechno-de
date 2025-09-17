import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function R3constructorContent() {
  return (
    <>
      <Link href="/work/r3constructor">
        <h2>R3 Constructor</h2>
      </Link>

      <p>
        Für R3 Constructor haben wir eine digitale Präsenz geschaffen, die die
        Dienstleistungen des Unternehmens, abgeschlossene sowie laufende
        Projekte und den Unternehmenshintergrund präsentiert. Potenzielle
        Kund:innen können direkt Anfragen stellen oder Kontakt für Bauprojekte
        aufnehmen.
      </p>
      <h3>Zentrale Funktionen</h3>
      <ul>
        <li>Schnelle Ladezeit</li>
        <li>SEO-Optimierung</li>
        <li>Responsives Design</li>
      </ul>
      <div className="link">
        <Link href="https://r3constructor.in/" target="_blank">
          <span>Jetzt R3 Constructor besuchen</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
