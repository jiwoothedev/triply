import Image from "next/image";
import FlagIcon from "./FlagIcon";

const countries = [
  "Australia",
  "Canada",
  "China",
  "Denmark",
  "Europe",
  "Hong-Kong",
  "India",
  "Indonesia",
  "Japan",
  "Malaysia",
  "New-Zealand",
  "Norway",
  "Singapore",
  "South-Korea",
  "Sweden",
  "Switzerland",
  "Thailand",
  "United-Kingdom",
  "United-States",
];

export default function FlagsSection() {
  const duplicated = [...countries, ...countries]; // 무한루프처럼 보이게 배열 복제

  return (
    <section className="w-full h-32 mt-5 flex items-center">
      <div className="w-full flex items-center">
        {/* 화살표 영역 */}
        <div className="relative z-10 w-96 h-full bg-primary-dark rounded-tr-full rounded-br-full flex items-center justify-end p-3">
          <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center">
            <Image
              src="/icons/arrow-primary-dark.svg"
              alt="오른쪽 화살표"
              width={50}
              height={50}
            />
          </div>
        </div>

        {/* 슬라이드 영역 */}
        <div className="relative z-0 overflow-hidden w-full -ml-16 rounded-l-full">
          <div className="flex gap-5 animate-slide w-max">
            {duplicated.map((country, i) => (
              <FlagIcon key={`${country}-${i}`} country={country} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
