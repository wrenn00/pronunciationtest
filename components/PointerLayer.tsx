"use client";
import { useEffect, useRef, useState } from "react";

export default function PointerLayer() {
  const dot = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || window.innerWidth <= 520) return;
    setActive(true);
    document.body.classList.add("has-cursor");

    const el = dot.current!;
    let raf = 0, x = -100, y = -100, tx = -100, ty = -100;

    const render = () => {
      x += (tx - x) * 0.35;
      y += (ty - y) * 0.35;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    /* ── 드래그 스크롤 ── */
    let scroller: HTMLElement | null = null;
    let startY = 0, startTop = 0, dragging = false, moved = false;

    const findScroller = (node: EventTarget | null): HTMLElement | null => {
      let n = node as HTMLElement | null;
      while (n && n !== document.body) {
        if (n.scrollHeight > n.clientHeight + 1) {
          const oy = getComputedStyle(n).overflowY;
          if (oy === "auto" || oy === "scroll") return n;
        }
        n = n.parentElement;
      }
      return null;
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (dragging && scroller) {
        const dy = e.clientY - startY;
        if (Math.abs(dy) > 5) moved = true;
        scroller.scrollTop = startTop - dy;
      }
    };
    const onDown = (e: PointerEvent) => {
      el.classList.add("press");
      scroller = findScroller(e.target);
      if (scroller) {
        startY = e.clientY; startTop = scroller.scrollTop;
        dragging = true; moved = false;
        document.body.classList.add("dragging");
      }
    };
    const onUp = () => {
      el.classList.remove("press");
      dragging = false;
      document.body.classList.remove("dragging");
      if (moved) {
        const kill = (ev: Event) => { ev.stopPropagation(); ev.preventDefault(); };
        window.addEventListener("click", kill, { capture: true, once: true });
        setTimeout(() => window.removeEventListener("click", kill, { capture: true } as any), 60);
      }
      moved = false; scroller = null;
    };
    const onLeave = () => { el.style.opacity = "0"; };
    const onEnter = () => { el.style.opacity = "1"; };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerenter", onEnter);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerenter", onEnter);
      document.body.classList.remove("has-cursor", "dragging");
    };
  }, []);

  return <div ref={dot} className="glass-cursor" aria-hidden style={{ display: active ? "block" : "none" }} />;
}
