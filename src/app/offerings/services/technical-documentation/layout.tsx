import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Technical Documentation | BharathaTechno IT",
  description:
    "Get professional technical documentation services from BharathaTechno IT. We provide clear, structured, and accurate documentation to support your business needs.",
  alternates: {
    canonical:
      "https://bharathatechno.com/offerings/services/technical-documentation",
  },
};

export default function TechnicalDocumentionServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
