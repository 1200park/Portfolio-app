import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skillCategories } from "@/lib/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="border-b border-border-soft bg-background-soft"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading
          eyebrow="Skills"
          index="02"
          title="데이터를 다루는 도구들."
          description="카테고리별로 보유한 기술과 숙련도를 정리했습니다. 숙련도는 실제 프로젝트·연구에서의 활용 경험을 기준으로 평가했습니다."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal
              key={category.id}
              delay={i * 80}
              className="bg-background p-8"
            >
              <header className="space-y-2">
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  <span className="text-accent">0{i + 1}</span>
                  <span>{category.title}</span>
                </div>
                <p className="text-sm text-muted">{category.caption}</p>
              </header>

              <ul className="mt-6 space-y-5">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {skill.level}
                      </span>
                    </div>
                    <div
                      className="mt-2 h-px w-full overflow-hidden bg-border-soft"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} 숙련도`}
                    >
                      <div
                        className="h-full bg-foreground transition-[width] duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
