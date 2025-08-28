"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);

  return (
    <section className="min-h-screen bg-primary-dark/5 flex items-center justify-center">
      <div className="w-full max-w-[960px] grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 왼쪽 카드 */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0E2A0E] text-white p-8 shadow-xl">
          {/* 배경 그라데이션 효과 */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-lime-500/10 to-emerald-400/10" />
          <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-lime-400/20 blur-3xl" />

          <div className="relative">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/icons/logo.svg"
                alt="TRIPLY"
                width={120}
                height={32}
              />
            </Link>

            <h1 className="mt-18 text-3xl font-bold leading-snug">
              예산은 똑똑하게, <br /> 한 달 살기는 자유롭게.
            </h1>

            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="size-5 rounded-full bg-primary text-primary-dark grid place-items-center text-xs font-bold">
                  ✓
                </span>
                예산 자동 계산 &amp; 실시간 환율 반영
              </li>
              <li className="flex items-center gap-2">
                <span className="size-5 rounded-full bg-primary text-primary-dark grid place-items-center text-xs font-bold">
                  ✓
                </span>
                정확환 환율을 알려주는 환율 계산기
              </li>
              <li className="flex items-center gap-2">
                <span className="size-5 rounded-full bg-primary text-primary-dark grid place-items-center text-xs font-bold">
                  ✓
                </span>
                나라별 커뮤니티에서 한 달 살기 정보 공유
              </li>
            </ul>

            <div className="mt-30 text-xs text-emerald-100/70">
              © 2025 TRIPLY
            </div>
          </div>
        </div>

        {/* 오른쪽 카드 */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-8 py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-12">
              로그인
            </h2>
          </div>

          {/* 로그인 폼 */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-primary-dark"
              >
                이메일
              </label>
              <input
                id="email"
                type="email"
                placeholder="triply@example.com"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-primary-dark"
                >
                  비밀번호
                </label>
              </div>
              <div className="mt-1 relative">
                <input
                  id="password"
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-dark"
                >
                  <Image
                    src={showPw ? "/icons/eye.svg" : "/icons/eye-off.svg"}
                    alt={showPw ? "비밀번호 표시" : "비밀번호 숨기기"}
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300 text-primary-dark focus:ring-primary-dark"
                />
                로그인 상태 유지
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary text-primary-dark font-semibold py-3 hover:brightness-110 transition"
            >
              로그인
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            아직 회원이 아니신가요?
            <Link
              href="/signup"
              className="text-primary-dark font-semibold hover:underline ml-2"
            >
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
