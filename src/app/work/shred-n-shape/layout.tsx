import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shred n Shape Fitnessprogramm-Web-App mit Sitz in Großbritannien",
  description:
    "BharathaTechno IT hat in Großbritannien die Fitness-Web-App Shred n Shape entwickelt, die eine skalierbare Lösung zur Fortschrittsverfolgung, Bereitstellung von Trainingseinheiten und Einbindung der Benutzer bietet.",
  alternates: {
    canonical: "https://bharathatechno.de/work/shred-n-shape",
  },
};

export default function ShredNShapeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
