"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CountryCard from "@/components/planner/CountryCard";
import { CURRENCIES } from "@/data/currencies";

interface EximRow {
  cur_unit: string; // 통화코드
  deal_bas_r: string; // 매매기준율
}

export default function SelectPage() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [rates, setRates] = useState<Record<string, number>>({});

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/exchange");
        const rows: EximRow[] = res.status === 204 ? [] : await res.json();

        const map: Record<string, number> = {};
        for (const r of rows) {
          // "JPY(100)" 같이 (100) 단위는 100으로 나눠서 1단위 환산
          const code = r.cur_unit.replace(/\(.*\)$/, ""); // "JPY(100)" -> "JPY"
          const base = Number(r.deal_bas_r.replace(/,/g, "")); // "1,383.80" -> 1383.8
          const perOne = /\(100\)/.test(r.cur_unit) ? base / 100 : base;
          map[code] = perOne;
        }
        // KRW는 API에 없어서 1로 고정
        map["KRW"] = 1;

        if (mounted) setRates(map);
      } catch (e) {
        if (mounted) setRates({ KRW: 1 });
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const cards = useMemo(() => {
    // KRW 데이터 제외
    const sorted = CURRENCIES.filter((c) => c.code !== "KRW").sort((a, b) =>
      a.country.localeCompare(b.country, "ko-KR")
    );

    return sorted.map((c) => {
      const rate = rates[c.code];
      return {
        code: c.code,
        countryName: c.country,
        flagSrc: c.flag,
        exchangeRate: rate
          ? `1 ${c.code} = ₩${rate.toLocaleString()}`
          : "환율 준비중",
        livingCost: c.avgMonthly,
      };
    });
  }, [rates]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    const code = cards[index].code;
    setTimeout(() => router.push(`/planner/budget/${code}`), 600);
  };

  return (
    <div className="min-h-screen flex justify-center items-start px-4 pt-4 pb-30">
      <div className="bg-white rounded-xl w-full max-w-[1200px] px-20 py-12 text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-3">어느 나라로 떠나시나요?</h1>
        <p className="text-sm text-sub mb-8">
          국가를 선택하면 실시간 환율과 함께 예산을 계산해 드려요.
        </p>

        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 justify-center">
          {cards.map((item, i) => (
            <CountryCard
              key={i}
              {...item}
              onClick={() => handleSelect(i)}
              isSelected={selectedIndex === i}
            />
          ))}
        </div>

        <Link href="/" className="mt-16 inline-block">
          <p className="text-xs text-gray-400 underline cursor-pointer">
            ← 홈으로 돌아가기
          </p>
        </Link>
      </div>
    </div>
  );
}
