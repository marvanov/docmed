import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/header.js";
import Footer from "../components/footerNew.js";
import { AccessibilityProvider } from "../context/accessibilityContext.js";

const montserrat = Montserrat({ subsets: ["cyrillic", "latin"], variable: "--font-sans" });
const playfair = Roboto({ subsets: ["cyrillic", "latin"], variable: "--font-serif" });

import { content } from '../content'

export const metadata = content.metadata

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans flex flex-col min-h-screen relative`}>
        <AccessibilityProvider>
          <Header />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
        </AccessibilityProvider>
      </body>
    </html>
  );
}