import BlogsBanner from "@/components/blogs/banner";
import { getAllPosts } from "@/lib/post-utils";
import BlogList from "@/components/blogs/blog-list";
import Script from "next/script";

export default function BlogPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPage",
    name: "BharathaTechnoIT Blogs - Technology, App Development & Business Growth",
    url: "https://bharathatechno.com/blogs",
    headline:
      "BharathaTechnoIT Blogs: Latest Insights in Tech, Web & Mobile Development",
    description:
      "Explore BharathaTechnoIT's blog page for expert articles on software engineering, web and mobile app development, business automation, digital transformation, and industry best practices. Stay ahead with our technical insights, case studies, and IT innovation strategies.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bharathatechno.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const posts = getAllPosts();
  return (
    <>
      <Script
        id="schema-webpage-blog"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="pg_blogs">
        <BlogsBanner />

        <div className="container mt-10">
          <BlogList posts={posts} />
        </div>
      </section>
    </>
  );
}
