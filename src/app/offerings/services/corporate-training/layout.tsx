import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Tech Training: MERN, MEAN, JavaScript",
  description: "Enhance your team's skills with BharathaTechno IT's corporate training in MERN, MEAN, and JavaScript. Prepare for complex projects and drive innovation.",
  alternates: {
    canonical: "https://bharathatechno.com/offerings/services/corporate-training",
  },
};

export default function CorporateTrainingServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
