import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R3Constructor: Next.js Website Development | PCMC",
  description: "Explore R3Constructor's Next.js website, built by BharathaTechno IT, in PCMC. Optimized for performance and business growth with scalable solutions.",
  alternates: {
    canonical: "https://bharathatechno.com/work/r3constructor",
  },
};

export default function R3ConstructorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
