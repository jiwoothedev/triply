import Image from "next/image";

interface ServiceIntroCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

export default function ServiceIntroCard({
  icon,
  title,
  subtitle,
}: ServiceIntroCardProps) {
  return (
    <div className="w-full flex flex-col text-center items-center p-6 gap-3">
      <div className="border border-[#DEDEDE] rounded-full w-11 h-11 flex items-center justify-center">
        <Image src={icon} alt={title} width={32} height={32} />
      </div>
      <h2 className="font-semibold text-lg text-main">{title}</h2>
      <p className="font-light text-sm text-sub whitespace-nowrap">
        {subtitle}
      </p>
    </div>
  );
}
