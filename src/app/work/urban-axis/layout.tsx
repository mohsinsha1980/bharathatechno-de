import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UrbanAxis: Next.js-Website mit SEO für Unternehmenswachstum",
  description: "BharathaTechno IT hat die UrbanAxis-Website in Goa mit Next.js erstellt und dabei bewährte SEO-Praktiken integriert, um das Geschäftswachstum zu fördern und die Online-Sichtbarkeit zu verbessern.",
  alternates: {
    canonical: "https://bharathatechno.de/work/urban-axis",
  },
};

export default function UrbanAxisLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
