"use client";

import Image from "next/image";

export default function ServiceDetailSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-32 px-6">
        {/* 예산 플래너 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary-dark mb-8 leading-snug">
              여행 예산 설계, <br /> 더 이상 어렵지 않아요.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              숙소, 식비, 교통비 등 카테고리만 입력하면 자동으로 총 예산이
              계산돼요.
              <br />
              실제 생활비에 맞춘 계획을 간편하게 세울 수 있습니다.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/1.jpg" // TODO: 이미지 변경
              alt="예산 플래너"
              width={500}
              height={350}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* 환율 계산기 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <Image
              src="/images/1.jpg" // TODO: 이미지 변경
              alt="환율 계산기"
              width={500}
              height={350}
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-primary-dark mb-8 leading-snug">
              실시간 환율로, 더 정확하게.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              매일 갱신되는 기준환율을 바탕으로 원하는 통화를 바로 계산할 수
              있어요.
              <br />
              해외 생활비 계산에 딱 맞는 환율 계산기.
            </p>
          </div>
        </div>

        {/* 커뮤니티 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[34px] font-bold text-primary-dark mb-8">
              여행자들의 생생한 한 달 살기 경험 공유.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              실제 여행자들이 남긴 예산, 리뷰, 팁을 확인하고 직접 경험을 공유할
              수 있습니다.
              <br />
              나라별 여행자들과 자유롭게 소통해보세요.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/1.jpg" // TODO: 이미지 변경
              alt="여행 커뮤니티"
              width={500}
              height={350}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
