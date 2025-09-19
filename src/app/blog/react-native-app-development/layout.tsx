import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Native App | BharathaTechno IT EU",
  description:
    "Planning to launch your mobile app in 2025? Discover why React Native is the smartest choice for building fast, cross-platform apps on a budget.",
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
