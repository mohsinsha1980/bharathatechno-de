import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff Augmentation Services | MERN & MEAN Stack Experts",
  description: "BharathaTechno IT offers specialized staff augmentation services to scale your team with top-tier MERN and MEAN stack experts, enhancing technical capabilities.",
  alternates: {
    canonical: "https://bharathatechno.com/offerings/services/staff-augmentation",
  },
};

export default function StaffAugmentationServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
