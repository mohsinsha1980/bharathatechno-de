import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Infrastructure Management Services | BharathaTechno IT",
  description:
    "BharathaTechno IT offers cloud infrastructure management, optimizing IT resources, ensuring scalability, and delivering robust security to drive business efficiency.",
  alternates: {
    canonical:
      "https://bharathatechno.com/offerings/services/cloud-infrastructure-management",
  },
};

export default function CloudInfrastructureServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
