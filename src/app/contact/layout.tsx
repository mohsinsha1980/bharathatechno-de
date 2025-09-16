import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development and Consulting | BharathaTechno IT Pvt. Ltd.",
  description:
    "Connect with BharathaTechno for expert software development and consulting services — let's shape and launch your next digital solution with clarity and speed.",
  alternates: {
    canonical: "https://bharathatechno.com/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
