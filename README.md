# 개인 포트폴리오 웹 (React + TypeScript)

채용 담당자가 빠르게 핵심 역량과 프로젝트 문제 해결 경험을 확인할 수 있도록 구성한 **반응형 포트폴리오 웹사이트**입니다.

**목적:** 프로젝트 중심의 개인 브랜딩/포트폴리오 사이트 구축<br/>
**핵심:** 반응형 UI, SPA 탐색 경험, 빠른 정보 전달<br/>
**현재 상태:** 기본 라우트/레이아웃 이관 완료, 콘텐츠 고도화는 진행 예정<br/>
**실행 기준:** `bun install`, `bun run dev`, `bun run build

<br/>

## 프로젝트 목표 & 가치

- 개발자의 기술 역량을 구조적으로 전달
- 프로젝트 결과보다 문제 해결 과정 중심 설명
- 채용 담당자가 30초 이내 핵심 정보 파악 가능
- 반응형 구조로 모바일/데스크톱 모두에서 일관된 UX 제공

<br/>

## 기술 스택

- `React 19`
- `TypeScript`
- `Vite`
- `CSS (원본 템플릿 스타일 기반)`
- `ESLint`

<br/>

## 페이지/라우트 구조
| 페이지 | 경로 | 설명 |
|---|---|---|
| About | `/about` | 자기소개/핵심 요약 |
| Resume | `/resume` | 교육/경험/이력 |
| Portfolio | `/portfolio` | 프로젝트 목록 |
| Blog | `/blog` | 블로그형 콘텐츠(선택) |
| Contact | `/contact` | 연락처/문의 |

**보정 규칙:**
- `/` 접속 시 `/about` 기준으로 동작
- 미정의 경로는 현재 `/about` 기준으로 처리

<br/>

## 폴더 구조 및 책임
현재 `src` 기준:

```text
portfolio/
├─ docs/
│  ├─ portfolio-plan.md
│  └─ react-migration-report.md
│
├─ public/
│  ├─ favicon.ico
│  └─ assets/                 # 정적 파일(그대로 서빙)
│
├─ src/
│  ├─ app/
│  │  ├─ App.tsx              # 라우터/레이아웃 조립
│  │  ├─ routes.tsx           # 라우팅 테이블(한 곳에서 관리)
│  │  └─ providers.tsx        # (선택) 테마/쿼리클라이언트 등
│  │
│  ├─ pages/                  # 라우트 단위 페이지
│  │  ├─ About/
│  │  │  ├─ AboutPage.tsx
│  │  │  └─ index.ts
│  │  ├─ Portfolio/
│  │  │  ├─ PortfolioPage.tsx
│  │  │  ├─ components/       # 페이지 전용 컴포넌트
│  │  │  └─ index.ts
│  │  ├─ Resume/
│  │  │  ├─ ResumePage.tsx
│  │  │  └─ index.ts
│  │  ├─ Blog/
│  │  │  ├─ BlogPage.tsx
│  │  │  └─ index.ts
│  │  ├─ Contact/
│  │  │  ├─ ContactPage.tsx
│  │  │  └─ index.ts
│  │  └─ Template/
│  │     ├─ TemplatePage.tsx
│  │     └─ index.ts
│  │
│  ├─ components/             # 전역 공용 컴포넌트
│  │  ├─ layout/
│  │  │  ├─ Shell.tsx         # (Header/Sidebar/Footer 포함)
│  │  │  ├─ Nav.tsx
│  │  │  └─ Sidebar.tsx
│  │  ├─ ui/                  # 버튼/뱃지/모달 등(재사용)
│  │  └─ index.ts
│  │
│  ├─ features/               # “도메인 단위” 묶음(포폴에 특히 좋음)
│  │  ├─ profile/
│  │  │  ├─ profile.model.ts
│  │  │  ├─ profile.data.ts
│  │  │  └─ profile.view.tsx
│  │  ├─ projects/
│  │  │  ├─ projects.model.ts
│  │  │  ├─ projects.data.ts
│  │  │  ├─ ProjectsSection.tsx
│  │  │  └─ components/
│  │  └─ experience/
│  │     ├─ experience.model.ts
│  │     ├─ experience.data.ts
│  │     └─ ExperienceSection.tsx
│  │
│  ├─ data/                   # (초기 단계) 콘텐츠 데이터 모음
│  │  ├─ profile.ts
│  │  ├─ projects.ts
│  │  ├─ experience.ts
│  │  └─ skills.ts
│  │
│  ├─ styles/
│  │  ├─ globals.css          # 전역 스타일
│  │  ├─ tokens.css           # 디자인 토큰(색/폰트/간격)
│  │  └─ original.css         # 템플릿 CSS 원본 유지(1차 이식용)
│  │
│  ├─ lib/                    # 유틸/헬퍼/공용 함수
│  │  ├─ cn.ts                # className 유틸(선택)
│  │  ├─ format.ts            # 날짜/숫자 포맷
│  │  └─ constants.ts
│  │
│  ├─ hooks/
│  │  ├─ useScrollSpy.ts      # 섹션 스크롤 기반 활성화(템플릿 탭 대체에 유용)
│  │  └─ useMediaQuery.ts
│  │
│  ├─ assets/                 # 번들에 포함되는 이미지/아이콘
│  │  └─ images/
│  │
│  ├─ main.tsx
│  └─ vite-env.d.ts
│
├─ template/
│  └─ main.html               # 원본 템플릿 기준점(아주 좋음)
│
├─ .editorconfig
├─ .gitignore
├─ index.html
├─ eslint.config.js
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ vite.config.ts
├─ package.json
└─ bun.lock
```

- `components`: 레이아웃 공통 UI
- `routes`: 라우트별 화면 컴포넌트
- `template`: 원본 템플릿 마크업/섹션 추출 로직
- `styles`: 원본 스타일 보존 레이어
- `data`: 정적 데이터 소스

<br/>

## 실행 방법 (Bun 기준)

```bash
bun install
bun run dev
```

개발 서버 실행 후 브라우저에서 표시된 로컬 주소로 접속합니다.

<br/>

## 검증 방법 (Bun 기준)
```bash
bun run build
```

**검증 포인트:**
- TypeScript 타입 체크 통과
- Vite 프로덕션 빌드 성공
- 주요 라우트 진입 시 UI 깨짐 여부 점검

<br/>

## 프로젝트 방향성
이 포트폴리오는 단순 소개 페이지가 아니라 다음을 증명하는 것을 목표로 합니다.

- **문제를 구조화하고 해결하는 사고 과정**
- **기술 선택의 근거를 설명하는 능력**
- **유지보수 가능한 프론트엔드 구조 설계 능력**