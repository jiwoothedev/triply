"use client";

import BudgetTable from "@/components/planner/BudgetTable";
import Image from "next/image";
import Link from "next/link";

export default function ResultPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 pt-4 pb-30">
      <div className=" bg-white w-full max-w-[1200px] px-20 py-12 rounded-xl shadow-lg flex flex-col justify-center items-center">
        <div className="mb-8 text-center">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Image
              src="/icons/flags/Thailand.svg"
              alt="태국"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold">태국 한 달 살기 예산 결과</h2>
          </div>
          <p className="text-sm text-gray-500">환율 기준: 1 THB = ₩35.12</p>
        </div>

        {/* 예산 요약 카드 */}
        <div className="w-full max-w-[1000px] mb-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#0E2A0E] text-white px-6 py-10 shadow-xl">
            {/* 배경 그라데이션 효과 */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-lime-500/10 to-emerald-400/10" />
            <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-lime-400/20 blur-3xl" />

            <h3 className="text-xl font-semibold tracking-tight text-lime-300 text-center">
              총 예산
            </h3>
            <p className="mt-2 text-4xl font-semibold text-white text-center">
              ₩351,200
            </p>
            <p className="mt-2 text-sm text-emerald-100/90 text-center">
              10,000 THB
            </p>

            {/* 공유하기 & PDF 다운로드 버튼 */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <button className="px-6 py-3 rounded-full text-sm bg-white/10 text-white font-semibold hover:bg-white/15 transition border border-white/20">
                공유하기
              </button>
              <button className="px-6 py-3 rounded-full text-sm bg-white/10 text-white font-semibold hover:bg-white/15 transition border border-white/20">
                PDF 다운로드
              </button>
            </div>
          </div>
        </div>

        {/* 카테고리별 예산 비율 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1000px] mb-10">
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center gap-2">
              <div className="bg-primary-light p-1 rounded-full">
                <Image
                  src="/icons/pie-chart.svg"
                  alt="도넛차트"
                  width={18}
                  height={18}
                />
              </div>
              <p className="font-semibold">카테고리별 예산 비율</p>
            </div>
            <div className="flex items-center justify-center h-[180px] text-gray-400">
              <span>도넛 차트 자리</span>
            </div>
          </div>

          {/* 카테고리별 예산 금액 */}
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center gap-2">
              <div className="bg-primary-light p-1 rounded-full">
                <Image
                  src="/icons/chart.svg"
                  alt="차트"
                  width={18}
                  height={18}
                />
              </div>
              <p className="font-semibold">카테고리별 예산 금액</p>
            </div>
            <div className="flex items-center justify-center h-[180px] text-gray-400">
              <span>막대 차트 자리</span>
            </div>
          </div>
        </div>

        {/* 상세 내역 */}
        <div className="w-full max-w-[1000px] bg-white p-6 rounded-lg shadow mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary-light p-1 rounded-full">
              <Image
                src="/icons/bills.svg"
                alt="상세 내역"
                width={18}
                height={18}
              />
            </div>
            <p className="font-semibold">상세 내역</p>
          </div>
          <BudgetTable />
        </div>

        <Link href="/planner/select">
          <p className="mt-12 text-xs text-gray-400 underline cursor-pointer">
            ← 여행지 선택으로 돌아가기
          </p>
        </Link>
      </div>
    </div>
  );
}
