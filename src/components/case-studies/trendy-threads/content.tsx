import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TrendyThreadsContent() {
  return (
    <>
      <Link href="/work/trendy-threads">
        <h2>Trendy Threads</h2>
      </Link>

      <p>
        Trendy Threads ist eine umfassende Fashion-E-Commerce-Plattform,
        speziell entwickelt für Boutiquen, die ihre Online-Präsenz selbstbewusst
        gestalten und steuern möchten. Die Lösung bietet eine vollständige
        Verwaltung von Markenauftritt, Produktkatalogen und Kundeninteraktionen.
        Mit ihrem klaren Fokus auf Flexibilität und Benutzerfreundlichkeit
        gewährleistet Trendy Threads ein reibungsloses und responsives
        Einkaufserlebnis - unabhängig vom Endgerät.
      </p>
      <h3>Zentrale Funktionen</h3>
      <ul>
        <li>Erweitertes Admin-Dashboard</li>
        <li>Nahtloses Einkaufserlebnis</li>
        <li>Integrierte Zahlungen und Logistik</li>
      </ul>
      <div className="link">
        <Link href="https://trendythreads.co.in/" target="_blank">
          <span>Jetzt Trendy Threads besuchen</span> <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
