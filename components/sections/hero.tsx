"use client";

import { startTransition, useEffect, useState } from "react";
import { profile } from "@/lib/data/profile";
import { cn } from "@/lib/utils";

const ROLES = [
  "Research Engineer · Hyundai Motor Company",
  "Data Analyst & ML Practitioner",
  "Vehicle Architecture & Module Systems",
];

const TYPE_SPEED = 60;
const ERASE_SPEED = 28;
const HOLD = 1600;

export function HeroSection() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing");

  useEffect(() => {
    const current = ROLES[index];

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPE_SPEED,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("erasing"), HOLD);
      return () => clearTimeout(t);
    }

    if (phase === "erasing") {
      if (text.length === 0) {
        startTransition(() => {
          setIndex((prev) => (prev + 1) % ROLES.length);
          setPhase("typing");
        });
        return;
      }
      const t = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        ERASE_SPEED,
      );
      return () => clearTimeout(t);
    }
  }, [text, phase, index]);

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative isolate overflow-hidden border-b border-border-soft"
    >
      <BackgroundFx />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pb-20 pt-20 sm:gap-12 sm:px-6 sm:pt-28 lg:pb-28 lg:pt-36">
        {/* Eyebrow */}
        <div className="animate-fade-in flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
          <span className="h-px w-8 bg-border-strong" aria-hidden />
          <span>Portfolio · 2026</span>
        </div>

        {/* Headline */}
        <div className="space-y-5 sm:space-y-6">
          <h1 className="animate-fade-up break-word">
            <span className="block text-3xl font-medium leading-snug tracking-tight text-muted sm:text-4xl md:text-5xl">
              안녕하세요,
            </span>
            <span className="mt-1 block text-5xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              {profile.nameKo}입니다.
            </span>
            <span className="mt-0.5 block font-mono text-xl font-normal tracking-wider text-muted sm:text-2xl md:text-3xl">
              {profile.name}
            </span>
          </h1>

          {/* Typing */}
          <p
            className="animate-fade-up font-mono text-sm text-muted sm:text-base"
            style={{ animationDelay: "120ms" }}
          >
            <span className="text-accent">$ role —</span>{" "}
            <span className={cn("break-word text-foreground caret")}>{text}</span>
          </p>

          {/* Tagline */}
          <p
            className="animate-fade-up max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            {profile.tagline}
          </p>
        </div>

        {/* CTAs */}
        <div
          className="animate-fade-up flex flex-wrap items-center gap-2.5 sm:gap-3"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href={profile.links.resume}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            Resume
            <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent active:scale-95"
          >
            Contact
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent active:scale-95"
          >
            GitHub <span aria-hidden>↗</span>
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent active:scale-95"
          >
            LinkedIn <span aria-hidden>↗</span>
          </a>
        </div>

        {/* Expertise pills */}
        <div
          className="animate-fade-up grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border-soft bg-border-soft sm:grid-cols-3"
          style={{ animationDelay: "480ms" }}
        >
          {profile.expertise.map((item, i) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-background-soft px-4 py-3.5"
            >
              <span className="flex-none font-mono text-xs text-accent">0{i + 1}</span>
              <span className="text-sm leading-snug text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BackgroundFx() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-x-0 top-0 h-[380px] opacity-50"
        style={{
          background:
            "radial-gradient(55% 55% at 15% 0%, var(--accent-soft), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-[380px] opacity-60"
        style={{
          background:
            "radial-gradient(35% 35% at 88% 8%, rgba(125,211,252,0.07), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at top, rgba(0,0,0,0.4), transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top, rgba(0,0,0,0.4), transparent 68%)",
        }}
      />
    </div>
  );
}
