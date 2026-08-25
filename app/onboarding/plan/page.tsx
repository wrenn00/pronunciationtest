"use client";
import { useRouter } from "next/navigation";
import { Phone, SafeTop, SafeBottom, Button } from "@/components/ui";
import { ChevronLeft, ArrowRight, CircleExclamation } from "@/components/icons";
import { usePlan } from "../store";

export default function PlanConfirm() {
  const router = useRouter();
  const { plan } = usePlan();
  const rows: [string, string, string][] = [
    ["목표", plan.purpose ?? "아직 선택하지 않았어요", "/onboarding/purpose"],
    ["집중할 부분", plan.focus.length ? plan.focus.join(", ") : "아직 선택하지 않았어요", "/onboarding/focus"],
    ["연습 일정", plan.frequency ?? "아직 선택하지 않았어요", "/onboarding/frequency"],
    ["연습 방식", plan.style.length ? plan.style.join(", ") : "아직 선택하지 않았어요", "/onboarding/style"],
  ];
  return (
    <Phone>
      <SafeTop />
      <div className="ob-nav">
        <button aria-label="뒤로" onClick={() => router.push("/onboarding/style")} style={{ display: "flex" }}>
          <ChevronLeft size={24} color="var(--label-normal)" />
        </button>
        <div className="ob-progress">
          {[1, 2, 3, 4, 5].map((i) => <span key={i} className="ob-seg on" />)}
        </div>
        <span style={{ width: 4 }} />
      </div>

      <div className="screen body-pad scroll">
        <div style={{ height: 40 }} />
        <h1 className="t-title-2" style={{ whiteSpace: "pre-line", lineHeight: "1.38" }}>
          {"이렇게 시작해\n볼까요?"}
        </h1>
        <div style={{ height: 12 }} />
        <p className="t-body-1" style={{ color: "var(--label-alternative)" }}>
          선택한 내용으로 첫 학습 계획을 만들었어요
        </p>
        <div style={{ height: 44 }} />

        <div>
          {rows.map(([k, v, href]) => (
            <button key={k} className="plan-row" onClick={() => router.push(href)}>
              <span className="plan-key t-label-1">{k}</span>
              <span className="plan-val t-body-1-b">{v}</span>
              <ArrowRight size={16} color="var(--label-assistive)" />
            </button>
          ))}
        </div>

        <div style={{ height: 20 }} />
        <div className="row" style={{ gap: 6, alignItems: "flex-start" }}>
          <CircleExclamation size={15} color="var(--label-assistive)" />
          <span className="t-caption-1" style={{ color: "var(--label-assistive)" }}>
            첫 훈련 결과에 맞춰 목표와 난이도를 조정해 드려요
          </span>
        </div>
        <div className="flex-1" style={{ minHeight: 24 }} />
      </div>

      <div style={{ padding: "12px 24px 24px" }}>
        <Button onClick={() => router.push("/onboarding/ready")}>이 계획으로 시작하기</Button>
      </div>
      <SafeBottom />
    </Phone>
  );
}
