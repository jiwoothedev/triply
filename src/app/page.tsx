import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="flex flex-col items-center text-center">
                <p className="text-6xl font-bold text-primary-dark leading-snug mt-8 mb-3">
                    예산은 똑똑하게, <br /> 한 달 살기는 자유롭게.
                </p>
                <p className="text-main font-medium text-lg">
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
                {/* <Image
                    src="/images/main-hero.jpg"
                    alt="히어로 이미지"
                    width={1200}
                    height={100}
                    className="rounded-lg mt-10"
                /> */}
            </section>
        </>
    );
}
