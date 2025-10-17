import Link from "next/link";

export default function FooterNav() {
  return (
    <nav>
      <ul className="flex flex-col justify-center lg:justify-end max-w-[600px] flex-wrap gap-8 lg:flex-row md:flex-row">
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
        <li>
          <Link href="/blog">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
}
