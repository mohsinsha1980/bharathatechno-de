import Link from "next/link";

export default function TermsContent() {
  return (
    <section className="bl_static_content">
      <div className="container container-medium">
        <h2>Nutzung unserer Website</h2>
        <p>
          Sie dürfen unsere Website nur für gesetzlich zulässige Zwecke und in
          Übereinstimmung mit diesen Allgemeinen Geschäftsbedingungen nutzen.
        </p>
        <h2>Geistiges Eigentum</h2>
        <p>
          Der Inhalt unserer Website, einschließlich Text, Grafiken, Logos und
          Software, ist Eigentum von BharathaTechno IT EU und durch
          Urheberrechts- und andere geistige Eigentumsrechte geschützt.
        </p>
        <h2>Haftungsausschluss</h2>
        <p>
          Wir übernehmen keine ausdrücklichen oder stillschweigenden Garantien
          hinsichtlich der Vollständigkeit, Genauigkeit, Zuverlässigkeit,
          Eignung oder Verfügbarkeit der Website oder der darauf enthaltenen
          Informationen, Produkte, Dienstleistungen oder verwandten Grafiken für
          einen bestimmten Zweck. Jegliche Nutzung dieser Informationen erfolgt
          daher auf eigenes Risiko.
        </p>
        <h2>Haftungsbeschränkung</h2>
        <p>
          Im größtmöglichen gesetzlich zulässigen Umfang haftet BharathaTechno
          IT EU nicht für indirekte, zufällige, spezielle, Folgeschäden oder
          Strafschäden, einschließlich, aber nicht beschränkt auf, Verlust von
          Gewinnen, Daten, Nutzung, Wohlwollen oder andere immaterielle
          Verluste, die sich aus (i) Ihrem Zugriff auf oder der Nutzung oder der
          Unfähigkeit, auf den Service zuzugreifen oder ihn zu nutzen; (ii)
          jeglichem Verhalten oder Inhalt eines Dritten im Service; (iii)
          jeglichem Inhalt, der aus dem Service bezogen wurde; oder (iv)
          unbefugtem Zugriff, Nutzung oder Veränderung Ihrer Übertragungen oder
          Daten ergeben, unabhängig davon, ob wir über die Möglichkeit solcher
          Schäden informiert wurden.
        </p>
        <h2>Anwendbares Recht</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen unterliegen den Gesetzen von
          Stuttgart, Deutschland, und sind in Übereinstimmung mit diesen
          auszulegen.
        </p>
        <h2>Änderungen dieser Allgemeinen Geschäftsbedingungen</h2>
        <p>
          Wir können diese Allgemeinen Geschäftsbedingungen von Zeit zu Zeit
          aktualisieren. Änderungen werden auf dieserSeite veröffentlicht.
        </p>
        <h2 className="text-(--text-orange)">Kontaktieren Sie uns</h2>
        <p>
          Bei Fragen zu diesen Allgemeinen Geschäftsbedingungen wenden Sie sich
          bitte an:
        </p>
        <ul>
          <li>
            BharathaTechno IT EU:{" "}
            <Link href="tel:+919325636885">+91 932 563 6885</Link>
          </li>
          <li>
            Email:{" "}
            <Link href="mailto:kourosh.bagherian@bharathatechno.de">
              kourosh.bagherian@bharathatechno.de
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
