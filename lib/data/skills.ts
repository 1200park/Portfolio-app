export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  caption: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    caption: "데이터와 시스템을 다루기 위한 언어 기반.",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "R", level: 75 },
      { name: "JAVA", level: 65 },
    ],
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    caption: "데이터에서 의사결정의 근거를 만듭니다.",
    skills: [
      { name: "Pandas / NumPy", level: 88 },
      { name: "Excel", level: 90 },
      { name: "Tableau", level: 80 },
      { name: "Statistics & Regression", level: 82 },
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning / AI",
    caption: "패턴을 찾고 예측 모델을 설계합니다.",
    skills: [
      { name: "Scikit-learn", level: 82 },
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 68 },
      { name: "Generative Models (VAE / Diffusion)", level: 65 },
    ],
  },
  {
    id: "domain",
    title: "Vehicle Architecture & Systems",
    caption: "산업 도메인 전문성을 데이터 분석에 결합합니다.",
    skills: [
      { name: "Module Configuration & Management", level: 85 },
      { name: "MBSE (Model Based Systems Engineering)", level: 72 },
      { name: "Benchmark Analysis (A2mac1)", level: 80 },
      { name: "Supply Chain Network Analysis", level: 75 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    caption: "작업의 효율과 품질을 끌어올리는 도구들.",
    skills: [
      { name: "GitHub", level: 78 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "MS Office (Word / PowerPoint)", level: 88 },
      { name: "Kaggle", level: 75 },
    ],
  },
];
