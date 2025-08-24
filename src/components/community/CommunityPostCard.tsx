"use client";

import Image from "next/image";

export interface CommunityPostCardProps {
  id: string;
  author: { name: string; avatar: string };
  country: string;
  postedAt: string;
  title: string;
  excerpt: string; // 본문 요약 내용
  budgetKRW?: string;
  budgetLocal?: string;
  thumbnail: string;
  stats: { likes: number; comments: number };
}

export default function CommunityPostCard({
  author,
  country,
  postedAt,
  title,
  excerpt,
  budgetKRW,
  budgetLocal,
  thumbnail,
  stats,
}: CommunityPostCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex">
        {/* 썸네일 */}
        <div className="w-[300px] h-[260px] overflow-hidden rounded-xl">
          <Image
            src={thumbnail}
            alt={title}
            width={300}
            height={260}
            className="w-[300px] h-[260px] object-fill"
            priority={false}
          />
        </div>

        <div className="flex-1 p-4 flex flex-col h-[260px]">
          <div className="flex items-center gap-2">
            {/* 프로필 사진 */}
            <Image
              src={author.avatar}
              alt={author.name}
              width={30}
              height={30}
              className="rounded-full border border-gray-200"
            />
            {/* 작성자 / 작성일 / 여행국가 */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-primary-dark truncate text-sm">
                {author.name}
              </p>
              <div className="text-[11px] text-gray-500 flex items-center gap-1">
                <span className="flex items-center">{country}</span>
                <span>·</span>
                <span>{postedAt}</span>
              </div>
            </div>

            {/* 총 예산 */}
            {(budgetKRW || budgetLocal) && (
              <div className="ml-3 text-right">
                {budgetKRW && (
                  <div className="font-semibold text-primary-dark">
                    {budgetKRW}
                  </div>
                )}
                {budgetLocal && (
                  <div className="text-[11px] text-gray-400">{budgetLocal}</div>
                )}
              </div>
            )}
          </div>

          <div className="mt-6 flex-1">
            {/* 타이틀 */}
            <h3 className="font-semibold text-lg text-primary-dark line-clamp-1">
              {title}
            </h3>
            {/* 본문 */}
            <p className="mt-2 text-[13px] text-gray-500  line-clamp-3">
              {excerpt}
            </p>
          </div>

          {/* 댓글 / 좋아요 */}
          <div className="flex items-center gap-5 text-xs text-primary-dark">
            <span className="flex items-center gap-1">
              <div className="bg-primary-light p-1 rounded-full">
                <Image
                  src="/icons/heart.svg"
                  alt="좋아요"
                  width={14}
                  height={14}
                />
              </div>
              {stats.likes}
            </span>
            <span className="flex items-center gap-1">
              <div className="bg-primary-light p-1 rounded-full">
                <Image
                  src="/icons/comment.svg"
                  alt="댓글"
                  width={14}
                  height={14}
                />
              </div>
              {stats.comments}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
