import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Train 2 Gain: Custom WordPress Website Development",
  description: "Explore Train 2 Gain's custom WordPress website, developed by BharathaTechno IT. Designed for performance, security, and seamless user experience.",
  alternates: {
    canonical: "https://bharathatechno.com/work/train-2-gain",
  },
};

export default function Train2GainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
