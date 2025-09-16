import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Stack Development Services | BharathaTechno IT",
  description:
    "BharathaTechno IT specializes in full-stack development, providing customized front-end and back-end solutions for seamless, high-performance app development.",
  alternates: {
    canonical:
      "https://bharathatechno.com/offerings/services/full-stack-development",
  },
};

export default function FullStackServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
