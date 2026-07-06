"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { issues } from "@/lib/issues";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/archive", label: "Archive" },
  { href: "/contact", label: "Contact" },
];

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [issuesOpen, setIssuesOpen] = useState(false);
  const [mobileIssuesOpen, setMobileIssuesOpen] = useState(false);
  const issuesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!issuesOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (issuesMenuRef.current && !issuesMenuRef.current.contains(event.target as Node)) {
        setIssuesOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIssuesOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [issuesOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-border bg-surface/95 backdrop-blur-md"
          : "border-transparent bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-foreground transition-colors hover:text-accent"
        >
          Concrete Curve
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <div ref={issuesMenuRef} className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm tracking-wide text-foreground transition-colors hover:text-accent"
              aria-expanded={issuesOpen}
              aria-haspopup="true"
              onClick={() => setIssuesOpen((open) => !open)}
            >
              Issues
              <svg
                className={cn("h-4 w-4 transition-transform", issuesOpen && "rotate-180")}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {issuesOpen && (
              <ul
                className="absolute left-0 top-full z-50 min-w-[180px] border border-border bg-surface py-2 pt-2 shadow-sm"
                role="menu"
              >
                {issues.map((issue) => (
                  <li key={issue.slug} role="none">
                    <Link
                      href={`/issues/${issue.slug}`}
                      className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-background hover:text-accent"
                      role="menuitem"
                      onClick={() => setIssuesOpen(false)}
                    >
                      Issue {issue.number} — {issue.title}
                    </Link>
                  </li>
                ))}
                <li role="none" className="mt-1 border-t border-border pt-1">
                  <Link
                    href="/issues"
                    className="block px-4 py-2 text-sm text-muted transition-colors hover:text-accent"
                    role="menuitem"
                    onClick={() => setIssuesOpen(false)}
                  >
                    View all issues
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-foreground md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => {
            setMobileOpen((open) => !open);
            if (mobileOpen) setMobileIssuesOpen(false);
          }}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-border bg-surface px-4 py-6 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="space-y-4">
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between text-sm font-medium tracking-wide text-foreground"
                aria-expanded={mobileIssuesOpen}
                onClick={() => setMobileIssuesOpen((open) => !open)}
              >
                Issues
                <svg
                  className={cn("h-4 w-4 transition-transform", mobileIssuesOpen && "rotate-180")}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileIssuesOpen && (
                <ul className="mt-3 space-y-2 border-l border-border pl-4">
                  {issues.map((issue) => (
                    <li key={issue.slug}>
                      <Link
                        href={`/issues/${issue.slug}`}
                        className="block text-sm text-muted hover:text-accent"
                        onClick={() => setMobileOpen(false)}
                      >
                        Issue {issue.number} — {issue.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm tracking-wide text-foreground hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
