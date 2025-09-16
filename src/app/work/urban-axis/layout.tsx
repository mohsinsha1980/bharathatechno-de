import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UrbanAxis: Next.js Website with SEO for Business Growth",
  description: "BharathaTechno IT built the UrbanAxis website in Goa using Next.js, integrating best SEO practices to enhance business growth and improve online visibility.",
  alternates: {
    canonical: "https://bharathatechno.com/work/urban-axis",
  },
};

export default function UrbanAxisLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
