# 요구사항 명세서
# 개인 포트폴리오 1페이지 웹사이트 기능 명세서

## 1. 프로젝트 개요

* 목적: 개인 역량, 프로젝트 경험, 기술 스택을 효과적으로 소개하는 반응형 포트폴리오 웹사이트 구축
* 형태: Single Page Application (SPA)
* 컨셉: 모던 · 미니멀 · 전문적인 느낌
* 주요 타겟:

  * 기업 채용 담당자
  * 프로젝트 협업 대상자
  * 클라이언트

---

# 2. 전체 사이트 구성

## 메인 섹션 구성

1. Hero Section (인트로)
2. About Me
3. Skills
4. Experience / Career
5. Projects
6. Portfolio Detail Modal
7. Contact
8. Footer

---

# 3. 공통 기능 명세

## 레이아웃

* 1페이지 스크롤 구조
* Sticky Header 적용
* Section Anchor Navigation 지원
* 반응형 웹 지원

  * Desktop
  * Tablet
  * Mobile

## 디자인 스타일

* 모던/미니멀 UI
* 다크모드 기본 지원
* 부드러운 스크롤 애니메이션 적용
* 카드 기반 UI 구성
* 충분한 여백 및 가독성 중심

## 기술 권장사항

* Frontend

  * React / Next.js
  * Tailwind CSS
  * Framer Motion
* 배포

  * Vercel 또는 Netlify
* 형상관리

  * GitHub 연동

---

# 4. 상세 기능 명세

---

## 4-1. Header 영역

### 기능

* 상단 고정(Header Sticky)
* 메뉴 클릭 시 해당 섹션으로 스크롤 이동
* 현재 활성 섹션 하이라이트 표시

### 메뉴 구성

* Home
* About
* Skills
* Projects
* Experience
* Contact

### 추가 기능

* 모바일 햄버거 메뉴
* 다크모드 토글 버튼

---

## 4-2. Hero Section

### 목적

첫 화면에서 사용자 브랜딩 및 핵심 역량 강조

### 구성 요소

* 프로필 이미지
* 이름
* 직무 타이틀
* 한 줄 소개
* CTA 버튼

### 예시 콘텐츠

* “AI & Data Driven System Architect”
* “데이터 기반 문제 해결과 시스템 아키텍처 최적화를 수행합니다.”

### 버튼 기능

* Resume Download
* GitHub 이동
* LinkedIn 이동
* Contact 이동

### UI 효과

* Fade-in 애니메이션
* 타이핑 애니메이션
* 배경 Gradient 효과

---

## 4-3. About Me

### 목적

개인 소개 및 핵심 가치 전달

### 구성 요소

* 자기소개 텍스트
* 핵심 강점 요약
* 경력 요약 카드

### 표시 항목

* 이름
* 소속
* 전문 분야
* 관심 기술
* 업무 철학

### 추가 기능

* 숫자 카운트 애니메이션

  * Years Experience
  * Projects
  * Awards

---

## 4-4. Skills Section

### 목적

보유 기술 스택 시각화

### 구성 방식

* 카테고리별 기술 분류

### 예시 카테고리

* Frontend
* Backend
* Data/AI
* DevOps
* Tools

### UI 요소

* Skill Progress Bar
* Tech Badge
* Hover Animation

### 추가 기능

* 숙련도 표시 (% 또는 레벨)

---

## 4-5. Experience / Career

### 목적

경력 및 활동 이력 소개

### 구성 방식

* Timeline UI 적용

### 표시 항목

* 회사명
* 직무
* 기간
* 주요 업무
* 핵심 성과

### 추가 기능

* 현재 재직 상태 강조
* 성과 수치 하이라이트

---

## 4-6. Projects Section

### 목적

핵심 프로젝트 포트폴리오 소개

### 카드 구성

* 프로젝트 썸네일
* 프로젝트명
* 기술 스택
* 프로젝트 설명
* 기간

### 버튼 기능

* 상세보기
* GitHub 링크
* Demo 링크

### UI 기능

* Hover 확대 효과
* Filter 기능

  * All
  * AI
  * Data
  * Web
  * Architecture

---

## 4-7. Project Detail Modal

### 목적

프로젝트 상세 설명 제공

### Modal 구성

* 프로젝트 개요
* 문제 정의
* 사용 기술
* 아키텍처 구조
* 주요 성과
* 담당 역할
* 회고

### 추가 기능

* 이미지 슬라이드
* 아키텍처 다이어그램 표시
* 외부 링크 연결

---

## 4-8. Contact Section

### 목적

연락 및 협업 유도

### 입력 항목

* 이름
* 이메일
* 메시지

### 기능

* 이메일 전송 기능
* 유효성 검증
* 제출 성공 메시지 표시

### 추가 요소

* GitHub 링크
* LinkedIn 링크
* 이메일 주소 표시

---

## 4-9. Footer

### 구성 요소

* Copyright
* SNS 링크
* “Back to Top” 버튼

---

# 5. 비기능 요구사항

## 성능

* Lighthouse 90점 이상 목표
* 이미지 Lazy Loading 적용
* SEO 최적화

## 접근성

* 웹 접근성 준수
* Alt Text 적용
* Keyboard Navigation 지원

## 보안

* Form Validation 적용
* Spam 방지(reCAPTCHA 고려)

---

# 6. 관리자/유지보수 요구사항

## 콘텐츠 관리

* 프로젝트 데이터 JSON 분리
* 기술 스택 데이터 관리 가능 구조

## 유지보수성

* 컴포넌트 단위 개발
* 재사용 가능한 UI 구조 설계

---

# 7. 권장 추가 기능

## 선택 기능

* 다국어 지원 (KR / EN / JP)
* 블로그 연동
* GitHub 활동 자동 연동
* 방문자 분석(GA4)
* 프로젝트 검색 기능

---

# 8. 최종 산출물

## 개발 산출물

* 반응형 웹사이트
* GitHub Repository
* 배포 URL
* README 문서

## 문서화 요구사항

* 폴더 구조 설명
* 실행 방법
* 환경 변수 설정 가이드
* 배포 가이드
