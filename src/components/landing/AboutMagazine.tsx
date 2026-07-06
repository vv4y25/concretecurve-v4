import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { magazineAbout } from "@/lib/issues";

export function AboutMagazine() {
  return (
    <section className="border-y border-border bg-surface py-16 md:py-24" aria-labelledby="about-heading">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <SectionHeading title="About the Magazine" />
          <div>
            <h2 id="about-heading" className="sr-only">
              About the Magazine
            </h2>
            {magazineAbout.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mb-4 text-base leading-relaxed text-muted last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
