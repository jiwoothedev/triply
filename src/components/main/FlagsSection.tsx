import Image from "next/image";
import FlagIcon from "./FlagIcon";

const countries = [
  "Canada",
  "New-Zealand",
  "United-Kingdom",
  "United-States",
  "Thailand",
  "Europe",
  "India",
];

export default function FlagsSection() {
  const duplicated = [...countries, ...countries]; // 무한루프처럼 보이게 배열 복제

  return (
    <section className="w-full h-32 mt-28 flex items-center">
      {/* 화살표 영역 */}
      <div className="w-96 h-full bg-primary rounded-tr-full rounded-br-full flex items-center justify-end p-3">
        <div className="w-28 h-28 bg-primary-dark rounded-full flex items-center justify-center">
          <Image
            src="/icons/arrow-primary-light.svg"
            alt="오른쪽 화살표"
            width={50}
            height={50}
          />
        </div>
      </div>

      {/* 슬라이드 영역 */}
      <div className="relative overflow-hidden w-full ml-1">
        <div className="flex gap-5 animate-slide w-max">
          {duplicated.map((country, index) => (
            <FlagIcon key={`${country}-${index}`} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
}
