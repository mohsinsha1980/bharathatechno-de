import ContactBanner from "@/components/contact/banner";
import ContactUs from "@/components/contact/contact-us";
import ContactForm from "@/components/contact/form";
import Script from "next/script";

export default function ContactPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contact Us - BharathaTechnoIT Private Limited",
    url: "https://bharathatechno.com/contact",
    headline:
      "Contact BharathaTechnoIT - Web, Mobile & Software Solutions Partner",
    description:
      "Reach out to BharathaTechnoIT Private Limited for custom software, ERP, web and mobile app development services. Send us a message or use the contact form for project inquiries, support, and technology consulting. Let’s build innovative digital solutions together.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bharathatechno.com/search?q={search_term_string}",
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
