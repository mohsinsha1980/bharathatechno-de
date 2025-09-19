import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BharathaTechno IT - Entwicklung statischer Websites in Sachniti",
  description:
    "Entdecken Sie die statische Website von Sachniti, erstellt von BharathaTechno IT. Unser Fokus auf Geschwindigkeit, Einfachheit und Effizienz sorgt für ein nahtloses Benutzererlebnis und optimale Leistung.",
  alternates: {
    canonical: "https://bharathatechno.de/work/sachniti",
  },
};

export default function SachnitiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
