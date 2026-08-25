"use client";
import { useEffect, useState } from "react";

const ROW1 = "qwertyuiop".split("");
const ROW2 = "asdfghjkl".split("");
const ROW3 = "zxcvbnm".split("");
const NUM1 = "1234567890".split("");
const NUM2 = ["-", "/", ":", ";", "(", ")", "₩", "&", "@", '"'];
const NUM3 = [".", ",", "?", "!", "'", "_"];

/** 포커스된 input 에 값을 넣고 React onChange 를 발생시킨다 */
function typeInto(el: HTMLInputElement, next: string) {
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
  setter?.call(el, next);
  el.dispatchEvent(new Event("input", { bubbles: true }));
}

export default function Keyboard() {
  const [target, setTarget] = useState<HTMLInputElement | null>(null);
  const [shift, setShift] = useState(false);
  const [num, setNum] = useState(false);

  useEffect(() => {
    const onFocus = (e: FocusEvent) => {
      const t = e.target as HTMLElement;
      if (t instanceof HTMLInputElement) { setTarget(t); setNum(false); setShift(false); }
    };
    const onFocusOut = (e: FocusEvent) => {
      if (!(e.relatedTarget instanceof HTMLInputElement)) setTarget(null);
    };
    document.addEventListener("focusin", onFocus);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  useEffect(() => {
    const phone = document.querySelector(".phone");
    if (!phone) return;
    phone.classList.toggle("kb-open", !!target);
  }, [target]);

  if (!target) return null;

  const press = (v: string) => {
    const cur = target.value;
    if (v === "⌫") typeInto(target, cur.slice(0, -1));
    else if (v === "space") typeInto(target, cur + " ");
    else typeInto(target, cur + (shift && !num ? v.toUpperCase() : v));
    if (shift && !num) setShift(false);
  };

  const rows = num ? [NUM1, NUM2, NUM3] : [ROW1, ROW2, ROW3];

  return (
    <div className="keyboard" onMouseDown={(e) => e.preventDefault()}>
      <div className="kb-row">
        {rows[0].map((k) => <button key={k} className="kb-key" onClick={() => press(k)}>{shift && !num ? k.toUpperCase() : k}</button>)}
      </div>
      <div className="kb-row kb-row-2">
        {rows[1].map((k) => <button key={k} className="kb-key" onClick={() => press(k)}>{shift && !num ? k.toUpperCase() : k}</button>)}
      </div>
      <div className="kb-row">
        <button className={`kb-key kb-fn ${shift ? "on" : ""}`} onClick={() => setShift((s) => !s)}>
          {num ? "#+=" : "⇧"}
        </button>
        {rows[2].map((k) => <button key={k} className="kb-key" onClick={() => press(k)}>{shift && !num ? k.toUpperCase() : k}</button>)}
        <button className="kb-key kb-fn" onClick={() => press("⌫")}>⌫</button>
      </div>
      <div className="kb-row kb-row-last">
        <button className="kb-key kb-fn kb-num" onClick={() => setNum((n) => !n)}>{num ? "ABC" : "123"}</button>
        <button className="kb-key kb-at" onClick={() => press("@")}>@</button>
        <button className="kb-key kb-space" onClick={() => press("space")}>space</button>
        <button className="kb-key kb-at" onClick={() => press(".")}>.</button>
        <button className="kb-key kb-done" onClick={() => target.blur()}>완료</button>
      </div>
    </div>
  );
}
