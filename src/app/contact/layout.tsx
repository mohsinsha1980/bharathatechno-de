import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softwareentwicklung und Beratung | BharathaTechno IT EU",
  description:
    "Kontaktieren Sie BharathaTechno für kompetente Softwareentwicklung und Beratung – wir entwickeln und implementieren Ihre nächste digitale Lösung schnell und klar.",
  alternates: {
    canonical: "https://bharathatechno.de/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
