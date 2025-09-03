"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);

  return (
    <section className="bg-white flex items-center justify-center px-20 py-20">
      <div className="w-lg">
        <div className="flex items-center justify-center mb-14">
          <Image src="/icons/logo.svg" alt="로고" width={150} height={50} />
        </div>
        <form className="space-y-6">
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
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 text-sm focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
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
            <div className="relative">
              <input
                id="password"
                type={showPw ? "text" : "password"}
                placeholder="••••••••"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 pr-10 text-[15px] focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
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

          <p className="mt-6 text-center text-sm text-gray-500">
            아직 회원이 아니신가요?
            <Link
              href="/signup"
              className="text-primary-dark font-semibold hover:underline ml-2"
            >
              회원가입
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
