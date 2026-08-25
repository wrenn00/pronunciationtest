"use client";
import { useRouter } from "next/navigation";
import { StepShell, OptionCard } from "@/components/onboarding";
import { usePlan } from "../store";

const OPTIONS = [
  "발음이 자주 뭉개져요", "억양이 단조롭게 들려요", "말이 자꾸 빨라져요",
  "말할 때 목소리가 떨려요", "발표할 때 전달이 어려워요", "“음…”, “어…”를 자주 말해요",
];
const MAX = 3;

export default function Focus() {
  const router = useRouter();
  const { plan, set } = usePlan();
  const toggle = (t: string) => {
    const on = plan.focus.includes(t);
    if (!on && plan.focus.length >= MAX) return;
    set({ focus: on ? plan.focus.filter((x) => x !== t) : [...plan.focus, t] });
  };
  return (
    <StepShell
      step={2} title="어떤 점을 개선하고 싶나요?" sub={`가장 신경 쓰이는 항목을 최대 ${MAX}개 골라주세요.`}
      cta="다음" ctaDisabled={plan.focus.length === 0}
      onBack={() => router.push("/onboarding/purpose")}
      onNext={() => router.push("/onboarding/frequency")}
    >
      <div className="ob-list">
        {OPTIONS.map((t) => (
          <OptionCard key={t} title={t} selected={plan.focus.includes(t)} onClick={() => toggle(t)} />
        ))}
      </div>
    </StepShell>
  );
}
