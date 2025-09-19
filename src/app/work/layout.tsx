import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack-Lösungen für Web und Mobilgeräte | BharathaTechno IT EU",
  description:
    "BharathaTechno IT ist auf die Full-Stack-Entwicklung für Web- und mobile Apps spezialisiert und liefert sichere, skalierbare und robuste Anwendungen, die den globalen Geschäftsanforderungen gerecht werden.",
  alternates: {
    canonical: "https://bharathatechno.de/work",
  },
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
