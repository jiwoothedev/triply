import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-sm text-gray-500 mt-24">
      <div className="max-w-[1440px] mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link href="/">
          <Image src="icons/logo.svg" alt="logo" width={70} height={30} />
        </Link>

        <div className="text-xs text-center">
          <p>© 2025 TRIPLY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
