import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atelier Ceylan - Mimariproje ve Tasarım Ofisi",
  description: "Atelier Ceylan, mimarlıkta parametrik tasarım ve dijital üretim ile modern, sürdürülebilir projeler yaratır.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/lenis/1.3.0/lenis.min.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}