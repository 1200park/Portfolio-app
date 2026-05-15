export type ProjectCategory = "AI" | "Data" | "Research" | "Architecture";

export interface ProjectLinks {
  github?: string;
  demo?: string;
  paper?: string;
}

export interface ProjectDetail {
  overview: string;
  problem: string;
  technologies: string[];
  architecture: string;
  achievements: string[];
  role: string;
  retrospective: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  period: string;
  badge?: string;
  accent: string;
  links: ProjectLinks;
  detail: ProjectDetail;
}

export const projectFilters: Array<{
  id: "All" | ProjectCategory;
  label: string;
}> = [
  { id: "All", label: "All" },
  { id: "AI", label: "AI / NLP" },
  { id: "Data", label: "Data" },
  { id: "Research", label: "Research" },
  { id: "Architecture", label: "Architecture" },
];

export const projects: Project[] = [
  {
    id: "module-performance-index",
    title: "모듈 공용 성능 지수 개발 및 분석",
    summary: "전사 전략과제 — 공용화 기여도의 정량 측정 체계 수립",
    description:
      "차량 모듈의 공용 성능을 정량적으로 측정하는 지수를 개발하고, 공용화 기여도를 모듈·시스템·도메인 단위로 분석하는 전사 전략과제입니다.",
    category: "Architecture",
    stack: ["Python", "Pandas", "A2mac1", "Excel"],
    period: "2025.12 — 진행 중",
    badge: "진행 중",
    accent: "from-blue-300/30 via-sky-300/10 to-transparent",
    links: {},
    detail: {
      overview:
        "현대자동차 AVP Division의 전사 전략과제. 모듈 공용화 성과를 측정하는 표준 지수를 정의하고, 공용화 기여도를 부품·업무·아키텍처 구매 구분에서 다각도로 분석합니다.",
      problem:
        "공용화 기여도를 기존에는 정성적으로 평가해왔으나, 전사 차원의 의사결정을 지원하려면 재현 가능하고 비교 가능한 정량 지표가 필요했습니다.",
      technologies: [
        "Python (Pandas, NumPy)",
        "A2mac1 플랫폼",
        "통계적 지수 설계",
        "Excel / PowerPoint",
      ],
      architecture:
        "공용화 관련 부문 정의 → 공용화 기여도 지표(a, b) 도출 → 데이터 구조화 → 공용 성능 지수 산출 → 모듈·시스템·도메인 단위 분석",
      achievements: [
        "공용화 기여도를 정량화하는 표준 측정 체계(a·b 지수) 설계",
        "차량·모듈·시스템 단위 공용화 현황 자동 집계 파이프라인 구축",
        "전사 전략 과제로 채택 및 경영층 보고 자료 작성 기여",
      ],
      role: "분석 담당 연구원 · 지수 설계, Python 파이프라인 구현, 결과 시각화 및 보고서 작성",
      retrospective:
        "측정 기준의 정의가 분석의 절반이라는 것을 다시 확인한 프로젝트입니다. 이해관계자들과 공용화의 정의를 합의하는 과정이 기술 구현만큼 중요했습니다.",
    },
  },
  {
    id: "module-reuse-benchmark",
    title: "경쟁사 모듈 시스템 Reuse 벤치마킹",
    summary:
      "BYD·Tesla·Volkswagen EV 플랫폼 모듈 분석 (w/ A2mac1)",
    description:
      "A2mac1 플랫폼으로 BYD·Tesla·Volkswagen의 EV 아키텍처 모듈 구성을 분석하여 경쟁사 Reuse 전략과 당사 개선 인사이트를 도출했습니다.",
    category: "Architecture",
    stack: ["Python", "Pandas", "A2mac1", "Excel"],
    period: "2024.08 — 2025.10",
    accent: "from-sky-300/30 via-cyan-300/10 to-transparent",
    links: {},
    detail: {
      overview:
        "현대자동차 AVP Division에서 수행한 경쟁사 모듈 Reuse 벤치마킹. A2mac1 결과보고서(비정형 데이터)를 정형 데이터로 변환해 모듈·시스템·도메인 단위 공용율을 정량화했습니다.",
      problem:
        "경쟁사 아키텍처 전략(BYD Blade, Tesla 플랫폼, VW MEB)의 모듈 재사용 방식에 대한 정량적 비교 기준이 없어 전략 수립이 어려웠습니다.",
      technologies: [
        "Python (Pandas, NumPy)",
        "A2mac1 플랫폼",
        "EDA (탐색적 데이터 분석)",
        "Excel / PowerPoint",
      ],
      architecture:
        "A2mac1 결과보고서(비정형) → 데이터 구조화 → EDA 및 분석 방향 수립 → 모듈·시스템·도메인 공용율 산출 → 경쟁사별 아키텍처 전략 인사이트 도출",
      achievements: [
        "BYD·Tesla·Volkswagen 3개사 EV 플랫폼 모듈 공용율 정량화",
        "Maker·도메인·모듈 레벨 3계층 공용율 비교 분석 완료",
        "데이터 기반 경쟁사 아키텍처 전략 인사이트 도출 및 내부 전략 수립에 활용",
      ],
      role: "분석 담당 연구원 · 데이터 수집·구조화, Python 분석 파이프라인, 보고서 작성",
      retrospective:
        "비정형 데이터의 구조화가 분석 품질을 좌우했습니다. 데이터 수집 단계에서 표준 체계를 먼저 설계했다면 이후 분석이 훨씬 효율적이었을 것입니다.",
    },
  },
  {
    id: "supply-chain-llm",
    title: "Supply Chain Network Analysis with LLM",
    summary:
      "LLM과 기존 관계 추출 모델의 공급망 네트워크 비교 연구 (KAIST)",
    description:
      "ChatGPT(SSAN 모델)와 Conventional 관계 추출 결과를 S&P 500 기업 10-K 보고서에 적용해 공급망 네트워크 구조 차이를 정량 분석한 연구입니다.",
    category: "AI",
    stack: ["Python", "ChatGPT API", "NetworkX", "NLP", "SSAN"],
    period: "2023.12 — 2024.02",
    accent: "from-emerald-300/30 via-teal-300/10 to-transparent",
    links: {},
    detail: {
      overview:
        "KAIST AAILab(지도: 문일철 교수)에서 수행한 연구 인턴십 프로젝트. S&P 500 기업 10-K 보고서를 대상으로 두 가지 관계 추출 방식(SSAN vs. ChatGPT)이 만들어내는 공급망 네트워크 특성을 비교했습니다.",
      problem:
        "전통적 Relation Extraction 모델(SSAN)과 ChatGPT 기반 추출 결과가 실제 공급망 구조를 얼마나 다르게 표현하는지에 대한 정량적 비교 연구가 부족했습니다.",
      technologies: [
        "Python",
        "ChatGPT API (GPT-4)",
        "SSAN (Document-Level RE 모델)",
        "NetworkX",
        "Pandas",
      ],
      architecture:
        "S&P 500 10-K 텍스트 수집 → Relation Extraction (SSAN / ChatGPT) → Triplet 추출 → Directed Graph 구축 → 중심성 분석 → Country·Firm·Resource 네트워크 시각화",
      achievements: [
        "SSAN: Precision 우위, ChatGPT: Recall 우위 — 두 모델의 보완적 특성 정량화",
        "결합 분석 결과 단일 SSAN 모델 대비 공급망 네트워크 분석 성능 향상 확인",
        "Country–Firm–Resource 3계층 공급망 네트워크 시각화 및 핵심 노드 추출",
        "연구 결과 랩 세미나 발표 완료",
      ],
      role: "주 연구원 · 데이터 수집, RE 파이프라인 구현, 네트워크 분석, 논문 리뷰(SSAN·Transformer·DDPM), 발표",
      retrospective:
        "LLM이 구조화된 정보를 얼마나 다르게 해석하는지를 직접 수치로 확인한 경험이었습니다. 평가 지표를 더 다양하게 설정했다면 결론의 설득력이 높아졌을 것입니다.",
    },
  },
  {
    id: "smoker-prediction",
    title: "Binary Prediction of Smoker Status",
    summary:
      "생체 신호 기반 흡연 여부 이진 분류 — Kaggle 166위 / 1,908팀",
    description:
      "Google ML Bootcamp의 일환으로 참가한 Kaggle 대회. 생체 신호 데이터를 활용해 흡연 여부를 예측하는 분류 모델을 설계하고 상위 9%를 달성했습니다.",
    category: "Data",
    stack: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost"],
    period: "2023.10 — 2023.11",
    accent: "from-amber-300/30 via-yellow-300/10 to-transparent",
    links: {},
    detail: {
      overview:
        "Kaggle Competition: 'Binary Prediction of Smoker Status using Bio-Signals'. Google Machine Learning Bootcamp 과정 중 참가하여 166위 / 1,908팀 달성(상위 약 9%).",
      problem:
        "혈압·혈당·체지방 등 생체 신호 데이터로 흡연 여부(이진)를 예측하는 문제. 특성 간 상관관계가 복잡하고 단순 모델의 성능이 불만족스러워 개선이 필요했습니다.",
      technologies: [
        "Python",
        "Pandas / NumPy",
        "Scikit-learn",
        "XGBoost / LightGBM / CatBoost (Gradient Boosting 앙상블)",
        "Optuna (하이퍼파라미터 최적화)",
      ],
      architecture:
        "EDA → 결측치·이상치 처리 → Feature Engineering → Gradient Boosting 앙상블 → Optuna 하이퍼파라미터 튜닝 → 예측",
      achievements: [
        "최종 순위: 166 / 1,908팀 (상위 약 9%)",
        "Gradient Boosting 앙상블(LGBM·XGB·CatBoost)으로 성능 개선",
        "팀원·부트캠프 동료와의 협업으로 전처리 및 모델 전략 공유",
      ],
      role: "단독 참가 · EDA, 전처리, 모델링, Optuna 튜닝 전 과정",
      retrospective:
        "Logistic Regression·Random Forest에서 Gradient Boosting으로 전환하는 과정에서 알고리즘 선택이 성능에 미치는 영향을 직접 체감했습니다.",
    },
  },
  {
    id: "doctor-supply-thesis",
    title: "국내 의사 수 적정성 평가 연구",
    summary:
      "회귀모델 기반 OECD 데이터 분석 — 한양대학교 졸업논문",
    description:
      "OECD 국가 의료 데이터를 활용해 국내 의사 수의 적정성을 회귀모델로 평가한 졸업논문. 정량적 근거 기반의 의료 정책 판단 기준을 제시했습니다.",
    category: "Research",
    stack: ["R", "Python", "MICE", "OLS / Ridge Regression", "VIF"],
    period: "2021.03 — 2021.06",
    accent: "from-rose-300/30 via-pink-300/10 to-transparent",
    links: {
      paper: "http://naver.me/xUFv3vkw",
    },
    detail: {
      overview:
        "한양대학교 산업공학과 졸업논문 연구. OECD 회원국 의료 시스템 데이터를 분석하여 국내 의사 수의 적정성을 통계적으로 평가하는 방법론을 제안했습니다.",
      problem:
        "국내 의사 수 충분성 논쟁이 이어지고 있으나, OECD 기준 정량 비교 모델을 활용한 체계적 평가가 부족한 상황이었습니다.",
      technologies: [
        "R (회귀분석 — OLS, Ridge)",
        "Python (데이터 전처리)",
        "MICE (Multiple Imputation by Chained Equations)",
        "VIF 기반 다중공선성 분석",
        "OECD Health Statistics",
      ],
      architecture:
        "OECD 데이터 수집 → MICE 결측치 보완 → VIF 기반 변수 선정 → 다중 회귀모델 비교(Adjusted R² 기준) → 국내 적정 수준 추정",
      achievements: [
        "OECD 15개국 데이터 기반 2변수 회귀모델로 국내 적정 의사 수 추정 (1000명당 3.53명)",
        "MICE를 활용한 결측치 보완으로 분석 가능한 데이터셋 구축",
        "Adjusted R² 기반 모델 비교 및 Leave-one-out 교차검증으로 유효성 확인",
        "졸업논문 우수 평가 및 온라인 공개",
      ],
      role: "단독 연구 · 문헌 조사, 데이터 수집, 분석 모델 설계, 논문 작성 전 과정",
      retrospective:
        "정책 문제를 데이터로 접근하는 방법론을 처음 체계적으로 익힌 연구였습니다. 데이터 규모 제약으로 전체 데이터를 학습에 활용해야 했던 점이 아쉬웠습니다.",
    },
  },
];
