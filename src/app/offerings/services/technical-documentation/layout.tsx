import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professionelle technische Dokumentation | BharathaTechno IT",
  description:
    "Profitieren Sie von professionellen technischen Dokumentationsdiensten von BharathaTechno IT. Wir bieten klare, strukturierte und präzise Dokumentation zur Unterstützung Ihrer Geschäftsanforderungen.",
  alternates: {
    canonical:
      "https://bharathatechno.de/offerings/services/technical-documentation",
  },
};

export default function TechnicalDocumentionServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
