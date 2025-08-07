"use client";

import clsx from "clsx";
import Image from "next/image";

interface CountryCardProps {
  flagSrc: string;
  countryName: string;
  exchangeRate: string; // '1 JPY = ₩892' 부분
  livingCost: string; // '100,000 ~ 200,000' 부분
  onClick?: () => void;
  isSelected?: boolean;
}

export default function CountryCard({
  flagSrc,
  countryName,
  exchangeRate,
  livingCost,
  onClick,
  isSelected = false,
}: CountryCardProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex flex-col items-center justify-center px-6 py-5 bg-white rounded-xl shadow transition-all duration-500 ease-in-out w-[250px] h-[250px] border-2",
        isSelected
          ? "border-primary-dark shadow-lg scale-105"
          : "border-transparent hover:shadow-md"
      )}
    >
      <Image src={flagSrc} alt={`${countryName} flag`} width={40} height={40} />
      <p className="mt-5 text-lg font-semibold">{countryName}</p>
      <p className="text-sm mt-1">{exchangeRate}</p>
      <p className="text-xs text-gray-400 mt-6">평균 한 달 생활비</p>
      <p className="text-xs text-gray-500">{livingCost}</p>
    </button>
  );
}
