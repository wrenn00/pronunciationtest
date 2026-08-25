import Link from "next/link";

const SCREENS = [
  { href: "/", name: "로그인", desc: "카카오, 구글, 이메일 진입" },
  { href: "/login/email", name: "이메일 로그인", desc: "밑줄형 입력과 오류 상태" },
  { href: "/signup", name: "가입 정보 입력", desc: "실시간 유효성 검사" },
  { href: "/signup/terms", name: "약관 동의", desc: "모두 동의 연동과 필수 검증" },
  { href: "/signup/complete", name: "가입 완료", desc: "온보딩 진입" },
  { href: "/onboarding/purpose", name: "온보딩 1 · 목적", desc: "단일 선택" },
  { href: "/onboarding/focus", name: "온보딩 2 · 개선점", desc: "복수 선택, 최대 3개" },
  { href: "/onboarding/frequency", name: "온보딩 3 · 빈도", desc: "단일 선택" },
  { href: "/onboarding/style", name: "온보딩 4 · 방식", desc: "복수 선택" },
  { href: "/onboarding/plan", name: "온보딩 5 · 계획 확인", desc: "선택값 요약, 행별 수정" },
  { href: "/onboarding/ready", name: "온보딩 6 · 준비 완료", desc: "첫 연습 진입" },
];

export default function Home() {
  return (
    <main style={{ minHeight: "100dvh", background: "#FAFBFC", padding: "56px 24px" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <h1 className="t-title-2" style={{ marginBottom: 8 }}>또박 인증 플로우</h1>
        <p className="t-body-1" style={{ color: "var(--label-alternative)", marginBottom: 40 }}>
          Figma 디자인 시스템 토큰을 그대로 옮긴 프로토타입입니다. 화면을 눌러 인터랙션을 확인하세요.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {SCREENS.map((s) => (
            <Link key={s.href} href={s.href}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "#fff", border: "1px solid var(--line-normal)",
                borderRadius: 16, padding: "18px 20px",
              }}>
              <span>
                <span className="t-body-1-b" style={{ display: "block" }}>{s.name}</span>
                <span className="t-caption-1" style={{ color: "var(--label-alternative)" }}>{s.desc}</span>
              </span>
              <span className="t-label-1-m" style={{ color: "var(--primary-normal)" }}>열기</span>
            </Link>
          ))}
        </div>
        <p className="t-caption-1" style={{ color: "var(--label-assistive)", marginTop: 32, lineHeight: 1.7 }}>
          이메일에 <b>daeun</b> 이 들어가면 비밀번호와 상관없이 로그인됩니다.<br />
          그 밖의 이메일은 비밀번호 <b>ttobak1234!</b> 로 통과하고, 틀리면 오류 상태를 볼 수 있어요.
        </p>
      </div>
    </main>
  );
}
