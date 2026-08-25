"use client";
import { useRouter } from "next/navigation";
import { Phone, SafeTop, SafeBottom } from "@/components/ui";
import { KakaoLogo, GoogleLogo, MailFill } from "@/components/icons";

export default function LoginPage() {
  const router = useRouter();
  return (
    <Phone>
      <SafeTop />
      <div className="screen body-pad" style={{ alignItems: "center" }}>
        <div style={{ height: 150 }} />
        <div className="logo-slot">LOGO</div>
        <div style={{ height: 14 }} />
        <p className="t-body-1" style={{ color: "var(--label-alternative)", fontWeight: 500 }}>
          말하는 순간이 편해지도록
        </p>
        <div style={{ height: 96 }} />

        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          <button className="social social-kakao" onClick={() => alert("카카오 로그인은 프로토타입에서 생략했어요")}>
            <span className="logo"><KakaoLogo /></span>카카오로 시작하기
          </button>
          <button className="social social-google" onClick={() => alert("구글 로그인은 프로토타입에서 생략했어요")}>
            <span className="logo"><GoogleLogo /></span>구글로 시작하기
          </button>
          <button className="social social-email" onClick={() => router.push("/login/email")}>
            <span className="logo"><MailFill size={20} color="var(--label-normal)" /></span>이메일로 시작하기
          </button>
        </div>

        <div style={{ height: 28 }} />
        <p className="t-caption-1" style={{ color: "var(--label-assistive)" }}>로그인에 문제가 있으신가요?</p>
      </div>
      <SafeBottom />
    </Phone>
  );
}
