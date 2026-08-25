"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
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
        <div className="ob-progress">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className={`ob-seg ${i <= step ? "on" : ""}`} />
          ))}
        </div>
        <span style={{ width: 4 }} />
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

export function OptionCard({
  title, desc, selected, onClick, icon = false,
}: { title: string; desc?: string; selected: boolean; onClick: () => void; icon?: boolean }) {
  return (
    <button className={`ob-option ${icon ? "has-slot" : ""} ${selected ? "on" : ""}`} onClick={onClick}>
      {icon && <span className="ob-slot" />}
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
