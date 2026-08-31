"use client";
import { useRouter } from "next/navigation";
import { Phone, SafeTop, SafeBottom, Button } from "@/components/ui";
import { ChevronLeft, ArrowRight, CircleExclamation } from "@/components/icons";
import { Progress } from "@/components/onboarding";
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
        <Progress step={5} />
        <span style={{ width: 24, flex: "none" }} />
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

        <div className="flex-1" style={{ minHeight: 24 }} />
      </div>

      <div style={{ padding: "12px 24px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div className="row" style={{ gap: 6, alignItems: "flex-start", paddingBottom: 2 }}>
          <CircleExclamation size={15} color="var(--label-assistive)" />
          <span className="t-caption-1" style={{ color: "var(--label-assistive)" }}>
            짧은 문장을 읽으면 내 수준에 맞게 난이도를 조정해 드려요
          </span>
        </div>
        <Button onClick={() => router.push("/onboarding/check")}>30초 진단 시작하기</Button>
        <button className="skip-link t-label-1-m" onClick={() => router.push("/home")}>건너뛰기</button>
      </div>
      <SafeBottom />
    </Phone>
  );
}
