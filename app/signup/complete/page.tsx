"use client";
import { useRouter } from "next/navigation";
import { Phone, SafeTop, SafeBottom, Button } from "@/components/ui";

export default function CompletePage() {
  const router = useRouter();
  return (
    <Phone>
      <SafeTop />
      <div className="screen" style={{ paddingLeft: 20, paddingRight: 20 }}>
        <div style={{ height: 36 }} />
        <h1 className="t-title-3" style={{ whiteSpace: "pre-line" }}>
          {"반가워요!\n회원가입이 완료됐어요"}
        </h1>
        <div style={{ height: 12 }} />
        <p className="t-body-1" style={{ color: "var(--label-alternative)" }}>
          이제 또박또박 말하는 연습을 시작해 보세요
        </p>

        <div className="flex-1 center" style={{ display: "flex" }}>
          <div className="illust-slot">
            <span className="t-caption-1" style={{ color: "var(--label-assistive)", fontWeight: 500 }}>
              일러스트
            </span>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 24px 24px" }}>
        <Button onClick={() => router.push("/onboarding/purpose")}>시작하기</Button>
      </div>
      <SafeBottom />
    </Phone>
  );
}
