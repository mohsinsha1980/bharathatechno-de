import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and conditions | BharathaTechno IT Pvt. Ltd.",
  description: "Terms and conditions of BharathaTechno IT Pvt. Ltd.",
  alternates: {
    canonical: "https://bharathatechno.com/terms-and-conditions",
  },
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
