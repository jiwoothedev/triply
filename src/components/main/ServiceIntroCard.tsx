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
    <div className="w-[413px] h-[170px] flex flex-col text-center items-center p-6 gap-2">
      <div className="border border-border rounded-full w-10 h-10 flex items-center justify-center">
        <Image src={icon} alt={title} width={32} height={32} />
      </div>
      <h2 className="font-semibold text-lg text-main">{title}</h2>
      <p className="text-sm text-sub">{subtitle}</p>
    </div>
  );
}
