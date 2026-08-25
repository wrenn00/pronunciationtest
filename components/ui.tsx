"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Close, Eye, EyeOff, CircleCheck, CircleExclamation, Check } from "./icons";

/* ── 화면 프레임 (393 × 852, 뷰포트에 맞춰 축소) ── */
export function Phone({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const fit = () => {
      const w = window.innerWidth, h = window.innerHeight;
      if (w <= 520) { setScale(0); return; }
      setScale(Math.min(1, (h - 48) / 852, (w - 48) / 393));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  const full = scale === 0;
  return (
    <div className="stage">
      <div className={full ? "device device-full" : "device"}
        style={full ? undefined : { transform: `scale(${scale})` }}>
        <div className="phone">{children}</div>
      </div>
      {!full && <Link href="/screens" className="screens-link t-caption-1">화면 목록</Link>}
    </div>
  );
}

export function SafeTop() { return <div className="safe-top" />; }
export function SafeBottom() { return <div className="safe-bottom" />; }

export function Nav({ title, onBack }: { title?: string; onBack?: () => void }) {
  const router = useRouter();
  return (
    <div className="nav">
      <button aria-label="뒤로" onClick={onBack ?? (() => router.back())} style={{ display: "flex" }}>
        <ChevronLeft size={24} color="var(--label-normal)" />
      </button>
      {title ? <div className="nav-title">{title}</div> : <div style={{ flex: 1 }} />}
      <div className="nav-spacer" />
    </div>
  );
}

export function Button({
  children, onClick, disabled, variant = "solid",
}: { children: ReactNode; onClick?: () => void; disabled?: boolean; variant?: "solid" | "outline" }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick} disabled={disabled}>{children}</button>
  );
}

type FieldProps = {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; password?: boolean; clearable?: boolean;
  state?: "none" | "error" | "ok"; message?: string; autoFocus?: boolean;
};

export function Field({
  label, value, onChange, placeholder, password, clearable, state = "none", message, autoFocus,
}: FieldProps) {
  const [focus, setFocus] = useState(false);
  const [reveal, setReveal] = useState(false);
  const cls = ["field", focus && state === "none" ? "is-focus" : "",
    state === "error" ? "is-error" : "", state === "ok" ? "is-ok" : ""].join(" ");
  return (
    <div className={cls}>
      <div className="field-label">{label}</div>
      <div className="field-row">
        <input
          value={value} placeholder={placeholder}
          type={password && !reveal ? "password" : "text"} autoFocus={autoFocus}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          onChange={(e) => onChange(e.target.value)}
        />
        {clearable && value && (
          <button className="clear-btn" aria-label="지우기" onMouseDown={(e) => e.preventDefault()} onClick={() => onChange("")}>
            <Close size={12} color="#fff" />
          </button>
        )}
        {password && (
          <button className="icon-btn" aria-label="비밀번호 표시" onMouseDown={(e) => e.preventDefault()} onClick={() => setReveal((r) => !r)}>
            {reveal ? <Eye size={20} color="var(--label-assistive)" /> : <EyeOff size={20} color="var(--label-assistive)" />}
          </button>
        )}
      </div>
      <div className="field-line" />
      {message && (
        <div className={`field-msg ${state === "ok" ? "ok" : "err"}`}>
          {state === "ok"
            ? <CircleCheck size={15} color="var(--positive-normal)" />
            : <CircleExclamation size={15} color="var(--negative-normal)" />}
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}

export function Checkbox({ on, size = 24 }: { on: boolean; size?: number }) {
  return (
    <div className={`cbox ${on ? "cbox-on" : "cbox-off"}`} style={{ width: size, height: size, borderRadius: size / 3 }}>
      <Check size={size * 0.62} color="#fff" />
    </div>
  );
}
