"use client";
import { AnimatePresence, motion } from "framer-motion";
import BlogItem from "./blog-item";
import { PostDataType } from "@/lib/types";

// const BLOGS = [
//   {
//     id: "0",
//     picture: "/images/home/blogs/mern-stack.webp",
//     label: "#Services",
//     title: "MERN Stack Development Services by BharathaTechno IT Pvt. Ltd.",
//     excerpt:
//       "At BharathaTechno, we utilize the full potential of the MERN stack to build highly interactive, scalable, and business-oriented web applications. Our strong commitment to end-to-end full-stack development allows us to deliver customized digital solutions that scale with seamless performance and interactive architecture.",
//     author: "Rajesh Sivapalan",
//     author_picture: "/images/home/blogs/rajesh.webp",
//     date: "20 Oct, 2024",
//     link: "/blog/mern-stack-development-services",
//   },
//   {
//     id: "1",
//     picture: "/images/home/blogs/nextjs.webp",
//     label: "#Nextjs",
//     title: "Next.js Website Development by BharathaTechno Pvt. Ltd.",
//     excerpt:
//       "Next.js is a powerful React framework for web development. It enables you to build fast, scalable, and SEO-friendly web applications. This framework simplifies complex tasks like server-side rendering and static site generation (SSG) and delivers exceptional performance and an enhanced user experience for your projects.",
//     author: "Rajesh Sivapalan",
//     author_picture: "/images/home/blogs/rajesh.webp",
//     date: "02 Feb, 2025",
//     link: "/blog/nextjs-website-development",
//   },
//   {
//     id: "2",
//     picture: "/images/home/blogs/react-native.webp",
//     label: "#React Native App",
//     title: "Why Choose React Native App Development Company for Your Business?",
//     excerpt:
//       "In this dynamic digital world, mobile applications have become a vital tool for business growth, customer engagement, and revenue generation of the business. But the big question remains: What's the smartest way to build a mobile app that runs smoothly on both Android and iOS? And React Native remains the standout choice for businesses looking to go forward with mobile app development.",
//     author: "Rajesh Sivapalan",
//     author_picture: "/images/home/blogs/rajesh.webp",
//     date: "07 June, 2025",
//     link: "/blog/react-native-app-development",
//   },
// ];

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
          className="grid grid-cols-1 gap-[60px] lg:grid-cols-3 md:grid-cols-2 "
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