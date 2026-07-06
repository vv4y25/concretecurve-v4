import Link from "next/link";
import type { Issue } from "@/lib/types";
import { Container } from "@/components/ui/Container";

type ContinueReadingProps = {
  prev: Issue | null;
  next: Issue | null;
};

export function ContinueReading({ prev, next }: ContinueReadingProps) {
  return (
    <section className="border-t border-border py-16 md:py-24" aria-labelledby="continue-reading-heading">
      <Container>
        <h2
          id="continue-reading-heading"
          className="mb-10 font-serif text-3xl tracking-tight text-foreground md:text-4xl"
        >
          Continue Reading
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/issues/${prev.slug}`}
              className="group border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-muted">Previous Issue</p>
              <p className="mt-2 font-serif text-xl text-foreground group-hover:text-accent">
                Issue {prev.number} — {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/issues/${next.slug}`}
              className="group border border-border bg-surface p-6 transition-colors hover:border-accent sm:text-right"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-muted">Next Issue</p>
              <p className="mt-2 font-serif text-xl text-foreground group-hover:text-accent">
                Issue {next.number} — {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/issues"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            &larr; Back to All Issues
          </Link>
        </div>
      </Container>
    </section>
  );
}
