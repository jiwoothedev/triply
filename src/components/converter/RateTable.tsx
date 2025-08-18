"use client";

import { CURRENCIES } from "@/data/currencies";
import Image from "next/image";

interface RateData {
  code: string; // 통화명
  baseKRW: number; // 매매기준율 (₩)
  diff: number; // 전일 대비 (₩)
  changePct: number; // 변동률 (%)
}

export default function RateTable({ rows }: { rows: RateData[] }) {
  const find = (code: string) => CURRENCIES.find((c) => c.code === code)!;

  return (
    <>
      <div className="flex items-center gap-2 py-4">
        <div className="bg-primary-light p-1 rounded-full">
          <Image
            src="/icons/line-chart.svg"
            alt="상세 내역"
            width={18}
            height={18}
          />
        </div>
        <p className="text-lg font-semibold text-white">
          주요 환율 정보 (KRW 기준)
        </p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-5 py-3">통화</th>
                <th className="text-right px-5 py-3">매매기준율</th>
                <th className="text-right px-5 py-3">전일 대비</th>
                <th className="text-right px-5 py-3">변동률</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const c = find(r.code);
                const up = r.changePct > 0;
                return (
                  <tr key={r.code} className="border-t border-gray-200">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={c.flag}
                          alt={c.country}
                          width={24}
                          height={24}
                          className="border border-gray-100 rounded-full"
                        />
                        <div className="leading-tight">
                          <div className="text-primary-dark">{c.country}</div>
                          <div className="text-[11px] text-gray-400">
                            {c.code}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-right">
                      ₩{r.baseKRW.toLocaleString()}
                    </td>
                    <td
                      className={`px-5 py-3 text-right ${
                        up ? "text-red-600" : "text-blue-600"
                      }`}
                    >
                      {up ? "+" : ""}
                      {r.diff.toLocaleString()}
                    </td>
                    <td
                      className={`px-5 py-3 text-right ${
                        up ? "text-red-600" : "text-blue-600"
                      }`}
                    >
                      {up ? "↗" : "↘"} {up ? "+" : ""}
                      {r.changePct.toFixed(2)}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="px-5 py-3 text-xs text-gray-400 border-t-red-700">
          ※ 환율 정보는 참고용이며, 실제 환전 시 금융기관의 환율과 다를 수
          있습니다.
        </p>
      </div>
    </>
  );
}
