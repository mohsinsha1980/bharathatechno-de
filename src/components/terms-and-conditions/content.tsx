import Link from "next/link";

export default function TermsContent() {
  return (
    <section className="bl_static_content">
      <div className="container container-medium">
        <h2>Use of Our Website</h2>
        <p>
          You may use our website only for lawful purposes and in accordance
          with these Terms and Conditions.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          The content on our website, including text, graphics, logos, and
          software, is the property of BharathaTechno IT Private Limited and is
          protected by copyright and other intellectual property laws
        </p>
        <h2>Disclaimer</h2>
        <p>
          We make no warranties, express or implied, about the completeness,
          accuracy, reliability, suitability or availability with respect to the
          website or the information, products, services, or related graphics
          contained on the website for any purpose. Any reliance you place on
          such information is therefore strictly at your own risk.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, BharathaTechno IT
          Private Limited shall not be liable for any indirect, incidental,
          special, consequential or punitive damages, including without
          limitation, loss of profits, data, use, goodwill, or other intangible
          losses, resulting from (i) your access to or use of or inability to
          access or use the Service; (ii) any conduct or content of any third
          party on the Service; (iii) any content obtained from the Service; or
          (iv) unauthorized access, use or alteration of your transmissions or
          data, whether based on warranty, contract, tort (including negligence)
          or any other legal theory, whether or not we have been informed of the
          possibility of such damage.
        </p>
        <h2>Governing Law</h2>
        <p>
          These Terms and Conditions shall be governed by and construed in
          accordance with the laws of Pune, India.
        </p>
        <h2>Changes to these Terms and Conditions</h2>
        <p>
          We may update these Terms and Conditions from time to time. We will
          post any changes on this page.
        </p>
        <h2 className="text-(--text-orange)">Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at:
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
