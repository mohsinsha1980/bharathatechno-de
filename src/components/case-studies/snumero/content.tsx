import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SnumeroContent() {
  return (
    <>
      <Link href="/work/snumero">
        <h2>Snumero</h2>
      </Link>

      <p>
        Wir haben eine individuell entwickelte statische Website realisiert, die
        die Numerologie-Dienstleistungen klar, strukturiert und
        benutzerfreundlich präsentiert. Die Seite ermöglicht es Besucher:innen,
        Anfragen zu stellen, Termine zu buchen, Kontaktdaten abzurufen,
        informative Blogbeiträge zu lesen und verifizierte Kundenbewertungen
        einzusehen - eine harmonische Verbindung aus Vertrauen, Funktionalität
        und wertvollem Content.
      </p>
      <h3>Zentrale Funktionen</h3>
      <ul>
        <li>SEO-Optimierung</li>
        <li>Verlinkte Google-Bewertungen</li>
        <li>Benutzerfreundliche Oberfläche für einfache Navigation</li>
      </ul>
      <div className="link">
        <Link href="https://www.snumero.com/" target="_blank">
          <span>Jetzt Snumero besuchen</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
