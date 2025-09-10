import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Advanced Network Solutions - Managed IT & Cybersecurity for NYC SMBs",
  description: "Expert managed IT services and cybersecurity solutions for regulated SMBs in NYC. NYDFS and HIPAA compliant with 99.9% uptime SLA.",
  keywords: "managed IT services, cybersecurity, NYDFS compliance, HIPAA compliance, NYC IT support, cloud services, network security",
  openGraph: {
    title: "Advanced Network Solutions - Managed IT & Cybersecurity",
    description: "Expert managed IT services and cybersecurity solutions for regulated SMBs in NYC.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
