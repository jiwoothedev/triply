export interface Currency {
  code: string; // 통화코드: cur_unit (KRW, USD 등)
  country: string; // 국가명: cur_nm (한국, 미국 등)
  unitName: string; // 통화기호명: cur_nm (원, 달러 등)
  flag: string; // 아이콘 주소: /icons/flags/...
  avgMonthly: string; // 한 달 평균 생활비
}

export const CURRENCIES: Currency[] = [
  {
    code: "AUD",
    country: "호주",
    unitName: "달러",
    flag: "/icons/flags/Australia.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "CAD",
    country: "캐나다",
    unitName: "달러",
    flag: "/icons/flags/Canada.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "CNY",
    country: "중국",
    unitName: "위안",
    flag: "/icons/flags/China.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "DKK",
    country: "덴마크",
    unitName: "크로네",
    flag: "/icons/flags/Denmark.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "EUR",
    country: "유럽연합",
    unitName: "유로",
    flag: "/icons/flags/Europe.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "HKD",
    country: "홍콩",
    unitName: "달러",
    flag: "/icons/flags/Hong-Kong.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "IDR",
    country: "인도네시아",
    unitName: "루피아",
    flag: "/icons/flags/Indonesia.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "JPY",
    country: "일본",
    unitName: "엔",
    flag: "/icons/flags/Japan.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "MYR",
    country: "말레이시아",
    unitName: "링깃",
    flag: "/icons/flags/Malaysia.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "NZD",
    country: "뉴질랜드",
    unitName: "달러",
    flag: "/icons/flags/New-Zealand.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "NOK",
    country: "노르웨이",
    unitName: "크로네",
    flag: "/icons/flags/Norway.svg",
    avgMonthly: "300,000 ~ 800,000",
  },
  {
    code: "SGD",
    country: "싱가포르",
    unitName: "달러",
    flag: "/icons/flags/Singapore.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "SEK",
    country: "스웨덴",
    unitName: "크로나",
    flag: "/icons/flags/Sweden.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "CHF",
    country: "스위스",
    unitName: "프랑",
    flag: "/icons/flags/Switzerland.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "THB",
    country: "태국",
    unitName: "바트",
    flag: "/icons/flags/Thailand.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "GBP",
    country: "영국",
    unitName: "파운드",
    flag: "/icons/flags/United-Kingdom.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "USD",
    country: "미국",
    unitName: "달러",
    flag: "/icons/flags/United-States.svg",
    avgMonthly: "250,000 ~ 400,000",
  },
  {
    code: "KRW",
    country: "대한민국",
    unitName: "원",
    flag: "/icons/flags/South-Korea.svg",
    avgMonthly: "-",
  },
];
