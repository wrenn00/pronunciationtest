"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Phone, SafeTop, SafeBottom } from "@/components/ui";
import { Close, Play } from "@/components/icons";

const SENTENCE = "또박또박 말하는 연습을 오늘부터 시작합니다.";
const MAX = 30;

export default function Check() {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "rec">("idle");
  const [sec, setSec] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (state !== "rec") return;
    timer.current = setInterval(() => setSec((s) => s + 1), 1000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [state]);

  useEffect(() => {
    if (sec >= MAX) finish();
  }, [sec]);

  const finish = () => {
    if (timer.current) clearInterval(timer.current);
    router.push("/onboarding/check/result");
  };

  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");

  return (
    <Phone>
      <SafeTop />
      <div className="row" style={{ padding: "8px 16px" }}>
        <button aria-label="닫기" onClick={() => router.push("/home")} style={{ display: "flex" }}>
          <Close size={22} color="var(--label-neutral)" />
        </button>
        <span className="t-caption-1" style={{ flex: 1, textAlign: "center", color: "var(--label-alternative)" }}>
          발음 진단
        </span>
        <span style={{ width: 22 }} />
      </div>

      <div className="screen center" style={{ display: "flex", padding: "0 26px" }}>
        <span className="t-label-1" style={{ color: "var(--label-alternative)", marginBottom: 22 }}>
          이 문장을 소리 내어 읽어주세요
        </span>
        <h1 className="t-title-3" style={{ textAlign: "center", lineHeight: "1.7" }}>{SENTENCE}</h1>
        {state === "idle" && (
          <button className="row" style={{
            gap: 8, marginTop: 30, padding: "12px 20px 12px 18px", borderRadius: 999,
            background: "var(--bg-normal)", border: "1px solid var(--line-normal)",
          }} onClick={() => alert("기준 음성은 프로토타입에서 생략했어요")}>
            <Play size={16} color="var(--primary-normal)" />
            <span className="t-label-1-b">아나운서 음성 듣기</span>
          </button>
        )}
      </div>

      <div className={`dome ${state === "rec" ? "rec" : ""}`}>
        <span className="t-headline-2" style={{ color: state === "rec" ? "#fff" : "var(--label-normal)" }}>
          {state === "rec" ? "듣고 있어요" : "준비되면 눌러주세요"}
        </span>
        {state === "idle" ? (
          <button className="rec-btn" onClick={() => { setSec(0); setState("rec"); }} aria-label="녹음 시작">
            <MicIcon />
          </button>
        ) : (
          <button className="rec-btn white" onClick={finish} aria-label="녹음 정지">
            <span className="stop-sq" />
          </button>
        )}
        <span className="t-caption-1" style={{
          color: state === "rec" ? "rgba(255,255,255,0.78)" : "var(--label-alternative)",
        }}>
          {state === "rec" ? `${mm}:${ss}` : "30초 안에 끝나요"}
        </span>
      </div>
      <SafeBottom />
    </Phone>
  );
}

function MicIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="2.5" width="6" height="11.5" rx="3" fill="#fff" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
