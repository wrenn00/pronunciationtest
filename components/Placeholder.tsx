"use client";
import { Phone, SafeTop } from "./ui";
import TabBar from "./TabBar";

export default function Placeholder({ title }: { title: string }) {
  return (
    <Phone>
      <SafeTop />
      <div className="screen center" style={{ display: "flex", background: "var(--bg-alternative)", gap: 10 }}>
        <span className="t-title-3">{title}</span>
        <span className="t-label-1" style={{ color: "var(--label-alternative)" }}>아직 만들지 않은 화면이에요</span>
      </div>
      <TabBar />
    </Phone>
  );
}
