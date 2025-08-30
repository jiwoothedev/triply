"use client";

import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <Header />
      <main
        className={clsx(
          // 홈을 제외한 나머지 페이지는 헤더 높이만큼 공간 확보
          !isHome && "pt-[80px]"
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
