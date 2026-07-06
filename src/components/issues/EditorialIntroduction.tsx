import type { Issue } from "@/lib/types";
import { Container } from "@/components/ui/Container";

type EditorialIntroductionProps = {
  issue: Issue;
};

export function EditorialIntroduction({ issue }: EditorialIntroductionProps) {
  return (
    <section className="py-16 md:py-24" aria-labelledby="editorial-intro-heading">
      <Container>
        <h2
          id="editorial-intro-heading"
          className="mb-8 font-serif text-3xl tracking-tight text-foreground md:text-4xl"
        >
          Editorial Introduction
        </h2>
        <div className="max-w-3xl">
          {issue.introLong.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mb-4 text-base leading-relaxed text-muted last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
