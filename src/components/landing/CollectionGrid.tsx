import Link from "next/link";
import Image from "next/image";
import type { Issue } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CollectionGridProps = {
  issues: Issue[];
};

export function CollectionGrid({ issues }: CollectionGridProps) {
  return (
    <section id="collection" className="py-16 md:py-24" aria-labelledby="collection-heading">
      <Container>
        <SectionHeading
          title="Explore the Collection"
          description="A visual overview of every issue."
          className="mb-12"
        />
        <h2 id="collection-heading" className="sr-only">
          Explore the Collection
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue) => (
            <Link
              key={issue.slug}
              href={`/issues/${issue.slug}`}
              className="group relative aspect-[3/4] overflow-hidden border border-border bg-background"
            >
              <Image
                src={issue.coverImage}
                alt={`Cover of Concrete Curve Issue ${issue.number}: ${issue.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <p className="text-xs font-medium uppercase tracking-widest text-white/80">
                  Issue {issue.number}
                </p>
                <p className="mt-1 font-serif text-xl text-white">{issue.title}</p>
                <ul className="mt-3 space-y-1 text-sm text-white/80">
                  <li>{issue.pageCount} pages</li>
                  <li>{issue.publicationDate}</li>
                </ul>
                <p className="mt-4 text-sm font-medium text-white">Open Issue &rarr;</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/60 to-transparent p-4 md:hidden">
                <p className="text-xs uppercase tracking-widest text-white/80">Issue {issue.number}</p>
                <p className="font-serif text-lg text-white">{issue.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
