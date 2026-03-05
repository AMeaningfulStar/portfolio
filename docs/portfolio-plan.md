# 반응형 개인 포트폴리오 개발 계획서

#### 작성자: 김민성
#### 목표: 반응형 개인 포트폴리오 웹사이트 구축

<br/>

## 1. 프로젝트 개요

#### 1.1 프로젝트 목적
개인 포트폴리오 웹사이트는 단순한 자기소개 페이지가 아니라 다음을 목표로 한다.
- 개발자로서의 기술 역량을 구조적으로 보여주는 공간
- 프로젝트 경험을 문제 해결 중심으로 설명하는 공간
- 채용 담당자가 빠르게 핵심 정보를 확인할 수 있는 구조
- 개인 브랜딩 및 온라인 명함 역할 수행

**본 포트폴리오는 다음과 같은 특징을 가진다.**
- 반응형 웹
- SPA 구조
- 프로젝트 중심 콘텐츠
- 간결하고 빠른 UI
- GitHub 기반 배포

<br/>

## 2. 기술 스택 결정

#### 2.1 프레임워크

**React를 사용한다.**<br/>선택 이유는 다음과 같다.
- React 기본기 학습
- 컴포넌트 기반 구조 이해
- 상태 관리 및 UI 설계 능력 강화
- SPA 구조 경험

> Next.js는 이미 경험이 있으므로 이번 프로젝트에서는 React 기반으로 직접 구조를 설계하는 경험을 우선한다.

---

#### 2.2 빌드 도구

**Vite + React + TypeScript**<br/>선택 이유는 다음과 같다.
- 빠른 개발 서버
- 간단한 프로젝트 구조
- React 프로젝트 시작에 최적화

---

#### 2.3 스타일링

**기본 CSS + 컴포넌트 스타일**<br/>필요 시 다음 고려할 것이다.
- CSS Variables
- Flex/Grid
- 반응형 Breakpoint

---

#### 2.4 배포 방식

**GitHub Pages**<br/>선택 이유
- 무료
- GitHub 프로젝트와 연결
- 정적 사이트 배포에 최적

**배포 방식**<br/>React 프로젝트

**→ npm run build → dist 생성 → GitHub Pages 배포**

> 향후 자동 배포를 위해 GitHub Actions 사용 가능

<br/>

## 3. 포트폴리오 전체 구조

**전체 페이지 구성**

```
Portfolio
 ├─ About
 ├─ Resume
 ├─ Projects
 ├─ Skills
 ├─ Blog (선택)
 └─ Contact
```
<br/>

## 4. 페이지별 구성 설계

#### 4.1 About

**개발자 소개 섹션**
- 이름
- 개발자 타이틀
- 개발 철학
- 핵심 역량 요약
- 주요 기술

**목표**
- 방문자가 10초 안에 개발자를 이해

---

#### 4.2 Resume

**경력 및 교육 정보**

**구성**

> Education<br/>Experience<br/>Activities

**포함 내용**

- 신한DS 금융 SW 아카데미
- 베스트핀 인턴 경험
- 기술 학습 경험
- 프로젝트 경험

**목표**

- 성장 과정 + 실무 경험을 함께 보여주는 것

---

#### 4.3 Projects

**가장 중요한 섹션**

각 프로젝트는 다음 구조로 작성한다.

> 프로젝트 이름
<br/>프로젝트 설명
<br/>사용 기술
<br/>담당 역할
<br/>문제 상황
<br/>해결 방법
<br/>결과

**예시 프로젝트**
- 담비 (부동산 파트너)
- 청신호
- 퐁당퐁당

**목표**

- 문제 해결 중심 포트폴리오

---

#### 4.4 Skills

**기술 스택 정리**

```
Frontend
• React
• Next.js
• TypeScript
• TailwindCSS

Backend
• Java
• Spring
• REST API

Database
• MySQL
• Firestore
```
> *추후에 추가할 예정*
---

#### 4.5 Contact

**연락처 섹션**

```
•Email
• GitHub
• Portfolio
```
**목표**

- 연락 경로 명확화

<br/>

## 5. 반응형 설계 전략

기본 전략

Mobile First

**Breakpoint**
```
mobile   ~ 480px
tablet   ~ 768px
laptop   ~ 1024px
desktop  ~ 1280px
```

**주요 반응형 처리**
- Navigation 변화
- Grid Layout 변경
- Sidebar 처리
- 카드 레이아웃 변경

<br/>

## 6. 콘텐츠 관리 전략

> 본 포트폴리오는 1차 완성 단계에서 DB를 사용하지 않고 정적 데이터 방식으로 관리한다.

데이터는 GitHub 저장소 내부에서 관리한다.

**장점**

- 단순한 구조
- 빠른 배포
- 유지보수 용이

<br/>

## 7. UX 설계 기준

포트폴리오 UX는 다음 기준을 따른다.

**1. 빠른 이해**

- 채용 담당자가 30초 안에 이해

**2. 프로젝트 중심**

- 소개보다 프로젝트 강조

**3. 스크롤 기반 탐색**

- 간단한 navigation

**4. 정보 밀도**

- 불필요한 텍스트 최소화

<br/>

## 8. 프로젝트 디렉토리 구조 계획

```
portfolio
 ├─ src
 │  ├─ components
 │  │   ├─ Header
 │  │   ├─ Sidebar
 │  │   ├─ ProjectCard
 │  │   └─ SkillItem
 │  │
 │  ├─ pages
 │  │   ├─ About
 │  │   ├─ Resume
 │  │   ├─ Projects
 │  │   ├─ Skills
 │  │   └─ Contact
 │  │
 │  ├─ data
 │  │   └─ projects.json
 │  │
 │  ├─ styles
 │  │   └─ global.css
 │  │
 │  └─ App.tsx
 │
 └─ index.html
```
> *추후에 추가할 예정*

<br/>

## 9. 프로젝트 개발 TODO

### 1단계

프로젝트 초기 설정

- React 프로젝트 생성
- TypeScript 설정
- 기본 폴더 구조 설정
- Git 초기화

---

### 2단계

기본 레이아웃 구축

- Layout 구성
- Header
- Sidebar
- Main container
- Navigation

---

### 3단계

페이지 컴포넌트 제작

- About 페이지
- Resume 페이지
- Projects 페이지
- Skills 페이지
- Contact 페이지

---

### 4단계

프로젝트 카드 시스템

- ProjectCard 컴포넌트 제작
- 프로젝트 데이터 JSON 분리
- 필터 기능 구현

---

### 5단계

반응형 UI 구현

- Mobile Layout
- Tablet Layout
- Desktop Layout
- Grid 시스템 정리

---

### 6단계

애니메이션 및 UX 개선

- hover animation
- scroll animation
- card transition
- navigation highlight

---

### 7단계

콘텐츠 작성

- About 작성
- Resume 작성
- Project 설명 작성
- Skills 정리

---

### 8단계

SEO 및 메타 정보

- meta tag
- title
- description
- og:image

---

### 9단계

배포

- GitHub Repository 생성
- GitHub Pages 설정
- build 후 배포
- 자동 배포 설정

<br/>

## 10. 프로젝트 우선순위

1. 레이아웃
2. 프로젝트 카드
3. 콘텐츠 작성
4. 반응형
5. 애니메이션
6. SEO
7. 배포

<br/>

## 11. 최종 목표

완성된 포트폴리오는 다음 기준을 만족해야 한다.
- 반응형 UI
- 프로젝트 중심 구성
- 빠른 로딩
- 깔끔한 디자인
- 명확한 정보 전달

<br/>

## 12. 향후 확장 계획

추가 가능 기능
- 기술 블로그
- 프로젝트 상세 페이지
- 다크모드
- 애니메이션 강화
- 성능 최적화

<br/>

## 13. 개발 철학

이 포트폴리오는 단순한 소개 사이트가 아니라 다음을 보여주는 프로젝트이다.
- 개발자의 사고 방식
- 문제 해결 과정
- 기술 선택 기준
- 코드 구조 설계 능력