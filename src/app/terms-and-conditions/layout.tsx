import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen | BharathaTechno IT EU",
  description: "Allgemeine Geschäftsbedingungen von BharathaTechno IT EU",
  alternates: {
    canonical: "https://bharathatechno.de/terms-and-conditions",
  },
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
