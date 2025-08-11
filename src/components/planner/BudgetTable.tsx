export default function BudgetTable() {
  // 더미데이터
  const data = [
    ["숙박비", "1,000 THB", "₩35,120", "10%"],
    ["식비", "2,000 THB", "₩70,240", "20%"],
    ["교통비", "3,000 THB", "₩105,360", "30%"],
    ["관광/액티비티", "1,000 THB", "₩35,120", "10%"],
    ["쇼핑", "2,000 THB", "₩70,240", "20%"],
    ["기타", "1,000 THB", "₩35,120", "10%"],
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-t border-gray-200 text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-2 text-left">카테고리</th>
            <th className="px-4 py-2 text-left">현재 통화 (THB)</th>
            <th className="px-4 py-2 text-left">원화 (KRW)</th>
            <th className="px-4 py-2 text-left">비율</th>
          </tr>
        </thead>
        <tbody>
          {data.map(([category, thb, krw, percent], idx) => (
            <tr key={idx} className="border-t border-gray-100">
              <td className="px-4 py-2">{category}</td>
              <td className="px-4 py-2">{thb}</td>
              <td className="px-4 py-2">{krw}</td>
              <td className="px-4 py-2">{percent}</td>
            </tr>
          ))}
          <tr className="border-t border-gray-200 font-bold text-primary-dark">
            <td className="px-4 py-2">총합</td>
            <td className="px-4 py-2">10,000 THB</td>
            <td className="px-4 py-2">₩351,200</td>
            <td className="px-4 py-2">100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
