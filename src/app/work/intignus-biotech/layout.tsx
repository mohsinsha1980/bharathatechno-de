import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benutzerdefinierte WordPress-Website für Intignus Biotech | Pune",
  description:
    "Entdecken Sie die benutzerdefinierte WordPress-Website von BharathaTechno IT für Intignus Biotech in Pune. Unsere Lösung bietet eine sichere, skalierbare Plattform, die auf die Anforderungen der Biotechnologie zugeschnitten ist.",
  alternates: {
    canonical: "https://bharathatechno.de/work/intignus-biotech",
  },
};

export default function IntignusBiotechLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
