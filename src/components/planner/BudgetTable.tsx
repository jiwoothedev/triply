interface Row {
  label: string; // 카테고리명
  foreign: number; // 선택 통화 금액
  krw: number; // KRW 환산 금액
}

export default function BudgetTable({
  rows,
  totalForeign,
  totalKRW,
  code,
}: {
  rows: Row[];
  totalForeign: number;
  totalKRW: number;
  code: string;
}) {
  const fmtNum = (n: number) => n.toLocaleString();
  const fmtKRW = (n: number) => `₩${Math.round(n).toLocaleString()}`;

  const sumKRW = totalKRW || rows.reduce((s, r) => s + r.krw, 0);
  const sumForeign = totalForeign || rows.reduce((s, r) => s + r.foreign, 0);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-t border-gray-200 text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-2 text-left">카테고리</th>
            <th className="px-4 py-2 text-left">현재 통화 ({code})</th>
            <th className="px-4 py-2 text-left">원화 (KRW)</th>
            <th className="px-4 py-2 text-left">비율</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => {
            const percent = sumKRW ? (r.krw / sumKRW) * 100 : 0;
            return (
              <tr key={idx} className="border-t border-gray-100">
                <td className="px-4 py-2">{r.label}</td>
                <td className="px-4 py-2">
                  {fmtNum(r.foreign)} {code}
                </td>
                <td className="px-4 py-2">{fmtKRW(r.krw)}</td>
                <td className="px-4 py-2">{percent.toFixed(0)}%</td>
              </tr>
            );
          })}
          <tr className="border-t border-gray-200 font-bold text-primary-dark">
            <td className="px-4 py-2">총합</td>
            <td className="px-4 py-2">
              {fmtNum(sumForeign)} {code}
            </td>
            <td className="px-4 py-2">{fmtKRW(sumKRW)}</td>
            <td className="px-4 py-2">100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
