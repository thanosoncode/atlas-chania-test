import Head from "next/head";
import Footer from "./components/footer/Footer";
import { MotionWrapper } from "./components/motionWrapper/MotionWrapper";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthProvider from "./components/nextAuthProvider/SessionProvider";
import ToastProvider from "./components/toastProvider/ToastProvider";
import { getServerSession } from "next-auth";
import { Session } from "./admin/page";
import Script from "next/script";

const inter = Inter({ subsets: ["latin", "greek"] });

export const metadata = {
  title: "Atlas Chania",
  description: "Crossfit, Weightlifting Powerlifting Gym In Chania",
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
          <div className="mb-20 overflow-x-hidden  min-h-[calc(100vh-234px)] sm:min-h-[calc(100vh-294px)]">
            <MotionWrapper>{children}</MotionWrapper>
          </div>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
