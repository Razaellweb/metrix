import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Metrix | Usage-Based Billing Infrastructure",
  description: "The developer-first usage-based billing and entitlement platform. Meter, bill, and control access in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="bg-canvas text-foreground selection:bg-brand-primary/20 selection:text-brand-primary min-h-screen relative overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
