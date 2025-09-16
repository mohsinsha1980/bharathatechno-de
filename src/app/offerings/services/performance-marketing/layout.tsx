import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing for B2B | BharathaTechno IT",
  description: "BharathaTechno IT helps B2B companies land meetings with decision-makers using human-led, channel-optimized outbound systems designed for high-ticket services.",
  alternates: {
    canonical:
      "https://bharathatechno.com/offerings/services/performance-marketing",
  },
};

export default function DigitalMarketingServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
