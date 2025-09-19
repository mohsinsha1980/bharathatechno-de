import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Train 2 Gain: Benutzerdefinierte WordPress-Website-Entwicklung",
  description:
    "Entdecken Sie die benutzerdefinierte WordPress-Website von Train 2 Gain, entwickelt von BharathaTechno IT. Entwickelt für Leistung, Sicherheit und nahtloses Benutzererlebnis.",
  alternates: {
    canonical: "https://bharathatechno.de/work/train-2-gain",
  },
};

export default function Train2GainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
