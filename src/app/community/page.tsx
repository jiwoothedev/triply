"use client";

import CommunityPostCard, {
  CommunityPostCardProps,
} from "@/components/community/CommunityPostCard";
import CommunitySearchbar from "@/components/community/CommunitySearchbar";

// 게시글 더미데이터
const MOCK_POSTS: CommunityPostCardProps[] = [
  {
    id: "1",
    author: {
      name: "여행러버",
      avatar: "/images/dummy-avatar.png",
    },
    country: "태국 방콕",
    postedAt: "2일 전",
    title:
      "태국 방콕 한 달 살기 완전 정복기 (실제 지출 내역 포함) 태국 방콕 한 달 살기 완전 정복기 (실제 지출 내역 포함) 태국 방콕 한 달 살기 완전 정복기 (실제 지출 내역 포함)",
    excerpt:
      "한 달 동안 살아보며 느낀 생활비·꿀팁 총정리! 숙소/식비/교통비 등 카테고리별 지출과 절약 팁을 정리했어요.한 달 동안 살아보며 느낀 생활비·꿀팁 총정리! 숙소/식비/교통비 등 카테고리별 지출과 절약 팁을 정리했어요.한 달 동안 살아보며 느낀 생활비·꿀팁 총정리! 숙소/식비/교통비 등 카테고리별 지출과 절약 팁을 정리했어요.한 달 동안 살아보며 느낀 생활비·꿀팁 총정리! 숙소/식비/교통비 등 카테고리별 지출과 절약 팁을 정리했어요.한 달 동안 살아보며 느낀 생활비·꿀팁 총정리! 숙소/식비/교통비 등 카테고리별 지출과 절약 팁을 정리했어요.",
    budgetKRW: "₩1,575,000",
    budgetLocal: "45,000 THB",
    thumbnail: "/images/main-hero.jpg",
    stats: { likes: 324, comments: 56 },
  },
  {
    id: "2",
    author: {
      name: "노마드라이프",
      avatar: "/images/dummy-avatar.png",
    },
    country: "베트남 호치민",
    postedAt: "4일 전",
    title: "호치민 코워킹 스페이스 추천 & 한 달 생활비 공개",
    excerpt:
      "디지털 노마드를 위한 호치민 가이드. 코워킹 스페이스, 맛집, 생활 팁, 한 달 예산까지 한 번에!",
    budgetKRW: "₩850,000",
    budgetLocal: "20,500,000 VND",
    thumbnail: "/images/main-hero.jpg",
    stats: { likes: 210, comments: 41 },
  },
  {
    id: "3",
    author: {
      name: "노마드라이프",
      avatar: "/images/dummy-avatar.png",
    },
    country: "베트남 호치민",
    postedAt: "4일 전",
    title: "호치민 코워킹 스페이스 추천 & 한 달 생활비 공개",
    excerpt:
      "디지털 노마드를 위한 호치민 가이드. 코워킹 스페이스, 맛집, 생활 팁, 한 달 예산까지 한 번에!",
    budgetKRW: "₩850,000",
    budgetLocal: "20,500,000 VND",
    thumbnail: "/images/main-hero.jpg",
    stats: { likes: 210, comments: 41 },
  },
  {
    id: "4",
    author: {
      name: "노마드라이프",
      avatar: "/images/dummy-avatar.png",
    },
    country: "베트남 호치민",
    postedAt: "4일 전",
    title: "호치민 코워킹 스페이스 추천 & 한 달 생활비 공개",
    excerpt:
      "디지털 노마드를 위한 호치민 가이드. 코워킹 스페이스, 맛집, 생활 팁, 한 달 예산까지 한 번에!",
    budgetKRW: "₩850,000",
    budgetLocal: "20,500,000 VND",
    thumbnail: "/images/main-hero.jpg",
    stats: { likes: 210, comments: 41 },
  },
];

export default function CommunityPage() {
  return (
    <section className="min-h-screen flex justify-center px-6 py-12 bg-gray-50">
      <div className="w-full max-w-[800px] flex gap-8">
        <div className="flex-1">
          {/* 타이틀 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary-dark mb-3">
              한 달 살기 커뮤니티
            </h1>
            <p className="text-sm text-sub">
              전 세계 유저들의 한 달 살기 경험을 공유해요.
            </p>
          </div>

          {/* 검색 & 필터 */}
          <CommunitySearchbar />

          {/* 카드 리스트 */}
          <div className="space-y-5">
            {MOCK_POSTS.map((p) => (
              <CommunityPostCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
