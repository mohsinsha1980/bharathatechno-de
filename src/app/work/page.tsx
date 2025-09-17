import CaseStudiesBanner from "@/components/case-studies/banner";
import CaseStudies from "@/components/case-studies/case-studies";
import CaseStudiesContact from "@/components/case-studies/contact";
import Script from "next/script";

export default function Work() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Our Projects & Case Studies - BharathaTechnoIT",
    url: "https://bharathatechno.com/work",
    headline:
      "BharathaTechnoIT Portfolio: Custom Software, App & ERP Solutions",
    description:
      "Explore BharathaTechnoIT's project portfolio and case studies, highlighting successful digital solutions for diverse clients. Discover how our expertise in web and mobile app development, ERP, and digital transformation drives measurable business growth and exceptional outcomes.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bharathatechno.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="schema-webpage-work"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="pg_work">
        <CaseStudiesBanner
          data={`BharathaTechno steht für innovative und qualitativ hochwertige Lösungen.
Durch unsere umfassende Full-Stack-Entwicklung bieten wir maßgeschneiderte
digitale Konzepte, die exakt auf die individuellen Anforderungen unserer Kunden
abgestimmt sind. <br />
Unsere Referenzen sprechen für sich: Von Mode und Fitness über E-Commerce bis hin
zu statischen Unternehmens-Websites - wir realisieren Projekte, die
Branchenstandards neu definieren und nachhaltige Werte schaffen.`}
        />
        <CaseStudies />
        <CaseStudiesContact />
      </article>
    </>
  );
}
