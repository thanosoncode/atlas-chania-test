import Head from "next/head";
import Footer from "./components/footer/Footer";
import { MotionPageWrapper } from "./components/motionWrapper/MotionPageWrapper";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthProvider from "./context/SessionProvider";
import ToastProvider from "./context/ToastProvider";
import { getServerSession } from "next-auth";
import Script from "next/script";
import { Session } from "./utils/types";

const inter = Inter({ subsets: ["latin", "greek"] });

export const metadata = {
  title: "Atlas Chania",
  description:
    "Crossfit, Weightlifting and Powerlifting γυμναστήριο στα Χανιά. Ολοκληρωμένη προπόνηση, προετοιμασία για αγώνες, προγράμματα γυμναστικής, συμβουλές διατροφής, άρθρα. Κατέκτησε το στόχους σου στο γυμναστήριο Άτλας Χανιά",
  keywords:
    "Atlas Chania, γυμναστήριο, Χανιά, Κρήτη, άρση βαρών, weightlifting, clean & jerk, CrossFit, εθνική ομάδα, αθλητές, powerlifting, μηχανήματα, Γιαννης Νταγκουνακης, οικονομικό, φθηνό, το καλυτερο γυμναστηριο στσ Χανιά, οι καλυτεροι προπονητές στα Χανιά, συμβουλές διατροφής, πρόγραμμα γυμναστικής, πρόγραμμα ενδυνάμωσης",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = (await getServerSession()) as Session | undefined;

  return (
    <html lang="el">
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LEYWPPLYS8"
        ></Script>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-LEYWPPLYS8');
  `,
          }}
        />
      </Head>
      <body className={inter.className} style={{ overflowX: "hidden" }}>
        <NextAuthProvider>
          <ToastProvider />
          <div className="absolute z-20 left-1/2 -translate-x-1/2">
            <Navbar session={session} />
          </div>
          <div className="overflow-x-hidden  min-h-[calc(100vh-234px)] sm:min-h-[calc(100vh-294px)]">
            <MotionPageWrapper>{children}</MotionPageWrapper>
          </div>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
