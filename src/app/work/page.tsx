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
          data="BharathaTechno is committed to delivering innovative and high-quality
        solutions through full stack development tailored to meet the unique
        needs of our clients. Below are some of our standout projects that
        demonstrate our expertise in various domains, from fashion and fitness
        to e-commerce and static business websites."
        />
        <CaseStudies />
        <CaseStudiesContact />
      </article>
    </>
  );
}
