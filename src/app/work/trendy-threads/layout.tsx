import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trendy Threads: E-commerce Web App | BharathaTechno IT",
  description: "BharathaTechno IT built the Trendy Threads e-commerce web app, offering custom features and scalable solutions for smooth online shopping experiences.",
  alternates: {
    canonical: "https://bharathatechno.com/work/trendy-threads",
  },
};

export default function TrendyThreadsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
