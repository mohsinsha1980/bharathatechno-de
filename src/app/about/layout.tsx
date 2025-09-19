import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BharathaTechno IT EU | Benutzerdefinierte Web-Apps und IT-Lösungen in Germany",
  description:
    "BharathaTechno IT, eines der führenden IT-Unternehmen in Germany, ist auf die Entwicklung kundenspezifischer Web-Apps spezialisiert und bietet weltweit skalierbare und innovative Lösungen.",
  alternates: {
    canonical: "https://bharathatechno.de/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
