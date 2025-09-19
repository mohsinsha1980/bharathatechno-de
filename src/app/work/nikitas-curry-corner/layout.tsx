import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maßgeschneiderte Website für die Lieferung indischer Speisen für Nikita's Curry Corner",
  description:
    "Entdecken Sie Nikita's Curry Corner, eine Website für die Lieferung indischer Speisen von BharathaTechno IT in Kanada mit Funktionen für zukünftige Bestellungen, sichere Zahlungen und Verwaltungstools.",
  alternates: {
    canonical: "https://bharathatechno.de/work/nikitas-curry-corner",
  },
};

export default function NikitasCurryCornerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
