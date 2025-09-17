import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EverwinptContent() {
  return (
    <>
      <Link href="/work/everwinpt">
        <h2>Everwinpt</h2>
      </Link>
      <p>
        Everwinpt.com ist eine statische Website, die Besucher:innen einen
        umfassenden Überblick über die Produkte und Dienstleistungen von Everwin
        bietet. Mit einem klar strukturierten Layout und einer intuitiven
        Navigation sorgt die Seite für eine nutzerfreundliche Präsentation der
        Inhalte.
      </p>
      <h3>Zentrale Funktionen</h3>
      <ul>
        <li>Informative Produktseiten</li>
        <li>Klares und intuitives Design</li>
        <li>Mobilfreundliche Oberfläche</li>
      </ul>
      <div className="link">
        <Link href="https://everwinpt.com/" target="_blank">
          <span>Jetzt Everwinpt besuchen</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
