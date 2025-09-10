import { NextResponse } from "next/server";

// 1시간(= 3600초) 동안은 매번 호출하지 않고 캐시된 값 사용
export const revalidate = 3600;

export interface EximRow {
  result: number;
  cur_unit: string;
  deal_bas_r: string;
  cur_nm: string;
}

// 환율 API 호출 함수
// 비영업일 / 11시 이전엔 null -> 최대 7일 뒤로 가며 데이터 검색
async function fetchEximByDate(yyyymmdd: string): Promise<EximRow[] | null> {
  const key = process.env.EXIM_API_KEY;

  if (!key) {
    console.error("EXIM_API_KEY is missing");
    return null;
  }

  const url = `https://oapi.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${key}&data=AP01&searchdate=${yyyymmdd}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  const data = (await res.json()) as EximRow[] | null;

  return data && Array.isArray(data) ? data : null;
}

function shiftDate(yyyymmdd: string, diffDays: number) {
  const y = Number(yyyymmdd.slice(0, 4));
  const m = Number(yyyymmdd.slice(4, 6)) - 1;
  const d = Number(yyyymmdd.slice(6, 8));
  const dt = new Date(y, m, d);
  dt.setDate(dt.getDate() + diffDays);
  const yy = dt.getFullYear();
  const mm = String(dt.getMonth() + 1).padStart(2, "0");
  const dd = String(dt.getDate()).padStart(2, "0");
  return `${yy}${mm}${dd}`;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date"); // yyyyMMdd
  const base = date ?? timeToYYYYMMDD(new Date());

  let tries = 0;
  let cur = base;
  while (tries < 7) {
    const rows = await fetchEximByDate(cur);
    if (rows && rows.length > 0) {
      return NextResponse.json(rows, { status: 200 });
    }
    cur = shiftDate(cur, -1);
    tries += 1;
  }

  // 정말로 못 찾으면 204(No Content)
  return NextResponse.json([]); // status 200
}

function timeToYYYYMMDD(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}${m}${day}`;
}
