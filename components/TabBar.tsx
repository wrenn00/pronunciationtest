"use client";
import { usePathname, useRouter } from "next/navigation";
import { HomeFill, SchoolFill, ChartFill, PersonFill } from "./icons";

const TABS = [
  { href: "/home", label: "홈", Icon: HomeFill },
  { href: "/learn", label: "학습", Icon: SchoolFill },
  { href: "/records", label: "기록", Icon: ChartFill },
  { href: "/my", label: "마이", Icon: PersonFill },
];

export default function TabBar() {
  const router = useRouter();
  const path = usePathname();
  return (
    <>
      <div className="tabbar">
        <div className="tabbar-line" />
        <div className="tabbar-row">
          {TABS.map(({ href, label, Icon }) => {
            const on = path === href;
            const color = on ? "var(--primary-normal)" : "var(--label-assistive)";
            return (
              <button key={href} className="tab" onClick={() => router.push(href)}>
                <Icon size={26} color={color} />
                <span className="t-caption-2" style={{ color, fontWeight: 500 }}>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="safe-bottom" style={{ background: "var(--bg-elevated)" }} />
    </>
  );
}
