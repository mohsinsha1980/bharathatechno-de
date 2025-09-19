import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snumero: Next.js-Website mit lokaler SEO für Unternehmenswachstum",
  description:
    "Entdecken Sie die Next.js-Website von Snumero, optimiert mit lokaler SEO für Ihr Unternehmenswachstum. Wir liefern skalierbare, leistungsstarke Lösungen zur Verbesserung der lokalen Marktpräsenz.",
  alternates: {
    canonical: "https://bharathatechno.de/work/snumero",
  },
};

export default function SsnumeroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
