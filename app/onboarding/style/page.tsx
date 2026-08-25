"use client";
import { useRouter } from "next/navigation";
import { StepShell, OptionCard } from "@/components/onboarding";
import { usePlan } from "../store";

const OPTIONS = [
  ["뉴스 읽기", "오늘의 기사로 또박또박 낭독"],
  ["아나운서 따라 읽기", "기준 음성을 듣고 그대로 따라 읽기"],
  ["짧은 문장 반복하기", "어려운 발음만 골라 반복 연습"],
  ["내 원고로 연습하기", "면접 답변, 발표 원고 붙여넣기"],
  ["아직 잘 모르겠어요", "또박이 골라드릴게요"],
];

export default function Style() {
  const router = useRouter();
  const { plan, set } = usePlan();
  const toggle = (t: string) =>
    set({ style: plan.style.includes(t) ? plan.style.filter((x) => x !== t) : [...plan.style, t] });
  return (
    <StepShell
      step={4} title="어떤 방식으로 연습하고 싶나요?" sub="관심 있는 방식을 모두 골라주세요."
      cta="다음" ctaDisabled={plan.style.length === 0}
      onBack={() => router.push("/onboarding/frequency")}
      onNext={() => router.push("/onboarding/plan")}
    >
      <div className="ob-list">
        {OPTIONS.map(([t, d]) => (
          <OptionCard key={t} title={t} desc={d}
            selected={plan.style.includes(t)} onClick={() => toggle(t)} />
        ))}
      </div>
    </StepShell>
  );
}
