import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs Website | BharathaTechno IT Pvt. Ltd.",
  description:
    "BharathaTechno Pvt. Ltd. offers expert Next.js development services to build fast, scalable, and SEO-friendly web applications. From e-commerce to enterprise apps, we provide solution to solutions built to grow your brand and boost performance.",
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
