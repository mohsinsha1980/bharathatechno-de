import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom UI/UX & Brand Design | BharathaTechno IT",
  description:
    "BharathaTechno IT offers expert UI/UX and brand design services to create engaging user experiences and strong brand identities for businesses.",
  alternates: {
    canonical:
      "https://bharathatechno.com/offerings/services/ui-ux-brand-design",
  },
};

export default function UXDesignServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
