import ServiceIntroCard from "./ServiceIntroCard";

export default function ServiceIntroSection() {
  return (
    <div className="flex justify-center gap-50 mt-10 mb-10">
      <ServiceIntroCard
        icon="/icons/investments.svg"
        title="예산 자동 계산"
        subtitle="숙소/식비/교통비 입력만 하면 끝"
      />
      <ServiceIntroCard
        icon="/icons/auto-conversions.svg"
        title="환율 자동 반영"
        subtitle="매일 갱신되는 기준환율로 정확하게"
      />
      <ServiceIntroCard
        icon="/icons/users.svg"
        title="여행 커뮤니티"
        subtitle="각 나라별 여행자들과 한 달 살기 정보 공유"
      />
    </div>
  );
}
