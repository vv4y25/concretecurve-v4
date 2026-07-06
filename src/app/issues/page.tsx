import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { issues } from "@/lib/issues";

export const metadata: Metadata = {
  title: "All Issues",
  description: "Browse all published issues of Concrete Curve magazine.",
};

export default function IssuesPage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionHeading
        title="All Issues"
        description="Every published issue of Concrete Curve, ready to explore."
        className="mb-12"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {issues.map((issue) => (
          <Link
            key={issue.slug}
            href={`/issues/${issue.slug}`}
            className="group flex flex-col border border-border bg-surface transition-colors hover:border-accent"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={issue.coverImage}
                alt={`Cover of Concrete Curve Issue ${issue.number}: ${issue.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-accent-muted">
                Issue {issue.number} &middot; {issue.publicationDate}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-foreground group-hover:text-accent">
                {issue.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{issue.introShort}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
