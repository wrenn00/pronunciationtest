"use client";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Phone, SafeTop, SafeBottom, Nav, Button, Field } from "@/components/ui";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PW_RE = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/;
const TAKEN = "alpha@example.com";

type S = "none" | "error" | "ok";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");

  const emailState: [S, string?] = useMemo(() => {
    if (!email) return ["none"];
    if (!EMAIL_RE.test(email)) return ["error", "이메일 형식을 다시 확인해 주세요"];
    if (email.toLowerCase() === TAKEN) return ["error", "이미 가입된 이메일이에요. 로그인해 주세요"];
    return ["ok", "사용할 수 있는 이메일이에요"];
  }, [email]);

  const pwState: [S, string?] = useMemo(() => {
    if (!pw) return ["none"];
    if (!PW_RE.test(pw)) return ["error", "영문, 숫자, 특수문자를 포함해 8~20자로 입력해 주세요"];
    return ["ok", "사용할 수 있는 비밀번호예요"];
  }, [pw]);

  const pw2State: [S, string?] = useMemo(() => {
    if (!pw2) return ["none"];
    if (pw !== pw2) return ["error", "비밀번호가 일치하지 않아요"];
    return ["ok", "비밀번호가 일치해요"];
  }, [pw, pw2]);

  const valid = emailState[0] === "ok" && pwState[0] === "ok" && pw2State[0] === "ok";

  return (
    <Phone>
      <SafeTop />
      <Nav title="회원가입" onBack={() => router.push("/login/email")} />
      <div className="screen body-pad scroll">
        <div style={{ height: 20 }} />
        <h1 className="t-title-3">가입 정보 입력</h1>
        <div style={{ height: 34 }} />

        <Field label="이메일" placeholder="이메일을 입력해 주세요" value={email} onChange={setEmail}
          state={emailState[0]} message={emailState[1]} autoFocus />
        <div style={{ height: 26 }} />
        <Field label="비밀번호" placeholder="비밀번호를 입력해 주세요" value={pw} onChange={setPw}
          password state={pwState[0]} message={pwState[1]} />
        <div style={{ height: 26 }} />
        <Field label="비밀번호 확인" placeholder="비밀번호를 다시 입력해 주세요" value={pw2} onChange={setPw2}
          password state={pw2State[0]} message={pw2State[1]} />

        <div className="flex-1" style={{ minHeight: 40 }} />
        <Button disabled={!valid} onClick={() => router.push("/signup/terms")}>다음</Button>
        <div style={{ height: 24 }} />
      </div>
      <SafeBottom />
    </Phone>
  );
}
