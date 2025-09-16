import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B-Chef: Food Ordering & Delivery Software | BharathaTechno IT",
  description: "B-Chef by BharathaTechno IT offers a custom food ordering and delivery solution, with an intuitive admin dashboard for managing orders, payments, and more.",
  alternates: {
    canonical: "https://bharathatechno.com/offerings/products/b-chef",
  },
};

export default function BChefProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
