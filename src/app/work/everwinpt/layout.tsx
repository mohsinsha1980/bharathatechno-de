import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Static Website Development for EverwinPT",
  description: "BharathaTechno IT developed a static website for EverwinPT, providing a simple, fast-loading platform designed for performance and usability, tailored to business needs.",
  alternates: {
    canonical: "https://bharathatechno.com/work/everwinpt",
  },
};

export default function EverwinptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
