"use client";
import { useRouter } from "next/navigation";
import { Phone, SafeTop, SafeBottom, Button } from "@/components/ui";

export default function Ready() {
  const router = useRouter();
  return (
    <Phone>
      <SafeTop />
      <div className="screen body-pad" style={{ alignItems: "center" }}>
        <div style={{ height: 170 }} />
        <div className="ready-slot" />
        <div style={{ height: 30 }} />
        <h1 className="t-title-3" style={{ textAlign: "center" }}>또박이 첫 학습을 준비했어요!</h1>
        <div style={{ height: 10 }} />
        <p className="t-label-1" style={{ color: "var(--label-alternative)", textAlign: "center" }}>
          짧은 문장부터 가볍게 시작해 볼까요?
        </p>
        <div className="flex-1" />
      </div>
      <div style={{ padding: "12px 24px 24px" }}>
        <Button onClick={() => router.push("/screens")}>첫 연습 시작하기</Button>
      </div>
      <SafeBottom />
    </Phone>
  );
}
