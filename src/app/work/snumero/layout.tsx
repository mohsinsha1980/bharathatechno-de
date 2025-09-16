import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snumero: Next.js Website with Local SEO for Business Growth",
  description: "Explore Snumero's Next.js website, optimized with local SEO for business growth. We deliver scalable, high-performance solutions to enhance local market visibility.",
  alternates: {
    canonical: "https://bharathatechno.com/work/snumero",
  },
};

export default function SsnumeroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
