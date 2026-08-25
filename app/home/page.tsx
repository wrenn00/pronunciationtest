"use client";
import { useRouter } from "next/navigation";
import { Phone, SafeTop, Button } from "@/components/ui";
import TabBar from "@/components/TabBar";
import { Bell, Check, ArrowRight, Play } from "@/components/icons";

const DAYS: [string, "done" | "today" | "off"][] = [
  ["월", "done"], ["화", "done"], ["수", "today"],
  ["목", "off"], ["금", "off"], ["토", "off"], ["일", "off"],
];

const NEWS = [
  { cat: "경제", isNew: true, title: "한국은행, 기준금리 동결 결정", dur: "42초", lv: "보통" },
  { cat: "사회", isNew: false, title: "폭염 특보 확대 온열질환 주의", dur: "35초", lv: "쉬움" },
  { cat: "IT", isNew: false, title: "차세대 반도체 국제 표준 논의", dur: "58초", lv: "어려움" },
];

/** 숫자는 크게 진하게, 단위와 분모는 작고 연하게 */
function Ratio({ value, rest }: { value: string; rest: string }) {
  return (
    <span>
      <b style={{ color: "var(--primary-normal)", fontSize: 17 }}>{value}</b>
      <span style={{ color: "var(--label-alternative)", fontSize: 14 }}>{rest}</span>
    </span>
  );
}

export default function Home() {
  const router = useRouter();
  return (
    <Phone>
      <SafeTop />
      <div className="row" style={{ padding: "6px 20px 14px", justifyContent: "space-between" }}>
        <span className="logo-slot" style={{ width: 72, height: 26, borderRadius: 8 }}>LOGO</span>
        <Bell size={24} color="var(--label-normal)" />
      </div>

      <div className="screen scroll" style={{ background: "var(--bg-alternative)" }}>
        <div className="home-scroll">

          {/* 연속 기록 */}
          <div className="card" style={{ padding: 18, display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <span className="t-headline-2">
                연속 <span style={{ color: "var(--primary-normal)" }}>3</span>일째
              </span>
              <span className="t-label-1" style={{ color: "var(--label-alternative)" }}>
                오늘 <Ratio value="1" rest="/3회" />
              </span>
            </div>
            <div className="streak-days">
              {DAYS.map(([d, st]) => (
                <span key={d} className="streak-day">
                  <span className={`day-dot ${st === "done" ? "done" : st === "today" ? "today" : ""}`}>
                    {st === "done" && <Check size={18} color="#fff" />}
                  </span>
                  <span className="t-caption-2" style={{
                    color: st === "off" ? "var(--label-assistive)" : "var(--label-alternative)",
                  }}>{d}</span>
                </span>
              ))}
            </div>
          </div>

          {/* 오늘의 연습 */}
          <div className="card" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 18 }}>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <span className="chip t-caption-1-b">발표 코스</span>
              <span className="t-caption-1" style={{ color: "var(--label-alternative)" }}>3일차</span>
            </div>
            <div className="illust-stage">
              <div className="illust-box">
                <span className="t-caption-1" style={{ color: "var(--label-assistive)" }}>일러스트</span>
              </div>
            </div>
            <div className="col" style={{ gap: 8 }}>
              <span className="t-title-3">뉴스 문장 따라 읽기</span>
              <span className="row t-label-1" style={{ gap: 8, color: "var(--label-alternative)" }}>
                3문장 <span className="sep" /> 약 3분
              </span>
            </div>
            <Button onClick={() => router.push("/screens")}>오늘의 연습 시작하기</Button>
          </div>

          {/* 이어서 연습하기 */}
          <button className="card row" style={{ padding: "16px 16px 16px 18px", gap: 12, width: "100%" }}
            onClick={() => router.push("/screens")}>
            <span className="col" style={{ gap: 3, flex: 1, alignItems: "flex-start" }}>
              <span className="t-caption-1" style={{ color: "var(--label-alternative)" }}>이어서 연습하기</span>
              <span className="row t-label-1-b" style={{ gap: 8 }}>
                아나운서 따라 읽기 <span className="sep" /> <Ratio value="3" rest="/5문장" />
              </span>
            </span>
            <ArrowRight size={20} color="var(--label-assistive)" />
          </button>

          {/* 오늘의 뉴스 읽기 */}
          <div className="card" style={{ padding: "18px 14px 14px 18px" }}>
            <div className="row" style={{ justifyContent: "space-between", paddingBottom: 6, paddingRight: 4 }}>
              <span className="t-headline-2">오늘의 뉴스 읽기</span>
              <span className="t-caption-1" style={{ color: "var(--label-alternative)" }}>전체보기</span>
            </div>
            {NEWS.map((n, i) => (
              <div key={n.title}>
                {i > 0 && <div className="news-divider" />}
                <div className="news-item">
                  <span className="col" style={{ gap: 6, flex: 1 }}>
                    <span className="row" style={{ gap: 6 }}>
                      <span className="chip t-caption-2" style={{ fontWeight: 700 }}>{n.cat}</span>
                      {n.isNew && <span className="chip chip-new t-caption-2" style={{ fontWeight: 700 }}>NEW</span>}
                    </span>
                    <span className="t-label-1-b">{n.title}</span>
                    <span className="row t-caption-1" style={{ gap: 7, color: "var(--label-alternative)" }}>
                      {n.dur} <span className="sep" /> {n.lv}
                    </span>
                  </span>
                  <span className={`play-btn ${i === 0 ? "solid" : ""}`}>
                    <Play size={18} color={i === 0 ? "#fff" : "var(--primary-normal)"} />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <TabBar />
    </Phone>
  );
}
