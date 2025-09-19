import ContactBanner from "@/components/contact/banner";
import ContactUs from "@/components/contact/contact-us";
import ContactForm from "@/components/contact/form";
import Script from "next/script";

export default function ContactPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "IT-Unternehmen in Germany | BharathaTechno IT EU",
    url: "https://bharathatechno.de/contact",
    headline:
      "IT-Unternehmen in Germany | BharathaTechno IT EU",
    description:
      "BharathaTechno ist ein führendes IT-Unternehmen in Deutschland, das Full-Stack-Entwicklung, sichere Weblösungen und maßgeschneiderte IT-Services für Startups und Unternehmen anbietet.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bharathatechno.de/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="schema-webpage-contact"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="pg_contact">
        <ContactBanner />
        <ContactForm />
        <ContactUs />
      </article>
    </>
  );
}
