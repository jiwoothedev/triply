import Button from "../common/Button";

export default function PlannerSection() {
  return (
    <section className="w-full h-[630px] bg-primary mt-10 px-50 py-10">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* 왼쪽 텍스트 영역 */}
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold text-primary-dark leading-snug ">
            여행 예산 설계, <br /> 더 이상 어렵지 않아요.
          </h2>
          <p className="text-lg text-main mt-12 mb-12">
            숙소, 식비, 교통비 등 카테고리별로 직접 입력하거나, <br />
            추천 예산을 선택해 나만의 한 달 살기 계획을 완성할 수 있어요.
          </p>
          <Button
            width="w-[172px]"
            text="시작하기"
            textSize="text-lg"
            textColor="text-primary"
            bgColor="bg-primary-dark hover:brightness-130"
          />
        </div>

        {/* TODO: 이미지 추가 */}
        {/* 오른쪽 이미지 영역 */}
        <div className="w-[460px] h-[550px] rounded-2xl bg-white relative shadow-2xl overflow-hidden"></div>
      </div>
    </section>
  );
}
