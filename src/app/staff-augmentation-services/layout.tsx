import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalaufstockungsdienste | BharathaTechno IT EU",
  description:
    "Kontaktieren Sie BharathaTechno für kompetente Softwareentwicklung und Beratung – wir entwickeln und implementieren Ihre nächste digitale Lösung schnell und klar.",
  alternates: {
    canonical: "https://bharathatechno.de/staff-augmentation-services",
  },
};

export default function StaffAugmentationContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
