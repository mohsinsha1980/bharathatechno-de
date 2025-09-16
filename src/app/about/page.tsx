import AboutBanner from "@/components/about/banner";
import LookingAhead from "@/components/about/looking-ahead";
import OurJourney from "@/components/about/our-journey";
import OurMission from "@/components/about/our-mission";
import OurPhilosophy from "@/components/about/our-philosophy";
import Transform from "@/components/about/transform";
import Script from "next/script";

export default function About() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About BharathaTechnoIT Private Limited - Our Mission & Journey",
    url: "https://bharathatechno.com/about",
    headline:
      "About BharathaTechnoIT - Empowering Businesses Through Technology",
    description:
      "Learn about BharathaTechnoIT Private Limited's mission to empower businesses through cutting-edge IT solutions. Discover our journey from Pune’s thriving startup scene to recognized leader in web and mobile app development, product innovation, and SEO. Meet our visionary leadership and explore how we’re building digital futures.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bharathatechno.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="schema-webpage-about"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="pg_about">
        <AboutBanner />
        <OurMission />
        <OurJourney />
        <OurPhilosophy />
        <LookingAhead />
        <Transform />
      </article>
    </>
  );
}
