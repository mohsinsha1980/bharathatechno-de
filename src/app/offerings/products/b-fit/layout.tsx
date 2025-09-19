import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B-Fit: Personal Trainer Software von BharathaTechno IT",
  description:
    "B-Fit von BharathaTechno IT optimiert das Fitnessmanagement. Von der Fortschrittsverfolgung bis hin zu personalisierten Plänen steigert unsere Software die Effizienz und das Kundenerlebnis.",
  alternates: {
    canonical: "https://bharathatechno.de/offerings/products/b-fit",
  },
};

export default function BFitProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
