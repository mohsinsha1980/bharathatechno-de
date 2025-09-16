import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom WordPress Website for Intignus Biotech | Pune",
  description: "Explore the custom WordPress website by BharathaTechno IT for Intignus Biotech in Pune. Our solution offers a secure, scalable platform tailored to biotech needs.",
  alternates: {
    canonical: "https://bharathatechno.com/work/intignus-biotech",
  },
};

export default function IntignusBiotechLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
