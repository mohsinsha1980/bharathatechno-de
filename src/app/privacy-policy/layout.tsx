import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzrichtlinie | BharathaTechno IT EU",
  description: "Datenschutzrichtlinie von BharathaTechno IT EU",
  alternates: {
    canonical: "https://bharathatechno.de/privacy-policy",
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
