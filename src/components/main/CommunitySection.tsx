"use client";

import Image from "next/image";
import { useState } from "react";
import MainCommunityCard from "./MainCommunityCard";

// 커뮤니티 카드 더미데이터
const communityCardData = [
  "밴쿠버에서 한 달 살았는데, 식비가 예상보다 비싸서 예산 계획이 정말 중요했어요! TRIPLY로 대략적인 물가를 먼저 계산하고 간 게 신의 한수였어요. 덕분에 과소비 없이 잘 다녀왔습니다 :)",
  "두번째 카드",
  "세번째 카드",
  "네번째 카드",
  "다섯번째 카드",
  "여섯번째 카드",
];

export default function CommunitySection() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < communityCardData.length - 1) setIndex(index + 1);
  };

  return (
    <section className="w-full h-[630px] mt-28 px-13 py-10">
      <div className="max-w-[1440px] mx-auto flex justify-between">
        {/* 왼쪽 텍스트 영역 */}
        <div className="flex flex-col w-[480px]">
          <h2 className="text-5xl font-bold text-primary-dark leading-snug">
            나만의 <br /> 한 달 살기 이야기
          </h2>
          <p className="text-lg text-main mt-3 mb-12">
            전 세계 유저들의 한 달 살기 경험을 공유해요.
          </p>
          <div className="flex gap-5">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className={`w-20 h-20 rounded-full flex items-center justify-center ${
                index === 0 ? "bg-gray-100" : "bg-primary"
              }`}
            >
              <Image
                src={
                  index === 0
                    ? "/icons/arrow-gray.svg"
                    : "/icons/arrow-primary-dark.svg"
                }
                alt="왼쪽 화살표"
                width={40}
                height={40}
                className={index === 0 ? "" : "scale-x-[-1]"} // scale-x-[-1]: 이미지 좌우 반전
              />
            </button>
            <button
              onClick={handleNext}
              disabled={index === communityCardData.length - 1}
              className={`w-20 h-20 rounded-full flex items-center justify-center ${
                index === communityCardData.length - 1
                  ? "bg-gray-100"
                  : "bg-primary "
              }`}
            >
              <Image
                src={
                  index === communityCardData.length - 1
                    ? "/icons/arrow-gray.svg"
                    : "/icons/arrow-primary-dark.svg"
                }
                alt="오른쪽 화살표"
                width={40}
                height={40}
                className={
                  index === communityCardData.length - 1 ? "scale-x-[-1]" : ""
                }
              />
            </button>
          </div>
        </div>

        {/* 오른쪽 카드 영역 */}
        <div className="w-[900px] overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 320}px)` }} // index * 카드 너비
          >
            {communityCardData.map((content, idx) => (
              <div key={idx} className="min-w-[300px] mr-8">
                <MainCommunityCard content={content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
