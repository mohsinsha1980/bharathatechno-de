import Link from "next/link";
import Image from "next/image";
import { PostDataType } from "@/lib/types";
import { getFormattedShortDate } from "@/lib/helper";
import { ArrowRight } from "lucide-react";

export default function BlogList({ posts }: { posts: PostDataType[] }) {
  return (
    <div className="bl_blogs_list">
      <div className="container">
        <div className="container grid grid-cols-1 gap-[60px] lg:grid-cols-3 md:grid-cols-2 ">
          {posts && posts.length
            ? posts.map((post, index) => (
                <div className="bl_blog" key={`${post.slug}-${index}`}>
                  <Image
                    src={`/images/blogs/${post.image}`}
                    alt={`${post.title}`}
                    width="386"
                    height="241"
                    className="rounded-[16px] mb-[24px] ml-auto mr-auto"
                  />
                  <label className="mb-[12px] text-[14px] text-(--text-orange) block">
                    <Link href={`/blog/${post.slug}`}>{post.label}</Link>
                  </label>
                  <h3 className="mb-[12px] text-[20px] leading-[26px] font-bold">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex space-between items-center gap-4"
                    >
                      <span className="flex-1">{post.title}</span>
                      <ArrowRight className="go-link" size={70} />
                    </Link>
                  </h3>
                  <p className="mb-[16px]">{post.excerpt}</p>
                  <div className="flex gap-4 items-center mb-[24px]">
                    {post.author ? (
                      <>
                        <Image
                          src={`/images/blogs/${post.author_picture}`}
                          alt={post.author}
                          width={40}
                          height={40}
                        />
                        <div className="bl_author">
                          <p className="text-[14px] text-(--text-blue)">
                            {post.author}
                          </p>
                          <p>{getFormattedShortDate(new Date(post.date))}</p>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
