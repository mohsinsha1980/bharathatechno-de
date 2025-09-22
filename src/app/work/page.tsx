import CaseStudiesBanner from "@/components/case-studies/banner";
import CaseStudies from "@/components/case-studies/case-studies";
import CaseStudiesContact from "@/components/case-studies/contact";
import Script from "next/script";

export default function Work() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Full-Stack-Lösungen für Web und Mobilgeräte | BharathaTechno IT EU",
    url: "https://bharathatechno.de/work",
    headline:
      "Full-Stack-Lösungen für Web und Mobilgeräte | BharathaTechno IT EU",
    description:
      "BharathaTechno IT ist auf die Full-Stack-Entwicklung für Web- und mobile Apps spezialisiert und liefert sichere, skalierbare und robuste Anwendungen, die den globalen Geschäftsanforderungen gerecht werden.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bharathatechno.de/search?q={search_term_string}",
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
