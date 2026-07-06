import Link from "next/link";
import Image from "next/image";
import type { Issue } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type LatestIssueProps = {
  issue: Issue;
};

export function LatestIssue({ issue }: LatestIssueProps) {
  return (
    <section className="border-y border-border bg-surface py-16 md:py-24" aria-labelledby="latest-heading">
      <Container>
        <SectionHeading title="Latest Issue" className="mb-12" />
        <h2 id="latest-heading" className="sr-only">
          Latest Issue
        </h2>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
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

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent-muted">
              Issue {issue.number} &middot; {issue.publicationDate}
            </p>
            <h3 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">{issue.title}</h3>
            {issue.quote && (
              <blockquote className="mt-6 border-l-2 border-accent pl-6 font-serif text-xl italic leading-relaxed text-foreground">
                &ldquo;{issue.quote}&rdquo;
              </blockquote>
            )}
            <p className="mt-6 text-base leading-relaxed text-muted">{issue.introShort}</p>
            <div className="mt-8">
              <Link href={`/issues/${issue.slug}`}>
                <Button>Read the Latest Issue</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
