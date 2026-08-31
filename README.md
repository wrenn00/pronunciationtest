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
| `/login/email` | 이메일 로그인 | 포커스 시 밑줄 컬러 전환, 지우기 버튼, 비밀번호 오류 상태 |
| `/signup` | 가입 정보 입력 | 실시간 유효성 검사(형식, 중복, 규칙, 일치), 비밀번호 표시 토글 |
| `/signup/terms` | 약관 동의 | 모두 동의 연동, 필수 3개 충족 시 CTA 활성화 |
| `/signup/complete` | 가입 완료 | — |
| `/onboarding/purpose` | 온보딩 1 목적 | 단일 선택, Figma에서 내려받은 그래픽 아이콘 |
| `/onboarding/focus` | 온보딩 2 개선점 | 복수 선택, 최대 3개 제한 |
| `/onboarding/frequency` | 온보딩 3 빈도 | 단일 선택 |
| `/onboarding/style` | 온보딩 4 방식 | 복수 선택 |
| `/onboarding/plan` | 온보딩 5 계획 확인 | 선택값 요약, 행을 누르면 해당 단계로. 진단 시작 또는 홈 둘러보기 |
| `/onboarding/check` | 발음 진단 | 문장 1개 녹음, 타이머 30초 자동 종료 |
| `/onboarding/check/result` | 진단 결과 | 잘한 점 1개, 개선점 1개, 추천 난이도 |
| `/home` | 홈 | 연속 기록, 오늘의 연습, 이어서 연습하기, 뉴스 목록 |
| `/learn` `/records` `/my` | 학습, 기록, 마이 | 탭 이동 확인용 자리표시 |
| `/screens` | 화면 목록 | 전체 화면 인덱스 |

## 플로우

```
로그인
 ├ 이메일로 시작하기 → 이메일 로그인 → (성공) 온보딩
 └ 이메일 로그인의 회원가입 → 가입 정보 입력 → 약관 동의 → 가입 완료 → 온보딩

온보딩
 목적 → 개선점 → 빈도 → 방식 → 계획 확인 ┬ 30초 진단 → 진단 결과 → 홈
                                      └ 홈 먼저 둘러보기 → 홈
```

진단을 건너뛰면 홈 최상단에 `첫 진단 시작하기` 카드가 계속 노출됩니다.

온보딩 진행 표시는 두 가지를 비교할 수 있습니다. 기본은 트랙형이고,
주소 끝에 `?bar=dot` 을 붙이면 도트형으로 바뀝니다.
예: `/onboarding/focus?bar=dot`

온보딩 선택값은 `sessionStorage`에 저장돼 계획 확인 화면에 그대로 반영됩니다.
계획 확인에서 각 행을 누르면 해당 단계로 돌아가고, 고친 값이 다시 반영됩니다.

테스트 로그인: 이메일에 `daeun` 이 들어가면 비밀번호와 상관없이 통과합니다.
그 밖의 이메일은 `ttobak1234!` 로 통과하고, 틀리면 오류 상태가 뜹니다.
가입 중복 검사용 이메일: `alpha@example.com`

## 프로토타입 조작

- 데스크톱에서는 마우스 커서가 **원형 글래스 커서**로 바뀝니다. 누르면 작아지면서 브랜드 컬러로 변해 탭 피드백을 줍니다.
- 스크롤이 있는 화면은 **드래그해서 내릴 수 있습니다.** 실제 기기에서 쓸어 올리는 것과 같은 조작이고, 휠도 함께 동작합니다.
- 드래그한 뒤에는 버튼 클릭이 발생하지 않습니다. 스크롤하려다 실수로 눌리는 일을 막습니다.
- 터치 기기와 520px 이하 화면에서는 기본 커서와 네이티브 스크롤을 씁니다.
- 입력창을 누르면 **화면 안에서 키보드가 올라옵니다.** 키를 눌러 실제로 입력되고, `123`으로 숫자와 기호를, `⇧`로 대문자를 씁니다. `완료`를 누르면 내려갑니다.
- 키보드가 올라오면 화면이 그만큼 줄어들어 하단 버튼이 가려지지 않고 위로 올라옵니다.

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

## 에셋

`public/onboarding/` 의 PNG 4개는 Figma `08 Onboarding · 01 목적` 의 아이콘을 4배(140×140)로 내보낸 것입니다.
Figma에서 아이콘을 바꾸면 같은 노드를 다시 내보내 교체하면 됩니다.

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
