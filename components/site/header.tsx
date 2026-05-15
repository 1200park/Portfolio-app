"use client";

import { useCallback, useEffect, useState } from "react";
import { navItems } from "@/lib/data/navigation";
import { profile } from "@/lib/data/profile";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-border-soft/80 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <a
          href="#home"
          className="group inline-flex items-center gap-3 font-mono text-sm tracking-wider"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-border-strong text-foreground transition-colors group-hover:border-accent group-hover:text-accent">
            {profile.initials}
          </span>
          <span className="hidden text-muted sm:inline">
            <span className="text-foreground">{profile.name}</span>
            <span className="mx-2 text-border-strong">/</span>
            Portfolio
          </span>
        </a>

        <nav aria-label="주요 네비게이션" className="hidden md:block">
          <ul className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em]">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={cn(
                      "relative inline-flex items-center px-3 py-2 text-muted transition-colors hover:text-foreground",
                      isActive && "text-foreground",
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "mr-2 h-1.5 w-1.5 rounded-full transition-all",
                        isActive ? "bg-accent" : "bg-border-strong",
                      )}
                    />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-strong text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ThemeIcon theme={theme} />
          </button>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="메뉴 열기"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-strong text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            <BurgerIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border-soft bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 font-mono text-sm uppercase tracking-[0.2em]">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "flex items-center justify-between rounded-md px-3 py-3 text-muted transition-colors hover:bg-background-soft hover:text-foreground",
                    active === item.id && "text-foreground",
                  )}
                >
                  <span>{item.label}</span>
                  <span aria-hidden className="text-border-strong">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function ThemeIcon({ theme }: { theme: "dark" | "light" }) {
  if (theme === "dark") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.93 19.07 1.41-1.41" />
      <path d="m17.66 6.34 1.41-1.41" />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M6 6 18 18" />
          <path d="M6 18 18 6" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}
