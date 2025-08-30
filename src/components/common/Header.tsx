"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true); // 홈을 제외한 나머지 페이지는 흰색 배경
      return;
    }

    // 홈일 때만 히어로 높이 기준으로 전환
    const hero = document.getElementById("hero");
    const headerHeight = 80; // 헤더 높이
    // 스크롤 위치가 이 값을 넘어가면 헤더 스타일 바꾸는 기준점
    // hero.offsetHegiht - headerHeight = 750 - 80
    const threshold = (hero?.offsetHeight ?? 0) - headerHeight;

    const onScroll = () => {
      setScrolled(window.scrollY > Math.max(0, threshold));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const navItems = [
    { label: "예산 플래너", href: "/planner" },
    { label: "환율 계산기", href: "/currency-converter" },
    { label: "커뮤니티", href: "/community" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full px-20 flex items-center justify-between transition-colors",
        // 홈이면서 아직 히어로 구간 -> 투명 배경
        isHome && !scrolled && "bg-transparent",
        // 그 외 -> 흰색 배경 + 그림자
        (!isHome || scrolled) &&
          "bg-white/90 shadow-sm supports-[backdrop-filter]:backdrop-blur"
      )}
      style={{ height: 80 }}
    >
      <div className="flex items-center gap-12">
        {/* 로고 */}
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={110} height={30} />
        </Link>

        {/* Navbar */}
        <nav className="flex items-center gap-3">
          {navItems.map(({ label, href }) => {
            const isActive = pathname.startsWith(href); // /planner로 시작하는 모든 경로 유지
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "font-semibold text-[13px] text-primary-dark rounded-full px-4 py-2 transition-colors",
                  isActive ? "bg-primary-light" : "hover:bg-[#efefef]"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 로그인/회원가입 버튼 */}
      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className="text-[13px] text-primary-dark px-4 py-2 rounded-full font-semibold border border-primary-dark"
        >
          로그인
        </Link>
        <Link
          href="/signup"
          className="text-[13px] text-white bg-primary-dark px-4 py-2 rounded-full font-semibold"
        >
          회원가입
        </Link>
      </div>
    </header>
  );
}
