import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Company in Pune | BharathaTechno IT Pvt. Ltd.",
  description:
    "BharathaTechno is a leading IT company in Pune offering full-stack development, secure web solutions, and custom IT services for startups and enterprises",
  alternates: {
    canonical: "https://bharathatechno.com/blog",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
