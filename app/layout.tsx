import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { BackToTop } from "@/components/ui/back-to-top";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ilju Park · Research Engineer @ Hyundai Motor Company",
    template: "%s · Ilju Park",
  },
  description:
    "차량 아키텍처 모듈 시스템 연구와 데이터 분석·머신러닝을 결합하는 현대자동차 AVP Division 연구원 박일주의 포트폴리오.",
  keywords: [
    "Portfolio",
    "Research Engineer",
    "Hyundai Motor Company",
    "Vehicle Architecture",
    "Data Analysis",
    "Machine Learning",
    "Python",
    "Industrial Engineering",
  ],
  authors: [{ name: "Ilju Park" }],
  openGraph: {
    title: "Ilju Park · Research Engineer @ Hyundai Motor Company",
    description:
      "차량 아키텍처 모듈 시스템 연구와 데이터 분석·머신러닝을 결합하는 현대자동차 AVP Division 연구원 박일주의 포트폴리오.",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-black"
          >
            본문 바로가기
          </a>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
