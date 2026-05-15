"use client";

import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/lib/data/profile";
import { cn } from "@/lib/utils";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "이름을 입력해 주세요.";
    if (!email) nextErrors.email = "이메일을 입력해 주세요.";
    else if (!EMAIL_REGEX.test(email))
      nextErrors.email = "올바른 이메일 형식이 아닙니다.";
    if (!message || message.length < 10)
      nextErrors.message = "메시지를 10자 이상 작성해 주세요.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    try {
      setStatus("submitting");
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      (event.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 md:py-32">
        <SectionHeading
          eyebrow="Contact"
          index="04"
          title="새로운 문제를 함께 풀어볼까요?"
          description="협업 제안·채용·자문 등 어떤 형태든 환영합니다. 보통 1~2일 안에 답장 드립니다."
        />

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12 md:gap-10">
          {/* 연락처 정보 */}
          <Reveal className="md:col-span-4">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted sm:text-xs">
                  Direct Channels
                </h3>
                <ul className="space-y-3 text-sm">
                  {[
                    {
                      label: "EMAIL",
                      display: "dlfwnqkr12@gmail.com",
                      href: profile.links.email,
                    },
                    {
                      label: "GITHUB",
                      display: "github.com/1200park",
                      href: profile.links.github,
                      external: true,
                    },
                    {
                      label: "LINKEDIN",
                      display: "linkedin.com/in/1200park",
                      href: profile.links.linkedin,
                      external: true,
                    },
                  ].map((ch) => (
                    <li key={ch.label}>
                      <a
                        href={ch.href}
                        target={ch.external ? "_blank" : undefined}
                        rel={ch.external ? "noreferrer noopener" : undefined}
                        className="group flex flex-wrap items-center gap-x-3 gap-y-0.5 text-foreground transition-colors hover:text-accent"
                      >
                        <span className="font-mono text-[0.65rem] text-muted">{ch.label}</span>
                        <span className="break-word border-b border-transparent group-hover:border-accent">
                          {ch.display}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border-soft bg-background-soft p-4 sm:rounded-2xl sm:p-5">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted sm:text-xs">
                  Working Hours
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  Mon — Fri · 10:00 — 19:00 (KST)
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  비동기 협업 환영 · 글로벌 타임존 조율 가능
                </p>
              </div>
            </div>
          </Reveal>

          {/* 폼 */}
          <Reveal className="md:col-span-8" delay={100}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4 rounded-xl border border-border-soft bg-background-soft p-5 sm:rounded-2xl sm:p-6 md:p-8"
            >
              {/* 이름·이메일을 sm에서 나란히 */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="이름"
                  name="name"
                  placeholder="홍길동"
                  error={errors.name}
                />
                <Field
                  label="이메일"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  error={errors.email}
                />
              </div>
              <Field
                label="메시지"
                name="message"
                as="textarea"
                placeholder="어떤 문제를 함께 풀어볼까요?"
                error={errors.message}
              />

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <p
                  role="status"
                  aria-live="polite"
                  className={cn(
                    "text-xs",
                    status === "success" && "text-accent",
                    status === "error" && "text-red-400",
                    status !== "success" && status !== "error" && "text-muted-2",
                  )}
                >
                  {status === "success"
                    ? "메시지가 전송됐습니다. 곧 회신 드릴게요."
                    : status === "error"
                      ? "전송에 실패했습니다. 잠시 후 다시 시도해 주세요."
                      : status === "submitting"
                        ? "전송 중..."
                        : "* 모든 필드는 필수입니다."}
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 active:scale-95 sm:w-auto",
                    status === "submitting" && "opacity-60",
                  )}
                >
                  메시지 보내기 <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  as?: "input" | "textarea";
  error?: string;
}

function Field({ label, name, type = "text", placeholder, as = "input", error }: FieldProps) {
  const id = `field-${name}`;
  const baseClass = cn(
    "w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-2 transition-colors focus:outline-none",
    error
      ? "border-red-500/60 focus:border-red-400"
      : "border-border-soft focus:border-accent",
  );

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="flex flex-wrap items-center justify-between gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted sm:text-xs"
      >
        <span>{label}</span>
        {error && <span className="normal-case text-red-400">{error}</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          className={cn(baseClass, "resize-none")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          className={baseClass}
        />
      )}
    </div>
  );
}
