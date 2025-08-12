import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";

// Inter 폰트
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// 메타 데이터
export const metadata: Metadata = {
  title: "TRIPLY",
  // TODO: 추가 예정
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
