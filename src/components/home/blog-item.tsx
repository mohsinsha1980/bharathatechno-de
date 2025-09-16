import { PostDataType } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogItem({ blog }: { blog: PostDataType }) {
  return (
    <div className="bl_blog" key={blog.id}>
      <Link href={`/blog/${blog.slug}`}>
        <Image
          src={`/images/blogs/${blog.image}`}
          alt={blog.title}
          width="336"
          height="241"
          className="rounded-[16px] mb-[24px] ml-auto mr-auto"
        />
        <h3 className="mb-[12px] text-[20px] leading-[26px] font-bold">
          <div
            className="flex space-between items-center gap-4"
          >
            <span className="flex-1">{blog.title}</span>
            <ArrowRight className="go-link" size={70} />
          </div>
        </h3>
        <p className="mb-[16px]">{blog.excerpt}</p>
        <div className="flex gap-4 items-center mb-[24px]">
          {blog.author ? (
            <>
              <Image
                src={`/images/blogs/${blog.author_picture}`}
                alt={blog.author}
                width={40}
                height={40}
              />
              <div className="bl_author">
                <p className="text-[14px] text-(--text-blue)">{blog.author}</p>
                <p>{blog.date}</p>
              </div>
            </>
          ) : null}
        </div>
      </Link>
    </div>
  );
}
