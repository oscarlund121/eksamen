import "./globals.css";
import Header from "./components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <html lang="da" className={inter.variable}>
        <body className="bg-[#F5F3EC]">
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
