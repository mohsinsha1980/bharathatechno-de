import Link from "next/link";

export default function PrivacyContent() {
  return (
    <section className="bl_static_content">
      <div className="container container-medium">
        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            Personal Information: This may include your name, email address,
            phone number, and postal address.
          </li>
          <li>
            Usage Information: This may include information about how you use
            our website, such as the pages you visit and the links you click.
          </li>
          <li>
            Device Information: This may include information about the device
            you use to access our website, such as your IP address, browser
            type, and operating system.
          </li>
        </ul>
        <h2>How We Use Your Information</h2>
        <p>We may use your information for the following purposes:</p>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To communicate with you about your account or our services.</li>
          <li>To personalize your experience on our website.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <h2>How We Share Your Information</h2>
        <p>We may share your information with the following third parties:</p>
        <ul>
          <li>
            Service providers who help us operate our website and provide our
            services.
          </li>
          <li>Legal authorities if required by law.</li>
        </ul>
        <h2>Your Choices</h2>
        <p>
          You may choose not to provide us with certain information, but this
          may limit your ability to use our services.
        </p>
        <h2>Security</h2>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access, use, or disclosure.
        </p>
        <h2>Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post any
          changes on this page.
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
