import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import {
  experiences,
  education,
  certifications,
  languages,
  awards,
} from "@/lib/data/experiences";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="border-b border-border-soft bg-background"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 md:py-32">
        <SectionHeading
          eyebrow="Experience"
          index="03"
          title="쌓아온 경험과 학습의 궤적."
          description="현장 경험과 연구·학습이 어떻게 연결되어 있는지 정리했습니다."
        />

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-16">
          {/* ── 경력 타임라인 ── */}
          <div className="md:col-span-7">
            <h3 className="mb-6 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted sm:text-xs">
              Work &amp; Research Experience
            </h3>
            <ol className="relative border-l border-border-soft">
              {experiences.map((exp, i) => (
                <Reveal
                  key={`${exp.company}-${exp.period}`}
                  delay={i * 80}
                  as="li"
                  className="relative pl-6 pb-10 last:pb-0 sm:pl-8 sm:pb-12"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-border-strong bg-background",
                      exp.current && "border-accent bg-accent",
                    )}
                  />

                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <h4 className="text-base font-semibold text-foreground sm:text-lg">
                      {exp.role}
                    </h4>
                    {exp.current && (
                      <span className="rounded-full border border-accent px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-accent">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-0.5 text-sm text-muted">
                    {exp.company}
                    <span className="mx-2 text-border-strong">·</span>
                    {exp.location}
                  </p>
                  {exp.division && (
                    <p className="mt-0.5 font-mono text-[0.65rem] text-muted-2">
                      {exp.division}
                    </p>
                  )}
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                    {exp.period}
                  </p>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h5 className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted-2">
                        주요 업무
                      </h5>
                      <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
                        {exp.responsibilities.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span aria-hidden className="mt-2 h-px w-3 flex-none bg-border-strong" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted-2">
                        성과 · 기여
                      </h5>
                      <ul className="mt-2 space-y-2 text-sm leading-relaxed text-foreground">
                        {exp.achievements.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span aria-hidden className="mt-1 flex-none font-mono text-xs text-accent">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {exp.skills && exp.skills.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {exp.skills.map((sk) => (
                        <li
                          key={sk}
                          className="rounded-full border border-border-soft px-2.5 py-1 font-mono text-[0.65rem] text-muted"
                        >
                          {sk}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </ol>
          </div>

          {/* ── 사이드 패널: 학력 · 자격증 · 수상 ── */}
          <div className="space-y-6 md:col-span-5">
            {/* Education */}
            <Reveal delay={60}>
              <div className="space-y-3">
                <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted sm:text-xs">
                  Education
                </h3>
                <div className="rounded-xl border border-border-soft bg-background-soft p-5 sm:rounded-2xl sm:p-6">
                  <p className="text-base font-semibold text-foreground sm:text-lg">
                    {education.school}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">{education.location}</p>
                  <p className="mt-0.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                    {education.period}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-foreground">
                    {education.degrees.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span aria-hidden className="mt-1 flex-none font-mono text-xs text-accent">✦</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted">
                    {education.honors.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span aria-hidden className="mt-2 h-px w-3 flex-none bg-border-strong" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-lg border border-border-soft bg-background p-3">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-2">
                      Graduation Thesis
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {education.thesis}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Certifications */}
            <Reveal delay={120}>
              <div className="space-y-3">
                <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted sm:text-xs">
                  Certifications
                </h3>
                <ul className="divide-y divide-border-soft overflow-hidden rounded-xl border border-border-soft sm:rounded-2xl">
                  {certifications.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex items-start justify-between gap-3 bg-background-soft p-3.5 sm:p-4"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{cert.name}</p>
                        <p className="mt-0.5 font-mono text-[0.65rem] text-muted">{cert.issuer}</p>
                      </div>
                      <span className="flex-none font-mono text-[0.65rem] text-muted-2">
                        {cert.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Language Scores */}
            <Reveal delay={180}>
              <div className="space-y-3">
                <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted sm:text-xs">
                  Language Scores
                </h3>
                <ul className="divide-y divide-border-soft overflow-hidden rounded-xl border border-border-soft sm:rounded-2xl">
                  {languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="flex items-start justify-between gap-3 bg-background-soft p-3.5 sm:p-4"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {lang.name}
                          <span className="ml-2 text-accent">{lang.score}</span>
                          {lang.level && (
                            <span className="ml-1.5 font-mono text-[0.65rem] text-muted">
                              ({lang.level})
                            </span>
                          )}
                        </p>
                      </div>
                      <span className="flex-none font-mono text-[0.65rem] text-muted-2">
                        ~{lang.validUntil}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Awards */}
            <Reveal delay={240}>
              <div className="space-y-3">
                <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted sm:text-xs">
                  Awards &amp; Honors
                </h3>
                <ul className="divide-y divide-border-soft overflow-hidden rounded-xl border border-border-soft sm:rounded-2xl">
                  {awards.map((award) => (
                    <li
                      key={award.name}
                      className="flex items-start justify-between gap-3 bg-background-soft p-3.5 sm:p-4"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{award.name}</p>
                        <p className="mt-0.5 font-mono text-[0.65rem] text-muted">{award.issuer}</p>
                      </div>
                      <span className="flex-none font-mono text-[0.65rem] text-muted-2">
                        {award.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
