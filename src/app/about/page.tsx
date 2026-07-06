import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { magazineAbout } from "@/lib/issues";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Concrete Curve — our editorial vision, audience, and publishing philosophy.",
};

export default function AboutPage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionHeading title="About Concrete Curve" className="mb-10" />
      <div className="max-w-3xl">
        {magazineAbout.split("\n\n").map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="mb-4 text-base leading-relaxed text-muted last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </Container>
  );
}
