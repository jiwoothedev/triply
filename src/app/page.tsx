import Button from "@/components/common/Button";
import ConverterSection from "@/components/main/ConverterSection";
import FlagsSection from "@/components/main/FlagsSection";
import PlannerSection from "@/components/main/PlannerSection";
import ServiceIntroCard from "@/components/main/ServiceIntroCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <p className="text-6xl font-bold text-primary-dark leading-snug mt-8 mb-3  text-center">
        예산은 똑똑하게, <br /> 한 달 살기는 자유롭게.
      </p>
      <p className="text-main font-medium text-lg  text-center">
        최신 환율로 간편하게 만드는 나만의 한 달 살기 예산 플래너
      </p>
      <div className="flex mt-10">
        <Link href="/planner">
          <Button
            width="w-[172px]"
            text="시작하기"
            textSize="text-lg"
            textColor="text-primary-dark"
            bgColor="bg-primary hover:brightness-120"
          />
        </Link>
      </div>

      {/* TODO: 이미지 변경, 스크롤 애니메이션 효과 */}
      {/* 히어로 이미지 */}
      <div className="relative w-[1200px] h-[340px] mt-10 rounded-lg overflow-hidden">
        <Image
          src="/images/1.jpg"
          alt="히어로 이미지"
          fill
          className="object-cover"
        />
      </div>

      {/* 구분선 */}
      <div className="bg-border w-[1440px] h-[0.5px] mt-10"></div>

      {/* 서비스 소개 카드 */}
      <div className="flex justify-center mt-8">
        <ServiceIntroCard
          icon="/icons/investments.svg"
          title="예산 자동 계산"
          subtitle="숙소/식비/교통비 입력만 하면 끝!"
        />
        <ServiceIntroCard
          icon="/icons/auto-conversions.svg"
          title="환율 자동 반영"
          subtitle="매일 갱신되는 기준환율로 정확하게"
        />
        <ServiceIntroCard
          icon="/icons/users.svg"
          title="여행 커뮤니티"
          subtitle="나라별 여행자들과 한 달 살기 정보 교환"
        />
      </div>

      {/* 예산 플래너 섹션 */}
      <PlannerSection />

      {/* 환율 계산기 섹션 */}
      <ConverterSection />

      {/* 국기 리스트 섹션 */}
      <FlagsSection />
    </section>
  );
}
