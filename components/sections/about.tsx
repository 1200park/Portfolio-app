"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { profile, type ProfileStat } from "@/lib/data/profile";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About"
      className="border-b border-border-soft bg-background"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 md:py-32">
        <SectionHeading
          eyebrow="About"
          index="01"
          title="데이터로 시스템을 이해합니다."
          description="산업공학·금융의 분석적 기반 위에 머신러닝과 도메인 지식을 쌓아, 현대자동차 AVP Division에서 차량 아키텍처 모듈 연구를 수행하고 있습니다."
        />

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12 md:gap-10">
          {/* 자기소개 + 메타 */}
          <Reveal className="md:col-span-7">
            <article className="space-y-5 sm:space-y-6">
              <p className="text-base leading-relaxed text-foreground sm:text-lg">
                {profile.intro}
              </p>
              <blockquote className="border-l-2 border-accent pl-4 text-sm italic leading-relaxed text-muted sm:text-base">
                {profile.philosophy}
              </blockquote>
              <dl className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
                <Meta label="Name" value={`${profile.name} (${profile.nameKo})`} />
                <Meta label="Company" value={profile.affiliation} />
                <Meta label="Email" value="dlfwnqkr12@gmail.com" />
                <Meta label="Location" value="Suwon / Seongnam, Korea" />
                <Meta label="Focus" value={profile.expertise.join(" · ")} />
                <Meta label="Interests" value={profile.interests.join(" · ")} />
              </dl>
            </article>
          </Reveal>

          {/* 핵심 강점 */}
          <Reveal className="md:col-span-5" delay={120}>
            <div className="space-y-3">
              <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted sm:text-xs">
                Core Strengths
              </h3>
              <ul className="divide-y divide-border-soft overflow-hidden rounded-xl border border-border-soft sm:rounded-2xl">
                {profile.strengths.map((strength, i) => (
                  <li
                    key={strength}
                    className="flex items-start gap-3 bg-background-soft p-4 sm:gap-4 sm:p-5"
                  >
                    <span className="mt-0.5 flex-none font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">
                      {strength}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* 숫자 통계 */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border-soft bg-border-soft sm:grid-cols-3 sm:rounded-2xl md:mt-14">
          {profile.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <dt className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-2 sm:text-[0.65rem]">
        {label}
      </dt>
      <dd className="break-word text-sm text-foreground">{value}</dd>
    </div>
  );
}

function StatCard({ stat, delay }: { stat: ProfileStat; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      startTransition(() => setCount(stat.value));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          const duration = 1200;
          const start = performance.now();

          function step(now: number) {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.round(stat.value * eased));
            if (t < 1) requestAnimationFrame(step);
          }

          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [stat.value]);

  return (
    <div
      ref={ref}
      className="bg-background-soft p-6 sm:p-8"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted sm:text-xs">
        {stat.label}
      </p>
      <p className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:mt-3 sm:text-5xl">
        {count}
        {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
      </p>
    </div>
  );
}
