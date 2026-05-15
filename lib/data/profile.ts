export interface ProfileStat {
  label: string;
  value: number;
  suffix?: string;
}

export interface Profile {
  name: string;
  nameKo: string;
  initials: string;
  role: string;
  tagline: string;
  affiliation: string;
  expertise: string[];
  interests: string[];
  philosophy: string;
  intro: string;
  strengths: string[];
  stats: ProfileStat[];
  links: {
    github: string;
    linkedin: string;
    email: string;
    resume: string;
  };
}

export const profile: Profile = {
  name: "Ilju Park",
  nameKo: "박일주",
  initials: "IP",
  role: "Research Engineer · Hyundai Motor Company",
  tagline:
    "도메인 전문성과 데이터 분석을 결합해, 복잡한 시스템의 의사결정을 실질적인 가치로 전환합니다.",
  affiliation: "Hyundai Motor Company · AVP Division",
  expertise: [
    "Vehicle Architecture & Module Systems",
    "Data Analysis & Machine Learning",
    "Supply Chain & Benchmark Research",
  ],
  interests: [
    "Data-driven Decision Making",
    "LLM / Generative AI",
    "Business & Financial Analytics",
    "End-to-End Data Pipeline Design",
  ],
  philosophy:
    "데이터는 복잡한 시스템을 이해하는 가장 정직한 언어입니다. 도메인 지식과 분석적 사고를 결합해, 수치로 문제를 정의하고 구조로 해결합니다. 단순한 결과 도출을 넘어, 신뢰할 수 있는 의사결정의 근거를 만드는 것이 목표입니다.",
  intro:
    "산업공학과 금융을 복수전공하며 데이터 기반 의사결정의 기초를 다졌고, KAIST 연구실 인턴십과 현대자동차 AVP Division 경력을 통해 복잡한 시스템 문제를 데이터로 정의하고 해결하는 방법론을 익혔습니다. 차량 모듈 공용화·공급망 분석·경쟁사 벤치마킹 등 다양한 도메인에서 데이터 분석이 대형 조직의 의사결정을 어떻게 바꾸는지 직접 경험했습니다. 앞으로는 도메인을 가리지 않고 데이터와 도메인 전문성을 융합해 비즈니스에 실질적인 가치를 만드는 분석 전문가로 성장하고자 합니다.",
  strengths: [
    "도메인 지식 기반의 데이터 분석 — 문제를 정확히 정의하고 수치로 검증",
    "Python 기반 데이터 파이프라인 설계 및 자동화 (비정형 데이터 포함)",
    "LLM·ML 활용 관계 추출, 네트워크 분석, 예측 모델링",
    "복잡한 데이터에서 신뢰할 수 있는 의사결정 근거 도출",
  ],
  stats: [
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Projects", value: 9, suffix: "+" },
    { label: "Certifications", value: 6 },
  ],
  links: {
    github: "https://github.com/1200park",
    linkedin: "https://www.linkedin.com/in/1200park",
    email: "mailto:dlfwnqkr12@gmail.com",
    resume: "/cv_박일주v1.pdf",
  },
};
