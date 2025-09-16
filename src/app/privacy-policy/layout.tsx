import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BharathaTechno IT Pvt. Ltd.",
  description: "Privacy Policy of BharathaTechno IT Pvt. Ltd.",
  alternates: {
    canonical: "https://bharathatechno.com/privacy-policy",
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
