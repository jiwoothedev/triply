export interface Currency {
  code: string; // 통화코드: cur_unit (KRW, USD 등)
  country: string; // 국가명: cur_nm (한국, 미국 등)
  unitName: string; // 통화기호명: cur_nm (원, 달러 등)
  flag: string; // 아이콘 주소: /icons/flags/...
}

// 일단 하드코딩 데이터 (API 연결 전 임시)
export const CURRENCIES: Currency[] = [
  {
    code: "USD",
    country: "미국",
    unitName: "달러",
    flag: "/icons/flags/unitNameed-States.svg",
  },
  {
    code: "EUR",
    country: "유럽연합",
    unitName: "유로",
    flag: "/icons/flags/Europe.svg",
  },
  {
    code: "JPY",
    country: "일본",
    unitName: "엔",
    flag: "/icons/flags/Japan.svg",
  },
  {
    code: "GBP",
    country: "영국",
    unitName: "파운드",
    flag: "/icons/flags/unitNameed-Kingdom.svg",
  },
  {
    code: "CNY",
    country: "중국",
    unitName: "위안",
    flag: "/icons/flags/China.svg",
  },
  {
    code: "THB",
    country: "태국",
    unitName: "바트",
    flag: "/icons/flags/Thailand.svg",
  },
  {
    code: "AUD",
    country: "호주",
    unitName: "달러",
    flag: "/icons/flags/Australia.svg",
  },
  {
    code: "CAD",
    country: "캐나다",
    unitName: "달러",
    flag: "/icons/flags/Canada.svg",
  },
  {
    code: "KRW",
    country: "대한민국",
    unitName: "원",
    flag: "/icons/flags/South-Korea.svg",
  },
  {
    code: "NZD",
    country: "뉴질랜드",
    unitName: "달러",
    flag: "/icons/flags/New-Zealand.svg",
  },
  {
    code: "CHF",
    country: "스위스",
    unitName: "프랑",
    flag: "/icons/flags/Switzerland.svg",
  },
];
