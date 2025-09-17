import Link from "next/link";

export default function FooterNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-8 lg:flex-row md:flex-row">
        <li>
          <Link href="/contact">Kontaktieren Sie uns</Link>
        </li>
        <li>
          <Link href="/terms-and-conditions">
            Allgemeine Geschäftsbedingungen
          </Link>
        </li>
        <li>
          <Link href="/privacy-policy">Datenschutzerklärung</Link>
        </li>
        <li>
          <Link href="/refund-policy">Rückerstattungsrichtlinie</Link>
        </li>
      </ul>
    </nav>
  );
}
