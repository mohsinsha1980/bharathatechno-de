import Link from "next/link";

export default function FooterNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-8 lg:flex-row md:flex-row">
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        </li>
        <li>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/refund-policy">Refund Policy</Link>
        </li>
      </ul>
    </nav>
  );
}
