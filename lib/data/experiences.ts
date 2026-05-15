export interface Experience {
  company: string;
  location: string;
  role: string;
  division?: string;
  period: string;
  current?: boolean;
  responsibilities: string[];
  achievements: string[];
  skills?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Hyundai Motor Company",
    location: "Seongnam, South Korea",
    role: "Research Engineer",
    division: "AVP Division · Architecture System Integration Team",
    period: "Mar. 2025 — Present",
    current: true,
    responsibilities: [
      "System Integration — 모듈 기능·성능·중량 Trade-off를 종합 고려한 차량 최적 아키텍처 통합",
      "Module Configuration — 고객 요구사항과 차량 부품 사양을 매칭하여 최적 구성 도출",
      "Module Reuse — 플랫폼 단위 공용화로 비용 절감 방안 수립 및 데이터 분석 기반 효율화",
      "Module Management — 개발 중 모듈의 추가 요구사항 반영 및 변경 이력 관리",
      "불용사양 축소 — 데이터 분석으로 불필요한 사양 조합 식별 및 BOM 활용 체계 구축",
    ],
    achievements: [
      "전사 전략과제 수행: 모듈 공용 성능 지수 개발 및 분석 (2025.12~진행 중)",
      "경쟁사 모듈 Reuse 벤치마킹: BYD·Tesla·Volkswagen EV 플랫폼 분석 (w/ A2mac1, 2024.08~2025.10)",
      "Python 데이터 분석 파이프라인으로 보고서 자동화 체계 구축",
    ],
    skills: ["Python", "Data Analysis", "MBSE", "Strategic Planning", "A2mac1"],
  },
  {
    company: "Hyundai Motor Company",
    location: "Hwaseong, South Korea",
    role: "Research Engineer",
    division: "AVP Division · Vehicle Architecture Module Planning Team",
    period: "Aug. 2024 — Feb. 2025",
    responsibilities: [
      "Module Configuration — 차량 아키텍처 개발·기획 단계의 모듈 구성 체계 수립",
      "Module Management — 모듈 사양 관리 및 라이프사이클 추적",
      "Module Reuse — 플랫폼 간 모듈 재사용성 검토 및 BOM 활용 체계 구축",
    ],
    achievements: [
      "차량 모듈 데이터를 Python으로 자동 분석하는 워크플로 구축",
      "팀 내 데이터 기반 보고 체계 개선에 기여",
    ],
    skills: ["Python", "Data Analysis", "Project Management"],
  },
  {
    company: "KAIST — AAILab",
    location: "Daejeon, South Korea",
    role: "Research Intern",
    division:
      "Dept. of Industrial and Systems Engineering · Prof. Il-chul Moon",
    period: "Dec. 2023 — Feb. 2024",
    responsibilities: [
      "SSAN 모델과 ChatGPT를 활용한 Relation Extraction 파이프라인 구현 및 비교 분석",
      "S&P 500 기업 10-K 보고서 기반 공급망 네트워크 구축 (NetworkX, Directed Graph)",
      "코드 리팩토링·디버깅 및 Markdown 기반 분석 파이프라인 문서화",
      "Generative Models 스터디: VAE·ELBO 수학적 도출 및 PyTorch 구현, DDPM 논문 리뷰",
      "KOOC 강의를 활용한 자기주도 ML 이론 보완 (Bayesian Network, K-means, Variational Inference)",
    ],
    achievements: [
      "SSAN(Precision 우위) + ChatGPT(Recall 우위) 결합으로 단일 모델 대비 성능 향상 확인",
      "Country–Firm–Resource 3계층 공급망 네트워크 시각화 및 중심성 분석 완료",
      "코드 리팩토링·Markdown 문서화로 분석 파이프라인 가독성 및 재현성 개선",
      "연구 결과 랩 세미나 발표 완료",
    ],
    skills: ["Python", "NLP", "NetworkX", "ChatGPT API", "PyTorch", "Markdown"],
  },
];

export const education = {
  school: "Hanyang University",
  location: "Seoul, South Korea",
  period: "Mar. 2018 — Aug. 2024",
  degrees: [
    "B.S. in Industrial Engineering (GPA 4.09 / 4.5)",
    "B.A. in Finance (GPA 4.13 / 4.5)",
  ],
  honors: [
    "Summa Cum Laude",
    "Dean's List",
    "Hanyang Brain Award — 1st Place, Spring 2018",
  ],
  thesis:
    "회귀모델을 통한 국내 의사 수 적정성 평가 연구: OECD 국가들의 데이터를 중심으로",
};

export const certifications = [
  {
    name: "HDAT-DA",
    issuer: "Hyundai Motor Group",
    date: "Oct. 2025",
  },
  {
    name: "정보처리기사",
    issuer: "한국산업인력공단 (HRD Korea)",
    date: "Jun. 2023",
  },
  {
    name: "빅데이터분석기사",
    issuer: "한국데이터산업진흥원",
    date: "Jul. 2022",
  },
  {
    name: "SQLD",
    issuer: "한국데이터산업진흥원",
    date: "Sep. 2022",
  },
];

export const languages = [
  {
    name: "TOEIC",
    score: "860",
    level: "Intermediate",
    validUntil: "Feb. 2026",
  },
  {
    name: "Opic",
    score: "IM3",
    level: "Intermediate",
    validUntil: "Mar. 2028",
  },
];

export const awards = [
  {
    name: "표창장",
    issuer: "경인지방병무청",
    date: "Apr. 2022",
  },
  {
    name: "Hanyang Brain Award (Dean's List)",
    issuer: "한양대학교 — Ranked 1st",
    date: "Jun. 2018",
  },
];
