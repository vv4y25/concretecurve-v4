import Link from "next/link";
import Image from "next/image";
import type { Issue } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type FeaturedIssuesProps = {
  issues: Issue[];
};

export function FeaturedIssues({ issues }: FeaturedIssuesProps) {
  return (
    <section className="py-16 md:py-24" aria-labelledby="featured-issues-heading">
      <Container>
        <SectionHeading
          title="Featured Issues"
          description="Three published issues, each a curated gallery of images and words meant to be read slowly."
          className="mb-12"
        />
        <h2 id="featured-issues-heading" className="sr-only">
          Featured Issues
        </h2>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {issues.map((issue) => (
            <article key={issue.slug} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden border border-border bg-background">
                <Image
                  src={issue.coverImage}
                  alt={`Cover of Concrete Curve Issue ${issue.number}: ${issue.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute left-4 top-4 bg-surface/90 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                  Issue {issue.number}
                </span>
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="font-serif text-2xl text-foreground">{issue.title}</h3>
                {issue.subtitle && (
                  <p className="mt-1 text-sm text-accent-muted">{issue.subtitle}</p>
                )}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {issue.introShort}
                </p>
                <ul className="mt-4 space-y-1 text-xs text-muted">
                  <li>10-page gallery</li>
                  <li>Editor introduction</li>
                  <li>Full-screen image viewer</li>
                </ul>
                <div className="mt-6">
                  <Link href={`/issues/${issue.slug}`}>
                    <Button variant="secondary" className="w-full sm:w-auto">
                      Explore Issue
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
