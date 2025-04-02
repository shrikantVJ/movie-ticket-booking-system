'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { metadata } from "@/app/metadata"; // Corrected import path
import ClientProvider from "@/components/ClientProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "255151939242-cecntcovovrd7b1us9s2o3p5ic0tquhu.apps.googleusercontent.com";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ Component, pageProps, children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <GoogleOAuthProvider clientId={clientId}>
        <ClientProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
