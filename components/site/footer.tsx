import { profile } from "@/lib/data/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-10">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-2">
            © {year} {profile.name}
          </p>
          <p className="text-sm text-muted">
            Designed & built with Next.js · Tailwind CSS
          </p>
        </div>
        <nav aria-label="SNS 링크">
          <ul className="flex flex-wrap items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] sm:text-xs">
            <li>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-3 py-2 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                GitHub
                <span aria-hidden>↗</span>
              </a>
            </li>
            <li>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-3 py-2 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
                <span aria-hidden>↗</span>
              </a>
            </li>
            <li>
              <a
                href={profile.links.email}
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-3 py-2 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                Email
                <span aria-hidden>↗</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
