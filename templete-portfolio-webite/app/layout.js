import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Nasiha Sara | Portfolio | Architecture & 3D Visualization",
  description: "Professional architecture portfolio of Nasiha Sara, featuring 3D visualizations, BIM designs, Revit modeling, and AutoCAD documentation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} overflow-x-hidden`}>
      <body className="bg-brand-dark text-brand-light font-sans antialiased overflow-x-hidden">
        <Header />
        <main className="min-h-[calc(100vh-100px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
