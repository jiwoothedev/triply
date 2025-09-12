"use client";

import { useMemo, useState } from "react";
import ConverterCard from "@/components/converter/ConverterCard";
import RateTable from "@/components/converter/RateTable";
import PopularTabs from "@/components/converter/PopularTabs";

// PopularTabs
const TABS = [
  { label: "달러 → 원", from: "USD", to: "KRW" },
  { label: "유로 → 원", from: "EUR", to: "KRW" },
  { label: "원 → 달러", from: "KRW", to: "USD" },
  { label: "원 → 엔", from: "KRW", to: "JPY" },
  { label: "원 → 유로", from: "KRW", to: "EUR" },
  { label: "원 → 바트", from: "KRW", to: "THB" },
];

export default function ConverterPage() {
  const [active, setActive] = useState(0);
  const [from, setFrom] = useState(TABS[0].from);
  const [to, setTo] = useState(TABS[0].to);
  const [amount, setAmount] = useState("");

  // 환율 더미데이터
  const rate = useMemo(() => {
    const dummy: Record<string, number> = {
      USD: 1342.5,
      EUR: 1456.23,
      JPY: 8.92,
      GBP: 1654.32,
      CNY: 185.67,
      THB: 35.12,
      AUD: 859.74,
      CAD: 967.23,
      KRW: 1,
    };
    const fromKrw = dummy[from] ?? 1;
    const toKrw = dummy[to] ?? 1;
    return fromKrw / toKrw;
  }, [from, to]);

  const result = useMemo(() => {
    const n = parseFloat(amount || "0");
    return (n * rate).toLocaleString(undefined, { maximumFractionDigits: 6 });
  }, [amount, rate]);

  const handleTab = (i: number) => {
    setActive(i);
    setFrom(TABS[i].from);
    setTo(TABS[i].to);
    setAmount("");
  };

  return (
    <section className="min-h-screen flex flex-col items-center bg-primary-dark">
      <div className="w-full max-w-[1000px] px-6 py-12">
        <h1 className="text-4xl font-bold text-primary text-center mb-3">
          환율 계산기
        </h1>
        <p className="text-sm text-white text-center mb-12">
          실시간 환율로 정확한 환전 계산을 해보세요.
        </p>

        <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          {/* 인기 환율 탭 섹션 */}
          <PopularTabs tabs={TABS} active={active} onChange={handleTab} />
          {/* 환율 변환 섹션 */}
          <ConverterCard
            from={from}
            to={to}
            amount={amount}
            result={result}
            onSwap={() => {
              setFrom(to);
              setTo(from);
            }}
            onChangeAmount={setAmount}
            onChangeFrom={setFrom}
            onChangeTo={setTo}
          />
        </div>

        {/* 주요 환율 정보 섹션 */}
        <div className="mt-12">
          <RateTable
            rows={[
              { code: "USD", baseKRW: 1342.5, diff: 1.08, changePct: -0.62 },
              { code: "EUR", baseKRW: 1456.23, diff: -7.23, changePct: -0.22 },
              { code: "JPY", baseKRW: 8.92, diff: -7.89, changePct: -0.96 },
              { code: "GBP", baseKRW: 1654.32, diff: 6.89, changePct: 0.73 },
              { code: "THB", baseKRW: 35.12, diff: 9.78, changePct: -0.77 },
              { code: "AUD", baseKRW: 859.74, diff: -6.45, changePct: 0.67 },
              { code: "CAD", baseKRW: 967.23, diff: 1.79, changePct: 0.58 },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
