import Image from "next/image";

export default function WorldMapSection() {
  return (
    <section className="w-full bg-primary-dark">
      <div className="relative overflow-hidden  text-white px-8 py-20 max-w-6xl mx-auto">
        <div className="mb-2 text-sm/relaxed">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
            <span className="size-1.5 rounded-full bg-primary" />
            추가 지원 국가 준비중
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold">
          전 세계 주요 18개국 지원
        </h2>
        <p className="mt-2 text-gray-300 text-sm sm:text-base">
          미국, 일본, 유럽, 동남아까지 — 여행자들이 가장 많이 찾는 18개국 통화를
          지원합니다.
        </p>

        {/* 지도 일러스트 */}
        <div className="mt-8 flex justify-center">
          <Image
            src="/images/world-map.svg"
            alt="지원 국가 지도"
            width={860}
            height={380}
            className="w-full max-w-[900px] opacity-90"
            priority
          />
        </div>
      </div>
    </section>
  );
}
