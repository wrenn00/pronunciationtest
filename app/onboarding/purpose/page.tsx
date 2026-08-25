"use client";
import { useRouter } from "next/navigation";
import { StepShell, OptionCard } from "@/components/onboarding";
import { usePlan } from "../store";

const OPTIONS = [
  ["아나운서, 방송 준비", "정확한 발음과 자연스러운 낭독 연습"],
  ["면접, 발표 준비", "또렷한 전달력과 자신감 키우기"],
  ["발음을 더 또렷하게", "어려운 자음과 모음 집중 연습"],
  ["일상에서 자연스럽게 말하기", "부담 없이 꾸준히 말하기 연습"],
];

export default function Purpose() {
  const router = useRouter();
  const { plan, set } = usePlan();
  return (
    <StepShell
      step={1} title="무엇을 위해 연습하고 싶나요?" sub="지금 가장 중요한 목적 하나를 골라주세요."
      cta="다음" ctaDisabled={!plan.purpose}
      onBack={() => router.push("/signup/complete")}
      onNext={() => router.push("/onboarding/focus")}
    >
      <div className="ob-list">
        {OPTIONS.map(([t, d]) => (
          <OptionCard key={t} title={t} desc={d}
            selected={plan.purpose === t} onClick={() => set({ purpose: t })} />
        ))}
      </div>
    </StepShell>
  );
}
