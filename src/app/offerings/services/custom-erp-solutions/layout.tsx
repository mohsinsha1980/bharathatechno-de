import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom ERP Solutions | BharathaTechno IT",
  description:
    "BharathaTechno IT provides custom ERP solutions tailored to your business needs. Our scalable software enhances operational efficiency and streamlines workflows.",
  alternates: {
    canonical:
      "https://bharathatechno.com/offerings/services/custom-erp-solutions",
  },
};

export default function CustomErpServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
