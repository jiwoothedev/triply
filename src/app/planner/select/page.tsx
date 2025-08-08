"use client";

import { useRouter } from "next/navigation";
import CountryCard from "@/components/planner/CountryCard";
import { useState } from "react";
import Link from "next/link";

export default function SelectPage() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // 더미데이터 (일단 하드코딩)
  const countries = [
    {
      countryName: "캐나다",
      flagSrc: "/icons/flags/Canada.svg",
      exchangeRate: "1 JPY = ₩892",
      livingCost: "100,000 ~ 200,000",
    },
    {
      countryName: "미국",
      flagSrc: "/icons/flags/United-States.svg",
      exchangeRate: "1 USD = ₩1,310",
      livingCost: "300,000 ~ 500,000",
    },
    {
      countryName: "태국",
      flagSrc: "/icons/flags/Thailand.svg",
      exchangeRate: "1 EUR = ₩1,420",
      livingCost: "250,000 ~ 400,000",
    },
    {
      countryName: "캐나다",
      flagSrc: "/icons/flags/Canada.svg",
      exchangeRate: "1 JPY = ₩892",
      livingCost: "100,000 ~ 200,000",
    },
    {
      countryName: "미국",
      flagSrc: "/icons/flags/United-States.svg",
      exchangeRate: "1 USD = ₩1,310",
      livingCost: "300,000 ~ 500,000",
    },
    {
      countryName: "태국",
      flagSrc: "/icons/flags/Thailand.svg",
      exchangeRate: "1 EUR = ₩1,420",
      livingCost: "250,000 ~ 400,000",
    },
  ];

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setTimeout(() => {
      router.push("/planner/budget");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex justify-center items-start px-4 pt-4 pb-30">
      <div className="bg-white rounded-xl w-full max-w-[1200px] px-20 py-12 text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-3">어느 나라로 떠나시나요?</h1>
        <p className="text-sm text-sub mb-8">
          국가를 선택하면 실시간 환율과 함께 예산을 계산해 드려요.
        </p>

        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 justify-center">
          {countries.map((country, i) => (
            <CountryCard
              key={i}
              {...country}
              onClick={() => handleSelect(i)}
              isSelected={selectedIndex === i}
            />
          ))}
        </div>

        <Link href="/">
          <p className="mt-16 text-xs text-gray-400 underline cursor-pointer">
            ← 홈으로 돌아가기
          </p>
        </Link>
      </div>
    </div>
  );
}
