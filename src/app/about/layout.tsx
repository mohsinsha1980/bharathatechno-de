import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BharathaTechno IT | Custom Web Apps & IT Solutions in Pune",
  description: "BharathaTechno IT, one of the top IT companies in Pune, specializes in custom web app development, providing scalable and innovative solutions globally.",
  alternates: {
    canonical: "https://bharathatechno.com/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
