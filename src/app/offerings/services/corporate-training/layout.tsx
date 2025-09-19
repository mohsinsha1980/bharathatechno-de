import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Tech Training: MERN, MEAN, JavaScript",
  description:
    "Verbessern Sie die Fähigkeiten Ihres Teams mit den Unternehmensschulungen von BharathaTechno IT in MERN, MEAN und JavaScript. Bereiten Sie sich auf komplexe Projekte vor und fördern Sie Innovationen.",
  alternates: {
    canonical:
      "https://bharathatechno.de/offerings/services/corporate-training",
  },
};

export default function CorporateTrainingServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
