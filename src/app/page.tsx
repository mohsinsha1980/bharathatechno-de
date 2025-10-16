import HomeBanner from "@/components/home/banner";
import BlogsArticles from "@/components/home/blogs-articles";
import ExperienceQuote from "@/components/home/experience-quote";
import OurOffering from "@/components/home/our-offerings";
import OurWork from "@/components/home/our-work";
import StaffAugmentationForm from "@/components/home/staff-augmentation-form";
import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";
import { getAllPosts } from "@/lib/post-utils";
import { PostDataType } from "@/lib/types";
import Script from "next/script";

export default function Home() {
  const posts: PostDataType[] = getAllPosts().slice(0, 3);
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Benutzerdefinierte Web-App-Entwicklung in Deutschland | Global Services",
    url: "https://bharathatechno.de/",
    headline:
      "Benutzerdefinierte Web-App-Entwicklung in Deutschland | Global Services",
    description:
      "BharathaTechno IT EU mit Sitz in Deutschland bietet weltweit kundenspezifische Web-App-Entwicklungsdienste an und stellt skalierbare und intuitive Lösungen zur Förderung des Wachstums bereit.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bharathatechno.de/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="schema-webpage-home"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="pg_home">
        <HomeBanner />
        <WhyChooseUs />
        <ExperienceQuote />
        <OurOffering />
        <OurWork />
        <Testimonials />
        <BlogsArticles BLOGS={posts} />
        <StaffAugmentationForm />
      </article>
    </>
  );
}
