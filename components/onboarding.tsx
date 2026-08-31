"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { Phone, SafeTop, SafeBottom, Button } from "./ui";
import { ChevronLeft, Check } from "./icons";

export function StepShell({
  step, title, sub, children, cta, ctaDisabled, onNext, onBack, note,
}: {
  step: number; title: ReactNode; sub?: string; children: ReactNode;
  cta: string; ctaDisabled?: boolean; onNext: () => void; onBack?: () => void;
  note?: ReactNode;
}) {
  const router = useRouter();
  return (
    <Phone>
      <SafeTop />
      <div className="ob-nav">
        <button aria-label="뒤로" onClick={onBack ?? (() => router.back())} style={{ display: "flex" }}>
          <ChevronLeft size={24} color="var(--label-normal)" />
        </button>
        <Progress step={step} />
        <span style={{ width: 24, flex: "none" }} />
      </div>

      <div className="screen body-pad scroll">
        <div style={{ height: 26 }} />
        <h1 className="t-title-3" style={{ whiteSpace: "pre-line", lineHeight: "1.38" }}>{title}</h1>
        {sub && (<>
          <div style={{ height: 10 }} />
          <p className="t-label-1" style={{ color: "var(--label-alternative)" }}>{sub}</p>
        </>)}
        <div style={{ height: 26 }} />
        {children}
        {note}
        <div className="flex-1" style={{ minHeight: 24 }} />
      </div>

      <div style={{ padding: "12px 24px 24px" }}>
        <Button disabled={ctaDisabled} onClick={onNext}>{cta}</Button>
      </div>
      <SafeBottom />
    </Phone>
  );
}

export function Progress({ step, total = 5 }: { step: number; total?: number }) {
  const [dots, setDots] = useState(false);
  useEffect(() => {
    try { setDots(new URLSearchParams(window.location.search).get("bar") === "dot"); } catch {}
  }, []);
  if (dots) {
    return (
      <div className="ob-progress">
        {Array.from({ length: total }, (_, k) => k + 1).map((i) => (
          <span key={i} className={`ob-dot ${i < step ? "done" : i === step ? "current" : ""}`} />
        ))}
      </div>
    );
  }
  return (
    <div className="ob-progress">
      <span className="ob-track">
        <span className="ob-fill" style={{ width: `${(step / total) * 100}%` }} />
      </span>
      <span className="ob-step t-caption-1">
        <b>{step}</b>/{total}
      </span>
    </div>
  );
}

export function OptionCard({
  title, desc, selected, onClick, icon,
}: { title: string; desc?: string; selected: boolean; onClick: () => void; icon?: string }) {
  return (
    <button className={`ob-option ${icon ? "has-slot" : ""} ${selected ? "on" : ""}`} onClick={onClick}>
      {icon && <img className="ob-icon" src={icon} alt="" draggable={false} />}
      <span className="ob-option-text">
        <span className="t-label-1-b">{title}</span>
        {desc && <span className="t-caption-1" style={{ color: "var(--label-alternative)" }}>{desc}</span>}
      </span>
      <span className={`ob-check ${selected ? "on" : ""}`}>
        {selected && <Check size={14} color="#fff" />}
      </span>
    </button>
  );
}
