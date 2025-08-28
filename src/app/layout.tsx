import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "WealthBuilder | Smart Investing Made Simple",
  description: "Take control of your financial future with AI-powered investing, automated portfolio management, and expert financial guidance. Start building wealth today.",
  keywords: "investing, wealth management, financial planning, robo advisor, portfolio management, retirement planning",
  authors: [{ name: "WealthBuilder" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints for performance */}
        <link rel="preload" href="/videos/hero-background.mp4" as="video" type="video/mp4" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Performance and SEO meta tags */}
        <meta name="theme-color" content="#059669" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
