import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Stack Solutions for Web & Mobile | BharathaTechno IT",
  description: "BharathaTechno IT specializes in Full Stack Development for web and mobile apps, delivering secure, scalable, and robust applications that meet global business needs.",
  alternates: {
    canonical: "https://bharathatechno.com/work",
  },
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
