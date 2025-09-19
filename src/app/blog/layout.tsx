import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT-Unternehmen in Germany | BharathaTechno IT EU",
  description:
    "BharathaTechno ist ein führendes IT-Unternehmen in Deutschland, das Full-Stack-Entwicklung, sichere Weblösungen und maßgeschneiderte IT-Services für Startups und Unternehmen anbietet.",
  alternates: {
    canonical: "https://bharathatechno.de/blog",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
