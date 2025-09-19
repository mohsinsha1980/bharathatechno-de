"use client";
import { AnimatePresence, motion } from "framer-motion";
import BlogItem from "./blog-item";
import { PostDataType } from "@/lib/types";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 1 },
  },
};
const items = {
  hidden: { opacity: 0, top: 20 },
  show: { opacity: 1, top: 0 },
};

export default function BlogsArticles({BLOGS}: {BLOGS: PostDataType[]}){

  return (
    <section className="bl_blogs_list">
      <div className="container">
        <h2
          className="mb-10 text-center"
          style={{ color: `var(--text-orange)` }}
        >
          Blogs &amp; Artikel
        </h2>
        <motion.div
          className="grid grid-cols-1 gap-[30px] lg:gap-[60px] lg:grid-cols-3 md:grid-cols-2 "
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {BLOGS.map((blog: PostDataType) => (
              <motion.div
                variants={items}
                className="relative lg:items-stretch"
                key={`blog_${blog.title}`}
              >
                <BlogItem blog={blog} />
                {/* <BlogList posts={BLOGS} /> */}
              </motion.div>
            ))} 
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}