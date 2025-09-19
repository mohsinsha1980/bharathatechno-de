import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benutzerdefiniertes UI/UX- und Markendesign | BharathaTechno IT",
  description:
    "BharathaTechno IT bietet fachkundige UI/UX- und Markendesigndienste an, um ansprechende Benutzererlebnisse und starke Markenidentitäten für Unternehmen zu schaffen.",
  alternates: {
    canonical:
      "https://bharathatechno.de/offerings/services/ui-ux-brand-design",
  },
};

export default function UXDesignServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
