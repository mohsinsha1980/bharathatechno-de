import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Indian Food Delivery Website for Nikita's Curry Corner",
  description: "Explore Nikita's Curry Corner, an Indian food delivery website by BharathaTechno IT in Canada, featuring future ordering, secure payments, and admin tools.",
  alternates: {
    canonical: "https://bharathatechno.com/work/nikitas-curry-corner",
  },
};

export default function NikitasCurryCornerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
