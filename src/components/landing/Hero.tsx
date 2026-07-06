import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="flex flex-col items-center py-20 text-center md:py-28 lg:py-32">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent-muted">
          Independent Magazine
        </p>
        <h1 className="font-serif text-5xl tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Concrete Curve
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted md:text-xl">
          Three curated issues exploring design, culture, photography, and visual storytelling.
        </p>
        <div className="mt-10">
          <Link href="#collection">
            <Button>Browse the Collection</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
