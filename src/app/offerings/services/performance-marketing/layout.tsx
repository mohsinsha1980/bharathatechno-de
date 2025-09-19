import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance-Marketing für B2B | BharathaTechno IT",
  description:
    "BharathaTechno IT hilft B2B-Unternehmen dabei, Meetings mit Entscheidungsträgern zu vereinbaren, indem es von Menschen geführte, kanaloptimierte Outbound-Systeme verwendet, die für hochpreisige Dienstleistungen konzipiert sind.",
  alternates: {
    canonical:
      "https://bharathatechno.de/offerings/services/performance-marketing",
  },
};

export default function DigitalMarketingServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
