"use client";
import { useRouter } from "next/navigation";
import { Phone, SafeTop, SafeBottom, Button } from "@/components/ui";
import { Check } from "@/components/icons";

export default function CompletePage() {
  const router = useRouter();
  return (
    <Phone>
      <SafeTop />
      <div className="screen body-pad" style={{ alignItems: "center" }}>
        <div style={{ height: 150 }} />
        <div style={{
          width: 96, height: 96, borderRadius: 48, background: "var(--primary-normal)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Check size={48} color="#fff" />
        </div>
        <div style={{ height: 28 }} />
        <h1 className="t-title-3" style={{ textAlign: "center" }}>가입이 완료됐어요</h1>
        <div style={{ height: 10 }} />
        <p className="t-label-1" style={{ color: "var(--label-alternative)", textAlign: "center" }}>
          이제 또박과 함께 매일 조금씩 연습해요
        </p>
        <div className="flex-1" />
        <Button onClick={() => router.push("/")}>시작하기</Button>
        <div style={{ height: 24 }} />
      </div>
      <SafeBottom />
    </Phone>
  );
}
