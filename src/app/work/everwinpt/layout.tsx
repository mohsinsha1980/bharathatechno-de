import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statische Website-Entwicklung für EverwinPT",
  description:
    "BharathaTechno IT hat für EverwinPT eine statische Website entwickelt und bietet eine einfache, schnell ladende Plattform, die auf Leistung und Benutzerfreundlichkeit ausgelegt und auf die Geschäftsanforderungen zugeschnitten ist.",
  alternates: {
    canonical: "https://bharathatechno.de/work/everwinpt",
  },
};

export default function EverwinptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
