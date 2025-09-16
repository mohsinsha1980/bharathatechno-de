import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B-Fit: Personal Trainer Software by BharathaTechno IT",
  description:
    "B-Fit by BharathaTechno IT streamlines fitness management. From progress tracking to personalized plans, our software boosts efficiency and client experience.",
  alternates: {
    canonical: "https://bharathatechno.com/offerings/products/b-fit",
  },
};

export default function BFitProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
