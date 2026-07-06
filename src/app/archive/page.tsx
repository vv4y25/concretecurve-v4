import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { issues } from "@/lib/issues";

export const metadata: Metadata = {
  title: "Archive",
  description: "Browse the complete archive of Concrete Curve magazine issues.",
};

export default function ArchivePage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionHeading
        title="Archive"
        description="A complete record of every issue published by Concrete Curve."
        className="mb-12"
      />

      <ul className="divide-y divide-border border-y border-border">
        {issues.map((issue) => (
          <li key={issue.slug}>
            <Link
              href={`/issues/${issue.slug}`}
              className="flex flex-col gap-2 py-6 transition-colors hover:text-accent sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-accent-muted">
                  Issue {issue.number}
                </p>
                <h2 className="font-serif text-2xl text-foreground">{issue.title}</h2>
              </div>
              <p className="text-sm text-muted">{issue.publicationDate}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
