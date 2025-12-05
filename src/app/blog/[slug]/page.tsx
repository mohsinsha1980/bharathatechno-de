import BlogHero from "@/components/blogs/blog-hero";
import PostContent from "@/components/blogs/post-content";
import { getPostData } from "@/lib/post-utils";
import { BlogPostProps } from "@/lib/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const slugData = (await params).slug;
  if (!slugData) notFound();
  const data = getPostData(slugData);
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://bharathatechno.de/blog/${data.slug}`,
    },
  };
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slugData = (await params).slug;
  if (!slugData) notFound();
  const postData = getPostData(slugData);

  return (
    <>
      <div className="pg_static">
        <BlogHero post={postData} />
        <div className="bl_static_content">
          <PostContent post={postData} />
        </div>
      </div>
    </>
  );
}
