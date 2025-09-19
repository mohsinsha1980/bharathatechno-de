import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MERN Stack Development | BharathaTechno IT EU",
  description:
    "Discover top MERN stack development companies offering full-stack JavaScript solutions for scalable web and mobile applications. Hire expert developers today.",
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
