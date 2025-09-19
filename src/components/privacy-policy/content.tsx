import Link from "next/link";

export default function PrivacyContent() {
  return (
    <section className="bl_static_content">
      <div className="container container-medium">
        <h2>Erhobene Informationen</h2>
        <p>Wir können die folgenden Arten von Informationen erheben:</p>
        <ul>
          <li>
            Personenbezogene Daten: Dazu gehören Ihr Name, Ihre E-Mail-Adresse,
            Telefonnummer und Postanschrift.
          </li>
          <li>
            Nutzungsdaten: Informationen darüber, wie Sie unsere Website nutzen,
            wie z. B. besuchte Seiten und angeklickte Links.
          </li>
          <li>
            Gerätedaten: Informationen über das Gerät, mit dem Sie auf unsere
            Website zugreifen, wie z. B. Ihre IP-Adresse, Browsertyp und
            Betriebssystem.
          </li>
        </ul>
        <h2>Verwendung Ihrer Daten</h2>
        <p>Wir verwenden Ihre Daten für die folgenden Zwecke:</p>
        <ul>
          <li>Bereitstellung und Verbesserung unserer Dienstleistungen.</li>
          <li>
            Kommunikation mit Ihnen über Ihr Konto oder unsere Dienstleistungen.
          </li>
          <li>Personalisierung Ihrer Erfahrung auf unserer Website.</li>
          <li>Einhaltung gesetzlicher Verpflichtungen.</li>
        </ul>
        <h2>Weitergabe Ihrer Daten</h2>
        <p>Wir können Ihre Daten an folgende Dritte weitergeben:</p>
        <ul>
          <li>
            Dienstleister, die uns bei der Verwaltung unserer Website und der
            Bereitstellung unserer Dienstleistungen unterstützen.
          </li>
          <li>Rechtliche Behörden, wenn dies gesetzlich vorgeschrieben ist.</li>
        </ul>
        <h2>Ihre Wahlmöglichkeiten</h2>
        <p>
          Sie können entscheiden, uns bestimmte Informationen nicht
          bereitzustellen. Beachten Sie jedoch, dass dies Ihre Fähigkeit, unsere
          Dienstleistungen zu nutzen, einschränken kann.
        </p>
        <h2>Sicherheit</h2>
        <p>
          Wir ergreifen angemessene technische und organisatorische Maßnahmen,
          um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust,
          Missbrauch oder Offenlegung zu schützen.
        </p>
        <h2>Änderungen unserer Datenschutzerklärung</h2>
        <p>
          Unsere Sicherheitspraktiken werden regelmäßig überprüft und an
          aktuelle Standards angepasst, um Ihre Daten bestmöglich zu schützen.
        </p>
        <h2 className="text-(--text-orange)">Abschluss & Kontakt</h2>
        <p>
          Wenn Sie Fragen oder Bedenken zu dieser Datenschutzerklärung haben
          oder Ihre Rechte wahrnehmen möchten, kontaktieren Sie uns bitte:
        </p>
        <ul>
          <li>
            BharathaTechno IT Private Limited Cell:{" "}
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
        <p>
          Wir verpflichten uns, Ihre Privatsphäre zu respektieren und Ihre Daten
          sicher zu verwalten.
        </p>
      </div>
    </section>
  );
}
