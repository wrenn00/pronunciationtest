"use client";
import { useRouter } from "next/navigation";
import { StepShell, OptionCard } from "@/components/onboarding";
import { usePlan } from "../store";

const OPTIONS = [
  ["매일", "하루 3~5분 추천"],
  ["주 5일", "평일 중심으로 연습"],
  ["주 2~3일", "여유 있는 날에 연습"],
  ["자유롭게 시작할래요", "정해진 일정 없이 시작"],
];

export default function Frequency() {
  const router = useRouter();
  const { plan, set } = usePlan();
  return (
    <StepShell
      step={3} title="일주일에 며칠 정도 연습할까요?" sub="부담 없이 지킬 수 있는 횟수를 골라주세요."
      cta="다음" ctaDisabled={!plan.frequency}
      onBack={() => router.push("/onboarding/focus")}
      onNext={() => router.push("/onboarding/style")}
    >
      <div className="ob-list">
        {OPTIONS.map(([t, d]) => (
          <OptionCard key={t} title={t} desc={d}
            selected={plan.frequency === t} onClick={() => set({ frequency: t })} />
        ))}
      </div>
    </StepShell>
  );
}
