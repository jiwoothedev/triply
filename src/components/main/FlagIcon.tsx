import Image from "next/image";

interface FlagIconProps {
  country: string;
}

export default function FlagIcon({ country }: FlagIconProps) {
  return (
    <Image
      src={`/icons/flags/${country}.svg`}
      alt={country}
      width={112}
      height={112}
    />
  );
}
