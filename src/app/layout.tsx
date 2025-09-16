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
  title: "Custom Web App Development in Pune | Global Services",
  description:
    "BharathaTechno IT Pvt Ltd, based in Pune, offers custom web app development services worldwide, providing scalable and intuitive solutions to drive growth.",
  alternates: {
    canonical: "https://bharathatechno.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NZC764TZ');`}
      </Script>
      <meta
        name="google-site-verification"
        content="XRh-a60Us_VHqjmjac04ewcEpGpYl96WdT6R2jSTEnE"
      />
      <body className={`${montserrat.variable} antialiased`}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NZC764TZ"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <ReCaptchaProvider reCaptchaKey="6LctziUpAAAAADgXItgeelQ-KRULImXcvzFSqrt4">
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
