import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mow's Delicatessen | Charcuterie & Sandwiches Maison",
  description:
    "Mow's Delicatessen — charcuterie fine, fromages affinés et sandwiches maison à Toulouse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${lato.variable}`}>
      <body className="bg-cream text-charcoal antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
