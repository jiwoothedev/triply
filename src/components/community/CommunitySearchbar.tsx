import Image from "next/image";

export default function CommunitySearchbar() {
  return (
    <div className="mt-12 mb-4 flex gap-3">
      <div className="relative flex-1">
        <input
          className="w-full bg-white rounded-lg border border-gray-200 pl-10 pr-3 py-2 text-sm focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark"
          placeholder="검색"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Image src="icons/search.svg" alt="search" width={20} height={20} />
        </span>
      </div>
      <button className="px-3 py-2 rounded-lg text-sm border border-gray-200 bg-white hover:bg-gray-50 cursor-pointer">
        <Image src="icons/filters.svg" alt="filters" width={20} height={20} />
      </button>
      <button className="px-3 py-2 rounded-lg text-sm bg-primary text-primary-dark font-semibold hover:brightness-105 cursor-pointer">
        <Image src="icons/plus.svg" alt="plus" width={18} height={18} />
      </button>
    </div>
  );
}
