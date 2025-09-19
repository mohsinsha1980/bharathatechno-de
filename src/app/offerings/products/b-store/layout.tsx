import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B-Store: Benutzerdefinierte E-Commerce-Web-App für das Modegeschäft",
  description:
    "B-Store ist eine maßgeschneiderte E-Commerce-Web-App für Mode von BharathaTechno IT. Verwalten Sie Abläufe, Marke, Bestellungen und Kundenerfahrung für nachhaltiges Geschäftswachstum.",
  alternates: {
    canonical: "https://bharathatechno.de/offerings/products/b-store",
  },
};

export default function BStoreProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
