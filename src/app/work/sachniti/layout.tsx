import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BharathaTechno IT - Sachniti Static Website Development",
  description: "Discover Sachniti's static website, created by BharathaTechno IT. Our focus on speed, simplicity, and efficiency ensures a seamless user experience and optimal performance.",
  alternates: {
    canonical: "https://bharathatechno.com/work/sachniti",
  },
};

export default function SachnitiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
