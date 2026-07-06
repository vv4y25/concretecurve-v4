import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Concrete Curve editorial team.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionHeading
        title="Contact"
        description="We'd love to hear from you — whether you're a reader, contributor, or collaborator."
        className="mb-10"
      />

      <div className="max-w-xl space-y-6 text-base leading-relaxed text-muted">
        <p>
          For editorial inquiries, contributor submissions, or general questions, reach us at{" "}
          <a href="mailto:hello@concretecurve.com" className="text-accent hover:text-accent-hover">
            hello@concretecurve.com
          </a>
          .
        </p>
        <p>
          We read every message and aim to respond within a few business days. Thank you for being part of our community.
        </p>
      </div>
    </Container>
  );
}
