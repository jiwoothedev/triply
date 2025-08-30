import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/common/Layout";
import localFont from "next/font/local";

// 메타 데이터
export const metadata: Metadata = {
  title: "TRIPLY",
  // TODO: 추가 예정
};

// 프리텐다드 폰트
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="TRIPLY" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
