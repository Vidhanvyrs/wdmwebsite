import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PopupProvider } from "@/context/PopupContext";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "wdm - Minimal Expense Tracker",
  description: "Breathe the Air of Minimal Expense",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <PopupProvider>
        <body className={`overflow-x-hidden ${bricolage.className}`}>
          <Toaster position="top-right" />
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </PopupProvider>
    </html>
  );
}
