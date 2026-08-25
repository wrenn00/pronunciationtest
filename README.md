# 또박 · 인증 플로우 프로토타입

Figma 디자인 시스템(`Alpha/Theme`, `Alpha/Primitive`)의 토큰을 그대로 옮긴 인터랙티브 프로토타입입니다.
개발 참고용이며, 실제 인증/API 연동은 들어 있지 않습니다.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
```

## 화면

| 경로 | 화면 | 확인할 인터랙션 |
|---|---|---|
| `/` | 로그인 | 카카오, 구글, 이메일 진입 |
| `/screens` | 화면 목록 | 전체 화면 인덱스 |
| `/login/email` | 이메일 로그인 | 포커스 시 밑줄 컬러 전환, 지우기 버튼, 비밀번호 오류 상태 |
| `/terms` | 약관 동의 | 모두 동의 연동, 필수 3개 충족 시 CTA 활성화 |
| `/signup` | 가입 정보 입력 | 실시간 유효성 검사(형식·중복·규칙·일치), 비밀번호 표시 토글 |
| `/signup/complete` | 가입 완료 | — |

접속하면 로그인 화면이 바로 뜹니다. 우측 하단 `화면 목록`으로 다른 화면에 갈 수 있어요.

테스트 계정: `ttobak@kookmin.ac.kr` / `ttobak1234!`
가입 중복 검사용 이메일: `alpha@example.com`

## 디자인 토큰

`app/globals.css` 상단의 CSS 변수가 Figma 시맨틱 토큰과 1:1 대응합니다.

| CSS 변수 | Figma 토큰 | 값 |
|---|---|---|
| `--primary-normal` | `primary/normal` | `#2F6BFF` |
| `--primary-background` | `primary/background` | `#EDF2FF` |
| `--label-normal` | `label/normal` | `#191F28` |
| `--label-alternative` | `label/alternative` | `#4E5968` |
| `--line-normal` | `line/solid/normal` | `#E5E8EB` |
| `--negative-normal` | `status/negative/normal` | `#D22030` |
| `--positive-normal` | `status/positive/normal` | `#028450` |

타이포는 `.t-*` 클래스가 `alpha/*` 텍스트 스타일과 대응합니다 (크기·행간·자간 동일).

## 구조

```
app/
  globals.css        토큰 + 타입 스케일 + 공통 클래스
  layout.tsx         Pretendard 로드
  login/             로그인 · 이메일 로그인
  terms/             약관 동의
  signup/            가입 정보 · 완료
components/
  ui.tsx             Phone(393×852 프레임), Nav, Button, Field, Checkbox
  icons.tsx          SVG 아이콘 (Material Symbols Rounded 기반)
```

데스크톱에서는 393×852 기기 프레임 안에, 모바일에서는 전체 화면으로 표시됩니다.
