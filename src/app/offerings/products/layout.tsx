import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maßgeschneiderte Softwareprodukte für Unternehmen | BharathaTechno IT",
  description:
    "Entdecken Sie kundenspezifische Softwareprodukte von BharathaTechno IT, die skalierbare und maßgeschneiderte Lösungen bieten, die mithilfe innovativer und hochmoderner Technologie das Wachstum vorantreiben.",
  alternates: {
    canonical: "https://bharathatechno.de/offerings/products",
  },
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
