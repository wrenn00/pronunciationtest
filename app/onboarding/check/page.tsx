"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Phone, SafeTop, SafeBottom } from "@/components/ui";
import { Close, Play } from "@/components/icons";

const SENTENCE = "또박또박 말하는 연습을\n오늘부터 시작합니다.";
const MAX = 30;
const BARS = [8,14,22,12,26,18,10,24,16,28,13,20,9,25,17,11,23,15,27,10,19,14,8,22,12,17,24,11,16,7,20,13,26,9,18,15,21,10,14,8];

export default function Check() {
  const router = useRouter();
  const [rec, setRec] = useState(false);
  const [sec, setSec] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!rec) return;
    timer.current = setInterval(() => setSec((s) => s + 1), 1000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [rec]);

  useEffect(() => { if (sec >= MAX) finish(); }, [sec]);

  const finish = () => {
    if (timer.current) clearInterval(timer.current);
    router.push("/onboarding/check/result");
  };

  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");
  const activeTo = Math.round((sec / MAX) * BARS.length);

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
        <h1 className="t-title-3" style={{ textAlign: "center", lineHeight: 1.7, whiteSpace: "pre-line" }}>
          {SENTENCE}
        </h1>
        {!rec && (
          <button className="guide-pill" onClick={() => alert("기준 음성은 프로토타입에서 생략했어요")}>
            <Play size={16} color="var(--primary-normal)" />
            <span className="t-label-1-b">아나운서 음성 듣기</span>
          </button>
        )}
      </div>

      {/* 시안 A · 하단 컨트롤 바 */}
      <div className="rec-bar">
        {rec && (
          <>
            <span className="row" style={{ gap: 7 }}>
              <span className="rec-dot" />
              <span className="t-label-1-b">{mm}:{ss}</span>
            </span>
            <span className="wave">
              {BARS.map((h, i) => (
                <span key={i} className="wave-bar"
                  style={{ height: h, opacity: i < activeTo ? 1 : 0.22 }} />
              ))}
            </span>
          </>
        )}
        <button className="rec-btn" aria-label={rec ? "녹음 정지" : "녹음 시작"}
          onClick={() => { if (rec) finish(); else { setSec(0); setRec(true); } }}>
          {rec ? <span className="stop-sq" /> : <MicIcon />}
        </button>
        {!rec && (
          <span className="t-caption-1" style={{ color: "var(--label-alternative)" }}>30초 안에 끝나요</span>
        )}
      </div>
      <SafeBottom />
    </Phone>
  );
}

function MicIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="2.5" width="6" height="11.5" rx="3" fill="#fff" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
