import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import Script from "next/script";
import WhatsappBadge from "@/components/common/whatsapp-badge";
import Privacy from "@/components/common/privacy";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Benutzerdefinierte Web-App-Entwicklung in Deutschland | Global Services",
  description:
    "BharathaTechno IT EU mit Sitz in Deutschland bietet weltweit kundenspezifische Web-App-Entwicklungsdienste an und stellt skalierbare und intuitive Lösungen zur Förderung des Wachstums bereit.",
  alternates: {
    canonical: "https://bharathatechno.de/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TR39V4K7');`}
      </Script>
      <meta name="google" content="notranslate" />
      <meta
        name="google-site-verification"
        content="Vyhh55vqPv7HGet_m9KDsTaxs9ZLXQ0UtDPI2S1nFUQ"
      />
      <body className={`${montserrat.variable} antialiased`}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TR39V4K7"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <ReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
          <main className="bl_page">
            <Header />
            {children}
          </main>
          <Footer />
          <WhatsappBadge />
          <Privacy />
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
