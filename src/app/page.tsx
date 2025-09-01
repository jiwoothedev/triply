import CommunitySection from "@/components/main/CommunitySection";
import FlagsSection from "@/components/main/FlagsSection";
import ServiceDetailSection from "@/components/main/ServiceDetailSection";
import ServiceIntroSection from "@/components/main/ServiceIntroSection";
import WorldMapSection from "@/components/main/WorldMapSection";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <div
        id="hero"
        className="relative w-full h-[750px] overflow-hidden rounded-bl-3xl rounded-br-3xl"
      >
        <Image
          src="/images/main-hero.jpg"
          alt="히어로 이미지"
          fill
          className="object-cover object-top"
          priority
        />

        {/* 검정색 오버레이 */}
        <div className="absolute inset-0 bg-black/20 bg-gradient-to-t from-black/50 to-transparent"></div>

        <div className="relative z-10 flex flex-col h-full mt-34">
          <h1 className="text-6xl font-semibold text-white text-center leading-snug">
            예산은 똑똑하게, <br /> 한 달 살기는 자유롭게.
          </h1>
          <p className="mt-4 text-base font-light text-gray-300 text-center leading-relaxed">
            최신 환율로 간편하게 만드는 나만의 한 달 살기 예산 플래너
          </p>
        </div>
      </div>

      {/* 서비스 소개 섹션 */}
      <ServiceIntroSection />

      {/* 서비스 상세 소개 섹션*/}
      <ServiceDetailSection />

      {/* 지도 섹션 */}
      <WorldMapSection />

      {/* 국기 리스트 섹션 */}
      <FlagsSection />

      {/* 커뮤니티 섹션 */}
      <CommunitySection />
    </section>
  );
}
