import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { StickyNav } from "@/components/layout/StickyNav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Concrete Curve — Design, Culture & Visual Storytelling",
    template: "%s | Concrete Curve",
  },
  description:
    "An independent magazine featuring three curated issues exploring design, culture, photography, and visual storytelling.",
  openGraph: {
    title: "Concrete Curve",
    description:
      "Three curated issues exploring design, culture, photography, and visual storytelling.",
    type: "website",
    locale: "en_US",
    siteName: "Concrete Curve",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <StickyNav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
