import Link from "next/link";

export default function RefundContent() {
  return (
    <section className="bl_static_content">
      <div className="container container-medium">
        <h2>Rückerstattung</h2>
        <p>
          Alle Verkäufe sind endgültig. Wir bieten keine Rückerstattungen an,
          außer in Fällen, in denen der Arbeitsauftrag vor Beginn der Arbeiten
          storniert wird.
        </p>

        <h2>Anspruch auf Rückerstattung</h2>
        <p>
          Dienstleistungen werden nicht erbracht, wenn der Kunde aufgrund
          medizinischer oder mitfühlender Gründe nicht fortfahren kann.
        </p>

        <h2>Rückerstattungsprozess</h2>
        <p>
          Kontaktieren Sie uns unter
          <Link href="mailto:tbd@bharathatechno.de">
            tbd@bharathatechno.de
          </Link>{" "}
          oder rufen Sie uns unter
          <Link href="tel:+919325636885">+91 932 563 6885</Link> an, um eine
          Rückerstattung zu beantragen. Unser Team wird Sie durch den
          Rückerstattungsprozess führen.
        </p>

        <h2 className="text-(--text-orange)">Kontaktieren Sie uns</h2>
        <p>
          Wenn Sie Fragen zu dieser Rückerstattungsrichtlinie haben,
          kontaktieren Sie uns bitte unter:
        </p>
        <ul>
          <li>
            BharathaTechno IT Private Limited Cell:{" "}
            <Link href="tel:+919325636885">+91 932 563 6885</Link>
          </li>
          <li>
            Email:{" "}
            <Link href="mailto:tbd@bharathatechno.de">
              tbd@bharathatechno.de
            </Link>
          </li>
          <li>
            Website:{" "}
            <Link href="https://www.bharathatechno.de" target="_blank">
              www.bharathatechno.de
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
