"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "예산 플래너", href: "/planner/select" },
    { label: "환율 계산기", href: "/currency-converter" },
    { label: "커뮤니티", href: "/community" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 bg-white w-full h-[80px] mx-auto px-20 py-3 flex items-center justify-between shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-12">
        {/* 로고 */}
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={110} height={30} />
        </Link>

        {/* Navbar */}
        <nav className="flex items-center gap-4">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "font-semibold text-sm text-primary-dark rounded-full px-5 py-2 transition-colors", // 공통 클래스
                pathname === href ? "bg-primary-light" : "hover:bg-gray-100"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* 로그인/회원가입 버튼 */}
      <div className="flex items-center gap-2">
        <div className="w-[2px] h-6 bg-border mr-1"></div>
        <Link
          href="/login"
          className="text-sm text-primary-dark hover:bg-gray-100 px-4 py-2 rounded-full font-semibold"
        >
          로그인
        </Link>
        <Link
          href="/signup"
          className="bg-primary text-primary-dark px-4 py-2 rounded-full text-sm font-semibold transition-colors"
        >
          회원가입
        </Link>
      </div>
    </header>
  );
}
