import Image from "next/image";
import type { Issue } from "@/lib/types";
import { Container } from "@/components/ui/Container";

type IssueHeroProps = {
  issue: Issue;
};

export function IssueHero({ issue }: IssueHeroProps) {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-12 md:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent-muted">
              Issue {issue.number}
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-foreground md:text-5xl">
              {issue.title}
            </h1>
            {issue.subtitle && (
              <p className="mt-2 text-lg text-muted">{issue.subtitle}</p>
            )}
            <dl className="mt-6 space-y-2 text-sm text-muted">
              <div className="flex gap-2">
                <dt className="font-medium text-foreground">Published</dt>
                <dd>{issue.publicationDate}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-foreground">Editor</dt>
                <dd>{issue.editor}</dd>
              </div>
            </dl>
            <p className="mt-6 text-base leading-relaxed text-muted">{issue.introShort}</p>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden border border-border">
            <Image
              src={issue.coverImage}
              alt={`Cover of Concrete Curve Issue ${issue.number}: ${issue.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
