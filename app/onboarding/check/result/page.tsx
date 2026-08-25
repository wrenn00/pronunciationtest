"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Phone, SafeTop, SafeBottom, Button } from "@/components/ui";
import { CircleCheck, CircleExclamation } from "@/components/icons";

export default function CheckResult() {
  const router = useRouter();
  useEffect(() => {
    try { sessionStorage.setItem("ttobak.diagnosed", "1"); } catch {}
  }, []);
  return (
    <Phone>
      <SafeTop />
      <div className="screen body-pad scroll">
        <div style={{ height: 40 }} />
        <h1 className="t-title-2" style={{ whiteSpace: "pre-line", lineHeight: "1.38" }}>
          {"목소리를\n확인했어요"}
        </h1>
        <div style={{ height: 12 }} />
        <p className="t-body-1" style={{ color: "var(--label-alternative)" }}>
          첫 진단을 바탕으로 난이도를 맞춰뒀어요
        </p>
        <div style={{ height: 32 }} />

        <div className="fb-card" style={{ background: "var(--positive-bg)" }}>
          <div className="row" style={{ gap: 6 }}>
            <CircleCheck size={18} color="var(--positive-normal)" />
            <span className="t-label-1-b" style={{ color: "var(--positive-label)" }}>잘하고 있어요</span>
          </div>
          <p className="t-caption-1" style={{ color: "var(--label-neutral)", lineHeight: "1.65" }}>
            문장 끝까지 호흡이 흔들리지 않고 속도가 일정했어요.
          </p>
        </div>

        <div style={{ height: 10 }} />

        <div className="fb-card" style={{ border: "1px solid var(--line-normal)" }}>
          <div className="row" style={{ gap: 6 }}>
            <CircleExclamation size={18} color="var(--cautionary-normal)" />
            <span className="t-label-1-b" style={{ color: "var(--cautionary-label)" }}>집중하면 좋아요</span>
          </div>
          <p className="t-caption-1" style={{ color: "var(--label-neutral)", lineHeight: "1.65" }}>
            받침이 겹치는 부분에서 소리가 뭉개져요. 한 음절씩 또박또박 끊어 읽어보세요.
          </p>
        </div>

        <div style={{ height: 20 }} />
        <div className="level-row">
          <span className="t-label-1" style={{ color: "var(--label-alternative)" }}>추천 난이도</span>
          <span className="t-body-1-b">초급</span>
        </div>

        <div className="flex-1" style={{ minHeight: 24 }} />
      </div>

      <div style={{ padding: "12px 24px 24px" }}>
        <Button onClick={() => router.push("/home")}>내 홈으로 가기</Button>
      </div>
      <SafeBottom />
    </Phone>
  );
}
