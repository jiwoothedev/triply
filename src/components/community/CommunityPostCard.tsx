"use client";

import Image from "next/image";

export interface CommunityPostCardProps {
  id: string;
  author: { name: string; avatar: string };
  country: string;
  postedAt: string;
  title: string;
  excerpt: string; // 본문 요약 내용
  tags: string[];
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
  tags,
  budgetKRW,
  budgetLocal,
  thumbnail,
  stats,
}: CommunityPostCardProps) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
      <div className="flex items-center gap-3">
        {/* 프로필 사진 */}
        <Image
          src={author.avatar}
          alt={author.name}
          width={36}
          height={36}
          className="rounded-full border border-border"
        />
        {/* 작성자 / 작성일 / 여행국가 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-primary-dark truncate">
              {author.name}
            </p>
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-2">
            <span className="flex items-center gap-1">{country}</span>
            <span>·</span>
            <span>{postedAt}</span>
          </div>
        </div>

        {/* 총 예산 */}
        {(budgetKRW || budgetLocal) && (
          <div className="ml-3 text-right">
            <div className="text-xs text-gray-400">총 예산</div>
            <div className="font-semibold text-primary-dark">{budgetKRW}</div>
            {budgetLocal && (
              <div className="text-[11px] text-gray-400">{budgetLocal}</div>
            )}
          </div>
        )}
      </div>

      {/* 본문 */}
      <h3 className="mt-4 font-semibold text-[15px] text-primary-dark">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-600">{excerpt}</p>

      {/* 태그 */}
      <div className="mt-3 flex flex-wrap gap-1">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200"
          >
            #{t}
          </span>
        ))}
      </div>

      {/* 썸네일 */}
      <div className="mt-4 overflow-hidden rounded-lg">
        <Image
          src={thumbnail}
          alt={title}
          width={1200}
          height={630}
          className="w-full h-[220px] object-cover"
        />
      </div>

      {/* 댓글 / 좋아요 */}
      <div className="mt-4 flex items-center gap-5 text-sm text-gray-500">
        <span className="flex items-center justify-center gap-1">
          <Image src="icons/comment.svg" alt="댓글" width={18} height={18} />
          {stats.comments}
        </span>
        <span className="flex items-center justify-center gap-1">
          <Image src="icons/heart.svg" alt="좋아요" width={18} height={18} />
          {stats.likes}
        </span>
        <button className="ml-auto text-gray-400 hover:text-primary-dark">
          자세히 보기 →
        </button>
      </div>
    </article>
  );
}
