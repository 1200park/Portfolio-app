"use client";

import { useEffect, useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import {
  projects,
  projectFilters,
  type Project,
  type ProjectCategory,
} from "@/lib/data/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const openProject = useMemo(
    () => projects.find((p) => p.id === openId) ?? null,
    [openId],
  );

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="border-b border-border-soft bg-background-soft"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 md:py-32">
        <SectionHeading
          eyebrow="Projects"
          index="02"
          title="분석하고, 연구하고, 발전했습니다."
          description="대표 프로젝트·연구를 카테고리별로 정리했습니다. 상세보기에서 문제 정의·기술·성과를 확인할 수 있습니다."
        />

        {/* 필터 */}
        <div className="mt-10 flex flex-wrap items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] sm:mt-12 sm:text-xs">
          {projectFilters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  "rounded-full border px-3 py-1.5 transition-colors sm:px-4 sm:py-2",
                  active
                    ? "border-accent bg-accent text-black"
                    : "border-border-strong text-muted hover:border-foreground hover:text-foreground",
                )}
                aria-pressed={active}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* 카드 그리드 */}
        <ul className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 60} as="li">
              <ProjectCard project={project} onOpen={() => setOpenId(project.id)} />
            </Reveal>
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted">
            해당 카테고리의 프로젝트가 없습니다.
          </p>
        )}
      </div>

      <ProjectDetailModal
        project={openProject}
        onClose={() => setOpenId(null)}
      />
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border-soft bg-background transition-colors hover:border-border-strong sm:rounded-2xl">
      {/* 썸네일 */}
      <div className="relative h-36 overflow-hidden border-b border-border-soft sm:h-44">
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-105",
            project.accent,
          )}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted">
              {project.category} · {project.period}
            </span>
            {project.badge && (
              <span className="rounded-full border border-accent px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-accent">
                {project.badge}
              </span>
            )}
          </div>
          <p className="font-mono text-xs text-foreground/80">
            <span className="text-accent">~/</span>
            {project.id}
          </p>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="flex flex-1 flex-col gap-3.5 p-5">
        <header className="space-y-1.5">
          <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        </header>

        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border-soft px-2 py-0.5 font-mono text-[0.65rem] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-2 text-xs font-medium text-background transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            상세보기 <span aria-hidden>→</span>
          </button>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent active:scale-95"
            >
              GitHub <span aria-hidden>↗</span>
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent active:scale-95"
            >
              Demo <span aria-hidden>↗</span>
            </a>
          )}
          {project.links.paper && (
            <a
              href={project.links.paper}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent active:scale-95"
            >
              논문 <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} 상세`}
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6"
    >
      {/* 오버레이 */}
      <button
        type="button"
        aria-label="모달 닫기"
        onClick={onClose}
        className="absolute inset-0 bg-black/72 backdrop-blur-sm"
      />

      {/* 패널 — 모바일: 시트(하단), sm+: 센터 다이얼로그 */}
      <div className="animate-fade-up relative z-10 flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-border-soft bg-background shadow-2xl sm:max-h-[88vh] sm:rounded-2xl">
        {/* 헤더 */}
        <header className="relative flex items-start justify-between gap-3 border-b border-border-soft p-5 sm:p-6">
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-40",
              project.accent,
            )}
          />
          <div className="min-w-0 space-y-1.5">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted sm:text-[0.65rem]">
              {project.category} · {project.period}
            </p>
            <h3 className="text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
              {project.title}
            </h3>
            <p className="text-sm text-muted">{project.summary}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border border-border-strong text-sm text-muted transition-colors hover:border-accent hover:text-accent sm:h-9 sm:w-9"
          >
            ✕
          </button>
        </header>

        {/* 스크롤 바디 */}
        <div className="flex-1 space-y-6 overflow-y-auto p-5 sm:p-6">
          <DetailBlock title="개요" body={project.detail.overview} />
          <DetailBlock title="문제 정의" body={project.detail.problem} />
          <DetailBlock
            title="아키텍처"
            body={
              <code className="block rounded-lg border border-border-soft bg-background-soft p-3 font-mono text-xs leading-relaxed text-foreground sm:p-4">
                {project.detail.architecture}
              </code>
            }
          />
          <div className="space-y-2.5">
            <h4 className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted-2 sm:text-[0.65rem]">
              사용 기술
            </h4>
            <ul className="flex flex-wrap gap-1.5">
              {project.detail.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border-soft px-2 py-1 font-mono text-[0.65rem] text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted-2 sm:text-[0.65rem]">
              주요 성과
            </h4>
            <ul className="space-y-2 text-sm leading-relaxed text-foreground">
              {project.detail.achievements.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden className="mt-1 flex-none font-mono text-xs text-accent">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <DetailBlock title="담당 역할" body={project.detail.role} />
          <DetailBlock title="회고" body={project.detail.retrospective} />

          {(project.links.github || project.links.demo || project.links.paper) && (
            <div className="flex flex-wrap gap-2 border-t border-border-soft pt-5">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  GitHub <span aria-hidden>↗</span>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  Demo <span aria-hidden>↗</span>
                </a>
              )}
              {project.links.paper && (
                <a
                  href={project.links.paper}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  논문 보기 <span aria-hidden>↗</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DetailBlock({ title, body }: { title: string; body: React.ReactNode }) {
  return (
    <div className="space-y-2.5">
      <h4 className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted-2 sm:text-[0.65rem]">
        {title}
      </h4>
      {typeof body === "string" ? (
        <p className="text-sm leading-relaxed text-foreground">{body}</p>
      ) : (
        body
      )}
    </div>
  );
}
