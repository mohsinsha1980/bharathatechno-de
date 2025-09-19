import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kundenspezifische ERP-Lösungen | BharathaTechno IT",
  description:
    "BharathaTechno IT bietet maßgeschneiderte ERP-Lösungen, die auf Ihre Geschäftsanforderungen zugeschnitten sind. Unsere skalierbare Software steigert die betriebliche Effizienz und optimiert Arbeitsabläufe.",
  alternates: {
    canonical:
      "https://bharathatechno.de/offerings/services/custom-erp-solutions",
  },
};

export default function CustomErpServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
