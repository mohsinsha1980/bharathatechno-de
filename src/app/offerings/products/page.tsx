"use client";
import Banner from "@/components/product/banner";
import { AnimatePresence, motion } from "framer-motion";
import ProductItem from "@/components/product/product-items";
import Script from "next/script";

interface BlogType {
  id: string;
  picture: string;
  title: string;
  label: string;
  link: string;
  excerpt: string;
  author_picture: string;
  author: string;
  date: string;
}

const PRODUCT: BlogType[] = [
  {
    id: "0",
    picture: "/images/blogs/b-fit.webp",
    label: "",
    title: "B-Fit",
    excerpt:
      "B-Fit helps gyms, yoga instructors, and fitness coaches manage clients, schedules, and payments, making it easier to run their services and grow their brand online.",
    author: "",
    author_picture: "/images/blogs/rajesh.webp",
    date: new Date().toDateString(),
    link: "/offerings/products/b-fit",
  },
  {
    id: "1",
    picture: "/images/blogs/b-store.webp",
    label: "",
    title: "B-store",
    excerpt:
      "B-STORE is a scalable e-commerce platform for fashion, beauty & more—offering full control, brand focus, and growth beyond marketplaces.",
    author: "",
    author_picture: "/images/blogs/rajesh.webp",
    date: new Date().toDateString(),
    link: "/offerings/products/b-store",
  },
  {
    id: "2",
    picture: "/images/blogs/b-chef.webp",
    label: "",
    title: "B-Chef",
    excerpt:
      "B-CHEF is a web solution for chefs and food brands to sell online, build their identity, and grow independently with powerful food delivery tools.",
    author: "",
    author_picture: "/images/blogs/rajesh.webp",
    date: new Date().toDateString(),
    link: "/offerings/products/b-chef",
  },
];

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

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Ready-to-Grow Digital Products - B-Fit, B-Store, B-Chef | BharathaTechnoIT",
  url: "https://bharathatechno.com/offerings/products",
  headline: "Our Products - B-Fit, B-Store, B-Chef for Business Growth",
  description:
    "Explore BharathaTechnoIT's ready-to-grow products: B-Fit for fitness business management, B-Store for e-commerce brands, and B-Chef for online food delivery. Our scalable, user-friendly platforms empower gyms, retailers, and food brands to grow their business, reach more customers, and build a modern online presence.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://bharathatechno.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Product() {
  return (
    <>
      <Script
        id="schema-webpage-product"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="pg_product">
        <Banner
          data="Our products are purpose-built platforms for growth, efficiency, and
        customer engagement. Developed using leading-edge full-stack technology,
        each solution is tailored to your specific needs, allowing to operate
        freely and scale with conviction."
        />
        <div className="container mt-8">
          <h2
            className="mb-10 text-center"
            style={{ color: `var(--text-orange)` }}
          >
            Our Products
          </h2>
          <motion.div
            className="bl_blogs_list grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[60px]"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {PRODUCT.map((blog) => (
                <motion.div
                  variants={items}
                  className="relative lg:items-stretch"
                  key={`blog_${blog.id}`}
                >
                  <ProductItem blog={blog} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
