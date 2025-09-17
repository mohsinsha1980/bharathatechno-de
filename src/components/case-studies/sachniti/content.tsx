import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SachnitiContent() {
  return (
    <>
      <Link href="/work/sachniti">
        <h2>Sachniti</h2>
      </Link>

      <p>
        Für Sachniti haben wir eine WordPress-basierte Website entwickelt, die
        ein ansprechendes Nutzererlebnis mit einfacher ContentVerwaltung
        kombiniert. Die Seite umfasst detaillierte Servicebeschreibungen sowie
        benutzerfreundliche Kontaktformulare.
      </p>
      <h3>Zentrale Funktionen</h3>
      <ul>
        <li>Einfache Inhaltsverwaltung mit WordPress</li>
        <li>SEO-freundliche Struktur</li>
        <li>Anpassbare Kontaktformulare</li>
      </ul>
      <div className="link">
        <Link href="https://www.sachniti.com/" target="_blank">
          <span>Jetzt Sachniti besuchen</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
