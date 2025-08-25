import Button from "../common/Button";
import FlagIcon from "./FlagIcon";

interface MainCommunityCardProps {
  content: string;
}

export default function MainCommunityCard({ content }: MainCommunityCardProps) {
  return (
    <div className="w-[320px] h-[430px] rounded-2xl p-5 bg-primary flex flex-col justify-between">
      <div>
        <FlagIcon country="Canada" />
      </div>

      <div className="flex-1 flex items-center">
        <p className="font-semibold text-primary-dark text-sm">{content}</p>
      </div>

      <div className="flex justify-center">
        <Button
          width="w-[280px]"
          text="리뷰 더보기"
          textSize="text-sm"
          textColor="text-primary"
          bgColor="bg-primary-dark hover:brightness-130"
        />
      </div>
    </div>
  );
}
