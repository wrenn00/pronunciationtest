"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Phone, SafeTop, SafeBottom, Nav, Button, Field } from "@/components/ui";

const PASS = "ttobak1234!";

export default function EmailLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);

  const submit = () => {
    if (!email.trim()) return setErr(false);
    if (pw !== PASS) { setErr(true); return; }
    setErr(false);
    router.push("/onboarding/purpose");
  };

  return (
    <Phone>
      <SafeTop />
      <Nav title="로그인" onBack={() => router.push("/login")} />
      <div className="screen body-pad">
        <div style={{ height: 34 }} />
        <Field label="이메일" value={email} onChange={(v) => { setEmail(v); setErr(false); }} autoFocus />
        <div style={{ height: 28 }} />
        <Field
          label="비밀번호" value={pw} password
          onChange={(v) => { setPw(v); setErr(false); }}
          state={err ? "error" : "none"}
          message={err ? "비밀번호가 일치하지 않아요. 다시 입력해 주세요." : undefined}
        />
        <div style={{ height: 30 }} />
        <div className="row center" style={{ gap: 12 }}>
          <button className="t-label-1-m" style={{ color: "var(--label-alternative)" }}
            onClick={() => router.push("/signup")}>회원가입</button>
          <span className="sep" />
          <button className="t-label-1-m" style={{ color: "var(--label-alternative)" }}
            onClick={() => alert("비밀번호 재설정은 프로토타입에서 생략했어요")}>비밀번호 재설정</button>
        </div>
        <div className="flex-1" />
        <Button onClick={submit}>로그인</Button>
        <div style={{ height: 24 }} />
      </div>
      <SafeBottom />
    </Phone>
  );
}
