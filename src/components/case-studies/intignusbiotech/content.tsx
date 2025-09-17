import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntignusBiotechContent() {
  return (
    <>
      <Link href="/work/intignus-biotech">
        <h2>IntignusBiotech</h2>
      </Link>
      <p>
        IntignusBiotech.com ist eine WordPress-basierte Website, die die
        innovativen Lösungen von Intignus Biotech in der Biotech-Branche
        präsentiert. Die Seite bietet ausführliche Produktinformationen sowie
        aktuelle Unternehmensnachrichten.
      </p>
      <h3>Zentrale Funktionen</h3>
      <ul>
        <li>Detaillierte Produktinformationen</li>
        <li>Responsives Design</li>
        <li>SEO-freundliche Struktur</li>
      </ul>
      <div className="link">
        <Link href="https://intignusbiotech.com/" target="_blank">
          <span>Jetzt IntignusBiotech besuchen</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
