import type { Metadata } from "next";
import { Inter, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Advanced Network Consulting (ANC) - Secure IT and Cybersecurity Solutions for Growing Businesses",
  description: "Expert managed IT services and cybersecurity solutions for regulated SMBs and mid-market clients in NYC. NYDFS and HIPAA compliant with 99.9% uptime SLA.",
  keywords: "managed IT services, cybersecurity, NYDFS compliance, HIPAA compliance, NYC IT support, cloud services, network security, SMB IT solutions, mid-market IT",
  openGraph: {
    title: "Advanced Network Consulting (ANC) - Secure IT and Cybersecurity Solutions",
    description: "Expert managed IT services and cybersecurity solutions for regulated SMBs and mid-market clients in NYC.",
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
      <body 
        className={`${inter.variable} ${montserrat.variable} ${roboto.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
