import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | BharathaTechno IT Pvt. Ltd.",
  description: "Refund Policy of BharathaTechno IT Pvt. Ltd.",
  alternates: {
    canonical: "https://bharathatechno.com/refund-policy",
  },
};

export default function RefundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
