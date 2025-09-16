import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shred n Shape Fitness Program Web App based in UK",
  description: "BharathaTechno IT developed the Shred n Shape fitness web app in the UK, offering a scalable solution to track progress, deliver workouts, and engage users.",
  alternates: {
    canonical: "https://bharathatechno.com/work/shred-n-shape",
  },
};

export default function ShredNShapeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
