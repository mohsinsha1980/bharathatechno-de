import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack-Entwicklungsdienste | BharathaTechno IT",
  description:
    "BharathaTechno IT ist auf Full-Stack-Entwicklung spezialisiert und bietet maßgeschneiderte Front-End- und Back-End-Lösungen für eine nahtlose, leistungsstarke App-Entwicklung.",
  alternates: {
    canonical:
      "https://bharathatechno.de/offerings/services/full-stack-development",
  },
};

export default function FullStackServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
