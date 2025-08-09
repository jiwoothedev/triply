"use client";

import Image from "next/image";
import Link from "next/link";

export default function BudgetPage() {
  return (
    <div className="min-h-screen flex justify-center items-start px-4 pt-4 pb-30">
      <div className="bg-white rounded-xl w-full max-w-[1200px] px-20 py-12 text-left shadow-lg flex gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/icons/flags/Canada.svg"
              alt="일본 국기"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold">캐나다 한 달 살기 예산</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">현재 환율: 1 JPY = ₩892</p>

          {/* 카테고리 입력 카드 */}
          <div className="space-y-4">
            {[
              { title: "숙박비", desc: "에어비앤비, 호텔, 게스트하우스 등" },
              { title: "식비", desc: "식당, 마트, 배달음식 등" },
              { title: "교통비", desc: "대중교통, 택시, 렌터카 등" },
              { title: "관광/액티비티", desc: "입장료, 투어, 체험활동 등" },
              { title: "쇼핑", desc: "의류, 기념품, 생활용품 등" },
              { title: "기타", desc: "통신비, 보험, 기타 비용" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg shadow-sm px-6 py-4"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>

                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="text"
                    className="w-32 px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
                    placeholder="0"
                  />
                  <span className="text-sm text-gray-500">JPY</span>
                  <span className="text-gray-400 mx-2">→</span>
                  <input
                    type="text"
                    readOnly
                    value="₩0"
                    className="w-40 px-3 py-1 border border-gray-200 rounded bg-gray-50 text-sm text-right focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
                  />
                </div>
              </div>
            ))}
          </div>

          <Link href="/planner/select">
            <p className="mt-8 text-xs text-gray-400 underline cursor-pointer">
              ← 여행지 선택으로 돌아가기
            </p>
          </Link>
        </div>

        {/* 예산 요약 */}
        <div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow-sm p-6 sticky top-24 h-fit">
          <div className="flex items-center justify-center mb-7 gap-3">
            <div className="flex items-center gap-2">
              <div className="bg-primary-light p-1 rounded-full">
                <Image
                  src="/icons/warning.svg"
                  alt="정보 아이콘"
                  width={18}
                  height={18}
                />
              </div>
              <p className="font-semibold">예산 요약</p>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>숙박비</span>
              <span>₩0</span>
            </div>
            <div className="flex justify-between">
              <span>식비</span>
              <span>₩0</span>
            </div>
            <div className="flex justify-between">
              <span>교통비</span>
              <span>₩0</span>
            </div>
            <div className="flex justify-between">
              <span>관광/액티비티</span>
              <span>₩0</span>
            </div>
            <div className="flex justify-between">
              <span>쇼핑</span>
              <span>₩0</span>
            </div>
            <div className="flex justify-between">
              <span>기타</span>
              <span>₩0</span>
            </div>
            <hr className="my-2 text-border" />
            <div className="flex justify-between font-bold text-primary-dark">
              <span>총 예산</span>
              <span>₩0</span>
            </div>
          </div>

          <Link href="/planner/result">
            <button className="w-full mt-6 bg-primary text-primary-dark py-2 rounded-lg font-semibold text-sm hover:brightness-120 transition">
              결과 보기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
