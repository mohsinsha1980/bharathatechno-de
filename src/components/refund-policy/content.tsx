import Link from "next/link";

export default function RefundContent() {
  return (
    <section className="bl_static_content">
      <div className="container container-medium">
        <h2>Refund</h2>
        <p>
          All sales are final. We do not offer refunds, except in cases where
          the work order is cancelled before the start of work.
        </p>

        <h2>Eligibility for Returns</h2>
        <p>
          Services are not provided in cases where the client is unable to
          proceed due to medical or compassionate grounds.
        </p>

        <h2>Return Process</h2>
        <p>
          Contact us at{" "}
          <Link href="mailto:info@bharathatechno.com">
            info@bharathatechno.com
          </Link>{" "}
          or call us at <Link href="tel:+919325636885">+91 932 563 6885</Link>{" "}
          to request a refund. Our team will guide you through the return
          process.
        </p>

        <h2 className="text-(--text-orange)">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <ul>
          <li>
            BharathaTechno IT Private Limited Cell:{" "}
            <Link href="tel:+919325636885">+91 932 563 6885</Link>
          </li>
          <li>
            Email:{" "}
            <Link href="mailto:info@bharathatechno.com">
              info@bharathatechno.com
            </Link>
          </li>
          <li>
            Website:{" "}
            <Link href="https://www.bharathatechno.com" target="_blank">
              www.bharathatechno.com
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
