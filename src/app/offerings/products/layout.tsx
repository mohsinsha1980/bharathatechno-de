import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Products for Business | BharathaTechno IT",
  description: "Discover custom software products by BharathaTechno IT, offering scalable and tailored solutions that drive growth using innovative and cutting-edge technology.",
  alternates: {
    canonical: "https://bharathatechno.com/offerings/products",
  },
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
