"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Phone, SafeTop, SafeBottom, Nav, Button, Checkbox } from "@/components/ui";
import { Check, ArrowRight } from "@/components/icons";

const ITEMS = [
  { id: "age", label: "[필수] 만 14세 이상입니다", required: true, viewable: false },
  { id: "tos", label: "[필수] 이용약관", required: true, viewable: true },
  { id: "privacy", label: "[필수] 개인정보 수집 및 이용", required: true, viewable: true },
  { id: "quality", label: "[선택] 서비스 품질 향상", required: false, viewable: true },
  { id: "marketing", label: "[선택] 이벤트 및 혜택 알림 수신", required: false, viewable: false },
];

export default function TermsPage() {
  const router = useRouter();
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const allOn = ITEMS.every((i) => checked[i.id]);
  const requiredOk = ITEMS.filter((i) => i.required).every((i) => checked[i.id]);

  const toggleAll = () => {
    const next = !allOn;
    setChecked(Object.fromEntries(ITEMS.map((i) => [i.id, next])));
  };
  const toggle = (id: string) => setChecked((c) => ({ ...c, [id]: !c[id] }));

  return (
    <Phone>
      <SafeTop />
      <Nav onBack={() => router.push("/signup")} />
      <div className="screen body-pad">
        <div style={{ height: 22 }} />
        <h1 className="t-title-3">반가워요!</h1>
        <div style={{ height: 8 }} />
        <p className="t-label-1" style={{ color: "var(--label-alternative)" }}>또박을 사용하시려면 동의가 필요해요</p>
        <div style={{ height: 28 }} />

        <button className="row" onClick={toggleAll}
          style={{ width: "100%", gap: 12, padding: 16, borderRadius: 14, background: "var(--bg-alternative)" }}>
          <Checkbox on={allOn} />
          <span className="t-headline-2">모두 동의</span>
        </button>

        <div style={{ height: 6 }} />
        <div>
          {ITEMS.map((it) => {
            const on = !!checked[it.id];
            return (
              <div key={it.id} className="row" style={{ gap: 12, padding: "14px 4px" }}>
                <button className="row" style={{ gap: 12, flex: 1, textAlign: "left" }} onClick={() => toggle(it.id)}>
                  <Check size={20} color={on ? "var(--primary-normal)" : "var(--label-disable)"} />
                  <span className="t-label-1-m" style={{ color: on ? "var(--label-normal)" : "var(--label-neutral)" }}>
                    {it.label}
                  </span>
                </button>
                {it.viewable && (
                  <button aria-label="약관 보기" onClick={() => alert("약관 전문은 프로토타입에서 생략했어요")}>
                    <ArrowRight size={18} color="var(--label-assistive)" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex-1" />
        <Button disabled={!requiredOk} onClick={() => router.push("/signup/complete")}>다음</Button>
        <div style={{ height: 24 }} />
      </div>
      <SafeBottom />
    </Phone>
  );
}
