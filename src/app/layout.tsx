import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srikanta-portfolio-ten.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Srikanta Bellamkonda — Software Engineer & Applied AI Engineer",
    template: "%s | Srikanta Bellamkonda",
  },
  description:
    "Portfolio of Srikanta Bellamkonda: Computer Science student & developer passionate about building intelligent products through software engineering and applied AI.",
  keywords: [
    "Srikanta Bellamkonda",
    "Software Engineer",
    "Applied AI Engineer",
    "Student Developer",
    "CVR College of Engineering",
    "Agentic AI",
    "Multi-Agent Systems",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Hyderabad",
  ],
  authors: [{ name: "Srikanta Bellamkonda", url: "https://github.com/srikanta2006" }],
  creator: "Srikanta Bellamkonda",
  openGraph: {
    title: "Srikanta Bellamkonda — Software Engineer & Applied AI Engineer",
    description:
      "The Engineer Who Builds Intelligent Products. Building practical applications through software engineering and applied AI.",
    url: siteUrl,
    siteName: "Srikanta Bellamkonda Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srikanta Bellamkonda — Software Engineer & Applied AI Engineer",
    description: "Building intelligent products through software and applied AI.",
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
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAFAFC] text-[#0F172A] antialiased selection:bg-indigo-500/15 selection:text-indigo-900">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
