"use client";

import { CURRENCIES } from "@/data/currencies";
import Image from "next/image";

interface ConverterCardProps {
  from: string;
  to: string;
  amount: string;
  result: string;
  onSwap: () => void;
  onChangeAmount: (v: string) => void;
  onChangeFrom: (code: string) => void;
  onChangeTo: (code: string) => void;
}

export default function ConverterCard({
  from,
  to,
  amount,
  result,
  onSwap,
  onChangeAmount,
  onChangeFrom,
  onChangeTo,
}: ConverterCardProps) {
  const fromCur = CURRENCIES.find((c) => c.code === from)!;
  const toCur = CURRENCIES.find((c) => c.code === to)!;

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-end">
        {/* 변환할 기준 통화 (from) */}
        <div>
          <div className="relative">
            <select
              value={from}
              onChange={(e) => onChangeFrom(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-3 pr-8 py-2 text-sm focus:outline-none focus:border-primary-dark appearance-none"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.country} ({c.code})
                </option>
              ))}
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              ▾
            </span>
          </div>

          <div className="mt-3 relative">
            <input
              value={amount}
              onChange={(e) =>
                onChangeAmount(e.target.value.replace(/[^\d.]/g, ""))
              }
              placeholder="금액을 입력하세요"
              className="w-full border-2 border-primary-dark rounded-lg px-4 py-3 pr-10 text-lg bg-white focus:outline-none"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {fromCur.unitName}
            </span>
          </div>
        </div>

        {/* 통화 전환 버튼 */}
        <div className="flex justify-center md:items-end">
          <button
            onClick={onSwap}
            className="mt-7 md:mb-3 size-10 rounded-full bg-primary text-primary-dark grid place-items-center"
            title="통화 전환"
          >
            <Image
              src="/icons/exchange.svg"
              alt="통화 전환"
              width={15}
              height={15}
            />
          </button>
        </div>

        {/* 변환 후 대상 통화 (to) */}
        <div>
          <div className="relative">
            <select
              value={to}
              onChange={(e) => onChangeTo(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-3 pr-8 py-2 text-sm focus:outline-none focus:border-primary-dark appearance-none"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.country} ({c.code})
                </option>
              ))}
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              ▾
            </span>
          </div>

          <div className="mt-3 relative">
            <input
              value={result}
              readOnly
              style={{ paddingRight: `${toCur.unitName.length * 14 + 16}px` }}
              className="w-full border-2 border-primary-dark rounded-lg px-4 py-3 text-lg bg-white text-right"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 whitespace-nowrap">
              {toCur.unitName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
