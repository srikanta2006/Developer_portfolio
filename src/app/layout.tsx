import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srikanta.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Srikanta Bellamkonda — Creative Technologist · Software Developer · AI Builder",
    template: "%s | Srikanta Bellamkonda",
  },
  description:
    "Personal portfolio and technical case studies of Srikanta Bellamkonda, showcasing intelligent products at the intersection of software and AI.",
  keywords: [
    "Srikanta Bellamkonda",
    "Creative Technologist",
    "Software Developer",
    "AI Builder",
    "Agentic AI",
    "FastAPI",
    "Next.js",
    "React",
    "TypeScript",
    "Hyderabad",
  ],
  authors: [{ name: "Srikanta Bellamkonda", url: "https://github.com/srikanta2006" }],
  creator: "Srikanta Bellamkonda",
  openGraph: {
    title: "Srikanta Bellamkonda — Creative Technologist · Software Developer · AI Builder",
    description:
      "Personal portfolio and technical case studies showcasing intelligent products at the intersection of software and AI.",
    url: siteUrl,
    siteName: "Srikanta Bellamkonda Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srikanta Bellamkonda — Portfolio",
    description: "Creative Technologist · Software Developer · AI Builder",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#171717] antialiased">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
