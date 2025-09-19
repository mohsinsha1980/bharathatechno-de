import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trendy Threads: E-Commerce-Web-App | BharathaTechno IT",
  description:
    "BharathaTechno IT hat die E-Commerce-Web-App „Trendy Threads“ entwickelt, die benutzerdefinierte Funktionen und skalierbare Lösungen für ein reibungsloses Online-Einkaufserlebnis bietet.",
  alternates: {
    canonical: "https://bharathatechno.de/work/trendy-threads",
  },
};

export default function TrendyThreadsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
