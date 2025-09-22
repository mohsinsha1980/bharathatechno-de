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
      "B-Fit unterstützt Fitnessstudios, Yoga-Lehrer:innen und FitnessCoaches dabei, Kunden, Termine und Zahlungen effizient zu verwalten. So wird die Organisation der Dienstleistungen erleichtert und die Online-Präsenz gestärkt, um das Markenwachstum zu fördern.",
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
      "B-Store ist eine skalierbare, unabhängige E-Commerce-Plattform, die alle Branchen unterstützt—von Mode und Beauty bis hin zu Elektronik und Dienstleistungen. Sie bietet die vollständige Kontrolle über Ihre Marke, Produkte und Kundendaten, was ein nachhaltiges Wachstum unabhängig von großen Marktplätzen ermöglicht.",
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
      "B-Chef ist eine webbasierte Lösung für Köche und FoodBrands, die ihre Produkte online verkaufen, ihre Markenidentität stärken und unabhängig wachsen möchten. Die Plattform bietet leistungsstarke Tools für Bestellungen und Lieferungen, um das Geschäft effizient zu skalieren.",
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
  name: "Maßgeschneiderte Softwareprodukte für Unternehmen | BharathaTechno IT",
  url: "https://bharathatechno.de/offerings/products",
  headline: "Maßgeschneiderte Softwareprodukte für Unternehmen | BharathaTechno IT",
  description:
    "BharathaTechno ist ein führendes IT-Unternehmen in Deutschland, das Full-Stack-Entwicklung, sichere Weblösungen und maßgeschneiderte IT-Services für Startups und Unternehmen anbietet.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://bharathatechno.de/search?q={search_term_string}",
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
          data={`Unsere Produkte sind speziell entwickelte Plattformen für Wachstum, Effizienz und Kundenbindung.
Mit modernster Full-Stack-Technologie realisiert, werden alle Lösungen individuell auf Ihre Anforderungen zugeschnitten,
sodass Sie flexibel arbeiten und mit voller Überzeugung skalieren können.`}
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
