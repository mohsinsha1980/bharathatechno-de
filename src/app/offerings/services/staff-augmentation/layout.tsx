import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalaufstockungsdienste | MERN & MEAN Stack-Experten",
  description:
    "BharathaTechno IT bietet spezialisierte Personalaufstockungsdienste an, um Ihr Team mit erstklassigen MERN- und MEAN-Stack-Experten zu erweitern und so die technischen Fähigkeiten zu verbessern.",
  alternates: {
    canonical:
      "https://bharathatechno.de/offerings/services/staff-augmentation",
  },
};

export default function StaffAugmentationServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
