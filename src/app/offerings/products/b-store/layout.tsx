import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B-Store: Custom E-commerce Web App for Fashion Business",
  description:
    "B-Store is a custom fashion e-commerce web app by BharathaTechno IT. Manage operations, brand, orders, and customer experience for sustainable business growth.",
  alternates: {
    canonical: "https://bharathatechno.com/offerings/products/b-store",
  },
};

export default function BStoreProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
