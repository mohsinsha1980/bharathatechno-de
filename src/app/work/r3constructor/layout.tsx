import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R3Constructor: Next.js-Website-Entwicklung | PCMC",
  description:
    "Entdecken Sie die Next.js-Website von R3Constructor, erstellt von BharathaTechno IT in PCMC. Optimiert für Leistung und Geschäftswachstum mit skalierbaren Lösungen.",
  alternates: {
    canonical: "https://bharathatechno.de/work/r3constructor",
  },
};

export default function R3ConstructorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
