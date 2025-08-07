"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";

const steps = [
  { path: "/planner/select", label: "여행지 선택" },
  { path: "/planner/budget", label: "예산 입력" },
  { path: "/planner/result", label: "결과 확인" },
];

export default function ProgressBar() {
  const pathname = usePathname();
  const currentStepIndex = steps.findIndex((step) => step.path === pathname);
  const progressPercent =
    currentStepIndex !== -1 ? (currentStepIndex / (steps.length - 1)) * 100 : 0;

  return (
    <div className="w-full px-6 py-8">
      <div className="max-w-[500px] mx-auto">
        {/* 단계 텍스트 */}
        <div className="flex gap-40 mb-2 text-sm">
          {steps.map((step, index) => (
            <span
              key={step.path}
              className={clsx(
                "transition-colors",
                index === currentStepIndex
                  ? "text-primary-dark font-bold"
                  : index < currentStepIndex
                  ? "text-primary-dark/70"
                  : "text-primary-dark/30"
              )}
            >
              {step.label}
            </span>
          ))}
        </div>

        {/* 상태바 */}
        <div className="relative w-full h-2 bg-primary-dark/20 rounded-full">
          {/* 진행된 부분 */}
          <div
            className="absolute h-2 top-0 left-0 rounded-full transition-all duration-300 bg-gradient-to-r from-primary to-primary-dark"
            style={{ width: `${progressPercent}%` }}
          />

          {/* 점 표시 부분 */}
          {steps.map((_, index) => {
            const left = (index / (steps.length - 1)) * 100;
            const isActive = index === currentStepIndex;

            return (
              <span
                key={index}
                className={clsx(
                  "absolute top-1/2 w-3 h-3 rounded-full border",
                  isActive
                    ? "bg-primary-dark border-primary-dark"
                    : "bg-white border-primary-dark/20"
                )}
                style={{ left: `${left}%`, transform: "translate(-50%, -50%)" }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
