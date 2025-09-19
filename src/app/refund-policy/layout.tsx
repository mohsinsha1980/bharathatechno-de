import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rückerstattungsrichtlinie | BharathaTechno IT EU",
  description: "Rückerstattungsrichtlinie von BharathaTechno IT EU",
  alternates: {
    canonical: "https://bharathatechno.de/refund-policy",
  },
};

export default function RefundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
