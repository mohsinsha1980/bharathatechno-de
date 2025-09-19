import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B-Chef: Software zur Essensbestellung und -lieferung | BharathaTechno IT",
  description:
    "B-Chef von BharathaTechno IT bietet eine individuelle Lösung zur Essensbestellung und -lieferung mit einem intuitiven Admin-Dashboard zur Verwaltung von Bestellungen, Zahlungen und mehr.",
  alternates: {
    canonical: "https://bharathatechno.de/offerings/products/b-chef",
  },
};

export default function BChefProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
