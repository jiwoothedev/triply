"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { CURRENCIES } from "@/data/currencies";

interface EximRow {
  result: number;
  cur_unit: string; // 통화코드
  deal_bas_r: string; // 매매기준율
  cur_nm: string;
}

// 숫자 유틸: "12,345.6" -> 12345.6
const parseNumber = (s: string) =>
  Number(String(s || "0").replace(/[^\d.]/g, "")) || 0;

// 포맷 유틸: 원화 표시
const fmtKRW = (n: number) => `₩${Math.round(n).toLocaleString()}`;

// 카테고리
const CATS = [
  { key: "stay", label: "숙박비", desc: "에어비앤비, 호텔, 게스트하우스 등" },
  { key: "food", label: "식비", desc: "식당, 마트, 배달음식 등" },
  { key: "transport", label: "교통비", desc: "대중교통, 택시, 렌터카 등" },
  {
    key: "activity",
    label: "관광/액티비티",
    desc: "입장료, 투어, 체험활동 등",
  },
  { key: "shopping", label: "쇼핑", desc: "의류, 기념품, 생활용품 등" },
  { key: "etc", label: "기타", desc: "통신비, 보험, 기타 비용" },
] as const;

export default function BudgetPage() {
  const { code } = useParams<{ code: string }>();
  const curCode = (code || "").toUpperCase();

  const currency = useMemo(
    () => CURRENCIES.find((c) => c.code === curCode),
    [curCode]
  );

  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // 카테고리 입력값 상태 (선택 통화 금액)
  const [inputs, setInputs] = useState<Record<string, string>>({
    stay: "",
    food: "",
    transport: "",
    activity: "",
    shopping: "",
    etc: "",
  });

  // 입력 핸들러
  const onChangeCat = (key: string, v: string) => {
    const cleaned = v.replace(/[^\d.]/g, "");
    setInputs((prev) => ({ ...prev, [key]: cleaned }));
  };

  // 환산 결과와 합계 계산
  const computed = useMemo(() => {
    const rows = CATS.map((c) => {
      const foreign = parseNumber(inputs[c.key]); // 선택 통화 금액
      const krw = rate ? foreign * rate : 0; // KRW 환산
      return { key: c.key, label: c.label, foreign, krw };
    });
    const totalKRW = rows.reduce((sum, r) => sum + r.krw, 0);
    return { rows, totalKRW };
  }, [inputs, rate]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const today = toYYYYMMDD(new Date());
        const res = await fetch(`/api/exchange?date=${today}`);

        let rows: EximRow[] = [];
        if (res.status !== 204) rows = (await res.json()) as EximRow[];

        const row =
          rows.find((r) => r.cur_unit === curCode) ||
          rows.find((r) => r.cur_unit.startsWith(`${curCode}(`));

        if (!row) throw new Error("통화 미발견");

        const base = Number(row.deal_bas_r.replace(/,/g, ""));
        const perOne = /\(100\)/.test(row.cur_unit) ? base / 100 : base;

        if (mounted) setRate(perOne);
      } catch {
        if (mounted) setRate(null);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [curCode]);

  useEffect(() => {
    const payload = {
      code: curCode,
      country: currency?.country ?? curCode,
      flag: currency?.flag ?? "",
      rate,
      inputs,
      ts: Date.now(),
    };
    try {
      localStorage.setItem("planner:last", JSON.stringify(payload));
    } catch {}
  }, [curCode, currency?.country, currency?.flag, rate, inputs]);

  return (
    <div className="min-h-screen flex justify-center items-start px-4 pt-4 pb-30">
      <div className="bg-white rounded-xl w-full max-w-[1200px] px-20 py-12 text-left shadow-lg flex gap-12">
        <div className="flex-1">
          {/* 헤더 */}
          <div className="flex items-center gap-3 mb-2">
            <Image
              src={currency?.flag ?? "/icons/flags/United-States.svg"}
              alt={`${currency?.country ?? curCode} 국기`}
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold">
              {currency?.country ?? curCode} 한 달 살기 예산
            </h2>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            현재 환율:&nbsp;
            {loading
              ? "불러오는 중…"
              : rate
              ? `1 ${curCode} = ${fmtKRW(rate)}`
              : "환율 정보를 가져오지 못했어요"}
          </p>

          {/* 카테고리 입력 카드 */}
          <div className="space-y-4">
            {CATS.map((item) => {
              const foreignVal = inputs[item.key];
              const krwVal =
                rate && foreignVal
                  ? fmtKRW(parseNumber(foreignVal) * rate)
                  : "₩0";

              return (
                <div
                  key={item.key}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm px-6 py-4"
                >
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>

                  <div className="mt-3 flex items-center gap-2">
                    <input
                      type="text"
                      value={foreignVal}
                      onChange={(e) => onChangeCat(item.key, e.target.value)}
                      className="w-32 px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
                      placeholder="0"
                      inputMode="decimal"
                    />
                    <span className="text-sm text-gray-500">{curCode}</span>
                    <span className="text-gray-400 mx-2">→</span>
                    <input
                      type="text"
                      readOnly
                      value={krwVal}
                      className="mr-2 w-40 px-3 py-1 border border-gray-200 rounded bg-gray-50 text-sm text-right focus:outline-none"
                    />
                  </div>
                </div>
              );
            })}
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
            {computed.rows.map((r) => (
              <div key={r.key} className="flex justify-between">
                <span>{CATS.find((c) => c.key === r.key)?.label}</span>
                <span>{fmtKRW(r.krw)}</span>
              </div>
            ))}
            <hr className="my-2 text-border" />
            <div className="flex justify-between font-bold text-primary-dark">
              <span>총 예산</span>
              <span>{fmtKRW(computed.totalKRW)}</span>
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

function toYYYYMMDD(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}${m}${day}`;
}
